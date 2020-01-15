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
            console.log(tmpArray);
            if (!this.MT.empty(tmpArray)) {
                ( async () => {
                    let elem = tmpArray[tmpArray.length - 1];
                    console.log('URL: ', elem.answer);

                    // await getConnection
                    //   .createQueryBuilder()
                    //   .update(UserSocial)
                    //   .set({balance: () => "'balance' + 5"})
                    //   .execute();
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

                    // await getConnection
                    //   .createQueryBuilder()
                    //   .update(UserSocial)
                    //   .set({balance: () => "'balance' + 10"})
                    //   .execute();
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

                    // await getConnection
                    //   .createQueryBuilder()
                    //   .update(UserSocial)
                    //   .set({balance: () => "'balance' - 20"})
                    //   .execute();
                })();

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
