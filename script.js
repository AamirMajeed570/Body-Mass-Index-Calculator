const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = "Please Give Valid Height";
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please Give Valid Weight";
  } else {
    height = height / 100;
    const BMI = (weight / (height * height)).toFixed(2);
    let category;

    if (BMI < 18.6) {
      category = "Underweight";
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      category = "Normal Weight";
    } else {
      category = "Overweight";
    }
    results.innerHTML = `<span>${BMI}</span><br/><span>${category}</span>`;
  }
});
