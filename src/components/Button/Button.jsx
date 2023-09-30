import React from 'react';
import css from '../../Styles.module.css';

const Button = ({ handleClick, showImages }) => {
  return (
    showImages && (
      <div className={css.ButtonContainer}>
        <button type="button" className={css.Button} onClick={handleClick}>
          Load more
        </button>
      </div>
    )
  );
};
export default Button;
