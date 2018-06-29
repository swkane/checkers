import React from 'react';
import '../App.css';
import Checker from './Checker';

export default class Board extends React.Component {
    state = {
        board: [
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
        ]
      }
    render() {
        return (
            <p className="board-container">
                {
                this.state.board.map( (row, i) => {
                    // alternating check board color scheme
                    let primary, secondary;
                    i % 2 === 0 ? primary = 'light' : primary = 'dark';
                    primary === 'light' ? secondary = 'dark' : secondary = 'light';
                    return row.map((square, j) => 
                        <div className={`square ${j % 2 === 0 ? primary: secondary}`}></div>) 
                })
                }
                <Checker color='teal' />
                <Checker color='blue' />
          </p>
        )
    }
}