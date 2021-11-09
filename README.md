# Test assignment: Flask + React + Nginx  

This repository contains a simple test task on full stack development (design layouts were provided). 

The idea of the assignment is to read data from the CSV file, that contains 1000 company records, on the backend,
and provide API endpoint that will enable filtering the companies by name, as well as enable pagination.

The backend API is made with Python + Flask and contains a single endpoint `GET /api/search` which accepts three 
query parameters:
- `name` - a term for filtering the companies
- `page` - an number identifying the desired page (defaults to 1)
- `limit` - a positive number identifying the desired quantity of elements per page (defaults to 10)

The API requires no authentication.

The frontend is made with React.js + Typescript and Nginx is used to proxy the requests to both the backend and 
the frontend and make them both available under a single domain name (`localhost`).

### Running the files

The configs provide two types of execution:
- **development mode** - all services will run in development mode, enabling debugging and quick reload;
- **production mode** - all services will run in a close-to-production mode.

You will need to install the following software to run the system locally:
- docker (https://docs.docker.com/engine/install/)
- docker-compose (https://docs.docker.com/compose/install/)

The service requires that port `80` (HTTP) is available in the host system. 

#### Running in development mode

Navigate to the root folder containing the project files, and run the command

`docker-compose -f docker-compose.dev.yml up`

to start the services in the development mode.

You can then navigate to `http://localhost/` in your browser to see the app.

Internal web servers of Flask (in the backend) and React.js (in the frontend) are used to service the application. 
That also means that when you change the code on either the frontend or the backend app, it will be applied immediately
(you might need to refresh the browser page to see the frontend changes).

#### Running in production mode

Navigate to the root folder containing the project files, and run the command

`docker-compose -f docker-compose.prod.yml up -d`

to start the services in the production mode.

The production mode creates static build for the frontend code, which is then served by Nginx. 
Gunicorn is used as a backend server.

You can then navigate to `http://localhost/` in your browser to see the app.

To stop the containers, run the following command: `docker-compose down`

### Notes

Please note, that the assignment was time-limited and did not require to create any tests, therefore only 
the initial test, created by `create-react-app` is available in the project files.
