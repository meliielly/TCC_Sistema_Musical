var myQuestions = [
  {
    question: "O que é Pauta ou Pentagrama?",
    answers: {
      a: "É uma nota",
      b: "É a duração de um som",
      c: "É onde escrevemos a notas",
      d: "É uma propriedade musical",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Uma nota escrita na 3° linha da pauta é mais (?) do que uma nota escrita na 1° linha.",
    answers: {
      a: "grave",
      b: "aguda",
      c: "longa",
      d: "curta",
    },
    correctAnswer: "b",
  },
  {
    question: "Existem quantos tipos de claves? Quais são?",
    answers: {
      a: "2, Clave de Fá e Dó",
      b: "3, Clave de Sol, Fá e Mi",
      c: "2, Clave de Dó e Sol",
      d: "3, Clave de Sol, Fá e Dó",
    },
    correctAnswer: "d",
  },
  {
    question: "O Dó Central estabelece relação nas claves de Sol e Fá.",
    answers: {
      a: "verdadeiro",
      b: "falso",
    },
    correctAnswer: "a",
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
