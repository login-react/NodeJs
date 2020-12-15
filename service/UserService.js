const userModal = require("../models");
class UserService {
  async AddUser(body) {
    const { name } = body;
    return await userModal.user.create({
      name,
    });
  }
  /**
   * 随机验证码
   */
  getValidCode() {
    return Math.floor(Math.random() * (9999 - 1000)) + 1000;
  }

  /**
   * 根据验证码 进入商城
   */
  async uniUserLogin(body) {
    const { phone, code, nickName } = body;
    return await userModal.uniUser.create({
      phone,
      code,
      nickName,
    });
  }
  async getByUserId(body) {
    const { id } = body;
    console.log("id :>> ", id);
    return await userModal.uniUser.findAll({ where: { id } });
  }
}
module.exports = new UserService();
