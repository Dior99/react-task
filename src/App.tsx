import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {RatingValuePropsType} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";


function App() {

        const [ratingValue, setRatingValue] = useState<RatingValuePropsType> (1)
        const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className="App">
            <Accordion value={'Menu One'}
                       collapsed={accordionCollapsed}
                       onClick={ () => { setAccordionCollapsed(!accordionCollapsed)}}/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <OnOff/>
            <hr/>
            <UncontrolledAccordion value={'Menu One'}/>
            <hr/>
            <UncontrolledRating/>
        </div>
    );
}

export default App;
