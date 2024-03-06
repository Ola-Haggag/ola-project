import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import main from '../main.jpg'
import Favourites from '../Components/Favourites';

  function Product({id , image, name, price , addToFavorites }) {
    const [isFavorite , setIsFavorite] = useState(false)

    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
      addToFavorites({ id, name, image, price });
    };
    return (
      <>

      <div className='cards col-md-4 mb-3'>
      <div className='card   p-2 rounded  mt-3 shadow-lg'>
      <img src={require(`../${image}`)} alt={"not found"} style={{ width: '100%', height: '230px' }} />
  
        <div className='card-body'>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text'>Price : {price}</p>
{/* /////////////////////////////////////////////////////////////////////////////////// */}
         <div className='cartFav' > 
         <button className="add-to-cart p-2 rounded px-4"/*  onClick={addToCart} */>Add to Cart</button> 
          <FontAwesomeIcon className='heartIcon' style={{fontSize : '30px' , color : isFavorite ? 'red' : 'gray'}} icon={faHeart} onClick={toggleFavorite}/> 
          </div>   
          <div className='btnBuy'>  
             <button className="add-to-cart p-2 rounded px-4 mt-2" style={{width : '132px'}} onClick={() => alert('Payment Completely Successfully')}>Buy Now</button>  
          </div> 
{/* //////////////////////////////////////////////////////////////// */}
        </div>
  
      </div>
      </div>

      </>
    );
  }

 function ProductSection () {
  const [favorites , setFavorites] = useState ([])

   const addToFavorites = (product) => {
    if (!favorites.find(fav => fav.id === product.id)) {

      const newFavorites = [...favorites, product];
      setFavorites(newFavorites);
     /* console.log("Favorites:", newFavorites); */
    }
   }
    const laptops = [
        {id: 1 , name: "Lenovo IdeaPad 3", image: "laptop1.jpg", price: "32299 EGP" },
        {id : 2 , name: "Lenovo IdeaPad 5", image: "laptop2.jpg", price: "31644 EGP" },
        {id : 3 , name: "Lenovo IdeaPad Gaming", image: "laptop3.jpg", price: "43210 EGP" },
        {id : 4 , name: "Lenovo V15", image: "laptop4.jpg", price: "16699 EGP" },
        {id : 5 , name: "Lenovo Legion 5", image: "laptop5.jpg", price: "41185 EGP" },
        {id : 6 , name: "HP Victus", image: "laptop6.jpg", price: "43222 EGP" },
        {id : 7 , name: "HP Pavilion", image: "laptop7.jpg", price: "29220 EGP" },
        {id : 8 , name: "HP Envy", image: "laptop8.jpg", price: "95520 EGP" },
        {id : 9 , name: "HP 14 EliteBook", image: "laptop9.jpg", price: "12000 EGP" },
    
        {id : 10 , name: "HP 15s-eq", image: "laptop10.jpg", price: "27000 EGP" },
        {id : 11 , name: "Lenovo IdeaPad 3", image: "laptop1.jpg", price: "32299 EGP" },
        {id : 12 , name: "Lenovo IdeaPad 5", image: "laptop2.jpg", price: "31644 EGP" },
        {id : 13 , name: "Lenovo IdeaPad Gaming", image: "laptop3.jpg", price: "43210 EGP" },
        {id : 14 , name: "Lenovo V15", image: "laptop4.jpg", price: "16699 EGP" },
        {id : 15 , name: "Lenovo Legion 5", image: "laptop5.jpg", price: "41185 EGP" },
        {id : 16 , name: "HP Victus", image: "laptop6.jpg", price: "43222 EGP" },
        {id : 17 , name: "HP Pavilion", image: "laptop7.jpg", price: "29220 EGP" },
        {id : 18 , name: "HP Envy", image: "laptop8.jpg", price: "95520 EGP" },
        {id : 19 , name: "HP 14 EliteBook", image: "laptop9.jpg", price: "12000 EGP" },
        {id : 20 , name: "HP 15s-eq", image: "laptop10.jpg", price: "27000 EGP" },
        {id : 21 , name: "Lenovo IdeaPad 3", image: "laptop1.jpg", price: "32299 EGP" },
        {id : 22 , name: "Lenovo IdeaPad 5", image: "laptop2.jpg", price: "31644 EGP" },
        {id : 23 , name: "Lenovo IdeaPad Gaming", image: "laptop3.jpg", price: "43210 EGP" },
        {id : 24 , name: "Lenovo V15", image: "laptop4.jpg", price: "16699 EGP" },
        {id : 25 , name: "Lenovo Legion 5", image: "laptop5.jpg", price: 999 },
        {id : 26 , name: "HP Victus", image: "laptop6.jpg", price: "43222 EGP" },
        {id : 27 , name: "HP Pavilion", image: "laptop7.jpg", price: "29220 EGP" },
      
      ];
    return(
      <>
      <div className='containerMain'>
      <img className='main' src={main} alt='main' style={{height : '88vh' , width : '100%'}}/>
       
        <h2><h1>Shop Laptops Online Today !</h1>Discover great laptops at great prices on our website. Whether for work or travel, find what you need and buy securely with fast delivery.</h2>
        </div>

        <section className='products'>
        <div className='container'>
          <div className='product row justify-content-center mt-3' id='product' >
          {
          laptops.map(product => (
             <Product key={product.name} id={product.id} name={product.name} image={product.image} price={product.price} addToFavorites={addToFavorites} />
             ))
          }
          </div>
        </div>
      </section>

       <Favourites favorites={favorites} /> 
 

      </>
    )
 }
 export default ProductSection;