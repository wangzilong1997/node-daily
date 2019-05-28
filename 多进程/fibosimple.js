var Promise = require('bluebird');
var fiboTask = [44,42,42,43];

function fibo(n) {
  return n == 0 ? 0:n>1 ? fibo(n-1) + fibo(n-2) : 1;
}

function excuteFibo(seq,taskID) {
  return new Promise((resolve) => {
    setTimeout(() =>{
      var st = Date.now();
      var result = fibo(seq);
      console.log(`Task ${taskID} was complete and using ${Date.now() - st} ms`);
      resolve(result);
    },Math.random()*10);
  });
}
var st = Date.now();
Promise.map(fiboTask,function(item,index){
  return excuteFibo(item,index)
}).then(function(result){
  console.log(`All task were complete and using ${Date.now() - st} ms`);
})
