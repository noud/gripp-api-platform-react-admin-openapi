#!/usr/bin/env sh
rm -r gripp-admin
rm -r node_modules package-lock.json yarn.lock
npm install
node_modules/.bin/create-react-app gripp-admin

cd gripp-admin
rm -r node_modules package-lock.json yarn.lock
yarn add @api-platform/admin@^0.6.2

cd .. && bin/edited.sh
cd gripp-admin && npm install && npm update && npm audit fix && yarn install && yarn start