function fun1() {
    setTimeout(() => console.log("I am Fun 1"), 2000)
    process.nextTick(() => console.log("I am Process 1"))
}
function fun2() {
    console.log("I am Fun 2")
}
function fun3() {
    console.log("I am Fun 3")
}
fun1()
fun2()
fun3()
