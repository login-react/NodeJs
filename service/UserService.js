const userModal = require("../models");
class UserService {
  async AddUser(body) {
    const { name } = body;
    return await userModal.user.create({
      name,
    });
  }
}
module.exports = new UserService();
