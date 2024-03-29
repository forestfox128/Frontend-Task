function riddleSolver(board){

    var changed = true
    var currentNumber = 0
    var counter = 0

    putZerosHorizontally = (i,startPoint, numberOfOccurance) => {
        for(let k = startPoint; k >= startPoint - numberOfOccurance + 1; k--){
            board[i][k] = 0;  
            dropNumbersDown(k,i,1);
         }
    }
    putZerosVertically = (i,startPoint, numberOfOccurance) => {
        for(let k = startPoint; k >= startPoint - numberOfOccurance + 1; k--){
            board[k][i] = 0;
         }
         dropNumbersDown(i,startPoint,numberOfOccurance);
    }

    dropNumbersDown = (column, startPoint, numberOfZerosToDrop) => {
        for(let k = startPoint; k >= 0; k--){
            if(k - numberOfZerosToDrop < 0){
                board[k][column] = 0
            }else{
                board[k][column] = board[k - numberOfZerosToDrop][column];
            }
        }
    }

    while(changed){
        changed = false;
        for (let i = 0 ; i < board.length; i++){
            currentNumber = board[i][0];
            counter = 0;
            for (let j = 0 ; j < board[i].length; j++){
                
                if(currentNumber === board[i][j] && currentNumber !== 0){
                    counter++;   
                }
                if(counter >= 3 && (j+1 < board[i].length ? board[i][j+1] !== currentNumber : true)){
                    this.putZerosHorizontally(i,j, counter);
                    changed = true;   
                    counter = 1;
                }
                if(currentNumber !== board[i][j]){
                    counter = 1;
                    currentNumber = board[i][j];
                }
            }
        }

        for (let j = 0 ; j < board[0].length; j++){
            currentNumber = board[0][j];
            counter = 0;
            for (let i = 0 ; i < board.length; i++){
                if(currentNumber === board[i][j] && currentNumber !== 0){
                    counter++;   
                }
                if(counter >= 3 && (i+1 < board.length ? board[i+1][j] !== currentNumber : true)){
                    this.putZerosVertically(j,i, counter);
                    changed = true; 
                    counter = 1;
                }
                if(currentNumber !== board[i][j]){
                    counter = 1;
                    currentNumber = board[i][j];
                }
            }
        }
    }
    return board;
}

module.exports = riddleSolver;
