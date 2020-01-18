const MVLoader = require('mvloader');
const BotHandler = require('botcms-handler');
const CamManagerController = require('./controllers/cammanagercontroller');
const fs = require('fs');
const ExpressHandler = require('express-handler');
const DBHandler = require('db-handler');

class CamManager extends MVLoader {

    promote = false;
    promoteTarget = '';

    constructor (config) {

        let camDefaults = {
            classes: {
                controllers: {
                    CamManagerController: CamManagerController
                },
                handlers: {
                    BotHandler,
                    DBHandler,
                    ExpressHandler
                }
            },
        };

        super(camDefaults, config);

        this.users = JSON.parse(fs.readFileSync('./users.json'));
        this.script = fs.readFileSync('./script.json', 'utf8');
    }

    async init () {
        super.init();
    }

}

module.exports = CamManager;
