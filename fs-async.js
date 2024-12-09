const { readFile, writeFile } = require("fs");
console.log('start')
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } 
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result)=>{
    if (err) {
        console.log(err);
        return;
      } 
      const second = result;
      writeFile(
        './content/resutt-async.txt',`Here is the best result : ${first} , ${second}`,(err, result)=>{
            if(err){
               console.log(err)
               return; 
            };
            console.log('done with this task');
            // console.log(result);
        }
      )
  })
});
console.log('starting next one');
