# XMeme

*This mini-project is completed under **Crio Winter of Doing** in **Stage 2 Phase-B***

## Description

A web application to handle creating or updating Memes.  


## Technology Stack Used

-> HTML, CSS, Javascript on frontend.  
-> Nodejs, Expressjs, Typescript on backend.  
-> Postgresql (Typeorm) for database.  
-> Dockerised web application.

## Scripts

*Configured mainly for Ubuntu.*

    install.sh
    -> Installs the necessary dependancies. 

    server_run.sh
    -> Building & running the server. 
        Server runs at port 8081.
        Server API Documentation (Swagger) run at port 8080

    test_server.sh
    -> Testing script provided by Crio.

    sleep.sh
    -> Sleeps for given seconds before starting server.


## To Get Started

* You can run `install.sh` if you dont have the dependancies for this project.  

* Running `server_run.sh` builds the server files & runs it.

    [http://localhost:8081](http://localhost:8081) serves the web application.  
    [http://localhost:8080/swagger-ui](http://localhost:8080/swagger-ui) serves the API documentation for the same.

## Development

* Make sure you have nodejs setup.
* Populate `.env` file referencing from `sample.env`
* Start up the development server using `yarn run dev`
* Build your application by `yarn build` & start by `yarn start`
