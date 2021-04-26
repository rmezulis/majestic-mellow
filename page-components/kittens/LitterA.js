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
            <Kitten images={first} gender="female"/>
            <Kitten images={second} name="Armstrong" gender="male"
                    text='<p>
                    <strong>Armstrong</strong> was the first born kitten in our cattery LV*Majestic Mellow.
                    He was the first who arrived to this world. The chosen name <strong>Armstrong</strong>
                    is in honor of the American astronaut who was first to step on the moon!
                    The name <strong>Armstrong</strong> also means "son of the strong man" or "someone with strong arms".</p>'
            />
            <Kitten images={third} gender="female"/>
        </div>
    )
}

export default LitterA;