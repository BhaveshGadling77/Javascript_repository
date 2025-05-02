const form1 = document.querySelector('form');

form1.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const msg = document.querySelector('#msg');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid Height`;
    msg.innerHTML = '';
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid Weight`;
    msg.innerHTML = '';
  } else {
    const Bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${Bmi}</span>`;

    if (Bmi < 18.5) msg.innerHTML = `<p>It is underweight</p>`;
    else if (Bmi >= 18.5 && Bmi <= 24.9) msg.innerHTML = `<p>It is normal</p>`;
    else msg.innerHTML = `<p>It is overweight</p>`;
  }
});
