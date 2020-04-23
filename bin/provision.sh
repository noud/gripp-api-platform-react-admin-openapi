#!/usr/bin/env sh
APP_NAME=gripp-admin

rm -r ${APP_NAME}
rm -r node_modules package-lock.json yarn.lock

npm install
node_modules/.bin/create-react-app ${APP_NAME}

cd ${APP_NAME}
rm -r node_modules package-lock.json yarn.lock

yarn add @api-platform/admin@^0.6.3
# @todo update
# yarn add @api-platform/admin@^1.0.0

cd .. && bin/edited.sh
cd ${APP_NAME}
npm install && npm update && npm audit fix && yarn install && yarn start