function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid values for weight and height.';
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const bmiResult = getBMIResult(bmi);

    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)} (${bmiResult}).`;
}

function getBMIResult(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}
