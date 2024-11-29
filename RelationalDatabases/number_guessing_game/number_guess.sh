#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

echo "Enter your username: "

read USERNAME

USERNAME_DB=$($PSQL "select username from games where username='$USERNAME';")

if [[ -z $USERNAME_DB ]];
then
  echo "Welcome, $USERNAME! It looks like this is your first time here."
  INSERT_NEW_USER=$($PSQL "insert into games (username,games_played,best_game) values ('$USERNAME',0,null);")
else
  GAMES_PLAYED=$($PSQL "select games_played from games where username='$USERNAME';")
  BEST_GAME=$($PSQL "select best_game from games where username='$USERNAME';")
  echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
fi

SECRET_NUMBER=$((RANDOM % 1000 + 1))
# echo $SECRET_NUMBER

counter=1;

# set games_played to games_played+1
UPDATE_GAMES_PLAYED=$($PSQL "update games set games_played=games_played+1 where username='$USERNAME';")

echo "Guess the secret number between 1 and 1000:"

while :; do
    read NUMBER

    # Break condition
    if [[ $NUMBER -eq $SECRET_NUMBER ]]; then
        if [[ $counter -lt $BEST_GAME || -z $BEST_GAME ]]; then
          UPDATE_BEST_GAME=$($PSQL "update games set best_game=$counter where username='$USERNAME';")
        fi
        echo "You guessed it in $counter tries. The secret number was $SECRET_NUMBER. Nice job!"
        break
    fi

    if [[ ! "$NUMBER" =~ ^[0-9]+$ ]];
    then
      echo "That is not an integer, guess again:"
    elif [[ $NUMBER -lt $SECRET_NUMBER ]]; 
    then
      echo "It's higher than that, guess again:"
    elif [[ $NUMBER -gt $SECRET_NUMBER ]]; 
    then
      echo "It's lower than that, guess again:"
    fi

    ((counter++))

done

