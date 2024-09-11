
import React, { useEffect, useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/pages'
import PostsList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import postService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { usePagination } from '../hooks/usePagination';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
    const responce = await postService.getAll(limit, page);
    setPosts(responce.data);
    const totalCount = responce.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const pagesArray = usePagination(totalPages);
  
  console.log(pagesArray);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page);
  }

  return (
    <div className='App'>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Add new post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>

      {postsError && <div className='error-block'>
          <h1 className='error-block-header'>Oups! Something went wrong!</h1>
          <p className='error-block-message'>{postsError}</p>
        </div>}
      {isPostsLoading ? 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Loader/> 
        </div> 
        : 
        <PostsList remove={removePost} posts={sortedAndSearchedPosts} title='JS posts'/>
      }
      <Pagination pagesArray={pagesArray} changePage={changePage} page={page}
      />
    </div>
  );
}

export default Posts;
