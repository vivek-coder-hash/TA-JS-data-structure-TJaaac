// 1. Create an array named numbers and store 5 number values in it
let array  = [100,11,12,13,14]

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum =0
let length= array.length
for (i=0 ; i <array.length ;i++)
  {
      sum = sum+array[i]
  }
  console.log(sum)
// 3. Calculate the average of array items and print it to the console using console.log()
let average  = sum/length
console.log(average)

// 4. Find the highest number in the array and print it to the console using console.log()
let high =  array[0]
for (i=0  ; i<array.length ;i++) {
    if (array[i]>high)  {
        high=array[i]
    }
}
console.log(high)

// 5. Find the lowest number in the array and print it to the console using console.log()

let low =array[1]
for (i=0  ; i<array.length ;i++) {
    if (array[i]<low)  {
        low=array[i]
    }
}
console.log(low)

// 6. Find the even numbers in the array and print them to the console using console.log()

for (i=0 ; i <array.length ;i++) {
    if (array[i] % 2 ==0) {
        console.log(array[i])
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()

for (i=0 ; i <array.length ;i++) {
    if (array[i] % 2 !=0) {
        console.log(array[i])
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

for (i=0 ; i <array.length ;i++) {
    if (array[i] % 5 ==0) {
        console.log(array[i])
    }
}

// 9. Log all the element of the array one by one

for (i=0 ; i <array.length ;i++) {

    console.log(array[i])
}

// 10. Find all the number in the array that is divisible by 3

for (i=0 ; i <array.length ;i++) {
    if (array[i] % 3 ==0) {
        console.log(array[i])
    }
}
