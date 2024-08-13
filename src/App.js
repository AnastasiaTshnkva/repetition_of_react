import React, { useState } from 'react';
import '../src/styles/app.css';
import PostsList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaSctipt', body: 'Description'},
    {id: 2, title: 'JavaSctipt 2', body: 'Description'},
    {id: 3, title: 'JavaSctipt 3', body: 'Description'},
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm remove={removePost} create={createPost}/>
      <PostsList posts={posts} title='JS posts'/>
    </div>
  );
}

export default App;
