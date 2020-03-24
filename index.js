const express = require('express');
const multer=require('multer')
const app = express();
const cors=require('cors');

const storage= multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads/');
  },
  filename:function(req,file,cb){
    cb(null, file.originalname);
  }
});
const uploads= multer({storage:storage})
app.use(cors());
app.post('/file',uploads.single('file'),(req,res)=>{
  console.log(req.file);
})

app.listen(8000);
