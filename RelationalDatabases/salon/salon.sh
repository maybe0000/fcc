#! /bin/bash
PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

MAIN_MENU () {
  # If a string is passed, print it
  if [[ $1 ]];
  then
    echo -e "\n$1"
  fi

  # Show a list of available services
  AVAILABLE_SERVICES=$($PSQL "select service_id, name from services order by 1;")

  echo "$AVAILABLE_SERVICES" | while read SERVICE_ID BAR NAME
    do
      echo "$SERVICE_ID) $NAME"
    done
  
  # Go to the menu to select a service
  SERVICE_MENU
}

SERVICE_MENU () {
read SERVICE_ID_SELECTED

 # if input is not a number
if [[ ! $SERVICE_ID_SELECTED =~ ^[0-9]+$ ]];
then
  # send to main menu
  MAIN_MENU "That is not a valid number."
else
  # get service availability
  SERVICE_AVAILABILITY=$($PSQL "SELECT service_id FROM services WHERE service_id = $SERVICE_ID_SELECTED")
fi
  # if not available
  if [[ -z $SERVICE_AVAILABILITY ]];
  then
    MAIN_MENU "Sorry, that service doesn't exist."
  else  
    SERVICE_NAME=$($PSQL "select name from services where service_id=$SERVICE_ID_SELECTED")
  fi
}

echo -e "\n~~~~~ Salon ~~~~~\n"
echo -e "\n~~~ Please choose a service from the available services ~~~\n"

MAIN_MENU

echo -e "\nWhat's your phone number?"
read CUSTOMER_PHONE
CUSTOMER_NAME=$($PSQL "select trim(name) from customers where phone='$CUSTOMER_PHONE'")

if [[ -z $CUSTOMER_NAME ]];
then
  echo -e "What's your name?"
  read CUSTOMER_NAME
  INSERT_NEW_CUSTOMER=$($PSQL "insert into customers (phone,name) values ('$CUSTOMER_PHONE','$CUSTOMER_NAME')")
fi

echo -e "\nWhen do you want to come?"
read SERVICE_TIME
CUSTOMER_ID=$($PSQL "select customer_id from customers where phone='$CUSTOMER_PHONE' and name=trim('$CUSTOMER_NAME')")
INSERT_NEW_APPOINTMENT=$($PSQL "insert into appointments (customer_id, service_id, time) values ($CUSTOMER_ID, $SERVICE_ID_SELECTED, '$SERVICE_TIME')")
echo -e "\nI have put you down for a $SERVICE_NAME at $SERVICE_TIME, $CUSTOMER_NAME."

   
