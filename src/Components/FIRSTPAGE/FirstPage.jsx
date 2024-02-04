import React from "react";
import "./FirstPage.css";
// import car_drive from"../../../public/car_drive.png";

const FirstPage = () => {
  return (
    <div>
      <div className="container-fluid m-0 p-0 ">
        <div className="row h-100 m-0 p-0">
          <div className="col-3 bg-dark py-2 d-flex justify-content-center ">
            <img src="DRIVER.png" alt="" className="" />
          </div>
          <div className="col-9">
            <div className="row h-100">
              <div className="col-5 bg-info  d-flex justify-content-around align-items-center">
                <span>Vehicle</span>
                <span>About</span>
                <span>Contact</span>
              </div>

              <div className="offset-3  bg-warning col-4 d-flex justify-content-around align-items-center">
                <span className="">Login</span>
                <button className="btn btn-outline-dark">
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-2 py-2 bg-dark padding"></div>
        <div className="col-md-9 col-sm-10">
          <div className="d-flex justify-content-between align-items-center w-50 padding_Center"></div>
          <div className="d-flex justify-content-center align-items-center w-50 padding_left"></div>
        </div>
      </div>
      
       
  <div className="bg-warning w-100 height d-flex">
  <div className="left-content  ">
              <h3 className="Have">HAVE ALL THE</h3>
              <h1 className="Electric">Electric</h1>
              <h1 className="Feels">Feels</h1>
              <h5 className="With"> WITH SUSTAINABLE VEHICLES</h5>
              <p className="All">
                All-Electric vehicle rentals in Long Beach have arrived. It’s
                old news to trash<br></br>
                the planet. Keep your values intact while you cruise through the
                streets of<br></br>
                Long Beach with a new sustainable electric whip. Super safe,
                easy to rent<br></br>
                and return, and fun to ride. Rent one of DRIVER’s electric cars
                for your next<br></br>
                travel plans and feel the difference.
              </p>
              <button className="btn2">Check Avaliablity</button>
            </div>
            <div className="w-50">
               <div id="right-top-container"></div>
              <div id="right-bottom-container"></div> 
              <div className="img-box"><img src="car_drive.png" alt="" /></div>
    </div>
    </div>
         </div> 
    // </div>
  );
};

export default FirstPage;
