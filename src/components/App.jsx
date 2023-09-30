import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import fetchImages from 'components/Service/api';

export class App extends Component {
  state = {
    input: '',
    modal: {
      isOpened: false,
    },
    page: 1,
    perPage: 12,
    images: [],
    isLoading: false,
    error: null,
    total: 0,
  };

  componentDidMount() {
    this.fetchAllImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.input !== prevState.input ||
      this.state.page !== 1
    ) {
      this.fetchAllImages();
    }
  }

  fetchAllImages = async () => {
    const { page, perPage, input } = this.state;
    try {
      const images = await fetchImages(page, perPage, input);
      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
      }));
      console.log('images: ', images);
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = input => {
    if (!input) {
      return;
    }

    this.setState({
      input,
    });
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images } = this.state;
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;
    return (
      <div>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery>
          <ImageGalleryItem images={images} showImages={showImages} />
          <Button handleClick={this.handleClick} />
        </ImageGallery>
      </div>
    );
  }
}
