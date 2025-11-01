import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { TriviaNotifier } from '../parent/triviaNotif';

export function Trivia(props) {
  const userName = props.userName || 'Player';
  const [question, setQuestion] = React.useState('Loading question...');
  const [correctAns, setCorrectAns] = React.useState('');
  const [ans2, setAns2] = React.useState('');
  const [ans3, setAns3] = React.useState('');
  const [ans4, setAns4] = React.useState('');

  React.useEffect(() => {
    setQuestion('Which is the capital of France?');
    setCorrectAns('Paris');
    setAns2('London');
    setAns3('Berlin');
    setAns4('Madrid');
  }, []);

  const buttons = new Map();
  const [order, setOrder] = React.useState([]);
  const number = 0;
  const correct = 0;

  async function onAnswer(buttonPos) {
    number += 1;
    if (order[buttonPos] === correctAns) {
      correct += 1;
    }
    await highlight(buttonPos);
    loadNextQuestion();
  }


  function shuffleAnswers(){
    const answers = [correctAns, ans2, ans3, ans4];
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    setOrder(answers);
  }

  function restart() {
    saveScore((correct / number) * 100);
    number = 0;
    correct = 0;
    loadNextQuestion();
  }


  function saveScore(score){
    const triviaScore = {
      studentName: userName,
      subject: 'Geography',
      score: score
    };
    TriviaNotifier.broadcastEvent(userName, triviaScore);
    updateScoreLocal(triviaScore);
  }

  function updateScoreLocal(newScore){
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }
    localStorage.setItem('scores', JSON.stringify(scores));
  }







  return (
    <div>
    <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <h1 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" id="logo">RAD Education</h1>
            <h3 className="menu"> Welcome {props.userName}</h3>
            <div className="text-end">
                <NavLink to="/" className="btn btn-outline-primary me-2">Logout</NavLink>
              </div>
          </header>
    </div>
    <main>
      <div className="container text-center">
        <div>
        <h2>Trivia Game</h2>
        <p className="text-center"> {question} </p>
        </div>
        <div className="d-flex justify-content-center">
        <table>
          <tr>
            <td>
              <button className="btn btn-outline-secondary">
                A. {correctAns}
              </button>
            </td>
            <td>
              <button className="btn btn-outline-secondary">
               B. {ans2}
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-outline-secondary">
               C. {ans3}
              </button>
            </td>
            <td>
              <button className="btn btn-outline-secondary">
               D. {ans4}
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div className="d-flex justify-content-center mt-4 triv">
        <div className="score">
        ---
        </div>
        <div>
        <button className="btn btn-primary mb-4">Restart</button>
        </div>
      </div>
      </div>
    </main>
    </div>
  );
}