【Alice Chatbot】NodeJs with Dialogflow
==================================

API
--------
- `/` : `[GET]` Use to test your connection.
- `/api/` : `[POST]` Expose for Chatbot UI framework to communicate the actions.

Environment Variables
-------- 
- `GOOGLE_PROJECT_ID`: Dialogflow's project ID
- `GOOGLE_CLIENT_EMAIL`: Dialogflow Agent's Client Email
- `GOOGLE_PRIVATE_KEY`: Dialogflow Agent's Private Key

Set up project locally
-------
1. `npm install`: install package
2. `tsc`: compile ts files
3. `node dist\index.js`: run project

Set up through docker
--------
1. `docker build -t NAME .`: build image
2. `docker run -d -t -p 80:80 NAME`: run image

Packages
--------
1. NodeJs
2. Typescript
3. MongoDB
4. Docker

