import React from "react";
import "./Home.css";
import Product from "./Product";



function Home() {

    return (

        <div className="home">
            <div className="home__container">
                <img src="https://img.freepik.com/free-vector/gradient-colorful-sale-wallpaper_52683-57057.jpg?w=2000" alt="" className="home__image" />
                <div className="home__row">
                    <Product />

                </div>
            </div>
        </div>
    )
}

export default Home
