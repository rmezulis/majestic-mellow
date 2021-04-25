import React from "react";
import Kitten from "./Kitten";

const first = [
    '/images/Kittens/first_1.jpg'
];

const second = [
    '/images/Kittens/second_1.jpg',
    '/images/Kittens/second_2.jpg'
];

const third = [
    '/images/Kittens/third_1.jpg'
];

const LitterA = () => {
    return (
        <div>
            <h2 className="text-center">Litter A</h2>
            <Kitten images={first}/>
            <Kitten images={second}/>
            <Kitten images={third}/>
        </div>
    )
}

export default LitterA;