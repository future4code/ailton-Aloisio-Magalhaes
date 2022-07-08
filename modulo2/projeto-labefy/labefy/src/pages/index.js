//import React from 'react';
//import { Component} from 'react';
//import { useEffect} from 'react';
//import { useState } from 'react';
//import { useLayoutEffect } from 'react';
//import ReactDOM from 'react-dom';
//import { flushSync } from 'react-dom';
//import {Suspense, lazy} from 'react';
/*
const Comments = lazy(() => import('./Comments.js'));

<Suspense fallback={<Spinner />}>
  <Comments />
</Suspense>
*/
/*
function LogEvents(props) {
  useLayoutEffect(() => {
    console.log("Commit");
  });
  console.log("Render");
  return null;
}

function fetchSomething() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}
----------------- dentro da  funcao App
const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  async function handleClick() {
    await fetchSomething();

    setCount((c) => c + 1);

    await fetchSomething();

    setFlag((f) => !f);
  }
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents />
    </div>
  );
*/
/*
class Home extends React.Component {

render(){
  return (
    <div>
     <h1>oi</h1>
     
    </div>
  );  
}
}
export default Home;
*/