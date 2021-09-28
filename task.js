const numbers = [ 5, 8, 0, 1, 9, 11, 15, 16]
let mutableList = numbers
let fileContent

console.log("Original numbers list: ", numbers)

function ascendingSort(list) {
    for (let i = 0; i < list.length; i++) {
        // replace `list.length - 1` with `list.length - i` in order to reduce the cpu cycles
        for (let j = 0; j < list.length - i; j++) {
            // replace i with j to sort correctly
            if (list[j] > list[j + 1]) {
                let temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp
            }
        }
    }
    return list
}

console.log("Sorted list: ", ascendingSort(mutableList))

for (let i = 0; i < mutableList.length; i++) {
        // replace `list.length - 1` with `list.length - i` in order to reduce the cpu cycles
        for (let j = 0; j < mutableList.length - i; j++) {
            // replace i with j to sort correctly
            if (mutableList[j] < mutableList[j + 1]) {
                let temp = mutableList[j]
                mutableList[j] = mutableList[j + 1]
                mutableList[j + 1] = temp
        }
    }
}

console.log("Numbers list After Desc sorting: ", mutableList)

// read the data.txt file from file system and sort it
const fs = require('fs')

try {
    fileContent = fs.readFileSync('data.txt', 'utf8')
} catch (err) {
    console.error(err)
}

let sortedData = ascendingSort(fileContent.split(',').map(Number)).join(",")

fs.writeFile('output.txt', sortedData, (err) => {
    if (err) return console.log(err)
});
