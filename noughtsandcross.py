#welcome message and what character they'd use

import sys
import random

def board():
    print(row[0:3])
    print(row[3:6])
    print(row[6:])
    sys.exit()

go = 0
game = 1
count = 0


row = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

while game == 1:
    while go != 1:

        move = int(input("Which position do you want to put an x in? "))

        if row[move-1] == " ":
            row[move-1] = "x"
            go = 1
            count = count + 1
        else:
            print("That space has been taken")

        if row[0] == "x" and row[1] == "x" and row[2] == "x":
            print("x wins!")
            board()

        elif row[3] == "x" and row[4] == "x" and row[5] == "x":
            print("x wins!")
            board()

        elif row[6] == "x" and row[7] == "x" and row[8] == "x":
            print("x wins!")
            board()

        elif row[0] == "x" and row[3] == "x" and row[6] == "x":
            print("x wins!")
            board()

        elif row[1] == "x" and row[4] == "x" and row[7] == "x":
            print("x wins!")
            board()

        elif row[2] == "x" and row[5] == "x" and row[8] == "x":
            print("x wins!")
            board()

        elif row[0] == "x" and row[4] == "x" and row[8] == "x":
            print("x wins!")
            board()

        elif row[2] == "x" and row[4] == "x" and row[6] == "x":
            print("x wins!")
            board()

    print(row[0:3])
    print(row[3:6])
    print(row[6:])

    go = 0

    if count == 9:
        print("Game over, it's a draw")
        sys.exit()

    while go != 1:

        move = random.randint(1, 9)
        print("Player 2 has chosen position: ", move)

        if row[move-1] == " ":
            row[move-1] = "o"
            go = 1
            count = count + 1
        else:
            print("That space has been taken")

        if row[0] == "o" and row[1] == "o" and row[2] == "o":
            print("o wins!")
            board()

        elif row[3] == "o" and row[4] == "o" and row[5] == "o":
            print("o wins!")
            board()

        elif row[6] == "o" and row[7] == "o" and row[8] == "o":
            print("o wins!")
            board()

        elif row[0] == "o" and row[3] == "o" and row[6] == "o":
            print("o wins!")
            board()

        elif row[1] == "o" and row[4] == "o" and row[7] == "o":
            print("o wins!")
            board()

        elif row[2] == "o" and row[5] == "o" and row[8] == "o":
            print("o wins!")
            board()

        elif row[0] == "o" and row[4] == "o" and row[8] == "o":
            print("o wins!")
            board()

        elif row[2] == "o" and row[4] == "o" and row[6] == "o":
            print("o wins!")
            board()

    go = 0

    if count == 9:
        print("Game over, it's a draw")
        sys.exit()

    print(row[0:3])
    print(row[3:6])
    print(row[6:])

