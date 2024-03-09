import React, { useState } from "react";

function FlashCard({ question, answer }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="front">
                <h1>{question}</h1>
            </div>
            <div className="back">
                <h1>{answer}</h1>
            </div>
        </div>
    );
}

export default FlashCard;
