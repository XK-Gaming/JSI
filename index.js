// // for (i = 5; i < 51; i++){
// //     let h2 = document.createElement("h2")
// //     h2.innerText = i*2
// //     document.body.appendChild(h2)
// // }
// let peopleList = [
//     {
//         name : "A",
//         age : 17,
//         email : "a@gmail.com"
//     },
//     {
//         name : "B",
//         age : 16,
//         email : "b@gmail.com"
//     },
//     {
//         name : "C",
//         age : 25,
//         email : "c@gmail.com"
//     }
// ]
// for (i = 0; i < peopleList.length; i++){
//     let h2 = document.createElement("h2")
//     h2.innerText = `Tên : ${peopleList[i].name}
//     Tuổi : ${peopleList[i].age}
//     Email : ${peopleList[i].email}`
//     document.body.appendChild(h2)
// }
// // Alternative method: render with innerHTML and +=
// const peopleListHTML = document.getElementById("peopleList")
// let html = ""
// for (i = 0; i < peopleList.length; i++){
//     html += `<div><h2>${peopleList[i].name}</h2>
//     <h2>${peopleList[i].age}</h2>
//     <h2>${peopleList[i].email}</h2></div>`
// }
// peopleListHTML.innerHTML = html
// Can be used to make the peopleList thing
let numbers = [1, 2, 3456, 221, 34, 62, 99]
let newNumbers = numbers.map(function(num){
    return num + 1
})
console.log(newNumbers);
let checkedNumbers = numbers.filter(function(num){
    return num >= 50
})
console.log(checkedNumbers);