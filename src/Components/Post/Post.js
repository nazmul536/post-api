import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Post = (props) => {
    const {userId, id, title, body} =props.post
    return (
        <div>
         <CardGroup>
  <Card>
   
    <Card.Body>
      <Card.Title><strong className='my-2'>UserId-</strong> {userId}</Card.Title>
      <Card.Title><strong>Id-</strong>{id}</Card.Title>
      <Card.Title><strong>Title-</strong>{title}</Card.Title>
      <Card.Text>
      <strong>body-</strong>  {body}
      </Card.Text>
    </Card.Body>
  
  </Card>

 
</CardGroup>
        </div>
    );
};

export default Post;<h1>Post</h1>