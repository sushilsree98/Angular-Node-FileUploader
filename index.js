const express = require('express');
const multer=require('multer')
const app = express();
const cors = require('cors');

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads/');
  },
  filename:function(req,file,cb){
    cb(null, file.originalname);
  }
});
const fileFilter = (req,file,cb)=>{
    if (file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const uploads = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter
})

app.use('/uploads',express.static('uploads'));
app.use(cors());
app.post('/file', uploads.single('file'), (req, res) => {
    res.send(req.file.destination + req.file.originalname);

})

app.get('/file', uploads.single('file'), (req, res) => {
    res.json(req.body);
      
})

app.listen(8000);
