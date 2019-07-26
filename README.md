## MICHAELIHWANG.COM
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

All in all, the website is built from the grounds up using `ReactJS`, `CSS`, and `GitHub Pages`. No added React/JavaScript frameworks.

## React
### Version
* [react](https://github.com/facebook/react): 16.8.6

### React Dependencies
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome): 0.1.4
* [@fontawesome/fontawesome-svg-core](https://github.com/FortAwesome/react-fontawesome): 1.2.19
* [@fontawesome/free-brands-svg-icons](https://github.com/FortAwesome/react-fontawesome): 5.9.0
* [@fontawesome/free-solid-svg-icons](https://github.com/FortAwesome/react-fontawesome): 5.9.0

## Preliminaries
I've created and set the default branch as `dev`. This is because Personal GitHub Pages must be sourced from the `master` branch. This is the underlying reason why there are two branches to this repository: `master` and `dev`. I do all of my work on the `dev` branch and deploy the updates to `master` (more on that below).

## Installation
I prefer to use yarn over npm. On the Terminal, run `yarn` to install all dependencies:

`$ yarn`

## Running
To run and test the React App, go to Terminal and run:

`$ yarn start`

This will open up the default browser and the compiled React App. Changes in the code, once saved to file, is seen immediately on the browser. This is one of the reasons why I love React and Web Development!

## Deployment
When ready, take the following steps to deploy to GitHub Pages:

**1.** Install the `gh-pages` package via yarn. On the Terminal, run:

`$ yarn add gh-pages`

**2.** Add the following line of code to `package.json` in the project repository:

```
{
...
"homepage": "https://michaelihwang.com"
...
}
```
*Note: Without the custom domain, it would otherwise be `"homepage": "https://michaelihwang.github.io"`.*

**3.** Finally, add the following scripts to the `package.json`:

```
"scripts": {
  "predeploy": "yarn run build",
  "deploy": "gh-pages -b master -d build",
  ...
},
```

**4.** Deploy the website by running `yarn deploy` on the Terminal:

`$ yarn deploy`

*Note: This command will deploy the build to `master` branch of the project repository. Recall that my default branch is configured to the `dev` branch and that I do all of my development work there. Make sure that you have a separate branch from the `master` branch if building a personal GitHub Page Website. Otherwise, the command will overwrite the `master` branch's contents with the build of the React App, removing all files pre-deployment. This happened to me and had to use `git reset --hard` to recover the source files. Great learning experience!*

**5.** Go to the project repository's Setting and provide your custom domain. In my case, it's michaelihwang.com

**6.** Finally, create a file called `CNAME` in the project's root repository. It should your custom domain as its content:
```
michaelihwang.com
www.michaelihwang.com
```

**7.** DONE!

## License
MIT License Copyright © 2019 Michael Hwang
