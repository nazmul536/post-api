import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Post from '../Post/Post';

const Posts = () => {
    const [posts,setPosts]=useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div>
         <Row xs={12} md={3} lg={12} className="g-4">
         {
              posts.map(post=><Post
              key={post.id}
              post={post}
              ></Post>)
          }  
         </Row>
        </div>
    );
};

export default Posts;


