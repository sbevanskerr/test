import React from 'react';
import PropTypes from 'prop-types';

import Categories from './components/Categories';
import SubCategories from './components/SubCategories';
import ProviderList from './components/ProviderList';

import { Route } from 'react-router-dom';

const topLevelCategoriesPath = '/categories';

const cleanPath = (path) => {
  return path.replace(/[^a-zA-Z0-9-_]/g, '');
};

// Given a category, generate a path
const generatePath = (category, endPath = '') => {
  if (category.subcategory_of.length > 0) {
    return generatePath(category.subcategory_of[0], cleanPath(category.name));
  } else {
    return (
      topLevelCategoriesPath + '/' + cleanPath(category.name) + '/' + endPath
    );
  }
};

class CategoryRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    const categoriesWithPath = Object.values(this.props.categories).map(
      (category) => {
        category.path = generatePath(category);
        return category;
      },
    );
    this.setState({ categories: categoriesWithPath });
  }

  render() {
    const subCategories = this.state.categories.map((subCategory) => {
      if (subCategory.is_lowest_level) {
        return (
          <Route
            key={subCategory._id}
            path={subCategory.path}
            render={() => <ProviderList category={subCategory} />}
          />
        );
      } else {
        const subCategoryList = this.state.categories.filter(
          (insideSubCategory) => {
            return (
              insideSubCategory.subcategory_of.length > 0 &&
              insideSubCategory.subcategory_of[0]._id === subCategory._id
            );
          },
        );
        return (
          <Route
            exact
            key={subCategory._id}
            path={subCategory.path}
            render={() => <SubCategories categoryList={subCategoryList} />}
          />
        );
      }
    });

    return (
      <React.Fragment>
        <Route
          exact
          path={topLevelCategoriesPath}
          render={() => (
            <Categories
              categoryList={this.state.categories.filter((subCategory) => {
                return subCategory.subcategory_of.length === 0;
              })}
            />
          )}
        />
        {subCategories}
      </React.Fragment>
    );
  }
}

CategoryRouter.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
};

export default CategoryRouter;
