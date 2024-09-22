document.getElementById('btn-calculate').addEventListener('click',function(event){
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const weightNumber = parseFloat(weight);
    const height = document.getElementById('height').value; 
    const heightNumber = parseFloat(height);

    const heightInch = heightNumber *12;
    const finalHeight = heightInch*0.0254;
    
    
    const bmi = weightNumber / (finalHeight * finalHeight);
    if(isNaN(weightNumber) || isNaN(heightNumber) || weightNumber <= 0 || heightNumber <= 0){
        document.getElementById('result').textContent='Please enter valid heigth and weight !';
        return;
    }

    

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.99) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        category = "Obesity Class I";
    } else if (bmi >= 35 && bmi <= 39.9) {
        category = "Obesity Class II";
    } else {
        category = "Obesity Class III";
    }

    // document.getElementById('result').innerText=bmi;
    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    

})