import React, { useState } from 'react';
import '../src/styles/app.css';
import PostsList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaSctipt', body: 'Description'},
    {id: 2, title: 'aa 2', body: 'ee'},
    {id: 3, title: 'xx 3', body: 'bb'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function getSortedPosts () {
    console.log('getSortingPosts started');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          placeholder='Search...'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />

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
          <PostsList remove={removePost} posts={sortedPosts} title='JS posts'/>
          : 
          <h1 style={{textAlign: 'center'}}>No posts yet</h1>
      }
      
    </div>
  );
}

export default App;
