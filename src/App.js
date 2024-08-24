import logo from './logo.svg';
import './App.css';
import Header from './header';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [jokes,setJokes]=useState('')

  const apifetch=async ()=>{
    try{
    const jokesdata=await axios.post(`${process.env.REACT_APP_JOKES_URL}`);
    setJokes(jokesdata.data.joke)
    
  }catch(err){
    console.log(err)
  }
  }

  useEffect(() => {
    apifetch();
  }, []);

  return (
    <>
      <Header />
      <div>
      <h1>Jokes</h1>
      <h1>{jokes}</h1>
      </div>
      
    </>
  );
}

export default App;
