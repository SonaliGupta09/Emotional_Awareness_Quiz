function startQuiz() {
  document.getElementById("introBox").style.display = "none";
  document.getElementById("quizBox").style.display = "block";
  showQuestion();
}

function calculate() {
  const form = document.forms['quizForm'];
  let yesCount = 0;
  let noCount = 0;

  for (let i = 1; i <= 10; i++) {
    const answer = form['q' + i].value;
    if (answer === 'yes') yesCount++;
    else if (answer === 'no') noCount++;
  }

  const resultDiv = document.getElementById('result');
  if (yesCount > noCount) {
    resultDiv.innerHTML = "🌟 <strong>You likely lean introvert.</strong>";
  } else if (noCount > yesCount) {
    resultDiv.innerHTML = "🌟 <strong>You may lean extrovert.</strong>";
  } else {
    resultDiv.innerHTML = "🌟 <strong>You could be an ambivert, showing traits of both.</strong>";
  }
}
