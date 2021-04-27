import React, {useState} from 'react';
import {OnOff, UncontrolledOnOffType} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
}

const OnOffTemplate = (args: UncontrolledOnOffType) => <OnOff {...args} />;

export const OnMode = () => <OnOff collapsed={true} onClick={x=>x}/>
export const OffMode = () => <OnOff collapsed={false} onClick={x=>x}/>

export const OnOffChanging = () => {
    const [on, setOn] = useState<boolean>(true)
    return <OnOff collapsed={on} onClick={setOn}/>
}
