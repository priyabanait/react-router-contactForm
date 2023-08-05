import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import productsArr from '../data'
import {Link} from 'react-router-dom';
import './product.css';
export default function Product() {
  return (
    <section>
      
       
       {
            productsArr.map((item)=>(
              
               
                <Link to='/product/p1'>
                
                   <div className='image' >
                 
                   
                   <img src={item.imageUrl} alt=''></img>
                   <p className='title'>{item.title}</p>
                   <p className='price1'>Rs{item.price}</p>
                   <div className='tag'>
                   <button style={{color:'white',background:'#87CEFA '}} >ADD TO CART</button>
                   </div>
                  
                   </div>
                   </Link>
                

              )) 
        }
        
     

    </section>
  )
}
