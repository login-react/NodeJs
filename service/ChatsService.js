const chatsModal = require("../models");
class chatsService {
  // 添加购物车
  async crateChats(body) {
    console.log("body :>> ", body);
    let params = {
      ...body,
    };
    return await chatsModal.uniChat.create(params);
  }
  async findChats() {
    try {
      // 单个表排序查询
      return await chatsModal.uniChat.findAll({
        order: [["createdAt", "DESC"]],
      });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }
}
module.exports = new chatsService();
