import React from 'react';

const StatusMessage = ({ winner, current }) => {
   const noMoveLest = current.board.every(el=>el !==null);
   
   
    return (
        <h2>
           {winner && `winner is ${winner}`}
           {!winner && 
           !noMoveLest && 
           `Next player is ${current.isXNext ? 'X' : 'O'}`}
           {!winner && noMoveLest && 'X and O tied'}
           </h2>
    )
};

export default StatusMessage;
