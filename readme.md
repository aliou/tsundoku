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
├── Procfile           <- List of processes run by Heroku.
├── app/               <- Node.JS application.
│   └── server.js      <- Node.JS main script.
├── node_modules/      <- Node.JS dependencies.
├── gulpfile.js        <- Gulp tasks.
├── package.json       <- Node.JS dependencies.
├── public/            <- Static files.
│   ├── css/           <- Style files.
│   ├── dist/          <- Minified JS and CSS files.
│   ├── js/            <- JS files / Angular app.
│   ├── vendor/        <- Bower deps.
│   └── index.html     <- Application entry point.
└── readme.md          <- This file.
```

## Environment

In the `.env.sample` file are the environment variable needed to run this
project. They are:
* `PORT`: The port to run the Node.JS application on. By default 3000.
* `MONGOHQ_URL`: The URL of the MongoDB database we are using.
* `GOODREADS_KEY`: Goodreads API key.
* `GOODREADS_SECRET`: Goodreads API secret.
