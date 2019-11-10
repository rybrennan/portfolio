


// const a = (()=> {
//   setTimeout(() => {
//       console.log('A')
//   }, 1000)
// })



// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('A');
// }, 1000)
// })

// myPromise.then((result) => {
//   console.log(result)
// })



const newPromiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('A')
}, Math.floor(Math.random() * 500) + 1)
})
const newPromiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('B')
}, Math.floor(Math.random() * 500) + 1)
})
const newPromiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('C')
}, Math.floor(Math.random() * 500) + 1)
})

newPromiseA.then((result) => {
  console.log(result)
  newPromiseB.then((resultB) => {
    console.log(resultB)
    newPromiseC.then((resultC) => {
      console.log(resultC);
    })
  })
})