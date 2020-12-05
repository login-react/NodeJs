const { exec } = require("../db/mysql");
class LoginValid {
  async login(nickname) {
    let sql = `select * from admin where nickname like '%${nickname}%'`;
    let result = await exec(sql);
    return result;
  }
}
module.exports = new LoginValid();
