import logo from './logoHT6top.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './SignUpPage';
import './SignUpPage.css'; 
import React, { useState } from 'react';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const storedSignUpData = [
    {
      username: 'user1',
      email: 'user1@example.com',
      password: 'password1',
    },
    {
      username: 'user2',
      email: 'user2@example.com',
      password: 'password2',
    },
    
  ];

  const handleSignUpLinkClick = () => {
    setIsSignUpOpen(true);
  };
  return (
    <div className="App">
      
       <nav class="navbar navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
           <img 
           src={process.env.PUBLIC_URL + '/logoHT6.png'}
           alt="Bootstrap" 
           width="30" 
           height="30" 
           class="logo d-inline-block align-text-top"
           style={{ marginTop: '-5px' }}
           />
           <span class="ml-2">Linguify</span>
           </a>
           <div className="d-flex gap-5 ms-3">
            <a href="#Home" class="Home btn btn-outline-warning m-0 bg-transparent border-0 text-warning text-decoration-underline">Home</a>
            <a href="#About" class="btn btn-outline-warning m-0 bg-transparent border-0 text-warning text-decoration-underline">About</a>
            <a href="#Listings" class=" btn btn-outline-warning m-0 bg-transparent border-0 text-warning text-decoration-underline">Listings</a>
          </div>
        </div>
      </nav>
      <div className="Top">
        <img className="Logo30"
           src={process.env.PUBLIC_URL + '/logo3.0.png'}
           alt="Bootstrap" 
           width="100" 
           height="100" 
           class="logo d-inline-block align-text-top"
           style={{ marginTop: '-5px'}}
           />
          
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1 className="Title1">"Facial Recognition Reimagined"</h1>
          <hr></hr>
          
          <main className="SignUp-Btn">
          <a href="#signup" className="btn btn-warning" onClick={handleSignUpLinkClick}>Sign Up</a>
          <SignUpPage isOpen={isSignUpOpen} />
          </main>
          
      </div>
      <div className="Middle"></div>
      <div className="SecondMiddle"></div>
        
      <section class="" id="Home">
      <div className="ThirdMiddle row">
      <div className="col-lg-7">
        <h1 className="top-heading Home-settings">Home</h1>
          <p className="Home-settings">Linguify is a face recognition tool for automated attendance tracking and interpersonal management. It has the potential to streamline operations, enhance security, and provide valuable insights within educational, corporate, and other organizational settings.</p>  
          
          </div>
        <div className="col-lg-4">
        <img class="bgTitle" src={process.env.PUBLIC_URL + '/LaptopsHT6.png'} alt="laptop-mockup"></img>
          </div>
      </div>
      </section>
      <div className="FourthMiddle"></div>

      <section class="" id="About">
        
      <div className="FifthMiddle ">
      <h1 class="Second-heading top-heading">About</h1>
      <div className="Second-column row">
      <div className="col-lg-4">
      <p className="second-heading-one Home-settings">Traditional attendance tracker methods are inefficient, wasting time and disrupting engagement

Wide variety of environments used in (e.g schools, workforce, transit systems)</p>  
      </div>
      <div className="col-lg-4">
      <p className="second-heading-two Home-settings">With biometric precision, errors are significantly reduced</p>  
      </div>
      <div className="col-lg-4">
      <p className="second-heading-three Home-settings">Provides data on recognition patterns, offering valuable insights for improving productivity and operational efficiency</p>  
      </div>
      </div>
      </div>

      </section>
      <div className="SixthMiddle"></div>

      <section class="" id="Listings">
      <div className="SeventhMiddle">
        <h1 class="top-heading">Listings</h1>
      </div>
      </section>
     <div className="Bottom">
        <h6>© Copyright Linguify</h6>
     </div>
    </div>
  );
}

export default App;
