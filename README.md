# vufind-theme-lboro-2024
Theme for the Loughborough VuFind system

## Setting up your environment
In order to edit this theme, it needs to exist within a VuFind themes directory. This is so gulp can properly build the CSS.
The best way to achieve this is to clone a copy of VuFind. To do this, you can run the following commands:
```
cd /path/to/your/preferred/folder
git clone https://github.com/vufind-org/vufind.git ./vufind
cd ./vufind
git checkout -b release-9.1 --track origin/release-9.1 ## to get VuFind 9.1
```

Once you have a copy of the VuFind cloned locally, we can then add this repository as a submodule, under the themes directory:
```
cd /path/to/your/vufind/clone
cd themes/
git submodule add git submodule add https://github.com/PTFS-Europe/vufind-theme-lboro-2024.git ./vufind-theme-lboro-2024
```

This will create a new subdirectory in the themes directory, called `vufind-theme-lboro-2024`. We can now cd into this directory:

```
cd /path/to/your/vufind/clone
cd themes/vufind-theme-lboro-2024/
git status
> On branch main
> Your branch is up to date with 'origin/main'.
> 
> nothing to commit, working tree clean
git remote -v
> origin	https://github.com/PTFS-Europe/vufind-theme-lboro-2024.git (fetch)
> origin	https://github.com/PTFS-Europe/vufind-theme-lboro-2024.git (push)
```

Now we have the repository cloned, we can move on to building with gulp.

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
