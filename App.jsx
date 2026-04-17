import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/*
Header
 - logo
 - nav items
 Body
  - search
  - item cards
 Footer
  - copy right
  - links
  - contact

*/

const Header = () =>{
    return(
    <div className="header">

        <div className="logo-container">
            <img className="logo" src="https://imgcdn.stablediffusionweb.com/2025/4/14/116e900c-24b3-41f9-be63-ffa9dcdfcdb2.jpg"></img>
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
    );
};

const RestaurantCards = ()=>{
    return(
        <div className="res-card">
            <h3>Meghna Foods</h3>
        </div>
        
    );
};
const Body = () =>{
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
                <RestaurantCards/>
            </div>
        </div>
    );
};

const Footer = () =>{
    return(
    <h1>This is Footer</h1>
    );
};

const AppLayout = () =>{
    return (
        <div className = "app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);