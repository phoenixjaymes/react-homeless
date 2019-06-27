import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import AsideErrorBoundary from './AsideErrorBoundary';
import NewsItem from '../NewsItem';
import Loading from '../Loading';
import LoadingError from '../LoadingError';

class Aside extends Component {
  state = {
    loading: true,
    error: false,
    newsArticles: [],
  }

  componentDidMount() {
    fetch('http://phoenixjaymes.com/data/homeless/get-news.php?cnt=2')
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

  renderAside = () => {
    const { newsArticles } = this.state;
    const news = newsArticles.data.map(article => (
      <Col sm="6" md="12" key={article.id}>
        <NewsItem img={article.img} caption={article.title} />
      </Col>
    ));

    return (
      <AsideErrorBoundary>
        <aside>
          <Container>
            <h2>News</h2>
            <Row>
              {news}
            </Row>
          </Container>
        </aside>
      </AsideErrorBoundary>
    );
  }

  render() {
    const { loading, error } = this.state;

    if (loading) {
      return this.renderLoading();
    }

    if (error === false && loading === false) {
      return this.renderAside();
    }

    return this.renderError();
  }
}

export default Aside;
