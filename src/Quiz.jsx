import React, { useState } from 'react';
import './Quiz.css'
function Quiz() {
    const questions = [
        {
          questionText: 'What is the primary greenhouse gas responsible for global warming?',
          answerOptions: [
            { answerText: 'Carbon dioxide (CO2)', isCorrect: true },
            { answerText: 'Methane (CH4)', isCorrect: false },
            { answerText: 'Nitrous oxide (N2O)', isCorrect: false },
            { answerText: 'Ozone (O3)', isCorrect: false },
          ],
        },
        {
          questionText: 'Which of the following is a major contributor to deforestation and climate change?',
          answerOptions: [
            { answerText: 'Urbanization', isCorrect: false },
            { answerText: 'Industrialization', isCorrect: false },
            { answerText: 'Clearing land for agriculture', isCorrect: true },
            { answerText: 'Wildlife conservation', isCorrect: false },
          ],
        },
        {
          questionText: 'What is the term for the gradual increase in Earth\'s average surface temperature?',
          answerOptions: [
            { answerText: 'Global cooling', isCorrect: false },
            { answerText: 'Global warming', isCorrect: true },
            { answerText: 'Climate stabilization', isCorrect: false },
            { answerText: 'Thermal equilibrium', isCorrect: false },
          ],
        },
        {
          questionText: 'Which of the following renewable energy sources is derived from the sun?',
          answerOptions: [
            { answerText: 'Wind power', isCorrect: false },
            { answerText: 'Hydropower', isCorrect: false },
            { answerText: 'Solar power', isCorrect: true },
            { answerText: 'Geothermal energy', isCorrect: false },
          ],
        },
        {
          questionText: 'What is the main cause of the hole in the ozone layer?',
          answerOptions: [
            { answerText: 'Deforestation', isCorrect: false },
            { answerText: 'Greenhouse gas emissions', isCorrect: false },
            { answerText: 'Release of chlorofluorocarbons (CFCs)', isCorrect: true },
            { answerText: 'Volcanic activity', isCorrect: false },
          ],
        },
        {
          questionText: 'Which international agreement aims to combat climate change by limiting global warming?',
          answerOptions: [
            { answerText: 'Kyoto Protocol', isCorrect: true },
            { answerText: 'Paris Agreement', isCorrect: true },
            { answerText: 'Montreal Protocol', isCorrect: false },
            { answerText: 'Vienna Convention', isCorrect: false },
          ],
        },
        {
          questionText: 'What is the term for the rise in sea levels due to the melting of polar ice caps?',
          answerOptions: [
            { answerText: 'Ocean warming', isCorrect: false },
            { answerText: 'Thermal expansion', isCorrect: false },
            { answerText: 'Sea level rise', isCorrect: true },
            { answerText: 'Ocean acidification', isCorrect: false },
          ],
        },
        {
          questionText: 'Which sector is a significant contributor to anthropogenic greenhouse gas emissions?',
          answerOptions: [
            { answerText: 'Transportation', isCorrect: true },
            { answerText: 'Forestry', isCorrect: false },
            { answerText: 'Information technology', isCorrect: false },
            { answerText: 'Healthcare', isCorrect: false },
          ],
        },
        {
          questionText: 'What is the term for the process of capturing and storing carbon dioxide to prevent its release into the atmosphere?',
          answerOptions: [
            { answerText: 'Carbon offsetting', isCorrect: false },
            { answerText: 'Carbon sequestration', isCorrect: true },
            { answerText: 'Carbon footprint', isCorrect: false },
            { answerText: 'Carbon trading', isCorrect: false },
          ],
        },
        {
          questionText: 'Which of the following is a sustainable practice to reduce carbon emissions in agriculture?',
          answerOptions: [
            { answerText: 'Monoculture farming', isCorrect: false },
            { answerText: 'Agroforestry', isCorrect: true },
            { answerText: 'Pesticide overuse', isCorrect: false },
            { answerText: 'Deforestation for agriculture', isCorrect: false },
          ],
        },
      ];
      
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
    
      const handleAnswerButtonClick = (isCorrect ,answer) => {
        if (isCorrect) {
          setScore(score + 1);
        }
    
        const nextQuestion = currentQuestion + 1;
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestion].answeredCorrectly = isCorrect;
    
        
         
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
      };
    
      const handleReplayButtonClick = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
      };
    
      return (
        
        <div >
          <h1 className="header">Quiz</h1>
          <div className="app">
            {showScore ? (
              <div className="score-section">
                <p>You scored {score} out of {questions.length}</p>
                <button onClick={handleReplayButtonClick}>Replay</button>
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                  </div>
                  <div className="question-text">{questions[currentQuestion].questionText}</div>
                </div>
    
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerButtonClick(answerOption.isCorrect,answerOption)}
                      className={questions[currentQuestion].answeredCorrectly ? 'correct' : 'incorrect'}
                      disabled={questions[currentQuestion].answeredCorrectly !== undefined}
                    >
                      {answerOption.answerText}
                      
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        
        </div>
      );
    }
    
    export default Quiz;
    