#!/bin/bash

#curl "http://localhost:3000/sign-up" \


API="http://httpbin.org/post"
#API="http://localhost:3000/sign-up"

curl ${API} \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=${EMAIL}" \
  --data-urlencode "credentials[password]=${PASSWORD}" \
  --data-urlencode "credentials[password_confirmation]=${PASSWORD_CONFIRMATION}"


# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
