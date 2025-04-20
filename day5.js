// let mydate = new Date()
// console.log(mydate)

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString());
 
// let mycreatedDate = new Date(2024, 5, 20)
// console.log(mycreatedDate.toString())
// let myCretedDate = new Date("2024-01-20")
// console.log(myCretedDate.toLocaleString())

// let myCretedDate = new Date("01-14-2024")
// console.log(myCretedDate.toLocaleString())

let newDate = new Date()
newDate.toLocaleString('default', {
    weekday : ""
}
)
