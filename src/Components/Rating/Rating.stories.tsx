import React, {useState} from 'react';
import Rating, {RatingPropsType, RatingValuePropsType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
}

const RatingTemplate = (args: RatingPropsType) => <Rating {...args} />;

export const EmptyRating = () => <Rating value={1} onClick={x=>x}/>
export const Rating1 = () => <Rating value={1} onClick={x=>x}/>
export const Rating2 = () => <Rating value={2} onClick={x=>x}/>
export const Rating3 = () => <Rating value={3} onClick={x=>x}/>
export const Rating4 = () => <Rating value={4} onClick={x=>x}/>
export const Rating5 = () => <Rating value={5} onClick={x=>x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValuePropsType>(1)
    return <Rating value={rating} onClick={setRating}/>
}

