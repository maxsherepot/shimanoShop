import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShopHeader from "../shop-header/shop-header";
import "./app.css";
import MainPictureSection from "../main-picture-section/main-picture-section";



const App = () => {
    
    return (
        <div>
            <div className="bg-dark border-bottom sticky-top" >
                <ShopHeader />
            </div>

            <Route path="/" exact>
                <MainPictureSection />
            </Route>

            <main className="container">
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>

                    <Route path="/cartpage" exact>
                        <CartPage />
                    </Route>
                </Switch>
            </main>
        </div>
    );
};



export default App;