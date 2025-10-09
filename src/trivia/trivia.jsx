import React from 'react';

export function Trivia() {
  return (
    <main>
      <div className="container text-center">
        <div>
        <h2>Trivia Game</h2>
        <p className="text-center"> Which is the capital of France?</p>
        </div>
        <div className="d-flex justify-content-center">
        <table>
          <tr>
            <td>
              <button className="btn btn-success">
                A. Paris
              </button>
            </td>
            <td>
              <button className="btn btn-outline-secondary">
               B. London
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-outline-secondary">
               C. Berlin
              </button>
            </td>
            <td>
              <button className="btn btn-outline-secondary">
               D. Madrid
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
  );
}