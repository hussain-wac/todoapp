import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import usePaginationScroll from '../../hooks/pagination/usePaginationScroll';

const PagNationScroll = () => {
  const { data, isLoading, hasMore, loaderRef, error } = usePaginationScroll();

  return (
    <div className="container mt-4">
      <Row className="gy-4">
        {data.map((post) => (
          <Col key={post.id} md={3}>
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate fw-bold" title={post.title}>
                  {post.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.8rem' }}>
                  ID: {post.id}
                </Card.Subtitle>
                <Card.Text style={{ flexGrow: 1, overflowY: 'auto', fontSize: '0.9rem', lineHeight: '1.4rem' }}>
                  {post.body}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Show loading spinner while data is loading */}
      {isLoading && data.length > 0 && (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      )}

      {/* Show error message if there’s an error */}
      {error && (
        <div className="text-center mt-4">
          <p>There was an error loading posts: {error.message}</p>
        </div>
      )}

      {/* Show 'No more posts' message when all posts are loaded */}
      {!isLoading && !hasMore && data.length > 0 && (
        <div className="text-center mt-4">
          <p>No more posts to load</p>
        </div>
      )}

      {/* Loader to trigger next page fetch */}
      <div ref={loaderRef} style={{ height: '1px', background: 'transparent' }}></div>
    </div>
  );
};

export default PagNationScroll;
