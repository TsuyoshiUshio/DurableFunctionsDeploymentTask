import tl = require('vsts-task-lib/task');
import trm = require('vsts-task-lib/toolrunner');
import request = require('request');

export class DeployReadyCommand {
    endpoint : string
    serverURI : string;

    constructor() {
        this.endpoint = tl.getInput('deisService');
        this.serverURI = tl.getEndpointUrl(this.endpoint, true);
    }

    exec() {

        var headers = {
            'Content-Type':'application/json'    
        }
        
        var options = {
            url: this.serverURI,
            method: 'GET',
            headers: headers,
            json: true
        }

        request(options, function (error, response, body) {
            if (error != null) {
                tl.setResult(tl.TaskResult.Failed, error);
            } else {
            //    let bodyJson = JSON.parse(body)
            if (body.hasRunning) {
                tl.setResult(tl.TaskResult.Failed, "Staging slot has running activities");
            } else {
                tl.setResult(tl.TaskResult.Succeeded, "Staging slot doen't have running activity. Ready to deploy your app!");
            }
            }
        })
    }
}
let command = new DeployReadyCommand();
command.exec();
