class Board {
    constructor() {
        this.grid = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
    }
    WelcomeLine() {
        console.log(`Welcome to Tic Tac Toe Game! Current Board: `)
    }

    isGameOver() {

    }

    display() {
        this.printRow(this.grid[0]);
        this.printLine()
        this.printRow(this.grid[1]);
        this.printLine()
        this.printRow(this.grid[2])

    }

    printRow(row) {
        console.log(row.join("  |  "))
    }

    printLine() {
        console.log("------------")
    }



    //LOGIC
    checkDiagonal() {
        if (this.grid[0][0] === "X" && this.grid[1][1] === "X" && this.grid[2][2] === "X") {
            console.log("Congratulations, Player One! X wins!")
        } else if (this.grid[0][0] === "O" && this.grid[1][1] === "O" && this.grid[2][2] === "O") {
            console.log("Congratulations, Player Two! O wins!")
        } else if (this.grid[2][0] === "O" && this.grid[1][1] === "O" && this.grid[0][2] === "O") {
            console.log("Congratulations, Player Two! O wins!")
        } else if (this.grid[2][0] === "X" && this.grid[1][1] === "X" && this.grid[0][2] === "X") {
            console.log("Congratulations, Player One! X wins!")
        }
    }

    checkHorizontal() {
        if (this.grid[0][0] === "X" && this.grid[0][1] === "X" && this.grid[0][2] === "X") {
            console.log("Congratulations, Player One! X wins!")
        } else if (this.grid[0][0] === "O" && this.grid[0][1] === "O" && this.grid[0][2] === "O") {
            console.log("Congratulations, Player Two! O wins!")
        } else if (this.grid[1][0] === "O" && this.grid[1][1] === "O" && this.grid[1][2] === "O") {
            console.log("Congratulations, Player Two! O wins!")
        } else if (this.grid[1][0] === "X" && this.grid[1][1] === "X" && this.grid[1][2] === "X") {
            console.log("Congratulations, Player One! X wins!")
        } else if (this.grid[2][0] === "O" && this.grid[2][1] === "O" && this.grid[2][2] === "O") {
            console.log("Congratulations, Player Two! O wins!")
        } else if (this.grid[2][0] === "X" && this.grid[2][1] === "X" && this.grid[2][2] === "X") {
            console.log("Congratulations, Player One! X wins!")
        }
    }


    checkColumnsWinsbyX() {
        if (this.grid[0][0] === "X" && this.grid[1][0] === "X" && this.grid[2][0] === "X") {
            console.log("Congratulations, Player One! X wins!")
        } else if (this.grid[0][1] === "X" && this.grid[1][1] === "X" && this.grid[2][1] === "X") {
            console.log("Congratulations, Player One! X wins!")
        } else if (this.grid[0][2] === "X" && this.grid[1][2] === "X" && this.grid[2][2] === "X") {
            console.log("Congratulations, Player One! X wins!")
        }
    }
    player1(res) {
        switch (res) {
            case 1:
                this.grid[0][0] = "X"
                break;
            case 2:
                this.grid[0][1] = "X"
                break;
            case 3:
                this.grid[0][2] = "X"
                break;
            case 4:
                this.grid[1][0] = "X"
                break;
            case 5:
                this.grid[1][1] = "X"
                break;
            case 6:
                this.grid[1][2] = "X"
                break;
            case 7:
                this.grid[2][0] = "X"
                break;
            case 8:
                this.grid[2][1] = "X"
                break;
            case 9:
                this.grid[2][2] = "X"
                break;

            default:
                console.log("Invalid move, try again.")
        }
    }

    player2(res) {
        switch (res) {
            case 1:
                this.grid[0][0] = "O"
                break;
            case 2:
                this.grid[0][1] = "O"
                break;
            case 3:
                this.grid[0][2] = "O"
                break;
            case 4:
                this.grid[1][0] = "O"
                break;
            case 5:
                this.grid[1][1] = "O"
                break;
            case 6:
                this.grid[1][2] = "O"
                break;
            case 7:
                this.grid[2][0] = "O"
                break;
            case 8:
                this.grid[2][1] = "O"
                break;
            case 9:
                this.grid[2][2] = "O"
                break;

            default:
                console.log("Invalid move, try again.")
        }
    }

    checkColumsWinsbyO() {
        if (this.grid[0][0] === "O" && this.grid[1][0] === "O" && this.grid[2][0] === "O") {
            console.log("Congratulations, Player Two! O wins!")
        } else if (this.grid[0][1] === "O" && this.grid[1][1] === "O" && this.grid[2][1] === "O") {
            console.log("Congratulations, Player Two! O wins!")
        } else if (this.grid[0][2] === "O" && this.grid[1][2] === "O" && this.grid[2][2] === "O") {
            console.log("Congratulations, Player Two! O wins!")
        }
    }



    isValidMove(posititon) {
        if (typeof res != number) {
            console.log("Invalid move, try again.")
        }
    }

    checkWin() {
        this.checkDiagonal()
        this.checkHorizontal()
        this.checkColumnsWinsbyX()
        this.checkColumsWinsbyO()
    }

    play() {
        console.log("Welcome to Tic Tac Toe!")
        board.display()
        const result = this.playerMove()
        while (!this.NoWinner()) {
        this.player1(result)
        board.display()
    }
    }

    NoWinner() {
        if (!this.checkWin()) {
            return false;
        } else {
            return true;
        }
    }
}

let readlineSync = require('readline-sync');



let board = new Board()
board.WelcomeLine()
board.display()

for (let i = 0; i <= 9; i++) {
  if (true) {
    board.checkWin()
    let coordResponse = readlineSync.question('Player X goes first. Where do you want you X at? ');
    console.log("You chose: " + coordResponse);
    board.player1(parseInt((coordResponse)))
    console.log(`This is the current board`)
    board.display()
    let coordResponse2 = readlineSync.question('Player O goes first. Where do you want you O at? ');
    board.player2(parseInt((coordResponse2)))
    board.display()


  }
}
board.checkWin = 1
console.log(!board.checkWin())





    theBoard.display()

