#!/usr/bin/env sh
npm install
node_modules/.bin/create-react-app gripp-admin
cd gripp-admin && yarn add @api-platform/admin@0.6.2
cd .. && bin/edited.sh
cd gripp-admin && yarn start