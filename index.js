const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
}


console.log(prettyPrice(100, 95))
console.log(prettyPrice(54.21, .95))
console.log(prettyPrice(1, 20))
console.log(prettyPrice(10.0, 0.35))

