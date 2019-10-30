'use strict';

const fs = require('fs');
const util = require('util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Provider = require('./server/models/provider.model.js');
const config = require('./server/config/config.js');

// Requires 'data.json` to be in the same folder as this script

mongoose.connect(config.db.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const asyncFileRead = util.promisify(fs.readFile);

async function dbPopulate() {
  // PURGE ALL PREVIOUS LISTINGS FIRST
  // THIS WILL DELETE OUR DATABASE TO REPOPULATE IT
  // !! DO NOT TOUCH IF UNSURE !!
  // Provider.deleteMany({}, () => {});

  // Begin repopulating DB
  let parsedJson = undefined;
  try {
    let readFile = await asyncFileRead('./data.json', 'utf8');
    parsedJson = JSON.parse(readFile);
  } catch (err) {
    let errStr = `[JSON Read/Parse]: ${err}`;
    console.log(errStr);
    throw errStr;
  }
  if (parsedJson['entries'] == undefined) {
    let errStr = `[JSON Read/Parse]: unexpected input`;
    console.log(errStr);
    throw errStr;
  }

  for (let x in parsedJson) {
    let docListing = new Provider();

    // Nasty JSON parser, goes 4 levels deep max
    for (let prop in parsedJson[x]) {
      if (typeof parsedJson[x][prop] === 'object') {
        for (let innerProp in parsedJson[x][prop]) {
          if (typeof parsedJson[x][prop][innerProp] === 'object') {
            for (let innerProp_1 in parsedJson[x][prop][innerProp]) {
              if (
                typeof parsedJson[x][prop][innerProp][innerProp_1] === 'object'
              ) {
                for (innerProp_2 in parsedJson[x][prop][innerProp][
                  innerProp_1
                ]) {
                  docListing[prop][innerProp][innerProp_1][innerProp_2] =
                    parsedJson[x][prop][innerProp][innerProp_1][innerProp_2];
                }
              } else {
                docListing[prop][innerProp][innerProp_1] =
                  parsedJson[x][prop][innerProp][innerProp_1];
              }
            }
          } else {
            docListing[prop][innerProp] = parsedJson[x][prop][innerProp];
          }
        }
      } else {
        docListing[prop] = parsedJson[x][prop];
      }
    }

    async function asyncSave(doc) {
      return doc.save();
    }
    let saveDoc = undefined;
    try {
      saveDoc = await asyncSave(docListing);
    } catch (err) {
      let errStr = `[DB]: ${err}`;
      console.log(errStr);
      throw errStr;
    }
    if (saveDoc != undefined)
      console.log(`[DB]: Successfully Saved: ${saveDoc}`);
  }
  return mongoose.disconnect();
}

dbPopulate();
