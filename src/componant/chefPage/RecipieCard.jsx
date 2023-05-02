import React from 'react';
import { Link } from 'react-router-dom';

const RecipieCard = ({ chef }) => {
      const {name,photo,id,likes,experience,recipieNumber}=chef
    return (
        <div>
            <div class="card size m-4">
                <img src={photo} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text"> {experience}</p>
                        <h3>creating {recipieNumber} recipie</h3>
                        <h3>{likes} likes </h3>
                       <Link to={`/details/${id}`}><button>See Recipie</button></Link>
                    </div>
            </div>
        </div>
    );
};

export default RecipieCard;