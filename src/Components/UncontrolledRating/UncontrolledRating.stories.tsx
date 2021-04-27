import React, {useState} from 'react';
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}

const UncontrolledRatingTemplate = () => <UncontrolledRating/>;

export const CollapsedMode = () => {
    const [value, setValue] = useState<number>(1 | 2 | 3 | 4 | 5)
    return <UncontrolledRating/>
}



