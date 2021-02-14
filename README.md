# Michael's Personal Website
## Preliminaries
### GitHub Pages
Take a look at [GitHub Pages](https://pages.github.com/) to setup your `username.github.io` repository.

*Note: This guide is made for User/Organization site and not Project site. The procedure for Project Site is slightly different.*

### GitHub Branches
I've created and set the default branch as `dev`. This is because **Personal GitHub Pages must be sourced from the `master` branch.** For that reason, there are two branches to this repository: `master` and `dev`.

I do all of my work on the `dev` branch and deploy the updates to `master` (more on that below).

## Google Analytics
I've added Google Analytics to keep tabs on website visits.

## Deployment

**1.** Install the `gh-pages` package via yarn. On the Terminal, run:

`$ yarn add gh-pages`

**2.** If you have a custom domain, add the following line of code to `package.json` in the project repository:

```
{
...
"homepage": "https://mydomain.com"
...
}
```

*Note: Without the custom domain, add `"homepage": "https://username.github.io"` instead.*

**3.** In addition, add the following scripts to the `package.json`:

```
"scripts": {
  "predeploy": "yarn run build",
  "deploy": "gh-pages -b master -d build",
  ...
},
```

*Note: Notice the script: `"deploy": "gh-pages -b master -d build`. This is pushing the build to the `master` branch. More on that below.*

**4.** Deploy the website by running the following command on the Terminal:

`$ yarn deploy`

*Note: This command will deploy the build to `master` branch of the project repository. Recall that my default branch is configured to the `dev` branch and that I do all of my development work there. **Make sure that you have a separate branch for your source files if building a personal GitHub Page Website.** Otherwise, the command will overwrite the `master` branch's contents with the build of the React App, removing all files pre-deployment. This happened to me and had to use `git reset --hard` to recover the source files. Great learning experience!*

**5.** Go to the project's `Setting` Tab and scroll down to `GitHub Pages` section. Under `Custom domain` input box, provide your custom domain: `mydomain.com`. In my case, it's `michaelihwang.com`.

*Note: Every time you deploy, you have to go back to the Setting Tab and provide your custom domain*

**6.** Finally, create a file called `CNAME` in the project's root repository. It should your custom domain as its content:

```
mydomain.com
www.mydomain.com
```

**7.** DONE! Try going to [michaelihwang.com](michaelihwang.com)!

## License
MIT License Copyright © 2021 Michael Hwang
