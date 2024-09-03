import React from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostsList = ({posts, title, remove}) => {
  if (!posts.length) {
    return (
        <h1 style={{textAlign: 'center'}}>No posts found</h1>
    )
  }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>{title}</h1>
      <TransitionGroup>
      {posts.map((post, index) => {
        return <CSSTransition 
        key={post.id}
        classNames="post"
        timeout={500}
        >
          <PostItem remove={remove} number={index + 1} post={post}/>
        </CSSTransition>
      })}
      </TransitionGroup>
    </div>
  )
};

export default PostsList;