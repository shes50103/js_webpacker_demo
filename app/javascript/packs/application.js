// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// import www from 'sweetalert2'

document.addEventListener("DOMContentLoaded", () => {
  // www.fire({
  //   title: 'Are you sure?',
  //   text: "You won't be able to revert this!",
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: 'Yes, delete it!'
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     Swal.fire(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     )
  //   }
  // })
})

// import bbbb, { a2 } from '../bootstrap/johnson'
// console.log("a: ", a2)

// // import bbbb from 'lib/johnson'
// console.log("b: ", bbbb)

// let aa = 1
// window.w = aa


// function 外面看不到裡面的變數
// function test(){
//   var a = 10
// }

// test()

// console.log("a:", a)



// function 裡面看的到外面的變數
// var a = 10

// function test(){
//   console.log(a)
// }

// test()


// var a = {}

// function test(){
//   var b = 10
//   a.b = b
// }

// test()
// console.log(a.b)

// function test(){
//   var b = 223
//   window.b = b
// }

// test()
// console.log(window.b)
// console.log(b)
