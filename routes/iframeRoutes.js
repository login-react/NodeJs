const express = require('express')
const router = express.Router()
const iframeModal = require('../models')

router.get('/getIframe', async (req, res) => {
  const _select = await iframeModal.iframe.findAll()
  res.json({ msg: '获取iframe', _select })
})

module.exports = router
