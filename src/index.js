const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  fs.appenFile(fileName,",An online learning platform.",(err)=>{
    if(err){
      console.log(err);
    }
  })
  
};

module.exports = updateFile;
