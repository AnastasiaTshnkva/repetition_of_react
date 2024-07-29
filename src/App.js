import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('some text');

  const incrementFunc = () => setLikes(likes + 1);
  const decrementFunc = () => setLikes(likes - 1);

  return (
    <div>
      <h1>{value}</h1>
      <input 
        type='text' 
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Counter/>
      <ClassCounter/>
    </div>
  );
}

export default App;
