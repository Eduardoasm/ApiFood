//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Diets } = require("./src/db.js");
const dietTypesDb = require("../api/src/controllers/diets");

// Syncing all the models at once.
conn
  .sync({ force: false })
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`%s listening at $(process.env.PORT)`); // eslint-disable-line no-console
    });
  })
  .then(() => dietTypesDb.map((e) => Diets.create({ name: e })));
