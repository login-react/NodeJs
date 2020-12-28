const shopCarModal = require("../models");
class ShopCarService {
  // 添加购物车
  async createCar(body) {
    let params = {
      ...body,
      uniUserId: 36,
    };
    return await shopCarModal.uniCar.create(params);
  }
  // 购物车 新添加的 排序在前面
  // 一对多  且 多个购物车的内容按时间排序
  async findAllShopCar(id) {
    return await shopCarModal.uniUser.findAll({
      where: { id },
      order: [[shopCarModal.uniCar, "createdAt", "DESC"]],
      include: [shopCarModal.uniCar],
    });
  }
}
module.exports = new ShopCarService();
