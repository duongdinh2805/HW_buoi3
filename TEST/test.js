// JavaScript Logic

const parseQuestions = (input) => {
  const questions = input.trim().split(/\n(?=\w+\. )/); // Split questions
  return questions.map((q) => {
    const [questionText, ...answers] = q.split(/\n/);
    return {
      question: questionText,
      answers: answers.map((ans) => {
        const isCorrect = ans.startsWith("*");
        return {
          text: isCorrect ? ans.slice(1) : ans,
          correct: isCorrect,
        };
      }),
    };
  });
};

const renderQuiz = (questions) => {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = q.question;
    questionDiv.appendChild(questionTitle);

    q.answers.forEach((a, aIndex) => {
      const answerLabel = document.createElement("label");
      answerLabel.textContent = a.text;

      const answerInput = document.createElement("input");
      answerInput.type = "radio";
      answerInput.name = `question-${index}`;
      answerInput.value = aIndex;

      answerLabel.prepend(answerInput);
      questionDiv.appendChild(answerLabel);
      questionDiv.appendChild(document.createElement("br"));
    });

    quizContainer.appendChild(questionDiv);
  });
};

const evaluateQuiz = (questions) => {
  const quizContainer = document.getElementById("quiz");
  const answers = quizContainer.querySelectorAll("input:checked");
  const result = [];

  questions.forEach((q, index) => {
    const userAnswerIndex = answers[index]?.value;
    const userAnswer = q.answers[userAnswerIndex];

    q.answers.forEach((a, aIndex) => {
      const label = quizContainer
        .querySelectorAll(".question-block")
        [index].querySelectorAll("label")[aIndex];
      if (a.correct) label.classList.add("correct");
      if (!a.correct && userAnswerIndex == aIndex)
        label.classList.add("incorrect");
    });

    result.push({ correct: userAnswer?.correct || false });
  });

  // Display result in a styled modal
  const resultModal = document.createElement("div");
  resultModal.id = "result-modal";
  resultModal.style.position = "fixed";
  resultModal.style.top = "50%";
  resultModal.style.left = "50%";
  resultModal.style.transform = "translate(-50%, -50%)";
  resultModal.style.backgroundColor = "#fff";
  resultModal.style.padding = "20px";
  resultModal.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  resultModal.style.zIndex = "1000";

  const resultText = document.createElement("p");
  resultText.textContent = `You got ${
    result.filter((r) => r.correct).length
  } / ${questions.length} correct!`;
  resultText.style.fontSize = "18px";
  resultText.style.textAlign = "center";

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.marginTop = "10px";
  closeButton.style.padding = "10px 20px";
  closeButton.style.backgroundColor = "#007bff";
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("click", () => {
    document.body.removeChild(resultModal);
  });

  resultModal.appendChild(resultText);
  resultModal.appendChild(closeButton);
  document.body.appendChild(resultModal);
};

// Event Listeners
document.getElementById("generate-quiz").addEventListener("click", () => {
  const input = document.getElementById("questions-input").value;
  const questions = parseQuestions(input);
  renderQuiz(questions);
  document.getElementById("quiz-output").style.display = "block";
  document.getElementById("question-form").style.display = "none";
});

document.getElementById("submit-quiz").addEventListener("click", () => {
  const input = document.getElementById("questions-input").value;
  const questions = parseQuestions(input);
  evaluateQuiz(questions);
});
