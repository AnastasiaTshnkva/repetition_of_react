import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import '../src/styles/app.css';
import PostsList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaSctipt', body: 'Description'},
    {id: 2, title: 'JavaSctipt 2', body: 'Description'},
    {id: 3, title: 'JavaSctipt 3', body: 'Description'},
  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'Python 2', body: 'Description'},
    {id: 3, title: 'Python 3', body: 'Description'},
  ]);

  return (
    <div className='App'>
      <PostsList posts={posts} title='JS posts'/>
      <PostsList posts={posts2} title='Python posts'/>


      {/* <h1>{value}</h1>
      <input 
        type='text' 
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Counter/>
      <ClassCounter/> */}
    </div>
  );
}

export default App;
