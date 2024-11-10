#! /bin/bash

PSQL="psql --username=freecodecamp --dbname=worldcup --no-align --tuples-only -c"

# Do not change code above this line. Use the PSQL variable above to query your database.

echo -e "\nTotal number of goals in all games from winning teams:"
echo "$($PSQL "SELECT SUM(winner_goals) FROM games")"

echo -e "\nTotal number of goals in all games from both teams combined:"
echo "$($PSQL "SELECT SUM(winner_goals)+SUM(opponent_goals) from games")"

echo -e "\nAverage number of goals in all games from the winning teams:"
echo "$($PSQL "SELECT AVG(winner_goals) from games")"

echo -e "\nAverage number of goals in all games from the winning teams rounded to two decimal places:"
echo "$($PSQL "SELECT ROUND(AVG(winner_goals),2) from games")"

echo -e "\nAverage number of goals in all games from both teams:"
echo "$($PSQL "SELECT AVG(winner_goals)+AVG(opponent_goals) from games")"

echo -e "\nMost goals scored in a single game by one team:"
echo "$($PSQL "SELECT MAX(GREATEST(winner_goals,opponent_goals)) from games")"

echo -e "\nNumber of games where the winning team scored more than two goals:"
echo "$($PSQL "SELECT COUNT(*) from games where winner_goals > 2")"

echo -e "\nWinner of the 2018 tournament team name:"
echo "$($PSQL "SELECT t.name from games g left join teams t on g.winner_id = t.team_id where g.round='Final' and year=2018")"

echo -e "\nList of teams who played in the 2014 'Eighth-Final' round:"
echo "$($PSQL "SELECT t.name from games g left join teams t on g.opponent_id = t.team_id where g.round='Eighth-Final' and g.year=2014 union all select t.name from games g left join teams t on g.winner_id = t.team_id where g.round='Eighth-Final' and g.year=2014 order by 1")"

echo -e "\nList of unique winning team names in the whole data set:"
echo "$($PSQL "SELECT distinct t.name from games g left join teams t on g.winner_id = t.team_id order by 1")"

echo -e "\nYear and team name of all the champions:"
echo "$($PSQL "SELECT g.year, t.name from games g left join teams t on g.winner_id = t.team_id where g.round='Final' order by 1")"

echo -e "\nList of teams that start with 'Co':"
echo "$($PSQL "SELECT name from teams where name like 'Co%'")"
