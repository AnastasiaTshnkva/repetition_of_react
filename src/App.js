import React, { useState } from 'react';
import '../src/styles/app.css';
import PostsList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaSctipt', body: 'Description'},
    {id: 2, title: 'JavaSctipt 2', body: 'Description'},
    {id: 3, title: 'JavaSctipt 3', body: 'Description'},
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort);

  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Sorting'
        options={[
          {value: 'title', name: 'By title'},
          {value: 'body', name: 'By description'},
        ]}
        />
      </div>

      {
        posts.length !== 0 
          ? 
          <PostsList remove={removePost} posts={posts} title='JS posts'/>
          : 
          <h1 style={{textAlign: 'center'}}>No posts yet</h1>
      }
      
    </div>
  );
}

export default App;
