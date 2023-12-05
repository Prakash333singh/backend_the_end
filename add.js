//how to do multiple exports

// const a="hello";
// const b="neetu";
// const c="hemlooo";
// module.exports ={a,b,c};

// module.exports ={
//     sayHello :function (){
//         console.log("hello babe!!");
//     }
//     ,
//     sayThanks :function (){
//         console.log("thanks babe!!");
//     }
// }

const sayHello = () => {
  console.log("helllloo mai prakash");
};

const sayThanks = () => {
  console.log("thenkss babe");
};

module.exports = { sayHello, sayThanks };
