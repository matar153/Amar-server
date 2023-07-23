const express = require('express');
const router = express.Router();
const assetsBLL = require('../bll/assetsBLL');
const upload = require('../middleware/img');
const verifyToken = require('../middleware/jwt');

//get all assets
router.get('/', verifyToken, async (req, res) => {
    const assets = await assetsBLL.getAllAssets();
    res.send(assets);
})

//get asset by id
router.get('/:id', verifyToken, async (req, res) => {
    const asset = await assetsBLL.getAssetById(req.params.id);
    res.send(asset);
})

//add asset
router.post('/', verifyToken, async (req, res) => {
    const asset = await assetsBLL.addAsset(req.body);
    res.send(asset);
})

//update asset
router.put('/:id', verifyToken, async (req, res) => {
    const asset = await assetsBLL.updateAsset(req.params.id, req.body);
    res.send(asset);
})

//delete asset
router.delete('/:id', verifyToken, async (req, res) => {
    const asset = await assetsBLL.deleteAsset(req.params.id);
    res.send(asset);
})


//add images
router.post('/uplaod/:id', upload.single('image'), async (req, res) => {
    const id = (req.params.id);
    console.log(id);
    const obj = req.file.filename.replace('\\', '/');

    const asset = await assetsBLL.updateImage(id, obj);
    res.send(req.file.filename);
})


//add contractImage
router.post('/uplaodContract/:id', upload.single('image'), async (req, res) => {
    
    const id = (req.params.id);
    const obj = req.file.filename.replace('\\', '/');

    const asset = await assetsBLL.contractImage(id, obj);
    res.send(req.file.filename);
})



module.exports = router;