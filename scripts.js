function calculateBMI() {
    let heightInCm = parseFloat(document.getElementById('height').value); // Get height in cm   
    let weight = parseFloat(document.getElementById('weight').value);
    let result = document.getElementById('result');


    if (heightInCm > 0 && weight > 0) {
        let heightInMeters = heightInCm / 100;
        let bmi = weight / (heightInMeters * heightInMeters);
        result.textContent = 'Your BMI is ' + bmi.toFixed(2);

        if (bmi < 18.5) {
            result.textContent += ' (Underweight)';
            result.style.color = 'blue'; // Set text color to blue for Underweight
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.textContent += ' (Normal weight)';
            result.style.color = 'green'; // Set text color to green for Normal weight
        } else if (bmi >= 25 && bmi < 29.9) {
            result.textContent += ' (Overweight)';
            result.style.color = 'orange'; // Set text color to orange for Overweight
        } else {
            result.textContent += ' (Obese)';
            result.style.color = 'red'; // Set text color to red for Obese
        }
    } else {
        alert('Please enter valid height and weight values.');
    }
}

