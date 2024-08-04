import React from 'react';
import PostItem from './PostItem';

const PostsList = ({posts, title}) => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>{title}</h1>
      {posts.map(post => {
        return <PostItem key={post.id} post={post}/>
      })}
    </div>
  )
};

export default PostsList;