# Early Access type specimen site

<!-- TODO write description based on Omer’s content and then translate. -->

## Getting started

To get started, clone this project locally by running the following command in your terminal:

```sh
git clone https://github.com/kennethormandy/gf-project-1
cd gf-project-1
```

Running this static site locally will require a recent, stable version of [Ruby](https://www.ruby-lang.org/en/) and [Node.js](https://nodejs.org) installed. (Neither Ruby or Node.js are used in production, and you don’t really need to know much beyond these instructions to contribute to the site. A preconfigured version of [Jekyll](https://github.com/jekyll/jekyll) is used as the static site generator. This compiles the Sass files to CSS, and injects the metadata into the Liquid templates and compiles them into HTML.

Node.js comes with [npm](https://npmjs.org), the package manager for JavaScript. It’s used to used to install the project’s dependencies (the other JavaScript libraries and tools listed in the `package.json` file) and development dependencies like Browserify, which packages the JavaScript into a single `index.js` file. You don’t need to write any JavaScript to contribute to this project, but you will need to install the JavaScript dependencies to run the site locally. To do that, run:

```sh
# Install npm dependencies and, afterwards, Ruby gems
npm install
```

## Adding the web fonts

The web fonts are currently included in this repository so the site can be developed locally, but this will likely change once the fonts are all published to [Early Access](https://fonts.google.com/earlyaccess).

## Serving the site

```sh
# Start serving the project with Jekyll
npm start

# Now available at http://localhost:4000
```

## Compiling the site

You can compile the site down to static HTML, CSS, and JavaScript at any point using the following command:

```sh
npm run build
```

This will compile the default `./_site` directory using Jekyll.

## Staging the site to Appspot

<!-- TODO -->

## Deploying the site to production

<!-- TODO

Running the following command will automatically compile the site and publish it to the domain:

```sh
npm run deploy
``` -->
