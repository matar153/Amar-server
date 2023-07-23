const multer = require('multer');
let date = new Date();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'img/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})


const uplaod = multer({
    // dest: 'img/',
    storage,
    limits: {
        fieldSize: 1024 * 1024 * 2
    },

})

module.exports = uplaod;