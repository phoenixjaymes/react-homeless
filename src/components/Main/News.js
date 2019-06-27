import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import NewsItem from './NewsItem';
import Loading from './Loading';
import LoadingError from './LoadingError';

class News extends Component {
  state = {
    loading: true,
    error: false,
    newsArticles: [],
  }

  componentDidMount() {
    fetch('http://phoenixjaymes.com/data/homeless/get-news.php?cnt=9')
      .then(reponse => reponse.json())
      .then((responseData) => {
        this.setState({
          newsArticles: responseData,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
          loading: false,
        });
        console.log('Error fetching and parsing data', error);
      });
  }

  renderLoading = () => <Loading />;

  renderError = () => <LoadingError />

  renderNews = () => {
    const { newsArticles } = this.state;
    const articles = newsArticles.data.map(article => (
      <Col key={article.id} sm="6" md="4">
        <NewsItem key={article.id} img={article.img} caption={article.title} />
      </Col>
    ));

    return (
      <main>
        <Container>
          <h1>Homeless News</h1>
          <Row>
            {articles}
          </Row>
        </Container>
      </main>
    );
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return this.renderLoading();
    }

    if (error === false && loading === false) {
      return this.renderNews();
    }

    return this.renderError();
  }
}

export default News;
