let arr = [10, 42, 3, 45, 19, 109, 32]
let refIndex = 0
for (index = 0; index < arr.length; index++) {
    if (arr[refIndex] < arr[index + 1]) {
        refIndex = index + 1
    }
}
alert(`the biggest number is ${arr[refIndex]}`)
