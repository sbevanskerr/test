const cleanPath = (path) => {
  return path.replace(/[^a-zA-Z0-9-_]/g, '');
};

const mainPath = '/';
const searchPath = '/search';
const adminPath = '/admin';
const topLevelCategoriesPath = '/categories';
const displayProvidersPath = '/providers';

const familyServicesPath =
  topLevelCategoriesPath + '/' + cleanPath('Family Services');
const financePath = topLevelCategoriesPath + '/' + cleanPath('Finance');
const healthServicesPath =
  topLevelCategoriesPath + '/' + cleanPath('Health Services');
const legalServicesPath =
  topLevelCategoriesPath + '/' + cleanPath('Legal Services');
const crisisServicesPath =
  topLevelCategoriesPath + '/' + cleanPath('Crisis Services');
const basicNeedsPath = topLevelCategoriesPath + '/' + cleanPath('Basic Needs');
const otherPath = topLevelCategoriesPath + '/' + cleanPath('Other');

const paths = {
  mainPath,
  searchPath,
  adminPath,
  topLevelCategoriesPath,
  displayProvidersPath,

  familyServicesPath,
  financePath,
  healthServicesPath,
  legalServicesPath,
  crisisServicesPath,
  basicNeedsPath,
  otherPath,
};

export default paths;
