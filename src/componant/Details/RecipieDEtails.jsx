import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
//if clik see all recipie then it will open  details page where also booked mared all recipie;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipieDEtails = ({ recipe,index }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarkClick = () => {
      setIsBookmarked(true);
     
      if (!isBookmarked){
        toast.success('Success Notification !');
      }
      


    }; 
    
   

  

    return (
        <div>

<ToastContainer />
            <div className="card shadow-lg p-3">
          
            
               
                <img className='w-25' src="https://blanquette.qodeinteractive.com/wp-content/uploads/2021/09/b-img-2.jpg" alt="Recipe Image" />
               <h3>Ingridients</h3>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Process</h3>
                <p>{recipe.CookingProcess}</p> 
                <div className="bookmark">
                <FontAwesomeIcon 
            icon={faBookmark} 
            color={isBookmarked ? "gray" : "black"} 
            onClick={handleBookmarkClick}
            style={{ cursor: "pointer" }} 
            disabled={isBookmarked}
          />
                </div>

               <div >
               <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />  rating 4.2
               </div>

            </div>

        </div>
    );
};

export default RecipieDEtails;