[![Gitter](https://badges.gitter.im/JoinChat.svg)](https://gitter.im/linnovate/mean?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# [![MEAN Logo](http://mean.io/wp-content/themes/twentysixteen-child/images/meanlogo.png)](http://mean.io/) MEAN<sup>2</sup>

#### The Full Stack Javascript Framework.

MEAN started out as a combination of MongoDB, ExpressJS, AngularJS and Node.js.   
With <strong>MEAN<sup>2</sup></strong> we are providing the ability to mix and match additional frontend frameworks, databases and technologies.
We aim to create a robust, flexible and scalable full-stack javascript solution.

The default MEAN stack you get out of the box can work with either Angular or React and is built with the following technologies...

* [Node.js](https://nodejs.org/en/)
* [Angular4 web starter](https://github.com/AngularClass/angular-starter)
* [MongoDB](https://www.mongodb.com)
* [Express](https://expressjs.com/)
* [Innograph](https://github.com/linnovate/innograph) (uses GraphQL for schema standartization)
* [Bit](https://bitsrc.io/) - (Manages js components, services and schemas)

If you're looking for the classic angular-1.x version of mean, it has moved to this [1.x branch](https://github.com/linnovate/mean/tree/1.x). 

## Prerequisite Technologies

* [Git](https://git-scm.com/downloads)
* [MongoDB](https://www.mongodb.org/downloads)
* [Node 6.x](https://nodejs.org/en/download/)
* npm 3.x ( or yarn)

> If you have an older version of Node.js and NPM, you can use Node Version Manager [NVM](https://github.com/creationix/nvm) to use multiple node versions on your system. MEAN<sup>2</sup> only supports Node 6.x or higher versions.

## Installation

To start your application with MEAN, you need to clone the base MEAN repository from Github. This repository contains all the packages, modules and also a sample code base in order to start and make it easy to develop your application. Following the steps below will guide you to install the latest MEAN version.

```
git clone --depth 1 https://github.com/linnovate/mean.git  
cd mean
npm install  
npm start  
```
If all the packages and modules installed successfully, your default web browser will open and you can see the default MEAN application at `http://localhost:3000`. This is the default port unless you change that manually.

## Additional Tools used in MEAN

* [Mongoose](http://mongoosejs.com/)
* [Bootstrap](http://getbootstrap.com/)
* [Karma](https://karma-runner.github.io/1.0/index.html)
* [Protractor](http://www.protractortest.org/#/)
* [Jasmine](https://jasmine.github.io/)
* [Istanbul](https://istanbul.js.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Webpack](https://webpack.js.org/)

## Debugging in VSCode

Steps:

> Launch the debugger twice, the first time will run the mongo server and open up localhost in the browser
