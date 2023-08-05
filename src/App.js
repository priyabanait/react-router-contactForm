
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Home from './component/Home';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Header from './component/Header';
import Product from './component/Product';
import ProductDetail from './component/ProductDetail';
import { Switch } from 'react-router-dom';
function App() {
  
  
     async function contactHandler(contact){
      const response= await fetch('https://react-moviesform-default-rtdb.firebaseio.com/contact.json',{
        method:'POST',
        body:JSON.stringify(contact),
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
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/product" exact>
        <Product></Product>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/contactPage">
        <ContactUs contactHandler={contactHandler}></ContactUs>
      </Route>
      <Route path="/product/:productId">
        <ProductDetail ></ProductDetail>
      </Route>
      </Switch>
      
      
    
    </>
  );
}

export default App;
