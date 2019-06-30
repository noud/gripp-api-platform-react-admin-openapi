# Gripp client React Admin

![Gripp client React Admin](./docs/gripp_client_react_admin.png?raw=true "Gripp client React Admin")

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://raw.githubusercontent.com/noud/gripp_api/master/LICENSE)
[![master](https://img.shields.io/badge/current-dev-aa11ff.svg)](https://github.com/noud/gripp_client_react_admin/releases)

This is a [React](https://reactjs.org/) [Admin](https://marmelab.com/react-admin/) client application that does work with

[Gripp client Symfony](https://github.com/noud/gripp_client_symfony/blob/master/README.md)

and demonstrate [API-First](https://swagger.io/resources/articles/adopting-an-api-first-approach/) development to facilitate a [Rapid-application development (RAD)](https://en.wikipedia.org/wiki/Rapid_application_development) process.

## API

The application consumes:
- [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) with auto generated documentation conform [OpenAPI](https://swagger.io/specification/)
     - [JSON-LD](https://json-ld.org/) for [React](https://reactjs.org/) [Admin](https://marmelab.com/react-admin/)

## Security

The application has a security measure:
- [JWT Authentication](https://jwt.io/) for RESTful API

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
Add this Your Network url to your [Gripp client Symfony](https://github.com/noud/gripp_client_symfony/blob/master/README.md) .env.local file.:
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

The username demo and password demo will do. (The inactive username nodemo and password nodemo will not be allowed to login.) @TODO There is still a snag in the backend ApiUser.

## Developing

Feel free to contribute.

## Tools

Created with [Nodeclipse](https://nodeclipse.github.io/projects/nodejs)
 ([Eclipse Marketplace](https://marketplace.eclipse.org/content/nodeclipsegithubio))   

Eclipse is free open-source project that grows with your contributions.