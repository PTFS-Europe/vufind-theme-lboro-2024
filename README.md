# vufind-theme-lboro-2024
Theme for the Loughborough VuFind system

## Building with gulp
To build with gulp, you'll need Node.js installed locally. On Darwin machines, run:
```
brew doctor
brew update
brew install node
```

Once `node` is installed, you can install the dependencies with:
```
npm --only=dev install
npm install
```

Lastly, you can run the following to build the css:
```
## if you want to build once
gulp less

## if you want to follow along
gulp less-watch
```
