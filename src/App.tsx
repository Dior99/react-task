import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {RatingValuePropsType} from "./Components/Rating/Rating";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledOnOff from './Components/UncontrolledOnOff/UncontrolledOnOff';



function App() {

    const [ratingValue, setRatingValue] = useState<RatingValuePropsType>(1)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false);

    return (
        <div className="App">
            <Accordion value={'Menu One'}
                       collapsed={accordionCollapsed}
                       onClick={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
            <hr/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <hr/>
            <UncontrolledOnOff onClick={setOn}/>{on.toString()}
            <hr/>
            <UncontrolledAccordion value={'Menu One'}/>
            <hr/>
            <UncontrolledRating/>
            <hr/>
            {/*<OnOff collapsed={on}
                   onClick={() => {setOn(!on)}}/>*/}
        </div>
    );
}

export default App;
