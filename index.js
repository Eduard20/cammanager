const CamManager = require('./src/cammanager');
const MVTools = require('mvtools');

MVTools.readEnv();
MVTools.verboseConsole();

let config = {
    handlers: {
        BotHandler: {
            botcms: {
                requireModule: name => require(name),
                networks: [{name: "tg", token: process.env.TG_TOKEN}],
            },
            schemaFiles: [
                __dirname + '/bot.yml',
            ]
        },
        ExpressHandler: {
            routes: {
                get: {
                    '/commands': 'cmCntrl.commands',
                }
            }
        },
        DBHandler: {
            typeorm: {
                host: process.env.DB_HOST,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                synchronize: true,
                // logging: 'all',
                entities: [
                    MVTools.relativePath(__dirname + '/src/entity/*.js'),
                ]
            }
        },
    }
};

const CM = new CamManager(config);
CM.init();