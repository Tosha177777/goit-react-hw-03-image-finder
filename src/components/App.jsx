import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';

export class App extends Component {
  state = {
    input: '',
    modal: {
      isOpened: false,
    },
    page: 1,
    perPage: 12,
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
    return (
      <div>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            input={this.state.input}
            page={this.state.page}
            perPage={this.state.perPage}
          />
          <Button handleClick={this.handleClick} />
        </ImageGallery>
      </div>
    );
  }
}
