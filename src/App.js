import React from "react";

// containers
import Navbar from "./containers/NavbarAccordion";
import Content from "./containers/Content";

// style
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './scss/app.scss';
import Footer from "./containers/Footer";

const App = () =>{
    return (
        <>
            <Navbar />
            <Content />
            <Footer />
        </>
    )
}

export default App