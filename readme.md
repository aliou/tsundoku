# Tsundoku

> The act of leaving a book unread after buying it, typically piled up together
> with other such unread books.

## Installation

```sh
$ git clone <repo-url> # Clone the repo.
$ cd tsundoku
$ npm install          # Install Node.JS dependencies
$ bower install        # Install front-end dependencies
$ gulp serve           # Run the application on the default port.
```

## Project Structure
```
.
├── Procfile                       <- List of processes run by Heroku.
├── app/                           <- Node.JS application.
│   ├── api                        <- API related modules
│   │   └── books                  <- Book module
│   │       ├── book.controller.js <- Book controller
│   │       ├── book.model.js      <- Book model
│   │       └── index.js           <- Book routes definition
│   └── server.js                  <- Node.JS main script.
├── node_modules/                  <- Node.JS dependencies.
├── gulpfile.js                    <- Gulp tasks.
├── package.json                   <- Node.JS dependencies.
├── public/                        <- Static files.
│   ├── css/                       <- Style files.
│   ├── dist/                      <- Minified JS and CSS files.
│   ├── js/                        <- JS files / Angular app.
│   ├── vendor/                    <- Bower deps.
│   └── index.html                 <- Application entry point.
└── readme.md                      <- This file.
```

## Environment

In the `.env.sample` file are the environment variable needed to run this
project. They are:
* `PORT`: The port to run the Node.JS application on. By default 3000.
* `MONGOHQ_URL`: The URL of the MongoDB database we are using.
* `GOODREADS_KEY`: Goodreads API key.
* `GOODREADS_SECRET`: Goodreads API secret.

## Download and save sample data
In the folder [`app/db/`](app/db) are two scripts to download and save sample
data. To use them run:

```sh
# This will download book data in a JSON file.
$ node app/db/download_data.js

# This will load the JSON and save the books in the Mongo database.
$ node app/db/save_data.js
```
