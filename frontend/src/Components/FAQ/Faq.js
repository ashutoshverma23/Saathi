import React from 'react';
// import './App.css';
import "./Faq.css";

function FAQItem({ question, answer }) {
    return (
        <div className="faq-item">
            <h2 className="question">{question}</h2>
            <p className="answer">{answer}</p>
        </div>
    );
}

function FAQPage() {
    const faqData = [
        {
            question: "What is mental health?",
            answer: "Mental health includes emotional, psychological, and social well-being. It affects how we think, feel, and act."
        },
        {
            question: "How can I improve my mental health?",
            answer: "There are many ways to improve mental health, including exercise, healthy eating, seeking therapy, and practicing mindfulness."
        },
        // Add more FAQ items as needed
    ];

    return (
        <div className="faq-page">
            <h1>FAQ</h1>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
}

export default FAQPage;
