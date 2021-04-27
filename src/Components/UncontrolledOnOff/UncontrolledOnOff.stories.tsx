import React, {useState} from 'react';
import {UncontrolledOnOff, UncontrolledOnOffType} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const UncontrolledOnOffTemplate = (args: UncontrolledOnOffType) => <UncontrolledOnOff {...args} />;

export const CollapsedMode = () => {
    const [on, setOn] = useState<boolean>(false)
    return <UncontrolledOnOff onClick={() => { setOn(on) }}/>
}



