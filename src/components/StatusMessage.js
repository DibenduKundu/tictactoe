import React from 'react';

const StatusMessage = ({ winner, current }) => {
   const noMoveLest = current.board.every(el=>el !==null);
   
   
    return (
        <div className="status-message">
           {winner && (
           <>
           winner is{' '}
            <samp className={winner === 'X' ? 'text-green' : 'text-orange'}>
               {winner}
            </samp>
           </>
           )}
           {!winner && !noMoveLest && (
           <>
           Next player is{' '} 
           <samp className={current.isXNext ? 'text-green' : 'text-orange'}>   
            {current.isXNext ? 'X' : 'O'}{' '}
            </samp>
            </>
           )}
           {!winner && noMoveLest && (
           <>
           <span className="text-green">X</span> and{' '} 
           <span className="text-orange">O</span> tied
           </>
           )}
        </div>
    );
};

export default StatusMessage;
