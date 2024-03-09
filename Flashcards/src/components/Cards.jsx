import React, { useState, useEffect } from "react";
import FlashCard from "./Flashcards";


function Cards() {
    const pairings = [
        {"Question": "What is the capital of the United States?", "Answer": "Washington, D.C."},
        {"Question": "Where is the Eiffel Tower located?", "Answer": "Paris, France"},
        {"Question": "What is the most populated country in the world?", "Answer": "China"},
        {"Question": "What is the smallest country in the world?", "Answer": "Vatican City"},
        {"Question": "What is the largest country in the world?", "Answer": "Russia"},
        {"Question": "Where is Mount Everest located?", "Answer": "Nepal"},
        {"Question": "What is the largest ocean in the world?", "Answer": "Pacific Ocean"},
        {"Question": "How many continents are there?", "Answer": "7"},
        {"Question": "What is the capital of Australia?", "Answer": "Canberra"},
        {"Question": "What is the deepest point in the ocean?", "Answer": "Mariana Trench"}
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        if (selectedQuestions.length === pairings.length) {
            // If all questions have been selected, reset the selectedQuestions array
            setSelectedQuestions([]);
        }
    }, [selectedQuestions, pairings.length]);

    const getRandomIndex = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * pairings.length);
        } while (selectedQuestions.includes(randomIndex));
        return randomIndex;
    };

    const handleNext = () => {
        const randomIndex = getRandomIndex();
        setCurrentIndex(randomIndex);
        setSelectedQuestions([...selectedQuestions, randomIndex]);
    };

    useEffect(() => {
        handleNext(); // Initial question selection
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="cards-container">
            <div className="flashcard-container">
                <div className="flashcard-content">
                    <div className="flashcard">
                        <FlashCard
                            question={pairings[currentIndex].Question}
                            answer={pairings[currentIndex].Answer}
                        />
                    </div>
                </div>
            </div>
            <div className="card-navigation"></div>
            <button className="next" onClick={handleNext}>&gt;</button>
        </div>
    );
}

export default Cards;

