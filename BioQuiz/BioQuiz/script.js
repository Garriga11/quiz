
const correctAnswers = {
    q1: "B", // Mitochondria
    q2: "B", // Cell
    q3: "A",  // Deoxyribonucleic Acid
    q4: "A",
    q5: "A"
  };
  
  document.getElementById("submit-btn").addEventListener("click", function() {
    const form = document.getElementById("quiz-form");
    let score = 0;
  
    // Check each question
    for (let key in correctAnswers) {
      const answer = form[key].value;
      if (answer === correctAnswers[key]) {
        score++;
      }
    }
  
    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Your score: ${score} / ${Object.keys(correctAnswers).length}`;
    resultDiv.style.color = score === Object.keys(correctAnswers).length ? "green" : "red";
  });