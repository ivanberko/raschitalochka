import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryListItem.module.css';


const CategoryListItem = ({ name }) => {
  const { item, offline, userName, userNumber, } = styles;
  return (
     
    <div className={item}>
      <span className={offline} /> 
      <p className={userName}>{name}</p>
      <p className={userNumber}>8 700.00</p>
    </div>
  );
};

CategoryListItem.propTypes = {

  name: PropTypes.string.isRequired,
 
};

export default CategoryListItem;