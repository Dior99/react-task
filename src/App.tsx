import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion";
import Rating from "./Components/Rating";

function App() {
    return (
        <div className="App">
            <Accordion value={'Menu One'} collapsed={true}/>
            <Accordion value={'Menu Two'} collapsed={false}/>
            <hr/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;
