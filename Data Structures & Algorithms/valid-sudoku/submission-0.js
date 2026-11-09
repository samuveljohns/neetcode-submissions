class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
const cols = Array.from({ length: 9 }, () => new Set());
const squares = Array.from({ length: 9 }, () => new Set());

    for(let i = 0 ;i<9 ; i++){
        for(let j=0; j<9; j++){
            if(board[i][j] ==="."){
                continue;
            }
            // Find if duplicate number exist in rows
            if(rows[i].has(board[i][j])){
                return false
            }else{
                rows[i].add(board[i][j])
            }
            // Find if duplicate number exist in columns
            if(cols[j].has(board[i][j])){
                return false
            }else{
                cols[j].add(board[i][j])
            }
            // Find if duplicate number exist in sub square
            const square = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if(squares[square].has(board[i][j])){
                return false
            }else{
                squares[square].add(board[i][j])
            }
            


        }
    }
    return true

    }
}
