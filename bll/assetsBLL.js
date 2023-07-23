const assetsModel = require('../model/assetModel');


// Get all assets
const getAllAssets = async () => {
    const assets = await assetsModel.find({});
    return assets
}

// Get asset by id
const getAssetById = async (id) => {
    const getAssetById = await assetsModel.findById(id);
    return getAssetById;
}

// Add asset
const addAsset = async (asset) => {
    const newAsset = new assetsModel(asset);
    await newAsset.save();
    return newAsset;
}

// Update asset
const updateAsset = async (id, asset) => {
    const updateAsset = await assetsModel.findByIdAndUpdate(id, asset);
    return "updated";
}


// Delete asset
const deleteAsset = async (id) => {
    const deleteAsset = await assetsModel.findByIdAndDelete(id);
    return deleteAsset;
}

//update image 
const updateImage = async (id, asset) => {
    const asset1 = await assetsModel.findById(id);
    const newImage = { image:[ ...asset1.image, asset] }
    const updateAsset = await assetsModel.findByIdAndUpdate(id, newImage);
    return "image updated";
}


//update image 
const contractImage = async (id, asset) => {
    const asset1 = await assetsModel.findById(id);
    const newImage = { contractImage:[ ...asset1.contractImage, asset] }
    const updateAsset = await assetsModel.findByIdAndUpdate(id, newImage);
    return "contract Image updated";
}


module.exports = {
    getAllAssets,
    getAssetById,
    addAsset,
    updateAsset,
    deleteAsset,
    updateImage,
    contractImage
}