#!/bin/bash

#curl "http://localhost:3000/sign-up" \


API="http://httpbin.org/post"
# API="http://localhost:3000/sign-up"
# API="http://tic-tac-toe.wdibos.com/sign-up/"
E='aaaa'
P='bbbb'

curl ${API} \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=${E}" \
  --data-urlencode "credentials[password]=${P}" \


# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo


# {
#   "credentials": {
#     "email": "an@example.email",
#     "password": "an example password"
#   }
# }
