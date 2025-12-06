import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Nav from '../../Components/Nav/Nav';

function Marketplace() {
    return(
        <div>
            <Nav />
            <div style={{ padding: '100px 12%', minHeight: '80vh' }}>
                <h1>Marketplace</h1>
                <p>Checkout our EV ecosystem marketplace for buying and selling EVs</p>
                <p>Meet buyers and seller of EVs, EV parts and accessories, bikes and much more. 
                    You can also rent an EV for your logistics and delivery services in our marketplace.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Marketplace;

