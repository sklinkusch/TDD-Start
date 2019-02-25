// const ele = function(selector) {
//   return document.querySelector(selector)
// }

// const eles = function(selector) {
//   const returnValueArray = []
//   document.querySelectorAll(selector).forEach(el => returnValueArray.push(el))
//   return returnValueArray
// }

class $ {
  constructor(selector) {
    this.selector = selector
    this.domNode = null
    this.init()
  }

  init() {
    // const returnValueArray = []
    // document
    //   .querySelectorAll(this.selector)
    //   .forEach(el => returnValueArray.push(el))

    // this.domNode = returnValueArray
    this.domNode = [...document.querySelectorAll(this.selector)]
  }
}

const head = new $(".head")
const lis = new $("li")
console.log(head, lis)

// Test
// !(function() {
//   console.log("A instance of $ has a property domNode")
//   const testNode = new $(".head")
//   if (Array.isArray(testNode.domNode)) {
//     console.log("✅")
//   } else {
//     console.log("❌")
//   }
// })()
