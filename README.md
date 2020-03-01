# Readme

Simple boilerplate project for [babylonjs](http://www.babylonjs.com/) using TypeScript and Webpack.

## Install

Install TypeScript (globally):

````
npm install -g typescript
npm link typescript
````

Install dependencies:

````
npm install

````

Additionally, to import `babylonjs` as a TypeScript module, modify `babylon.d.ts` inside
`node_modules` and add the following code at the bottom of the file:

````typescript
export = BABYLON;
````

## Compile & Run 

````
./node_modules/.bin/webpack -w 
````

Then open `index.html`
