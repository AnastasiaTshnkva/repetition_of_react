import React, { useEffect, useState } from 'react';
import '../src/styles/app.css';
import PostsList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import postService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  async function fetchPosts () {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts =  await postService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 1000);
    
  }

  return (
    <div className='App'>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Add new post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>

      {isPostsLoading ? 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Loader/> 
        </div> 
        : 
        <PostsList remove={removePost} posts={sortedAndSearchedPosts} title='JS posts'/>
      }
      
    </div>
  );
}

export default App;
