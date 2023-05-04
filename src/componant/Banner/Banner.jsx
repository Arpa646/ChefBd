import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div className=' '>
            <div class="card bg-dark text-white">
                <img class="card-img cc" src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/gallery-3.jpg" alt="Card image"/>
                    <div class="card-img-overlay display">
                       <div>
                       <h1 class="card-title fw-bold">BEST CHEF WHIT THEIR BES <br /> <span>Recipie</span></h1>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                       <button className='button'>See Recipie</button>
                       </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;