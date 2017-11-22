import React, { Component } from 'react';
import YouTube from 'react-youtube';
import classNames from 'classnames';
import _ from 'lodash';
import './index.scss';

const requireAll = requireContext => requireContext.keys().map(requireContext);

const PHOTOS = requireAll(require.context('./photos/', false, /^\.\/.*\.jpg$/));

const VIDEOS = [
  { id: 'dVnHi-Y4XNI', title: 'José Eduardo Gomes - Maestro / Conductor' }
];

const TABS = {
  images: 'galery.images',
  videos: 'galery.videos'
};

class Galery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: TABS.images,
      selectedVideo: _.sample(VIDEOS),
      selectedPhoto: _.sample(PHOTOS)
    };
  }

  onClickPhoto = selectedPhoto => () => this.setState({ selectedPhoto });

  onClickVideo = selectedVideo => () => this.setState({ selectedVideo });

  renderThumbnail = photo => {
    const isSelected = photo === this.state.selectedPhoto;
    const className = classNames({
      'Galery-thumbnail': true,
      'is-selected': photo === this.state.selectedPhoto
    });

    const style = {
      backgroundImage: `url(${photo})`
    };

    return (
      <div
        key={photo}
        className={className}
        onClick={this.onClickPhoto(photo)}
        style={style}
      />
    );
  };

  renderVideoThumbnail = video => {
    const className = classNames({
      'Galery-thumbnail': true,
      'is-selected': video.id === this.state.selectedVideo.id
    });

    const style = {
      backgroundImage: `url(https://img.youtube.com/vi/${video.id}/0.jpg)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 135%',
      backgroundPosition: '25% center'
    };

    return (
      <div
        key={video.id}
        className={className}
        onClick={this.onClickVideo(video)}
        style={style}
      />
    );
  };

  videosTab = () => (
    <div className="Galery-content">
      <div className="Galery-section">
        <div className="Galery-thumbnails">
          {VIDEOS.map(this.renderVideoThumbnail)}
        </div>
      </div>
      <div className="Galery-videoSection">
        <YouTube
          videoId={this.state.selectedVideo.id}
          opts={{ width: '100%' }}
        />
      </div>
    </div>
  );

  photosTab = () => (
    <div className="Galery-content">
      <div className="Galery-section">
        <div className="Galery-thumbnails">
          {PHOTOS.map(this.renderThumbnail)}
        </div>
      </div>
      <div className="Galery-photoSection">
        <a href={this.state.selectedPhoto} target="_blank">
          <img className="Galery-photoPreview" src={this.state.selectedPhoto} />
        </a>
      </div>
    </div>
  );

  renderTabLinks = () =>
    _.map(TABS, tab => {
      const className = classNames({
        'Galery-link': true,
        'is-selected': this.state.selectedTab === tab
      });

      return (
        <a
          key={tab}
          className={className}
          onClick={() => this.setState({ selectedTab: tab })}
        >
          {this.props.translate(tab)}
        </a>
      );
    });

  activeTab = () => {
    switch (this.state.selectedTab) {
      case TABS.images:
        return this.photosTab();
        break;
      case TABS.videos:
        return this.videosTab();
        break;
      default:
        return null;
        break;
    }
  };

  render() {
    return (
      <section className="Galery" id="Galeria">
        <h2 className="Galery-title">{this.props.translate('galery.title')}</h2>
        <div className="Galery-navigation">{this.renderTabLinks()}</div>
        {this.activeTab()}
      </section>
    );
  }
}

export default Galery;
