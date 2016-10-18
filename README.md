# Google Fonts + 日本語 早期アクセス (Jekyll prototype branch)

As Google makes progress on supporting Japanese web typography, we invite designers and developers to experiment with these Japanese web fonts now available from Google Fonts Early Access.

This branch contains an unmaintained prototype version of the site that was built using Jekyll. If you’re looking to contribute to the project, please review [master](https://github.com/googlefonts/japanese/tree/master) and the main [CONTRIBUTING guide](https://github.com/googlefonts/japanese/blob/master/CONTRIBUTING.md).

## Getting started

To run this earlier version of the project, clone this project locally by running the following command in your terminal:

```sh
git clone https://github.com/googlefonts/japanese googlefonts-japanese
cd googlefonts-japanese
```

Then, checkout this branch, which contains the Jekyll older version of the site:

```sh
git checkout jekyll
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

## Staging the site

This version of the site was originally setup to be deployed to [Google App Engine](https://cloud.google.com/appengine/). With the App Engine CLI setup, you can publish the site with:

```sh
npm run stage
```

…which will build and run the staging command. Alternatively, use a static site host like [Surge.sh](https://surge.sh) or [GitHub Pages](https://pages.github.com/):

```sh
# Install Surge globally
npm install -g surge

# Build the site
npm run build

# Deploy the site
surge ./build
```

```sh
# Install a gh-pages npm module and CLI
npm install -g gh-pages

# Build the site
npm run build

# Deploy the site
gh-pages --dist ./build
```
