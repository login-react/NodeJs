const goodsModal = require("../models");
class UserService {
  async updateGoods(body) {
    return await goodsModal.uniGoods.update(body, { where: { id: body.id } });
  }
  async findById(body) {
    return await goodsModal.uniGoods.findAll({ where: { id: body.id } });
  }
}
module.exports = new UserService();
