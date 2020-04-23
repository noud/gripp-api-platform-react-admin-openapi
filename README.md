# [React](https://reactjs.org) [Admin](https://marmelab.com/react-admin) [JWT Authenticated](https://jwt.io) [REST](https://en.wikipedia.org/wiki/REST) [JSON-LD](https://json-ld.org) conform [OpenAPI](https://swagger.io/specification) to [API v3](https://api.gripp.com/public/api3.php) from [Gripp.com](https://www.gripp.com)

![React Admin REST to Gripp API](./docs/gripp_client_react_admin.png?raw=true "React Admin REST to Gripp API")

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/noud/gripp_api/master/LICENSE)
[![master](https://img.shields.io/badge/current-dev-aa11ff.svg)](https://github.com/noud/react-admin-rest-gripp/releases)

Demonstrate [API-First](https://swagger.io/resources/articles/adopting-an-api-first-approach/) development to facilitate a [Rapid-application development (RAD)](https://en.wikipedia.org/wiki/Rapid_application_development) process.

## Provisioning

For instance use an existing Docker workspace. :
```bash
cd laradock && docker-compose exec --user=laradock workspace bash
```
Provision the application with JavaScript Node.js NPM & YARN packages.:
```bash
cd gripp_client_react_admin && bin/provision.sh
```
Console output will tell you the server address.:
```bash
Compiled successfully!

You can now view gripp-admin in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.20.0.6:3000/
```
Add this Your Network url to your [Gripp Symfony](https://github.com/noud/gripp_symfony/blob/master/README.md) .env.local file.:
```bash
CORS_ALLOW_ORIGIN=^http://172.20.0.6(:[0-9]+)?$
```
## Usage


Browse to the login screen:
```bash
/opt/google/chrome/chrome http://172.20.0.6:3000/
```
You will be prompted for your credentials:

![Login](./docs/gripp_client_react_admin_login.png?raw=true "Login")

The username demo and password demo will do.

## Developing

Feel free to contribute.

## Tools

Created with [React in Eclipse](https://www.genuitec.com/tech/react-in-eclipse) ([Eclipse Marketplace](https://marketplace.eclipse.org/content/react-codemix))   
[Eclipse](https://www.eclipse.org/) is free open-source project that grows with your contributions.