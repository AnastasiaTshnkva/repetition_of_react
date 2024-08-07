import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import '../src/styles/app.css';
import PostsList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostItem from './components/PostItem';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaSctipt', body: 'Description'},
    {id: 2, title: 'JavaSctipt 2', body: 'Description'},
    {id: 3, title: 'JavaSctipt 3', body: 'Description'},
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [post, setPost] = useState({
    title,
    body,
  })

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    // const newPost = {
    //   id: Date.now(),
    //   title: '',
    //   body: '',
    // };

    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({
      title,
      body,
    })
  }

  return (
    <div className='App'>
      <form>
        <MyInput 
          value={post.title}
          onChange = {e => setPost({...posts, title: e.target.value})}
          type='text' 
          placeholder='Post title'
          />

        <MyInput 
          value={post.body}
          onChange = {e => setPost({...posts, body: e.target.value})}
          type='text' 
          placeholder='Post decsription'
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostsList posts={posts} title='JS posts'/>


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
