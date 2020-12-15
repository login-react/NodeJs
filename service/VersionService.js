const VersionModal = require("../models");
class ShopCarService {
  async findAppVersion(query) {
    return await VersionModal.uniVersion.findAll(query);
  }
  async UpdateAppVersion(body) {
    const { id } = body;
    return await VersionModal.uniVersion.update(body, { where: { id } });
  }
}
module.exports = new ShopCarService();
