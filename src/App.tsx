import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import Rating, {RatingValuePropsType} from "./Components/Rating/Rating";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./Components/OnOff/OnOff";
import {UncontrolledOnOff} from './Components/UncontrolledOnOff/UncontrolledOnOff';
import {Select} from "./Components/Select/Select";
import {Input} from "./Components/Input/Input";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValuePropsType>(1)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false);
    const [parentValue, setParentValue] = useState<string>('')


    return (
        <div className="App">
            <Accordion valueTitle={'Menu One'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={[
                           {value: 1, title: "Dima",},
                           {value: 2, title: "Kristina",},
                           {value: 3, title: "Misha",},
                       ]}
                       onClick={ () => {}}
            />
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
            <Select onChange={() => {} }
                    items={[
                {value: 1, title: "Dima",},
                {value: 2, title: "Kristina",},
                {value: 3, title: "Misha",},
            ]}/>
            <hr/>
            <Input value={parentValue} onChange={setParentValue}/>
            <hr/>
            {/*<OnOff collapsed={on}
                   onClick={() => {setOn(!on)}}/>*/}
        </div>
    );
}

export default App;
