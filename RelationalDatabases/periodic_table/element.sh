#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=periodic_table --tuples-only --no-align -c"

if [[ -z $1 ]];
then
  echo Please provide an element as an argument.
  exit
fi

if [[ "$1" =~ ^[0-9]+$ ]]; then
  ATOMIC_NUMBER=$($PSQL "select atomic_number from elements where atomic_number=$1;")
else
  ATOMIC_NUMBER=$($PSQL "select atomic_number from elements where symbol='$1' or name='$1';")
fi

if [[ -z $ATOMIC_NUMBER ]]; then
  echo I could not find that element in the database.
  exit
else
  ELEMENT_SYMBOL=$($PSQL "select trim(symbol) from elements where atomic_number=$ATOMIC_NUMBER;")
  ELEMENT_NAME=$($PSQL "select trim(name) from elements where atomic_number=$ATOMIC_NUMBER;")
  ELEMENT_TYPE_ID=$($PSQL "select type_id from properties where atomic_number=$ATOMIC_NUMBER;")
  ELEMENT_TYPE=$($PSQL "select type from types where type_id=$ELEMENT_TYPE_ID;")
  ELEMENT_MASS=$($PSQL "select atomic_mass from properties where atomic_number=$ATOMIC_NUMBER;")
  ELEMENT_MELT_C=$($PSQL "select melting_point_celsius from properties where atomic_number=$ATOMIC_NUMBER;")
  ELEMENT_BOIL_C=$($PSQL "select boiling_point_celsius from properties where atomic_number=$ATOMIC_NUMBER;")
  echo -e "The element with atomic number $ATOMIC_NUMBER is $ELEMENT_NAME ($ELEMENT_SYMBOL). It's a $ELEMENT_TYPE, with a mass of $ELEMENT_MASS amu. $ELEMENT_NAME has a melting point of $ELEMENT_MELT_C celsius and a boiling point of $ELEMENT_BOIL_C celsius."
fi 