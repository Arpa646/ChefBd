import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Details.css'
import Navbar from '../Navbar';
import RecipieDEtails from './RecipieDEtails';

const Details = () => {
    const data = useLoaderData();
    console.log(data);
    const{name,experience,recipieNumber,likes,recipes}=data
    console.log('this is all',recipes)
    return (
        
        <div className='container'>
        
        <Navbar></Navbar>
            <header>

            <div className="row">
                <div className="col-lg-8 ">
                <div class="banner">
                    <img className='w-100' src="https://blanquette.qodeinteractive.com/wp-content/uploads/2021/09/b-img-1.jpg" alt="Chef Picture" />
                    
                </div>
              <h1 className='m-2'>DELICIOUS COMFORT FOOD RECIPES THAT YOU MUST TRY NOW</h1>
                </div>

                <div className="col-lg-4">
                    <div className="card card-design">
                       <div>
                    <img className="w-50 d-block m-auto p-3"src={data.photo} alt="" srcset="" />
                    <div class="card-body text-center">
                        <h5 class="card-title">Chef Name: {name}</h5>
                        <p class="card-text"> {experience} Years Experience</p>
                        <h5>creating {recipieNumber} recipie</h5>
                        <h3>{likes} likes </h3>
                      
                    </div>
                       </div>
                    </div>
                </div>
            </div>
               
            </header>
            <main>
                <div class="recipes-container">

               
                    <div class="recipe-card">
                          <div class="recipe-info">
                                <h2>Recipe Name 1</h2>
                               





                                <div className="recipe-list">
      {recipes && recipes.map((recipe, index) => (
        <RecipieDEtails key={index} recipe={recipe} />
      ))}
    </div>
                             {/* <RecipieDEtails recipes={recipes}></RecipieDEtails> */}
                             
                            </div>
                    </div>
                   
                    
                </div>
            </main>
        </div>
    );
};

export default Details;