#!/bin/bash

#curl "http://localhost:3000/sign-up" \


API="http://httpbin.org/post"
# API="http://localhost:3000/sign-up"
# API="http://tic-tac-toe.wdibos.com/sign-up/"
E='aaaa'
P='bbbb'
P_C='bbbb'

curl ${API} \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=${E}" \
  --data-urlencode "credentials[password]=${P}" \
  --data-urlencode "credentials[password_confirmation]=${P_C}"


# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
