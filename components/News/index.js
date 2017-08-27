import React, { Component } from 'react';
import NewsContainer from '../../containers/News';

import './index.scss';

import Background from './background.jpg';
import BackgroundMobile from './background-mobile.jpg';
import LinkIcon from './link.svg';

import Navigation from '../Navigation';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { currentNewsIndex: 0 };
  }

  renderNews() {
    const currentNews = this.props.news[this.state.currentNewsIndex];

    return (
      <div className="News-item">
        <h3 className="News-itemTitle">{currentNews.title}</h3>
        <p className="News-itemDescription">{currentNews.content}</p>
        <span className="News-itemDate">{currentNews.dateTime}</span>
        <a className="News-itemLink" href={currentNews.url}>
          <img src={LinkIcon} />
        </a>
      </div>
    );
  }

  onNext = () => {
    const { currentNewsIndex } = this.state;

    if (currentNewsIndex < this.props.news.length - 1)
      this.setState({ currentNewsIndex: currentNewsIndex + 1 });
  };

  onPrevious = () => {
    const { currentNewsIndex } = this.state;

    if (currentNewsIndex > 0)
      this.setState({ currentNewsIndex: currentNewsIndex - 1 });
  };

  setCurrentNews = index => () => this.setState({ currentNewsIndex: index });

  renderPagination() {
    return this.props.news.map((_, index) => {
      if (index === this.state.currentNewsIndex)
        return (
          <div
            key={index}
            onClick={this.setCurrentNews(index)}
            className="News-paginationItem is-active"
          />
        );

      return (
        <div
          key={index}
          onClick={this.setCurrentNews(index)}
          className="News-paginationItem"
        />
      );
    });
  }

  render() {
    return (
      <section className="News" id="Noticias">
        <div className="News-contentColumn">
          <h2 className="News-title">{this.props.translate('news.title')}</h2>
          {this.renderNews()}
          <div className="News-navigation">
            <Navigation onNext={this.onNext} onPrevious={this.onPrevious} />
          </div>
          <div className="News-pagination">{this.renderPagination()}</div>
        </div>
        <div className="News-backgroundColumn">
          <img className="News-background" src={Background} />
          <img className="News-backgroundMobile" src={BackgroundMobile} />
        </div>
      </section>
    );
  }
}

export default NewsContainer(News);
