import React from 'react';

export const TriviaButton = React.forwardRef(({ position, onAnswer, answer, answerTrue, done= false}, ref) => {

    function highlightCorrect(){
        if (done){
        if(answerTrue === answer){
            return 'btn btn-success';
        } else {
            return 'btn btn-danger';
        }
    } else {
        return 'btn btn-outline-secondary';
        }
    }

  return (
    <button
      ref={ref}
      className={highlightCorrect()}
      onClick={() => onAnswer(position)}
    > {answer}</button>
  );
});