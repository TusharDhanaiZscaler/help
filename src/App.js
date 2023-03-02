import React from "react";

// containers
import Navbar from "./containers/Navbar";
import Content from "./containers/Content";

// style
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './scss/app.scss';

const App = () =>{
    return (
        <>
            <Navbar />
            <Content />
        </>
    )
}

export default App