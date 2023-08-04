
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Home from './component/Home';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Header from './component/Header';

function App() {
  
  
     async function addMovieHandler(movie){
      const response= await fetch('https://react-moviesform-default-rtdb.firebaseio.com/movies.json',{
        method:'POST',
        body:JSON.stringify(movie),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const data= await response.json();
      console.log(data);
     }


  return (
    <>
    <Header></Header>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/contactPage">
        <ContactUs onAddMovie={addMovieHandler}></ContactUs>
      </Route>
      
    
    </>
  );
}

export default App;
