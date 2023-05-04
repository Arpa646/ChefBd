import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

// import LazyLoad from 'react-lazyload';
//This is showing each chef card
const RecipieCard = ({ chef }) => {
    const { name, photo, id, likes, experience, recipieNumber } = chef
    return (
        <div>
            <div class="card size m-4 shadow-lg">

               
                {/* <img src={photo} class="card-img-top" alt="..." /> */}
                <LazyLoad  threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
      <img class="card-img-top"  src={photo} />
    </LazyLoad>
                
                <div class="card-body">
                    <h5 class="card-title">Chef Name: {name}</h5>
                    <p class="card-text"> {experience} Years Experience</p>
                    <h5>creating {recipieNumber} recipies</h5>
                    <h3>{likes} likes </h3>
                    <Link to={`/details/${id}`}><button className='button3'>See Recipie..</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RecipieCard;