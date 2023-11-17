// promt user to enter flavors
let froyoFlavors = window.prompt("Enter froyo flavors separated by commas","vanilla,vanilla,vanilla,strawberry,coffee,coffee")
let arrFroyo = froyoFlavors.split(",")

//loop through each flavor and add it to an object
function froyoFunction(arr) {
    let objFroyo = {};
    
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        // console.log(`word ${word}`)
        if (objFroyo[word] === undefined) {
            objFroyo[word] = 0;
        }
        objFroyo[word]++
    }
    return objFroyo
}
console.log(froyoFunction(arrFroyo))