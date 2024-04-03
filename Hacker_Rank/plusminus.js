function plusMinus(arr) {
    const len = arr.length;
  
    const positiveNumbers = arr.filter(num => num > 0);
    const negativeNumbers = arr.filter(num => num < 0);
    const zeros = arr.filter(num => num === 0);

    const positiveRatio = positiveNumbers.length / len;
    const negativeRatio = negativeNumbers.length / len;
    const zeroRatio = zeros.length / len;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

// Test the function
plusMinus([-4, 3, -9, 0, 4, 1]);
