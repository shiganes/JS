let arr = [10, 20, 30, 40, 50]
let refIndex = 0
for (index = 0; index < arr.length; index++) {
    if (arr[refIndex] < arr[index + 1]) {
        refIndex = index + 1
    }
}
alert(`the biggest number is ${arr[refIndex]}`)
let sum = 0
function sumOfArray(list) {
    for (i = 0; i < arr.length; i++) {

        sum = sum + +arr[i]
        console.log(sum)
    }
    console.log(`the sum of the array is ${sum}`)
    return sum
}

console.log(sumOfArray(arr))
