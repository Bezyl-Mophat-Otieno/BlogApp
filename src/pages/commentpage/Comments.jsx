import './Comments.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from '../../components/comment/Comment'
function Comments() {
  return (
    <div className=''>
      <h3 className='text-center mb-5'> Blog Tittle</h3>
      <Row>
        <Col><div>  <Comment /> </div></Col>
        <Col><div>  <Comment /> </div></Col>
        <Col><div>  <Comment /> </div></Col>
      </Row>


    </div>
  )
}

export default Comments