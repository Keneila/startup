import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { TriviaNotifier } from '../parent/triviaNotif';
import { TriviaButton } from './triviaButton';

export function Trivia(props) {
  const userName = props.userName || 'Player';
  const email = props.email || 'email@example.com';
  const [question, setQuestion] = React.useState('Loading question...');
  const [correctAns, setCorrectAns] = React.useState('');
  const [score, setScore] = React.useState(0);
  const [order, setOrder] = React.useState([]);
  const [allquests, setQuests] = React.useState([]);
  const [num, setNum] = React.useState(0);

  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=20&category=23&difficulty=easy&type=multiple`)
      .then((response) => response.json())
      .then((data) => {
        setQuests(data.results);
        const item = data.results[0];
        setQuestion(item.question);
        setCorrectAns(item.correct_answer);
        shuffleAnswers(item.correct_answer, item.incorrect_answers[0], item.incorrect_answers[1], item.incorrect_answers[2]);
      })
      .catch();
  }, [correctAns]);

  const buttons = new Map();
  const [number, setNumber] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  let n = 0;
  let c = 0;
  async function onAnswer(buttonPos) {
    setNumber(number + 1);
    n = number + 1;
    if (order[buttonPos] === correctAns) {
      setCorrect(correct + 1);
      c = correct + 1;
    } else {
      c = correct;
    }
    setScore((c / n) * 100);
    await highlight(buttonPos);
    setNum(num + 1)
    setCorrectAns(num);
  }

  async function highlight(buttonPos) {
    for (const btn of buttons.values()) {
        await btn.ref.current.press();
      }
      await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
      for (const btn of buttons.values()) {
        await btn.ref.current.finish();
      }

      
  }

  function shuffleAnswers(A,B,C,D){
    const answers = [A,B,C,D];
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    setOrder([answers[0], answers[1], answers[2], answers[3]]);
  }

  async function restart() {
    setNum(0);
    await saveScore(score);
    setNumber(0);
    setCorrect(0);
    setScore(0);

  }


  async function saveScore(score){
    const triviaScore = {
      username: userName,
      subject: 'Geography',
      score: score,
      email: email
    };
    await fetch('/api/score', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(triviaScore),
    });
    TriviaNotifier.broadcastEvent(userName, triviaScore);
    //updateScoreLocal(triviaScore);
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

  function logout() {
     fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  buttons.set(0, {position: 0, answer: order[0], ref: React.useRef()});
  buttons.set(1, {position: 1, answer: order[1], ref: React.useRef()});
  buttons.set(2, {position: 2, answer: order[2], ref: React.useRef()});
  buttons.set(3, {position: 3, answer: order[3], ref: React.useRef()});

  const buttonArray = Array.from(buttons, ([key, value]) => {
    return <TriviaButton position={value.position} ref = {value.ref} answer={value.answer} answerTrue={correctAns} onAnswer={() => onAnswer(value.position)} done={false} />; 
  });

  return (
    <div>
    <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <h1 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" id="logo">RAD Education</h1>
            <h3 className="menu"> Welcome {props.userName}</h3>
            <div className="text-end">
                <NavLink to="/" className="btn btn-outline-primary me-2" onClick={() => logout()}>Logout</NavLink>
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
          <tbody>
          <tr>
            <td>
              {buttonArray[0]}
            </td>
            <td>
              {buttonArray[1]}
            </td>
          </tr>
          <tr>
            <td>
              {buttonArray[2]}
            </td>
            <td>
              {buttonArray[3]}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center mt-4 triv">
        <div className="score">
        {score.toFixed(0)}%
        </div>
        <div>
        <Button className="btn btn-primary mb-4" onClick={() => restart()}> Restart</Button>
        </div>
        
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <p> Note: Sometimes the API sends an empty set of questions, causing the game to either not load at all, or not load a new question. </p>
      <p>Just reload or click a random answer until it does.</p>
      </div>
      </div>
    </main>
    </div>
  );
}