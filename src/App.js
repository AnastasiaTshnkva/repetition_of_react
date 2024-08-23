import React, { useState, useMemo } from 'react';
import '../src/styles/app.css';
import PostsList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

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

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('getSortingPosts started');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [sortedPosts, filter.query]);

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>

      {
        sortedAndSearchedPosts.length !== 0 
          ? 
          <PostsList remove={removePost} posts={sortedAndSearchedPosts} title='JS posts'/>
          : 
          <h1 style={{textAlign: 'center'}}>No posts found</h1>
      }
      
    </div>
  );
}

export default App;
