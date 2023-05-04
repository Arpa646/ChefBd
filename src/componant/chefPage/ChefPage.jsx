import React, { useEffect, useState } from 'react';
import RecipieCard from './RecipieCard';
//Here all chef data loaded from vercel 
//and map 
import './chef.css'
const ChefPage = () => {
    const [chef,setChef]=useState(null)
    useEffect(()=>{
        fetch('https://server-chef-arpa646.vercel.app/chef')
        .then(res=>res.json())
        .then(data=>setChef(data))
    },[])
    return (
    <> <h1 className='fw-bold text-center p-lg-5 mt-3'>Out Best Chef</h1>
         <div className='display-design flex-wrap  container'>
          
           
          {
              chef &&  chef.map(rec=><RecipieCard chef={rec} key={rec.id}></RecipieCard>) 
          }
          
      </div>
    </>
       
    );
};

export default ChefPage;