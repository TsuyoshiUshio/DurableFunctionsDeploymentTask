# Durable Functions Deployment Task

This task enable you to deploy Durable Functions Application safely. 
This task collaborate with Backend server witten by Azure Functions. 
You can find Azure Functions on [TBD]() GitHub account.

# Prerequisite

I use these apps.

* node.js 8.9.x
* typescript 2.8.1

```
npm install -g tfx-cli
npm install -g typescript
```

# Installation 

```
npm install
```

# Develpyment 

## Usage

### compile 

It execute typescript compile. It generate js files.

```
npm run compile
```
### deploy

It deploy js files and copy node_modules into taks directories. If you want to add the directory, please add it to the `deploy.bat`

```
npm run deploy
```

### build

If you want to create a binary of the extension, you can do like this.  Then you can find a binary which you can upload to the market place.

```
npm run compile
npm run deploy
npm run build
```

## memo

For the frist creation, I've did this. 

```
npm install vsts-task-lib --save
npm install @types/node --save-dev
npm install @types/q --save-dev
```

# Reference

[Node CLI for VSTS and TFS](https://github.com/Microsoft/tfs-cli)
[Step by Step: Node Task with Typescript API](https://github.com/Microsoft/vsts-task-lib/blob/master/node/docs/stepbystep.md)
[VSTS tasks](https://github.com/Microsoft/vsts-tasks)



