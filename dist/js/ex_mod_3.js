var myQuestions = [
  {
    question:
      "O ponto de aumento é colocado (?) da nota, que faz com que a duração dela aumente pela sua metade.",
    answers: {
      a: "Ao lado esquerdo da nota",
      b: "Em baixo da nota",
      c: "Ao lado direito da nota",
      d: "Em cima da nota",
    },
    correctAnswer: "c",
  },
  {
    question: "Qual é a função do Stacatto?",
    answers: {
      a: "Produzir um som longo",
      b: "Produzir um som de curto",
      c: "Produzir um som agudo",
      d: "Produzir um som grave",
    },
    correctAnswer: "b",
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
