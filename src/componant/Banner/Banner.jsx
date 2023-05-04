import React from 'react';
import "./Banner.css"
//This is Banner Page
const Banner = () => {
    return (
        <div className=' '>
            <div class="card bg-dark text-white">
                <img class="card-img cc" src="https://fastwpdemo.com/newwp/ticrou/wp-content/uploads/2022/09/gallery-3.jpg" alt="Card image"/>
                    <div class="card-img-overlay display">
                       <div>
                       <h3 class="card-title fw-bold ">BEST CHEF WHIT THEIR BEST <br /> <span className='orange'>RECEPIE</span></h3>
                        <p class="card-text">Best chef always doing their best to make best food</p>
                       <button className='button'>See Recipie</button>
                       </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;