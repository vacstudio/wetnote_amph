// Simple mock logic
  let currentQuestion = 1;
  const totalQuestions = 10;
  const knownQuestions = 8;
  let correctAnswers = 0;

  document.getElementById('submitTrainingAnswer').addEventListener('click', () => {
    const answer = document.getElementById('trainingAnswer').value;
    if (!answer) { alert('Please select an answer.'); return; }

    if (currentQuestion <= knownQuestions) {
      if (answer === "Dressel 20") { correctAnswers++; }
    }

    currentQuestion++;
    document.getElementById('questionNumber').textContent = currentQuestion;

    if (currentQuestion > totalQuestions) {
      document.getElementById('questionArea').style.display = 'none';
      document.getElementById('correctCount').textContent = correctAnswers;
      document.getElementById('trainingResult').style.display = 'block';
    } else {
      document.getElementById('trainingAnswer').value = "";
    }
  });

  document.getElementById('restartTraining').addEventListener('click', () => {
    currentQuestion = 1;
    correctAnswers = 0;
    document.getElementById('questionNumber').textContent = "1";
    document.getElementById('trainingAnswer').value = "";
    document.getElementById('questionArea').style.display = 'block';
    document.getElementById('trainingResult').style.display = 'none';
  });
  