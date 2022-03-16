[![CircleCI](https://circleci.com/gh/suricat89/nlw-heat-front/tree/master.svg?style=shield)](https://circleci.com/gh/suricat89/nlw-heat-front/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/suricat89/nlw-heat-front/badge.svg?branch=master)](https://coveralls.io/github/suricat89/nlw-heat-front?branch=master)

# NLW Heat Front

React Frontend developed during Rocketseat NLW#Heat event.

It's a simple app where users can send messages and see it in a feed-like page being updated in real time.

It has the following features:
- Github OAuth and easy user registration using just Github data
- Socket communication for real time update on listeners when a message is received

## Tech Stack
- Typescript
- Sass
- Socket.io
- React Testing Library (with 100% coverage!)

## Check it out!
https://suricat-nlw-heat-front.herokuapp.com/

## How to run it

First you must create a Github OAuth app following [these instructions](https://github.com/suricat89/nlw-heat-api#creating-github-oauth-apps)

Create the .env file using the example one
```bash
cp .env.example .env
```

Edit the env file and replace the API Base URL with your local API address.

The `REACT_APP_GITHUB_CLIENT_ID` should be the same as the API's `WEB_GITHUB_OAUTH_ID` env value.

After everything is set, run your API locally following [these instructions](https://github.com/suricat89/nlw-heat-api#how-to-run-it).

Install app packages and execute it:
```bash
nvm use 14
npm install

# run it in production mode
npm run build
serve -s build

# OR run in development mode
npm start
```
