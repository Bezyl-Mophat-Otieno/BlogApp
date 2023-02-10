import Card from 'react-bootstrap/Card'
function Comment() {
  return (
    <Card className='ms-5 me-5'>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            1 hour ago.
          </footer>
        </blockquote>
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Comment;