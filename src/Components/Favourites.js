import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Favourites({ favorites }) {
  return (
    <>
      <div className="container" >
        <h1>Favorite Products</h1>
        <div className="row">
          {favorites.map(product => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card  p-2 rounded  mt-3 shadow-lg"  >
                <img src={require(`../${product.image}`)} className="card-img-top" alt="Product" style={{height : '200px'}} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: {product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Favourites;
