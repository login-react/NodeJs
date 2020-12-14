const shopCarModal = require("../models");
class ShopCarService {
  async createCar(body) {
    return await shopCarModal.uniCar.create(body);
  }
  async findAll(body) {
    return await shopCarModal.uniCar.findAll();
  }
}
module.exports = new ShopCarService();
