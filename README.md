<div align="center">
  <img src="http://imgfz.com/i/TtKsRgJ.png" alt="Responsively Logo" width="50">
  <h1>Sonoro</h1>
   <img src="https://img.shields.io/badge/STATUS-COMPLETE-green">
   <img src="https://img.shields.io/badge/VERSION-2.2v-blue">
   <img src="https://img.shields.io/badge/REALEASE%20DATE-JANUARY-skyblue">


  <h6>A simple and easy to use application in which you create your own sound environment</h6>
</div>

- [Landingpage](http://github.com/touzand/sonoro-client.git)
- [Server side](http://github.com/touzand/sonoro-api.git)

## initial concept

If you're anything like me, whether studying or programming, you always like background noise. Sometimes we just want to listen to the rain, the sound of distant birds singing, the fire of a bonfire, or some lofi hip hop. and occasionally we want to hear particular noises, so we search for a video on YouTube about it; occasionally we find it, occasionally we don't.

Here where Sonoro comes in. You may open Sonoro, put on your headphones, and then immediately begin "configuring" your sound environment whatever you wish.

![Sonoro](http://imgfz.com/i/AUXFNY7.png)

>capture of the 1.3v

You may play with more than 30 different sounds in Sonoro. from wind, rain, and thunder to a zombie apocalypse, a medieval conflict, or a nuclear alert... I know. I'll admit that while looking for sounds, I came across some unusual and fascinating ones that I wanted to include.

## Features
1. Many relaxing sounds and others ... stressful
2. Nice and simple interface

# Development process

#### Figma / keyframes

When this idea occurred, the design of the page came to mind almost immediately. so, as soon as possible, i went to figma and started to solidify the initial concept of Sonoro :

![Keyframes](http://imgfz.com/i/8iEZGeN.png)

after having more or less the initial base finished. and already having an idea of its structure and how it would work, I began to program it.

#### Python - FastAPI

So I started programming the back-end with `Python - FastAPI` while I was searching the internet for sounds to get an idea of which would be good to have on Sonoro and which would not. to give me an idea.

This process of searching for sounds and programming the part of the Sonoro server lasted at least 2 or 3 days. on the fifth day I already had about 15 sounds prepared and the server working

#### React

With this ready, I started programming the client site part with `React` using various additional tools like `React-icons` or `Styled-components` among other things. I use these tools almost in my day to day since they speed up my work a lot when working on the front-end

And this process did not last long thanks to the fact that I already had an idea embodied. I mean the keyframes that I had done in figma days ago. having that visual support of a piece of money, however simple it may be, helps you a lot since you don't waste time thinking about the design when programming the page or its operation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you get started, make sure you have the following installed on your machine:

- Node.js
- npm or yarn

### Installing

To get started, clone the repository to your local machine:

```
$ git https://github.com/touzand/sonoro.git
```

Next, navigate to the project directory and install the dependencies:

```
$ cd ./sonoro
$ npm install or yarn
```

Finally, start the development server:

```
$ npm run dev or yarn run dev
```

This will launch the app in your default web browser at `http://localhost:5173`.
