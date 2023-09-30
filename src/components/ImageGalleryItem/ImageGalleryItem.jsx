// import axios from 'axios';
import React, { Component } from 'react';
import css from '../../Styles.module.css';

export default class ImageGalleryItem extends Component {
  // state = {};

  render() {
    const { images } = this.props;
    const { showImages } = this.props;
    // Получите изображения из состояния
    return (
      <>
        {showImages &&
          images.map(({ id, webformatURL }) => {
            return (
              <li
                className={css.ImageGalleryItem}
                key={`${id}_${webformatURL}`}
              >
                <img
                  src={webformatURL}
                  alt=""
                  className={css.ImageGalleryItemImage}
                />
              </li>
            );
          })}
      </>
    );
  }
}
