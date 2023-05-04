import React from 'react';
//This is fotter page componant
const Footer = () => {
  return (

    <footer class="bg-dark text-white fotter">
      <div class="container-fluid p-5">
        <div class="row">
          <div class="col">
            <h4>ChefCafe</h4>
            <p className='text-light '>. Let us help you find the job that brings fulfillment and success to your career journey."</p>
            <img src="https://i.ibb.co/5rCqFgH/Group-9969.png" alt="" />

          </div>
          <div class="col">
            <h4>US</h4>
            <ul class="list-unstyled">
              <li><>About Us</></li>
              <li><>Home</></li>
              <li><>Latest Recipie</></li>
              <li><>All Recipie</></li>
            </ul>
          </div>
          <div class="col">
            <h4>Product</h4>
            <ul class="list-unstyled">
              <li><>Prototype</></li>
              <li><>Plans & Price</></li>
              <li><>Coustomers</></li>
              <li><>heighlight</></li>
            </ul>
          </div>
          <div class="col">
            <h4>Support</h4>
            <ul class="list-unstyled">
              <li><>Help Desk</></li>
              <li><>Seals</></li>
              <li><>Devoloper</></li>
            </ul>
          </div>
          <div class="col">
            <h4>Contact</h4>
            <ul class="list-unstyled">
              <li><>Email:arpalhan114@gmail.com</></li>
              <li><>Phone:01753728394</></li>
             
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;