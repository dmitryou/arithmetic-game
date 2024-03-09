# Arithmetic web game with React Native

A simple web-based game that asks the user to try and correctly answer arithmetic questions as fast as possible.

## Backend for this application is Python server runned with poetry

1. Use backend/arithmetic_web_game.zip file to extract and run server in python:
   Use README.md from the folder to run python server.
  
2. After sucessful instalation open it on local host in browser, usually:  http://localhost:8080/

### Install React Native dependencies:
1. node modules:
  ```
  npm install
  ```
2. run on IOS:
  ```
  npm run ios
  ```
### Future improvements and Mobile App refactoring that I haven't complited

1. Add navigation module to navigate between Intro and Game screens
2. Move game logic into Redax state
3. Add http service to handle axios calls through dispatch and not from useEffect
4. UX and UI improvements with animations


## Server side refactoring
1. Save Leaderboard, for best Scores (show best score and statistics)
2. Improve game logic and not to finish on wrong answer(maybe someone wrong with 1 answer after 45 correct answers and answer 50 more answers so his total score 94 correct/ 1 wrong)
3. Game exit button instead quit word
4. Quit word Case sensetive to work with : QUIT,Quit,quit
5. If we want to leave only mobile version of the game, we need to remove static and templates folders from the server side.
6. I don't see any logic that should be moved from server side, since we have sessions and potensially many parallel users. However if this game only for user himself and not for multiple users and leaderboards, whole game logic could be moved into the mobile app, and you could store scores in local storage. In such case it's could be mobile app without server side.

