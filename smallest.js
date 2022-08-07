function minInArray(numbers) {
    let minimum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < minimum) {
            minimum = element;
        }
    }
    return minimum;
}



const heights = [167, 120, 145, 250, 170];
const smallest = minInArray(heights);
console.log('smallest person is', smallest);