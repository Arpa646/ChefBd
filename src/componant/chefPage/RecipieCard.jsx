import React from 'react';
import { Link } from 'react-router-dom';

import LazyLoad from 'react-lazyload';

const RecipieCard = ({ chef }) => {
    const { name, photo, id, likes, experience, recipieNumber } = chef
    return (
        <div>
            <div class="card size m-4 shadow-lg">

               
                {/* <img src={photo} class="card-img-top" alt="..." /> */}
                <LazyLoad>
        <img
          src=""
          data-src={photo} 
          alt="My Image"
        />
      </LazyLoad>
                
                <div class="card-body">
                    <h5 class="card-title">Chef Name: {name}</h5>
                    <p class="card-text"> {experience} Years Experience</p>
                    <h5>creating {recipieNumber} recipie</h5>
                    <h3>{likes} likes </h3>
                    <Link to={`/details/${id}`}><button className='btn btn-info'>See Recipie..</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RecipieCard;