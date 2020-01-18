
/**
 * @class CammanagerController
 *
 * @property {CamManager} App
 * @property {MVTools} MT
 */

class CammanagerController {

    caption = 'cmCntrl';

    constructor(App) {
        this.App = App;
        this.MT = this.App.MT;
        this.test = (ctx) => {
            console.log('CAM MANAGER BOT TEST METHOD');
            return ctx.Message.text === '+++';
        };

        this.tmplUser = {
            username: 'test',
            full_name: 'test',
            tech_name: 'test',
            last_name: 'test',
            bridge: 'test',
            driver: 'test',
            type: 'test',
            createdon: Date.now()
        };

        this.promoBegin = async (ctx) => {
            let tmpArray = this.MT.extract('answers.promotion', ctx.session);
            if (!this.MT.empty(tmpArray)) {
                ( async () => {
                    let elem = tmpArray[tmpArray.length - 1];
                    console.log('URL: ', elem.answer);
                    let delay = 0;
                    let i = 1;

                    this.App.promote = true;
                    this.App.promoteTarget = elem.answer;

                    setTimeout(() => {
                        this.promote = false;
                        this.promoteTarget = '';
                    }, 60000);
                })();

            }
        };

        this.refill5 = async (ctx) => {
            let tmpArray = this.MT.extract('answers.refill', ctx.session);
            if (!this.MT.empty(tmpArray)) {
                ( async () => {
                    let elem = tmpArray[tmpArray.length - 1];
                    console.log('URL: ', elem.answer);
                    await this.refillFunction(ctx.Message._sender.id, 5);
                })();

            }
        };

        this.refill10 = async (ctx) => {
            let tmpArray = this.MT.extract('answers.refill', ctx.session);
            console.log(tmpArray);
            if (!this.MT.empty(tmpArray)) {
                ( async () => {
                    let elem = tmpArray[tmpArray.length - 1];
                    console.log('URL: ', elem.answer);

                    await this.refillFunction(ctx.Message._sender.id, 10);
                })();
            }
        };

        this.refillNeg20 = async (ctx) => {
            let tmpArray = this.MT.extract('answers.refill', ctx.session);
            console.log(tmpArray);
            if (!this.MT.empty(tmpArray)) {
                ( async () => {
                    let elem = tmpArray[tmpArray.length - 1];
                    console.log('URL: ', elem.answer);

                    await this.refillFunction(ctx.Message._sender.id, -20);
                })();

            }
        };

        this.refillFunction = async(id , amount) => {
            const userSocial = this.App.DB.getRepository('UserSocial');
            const user = await userSocial.findOne({tg_id: id});
            if (user) {
                user.balance+=amount;
                await userSocial.save(user);
            } else {
                await userSocial.save({
                    tg_id: id,
                    balance: amount,
                    ...this.tmplUser
                })
            }
        };

        this.commands = (request, response) => {
            return Promise.resolve().then(() => {
                let result = '';

                console.log(request.headers);
                console.log('PARAMS', request.params);
                console.log('QUERY', request.query);
                if (this.App.promote) {
                    let host = parseInt(this.MT.extract('host', request.query, '').replace('promo', ''));
                    if (host > 0) {
                        let user = this.App.users[host - 1];
                        result = this.App.script;
                        for (let key in user) {
                            if (user.hasOwnProperty(key)) {
                                result = result.replace('{' + key + '}', user[key]);
                            }
                        }
                        result = result.replace('{target}', this.App.promoteTarget);
                    }
                } else {
                    result = '[]';
                }
                response.send(result);
            });
        };


    }
}

module.exports = CammanagerController;
