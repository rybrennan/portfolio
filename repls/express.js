


  // const b = (() => {
  //   setTimeout(() => {
  //     console.log('B');
  //   }, Math.floor(Math.random() * Math.floor(1000)))
  // })


  // const c = (() => {
  //   setTimeout(() => {
  //     console.log('C');
  //   }, Math.floor(Math.random() * Math.floor(1000)))
  // })


const a = (function(cb) {

  setTimeout(() => {
    cb('A');
  }, Math.floor(Math.random() * Math.floor(1000)))
})
const b = (function(cb) {

  setTimeout(() => {
    cb('B');
  }, Math.floor(Math.random() * Math.floor(1000)))
})
const c = (function(cb) {

  setTimeout(() => {
    cb('C');
  }, Math.floor(Math.random() * Math.floor(1000)))
})






a((result) => {
  console.log(result);
  b((result2) => {
    console.log(result2);
    c((result3) => {
      console.log(result3);
    })
  })
})

