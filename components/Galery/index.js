import React, { Component } from 'react';
import _ from 'lodash';
import './index.scss';

const photos = [
  './photos/DSC_0013.jpg',
  './photos/DSC_0037 (1).jpg',
  './photos/DSC_0063.jpg',
  './photos/DSC_0849.jpg',
  './photos/DSC_0891.jpg'
].map(photo => require(photo));

const tabs = {
  images: 'images',
};

export default class Galery extends Component {
  constructor() {
    super();
    this.state = { selectedPhoto: _.sample(photos), selectedTab: '' };
  }

  onClick = selectedPhoto => () => this.setState({ selectedPhoto });

  renderThumbnail = photo => {
    const isSelected = photo === this.state.selectedPhoto;
    const className = `Galery-thumbnail ${isSelected ? 'is-selected' : ''}`;
    const style = {
      backgroundImage: `url(${photo})`
    };

    return (
      <div
        key={photo}
        className={className}
        onClick={this.onClick(photo)}
        style={style}
      />
    );
  };

  render() {
    const { selectedPhoto } = this.state;

    return (
      <section className="Galery" id="Galeria">
        <h2 className="Galery-title">Galeria</h2>
        {/* <div className="Galery-navigation">
          <a className="Galery-link is-selected">Imagens</a>
          <a className="Galery-link">Videos</a>
        </div> */}
        <div className="Galery-content">
          <div className="Galery-section">
            <div className="Galery-thumbnails">
              {photos.map(this.renderThumbnail)}
            </div>
          </div>
          <div className="Galery-photoSection">
            <img className="Galery-photoPreview" src={selectedPhoto} />
          </div>
        </div>
      </section>
    );
  }
}
