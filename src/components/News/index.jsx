import React, { Component } from 'react';

import './index.scss';
import { translate } from '../../utils/translate';

import Navigation from '../Navigation';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentNewsIndex: 0,
      currentLanguage: 'pt',
      translations: props.translations || {}
    };
  }

  componentDidMount() {
    // Listen for language change events
    window.addEventListener('languageChange', this.handleLanguageChange);
  }

  componentWillUnmount() {
    // Clean up event listener
    window.removeEventListener('languageChange', this.handleLanguageChange);
  }

  handleLanguageChange = (event) => {
    this.setState({
      currentLanguage: event.detail.language,
      translations: event.detail.translations
    });
  };

  renderNews() {
    const currentNews = this.props.news[this.state.currentNewsIndex];
    if (!currentNews) return null;
    
    // Handle both content collection format and flat format
    const newsData = currentNews.data ? currentNews.data : currentNews;

    return (
      <div className="News-item">
        <h3 className="News-itemTitle">{newsData.title}</h3>
        <p className="News-itemDescription">
          {this.state.currentLanguage === 'en' ? (
            newsData.descriptionEn
          ) : (
            newsData.description
          )}
        </p>
        <span className="News-itemDate">{typeof newsData.dateTime === 'string' ? newsData.dateTime : new Date(newsData.dateTime).toLocaleDateString()}</span>
        <a className="News-itemLink" href={newsData.url}>
          <img src="/images/link.svg" />
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
          <h2 className="News-title">{translate(this.state.translations, 'news.title')}</h2>
          {this.renderNews()}
          <div className="News-navigation">
            <Navigation onNext={this.onNext} onPrevious={this.onPrevious} />
          </div>
          <div className="News-pagination">{this.renderPagination()}</div>
        </div>
        <div className="News-backgroundColumn">
          <img className="News-background" src="/images/news-background.jpg" />
          <img className="News-backgroundMobile" src="/images/news-background-mobile.jpg" />
        </div>
      </section>
    );
  }
}

export default News;
