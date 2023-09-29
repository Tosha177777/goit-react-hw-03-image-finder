// import axios from 'axios';
import React, { Component } from 'react';
import css from '../../Styles.module.css';
import fetchImages from 'components/Service/api';

export default class ImageGalleryItem extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchAllImages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.input !== this.props.input) {
      this.fetchAllImages();
    }
  }

  fetchAllImages = async () => {
    try {
      const images = await fetchImages(
        this.props.page,
        this.props.perPage,
        this.props.input
      );
      this.setState({
        images,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { images } = this.state;
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length; // Получите изображения из состояния
    return (
      <>
        {showImages &&
          images.map(({ id, webformatURL }) => {
            return (
              <li className={css.ImageGalleryItem} key={id}>
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
