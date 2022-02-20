var myQuestions = [
  {
    question: "Em quantas paetes são divididas um figura de som?",
    answers: {
      a: "3",
      b: "4",
      c: "2",
      d: "5",
    },
    correctAnswer: "a",
  },
  {
    question: "Existem quantas figuras musicais?",
    answers: {
      a: "6",
      b: "8",
      c: "7",
      d: "3",
    },
    correctAnswer: "c",
  },
  {
    question: "A soma de: 2 colcheias + 1 semínima equivalem a (?)",
    answers: {
      a: "1 semibreve",
      b: "1 mínima",
      c: "1 breve",
      d: "1 semicolcheia",
    },
    correctAnswer: "b",
  },
  {
    question:
      "No pentagrama, os acidentes e sinais de alteração são indicados antes da nota.",
    answers: {
      a: "falso",
      b: "verdadeiro",
    },
    correctAnswer: "b",
  },
];

var exercioContainer = document.getElementById("exercicio");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateExercicio(
  myQuestions,
  exercioContainer,
  resultsContainer,
  submitButton
);

function generateExercicio(
  questions,
  exercioContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, exercioContainer) {
    var output = [];
    var answers;

    for (var i = 0; i < questions.length; i++) {
      answers = [];

      for (letter in questions[i].answers) {
        answers.push(
          "<label> " +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">     ' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label></br>"
        );
      }

      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    exercioContainer.innerHTML = output.join("");
  }

  function showResults(questions, exercioContainer, resultsContainer) {
    var answerContainers = exercioContainer.querySelectorAll(".answers");

    var userAnswer = "";
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;

        answerContainers[i].style.color = "lightgreen";
      } else {
        answerContainers[i].style.color = "red";
      }
    }

    if (numCorrect <= 2) {
      resultsContainer.innerHTML =
        numCorrect +
        " de " +
        questions.length +
        " Bora estudar mais um pouquinho?";
    } else {
      resultsContainer.innerHTML =
        numCorrect + " de " + questions.length + " Parabéns!!";
    }
  }

  showQuestions(questions, exercioContainer);

  submitButton.onclick = function () {
    showResults(questions, exercioContainer, resultsContainer);
  };
}
