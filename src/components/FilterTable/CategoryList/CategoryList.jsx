import React from 'react';
import PropTypes from 'prop-types';
import CategoryListItem from '../CategoryListItem/CategoryListItem';
import styles from './CategoryList.module.css';


const CategoryList = ({ category }) => (
  <ul className={styles.categoryList}>
    {category.map((elem) => {
      const {
        name, id, 
      } = elem;
      return (
        <CategoryListItem
          name={name}
          key={id}
        />
      );
    })}
  </ul>
);

CategoryList.propTypes = {
  category: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
};

export default CategoryList;