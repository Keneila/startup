import React from 'react';

export const TriviaButton = React.forwardRef(({ position, onAnswer, answer, answerTrue, done= false}, ref) => {
    const [doneState, setDoneState] = React.useState(done);
    function highlightCorrect(){
        if (doneState){
        if(answerTrue === answer){
            return 'btn btn-success';
        } else {
            return 'btn btn-danger';
        }
    } else {
        return 'btn btn-outline-secondary';
        }
    }


    React.useImperativeHandle(ref, () => ({
    async press(delayMs = 100) {
      setDoneState(true);
    },
    async finish() {
      setDoneState(false);
    }
  }));

  return (
    <button
      ref={ref}
      className={`${doneState ? highlightCorrect() : 'btn btn-outline-secondary'}`}
      onClick={() => onAnswer(position)}
    > {answer}</button>
  );
});