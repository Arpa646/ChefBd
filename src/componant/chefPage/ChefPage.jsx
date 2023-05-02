import React, { useEffect, useState } from 'react';
import RecipieCard from './RecipieCard';
import './chef.css'
const ChefPage = () => {
    const [chef,setChef]=useState(null)
    useEffect(()=>{
        fetch('http://localhost:7000/chef')
        .then(res=>res.json())
        .then(data=>setChef(data))
    },[])
    return (
        <div className='display '>
            {
                chef &&  chef.map(rec=><RecipieCard chef={rec} key={rec.id}></RecipieCard>) 
            }
        </div>
    );
};

export default ChefPage;