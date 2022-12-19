import React, { useState } from 'react';
import quotes from '../quotes.json';

const QuoteBox = () => {

    console.log(quotes)

    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(random);

    const changeFrase = () => {
        const newRandom = Math.floor(Math.random() * quotes.length)
        setIndex(newRandom);
    }

    const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]
    const randomColors = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColors]}`


    return (
        <div className='box-phrases'style={{color: colors[randomColors]}}>
            <h1>
                <span><i class="fa-solid fa-quote-left"></i></span>
                {quotes[index].quote}
                </h1>
            <h2>{quotes[index].author}</h2>
            <button onClick={changeFrase} style={{color: colors[randomColors]}} >
            <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default QuoteBox;