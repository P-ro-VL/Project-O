import { data } from './const';

export const AvailableQuestions = [];

export class QuestionInstance {
  constructor(questionContent, answerData) {
    this.questionContent = questionContent;
    this.answerData = answerData;
  }

  select(answer) {
    var map = this.answerData[answer];
    Object.keys(map).forEach((key) => {
      if (localStorage.getItem(key) == null) {
        localStorage.setItem(key, 0);
      }
      localStorage.setItem(
        key,
        parseInt(localStorage.getItem(key)) + parseInt(map[key])
      );
      console.log(key, localStorage.getItem(key));
    });
  }
}

function loadQuestions(questionData) {
  var map = questionData.questions;

  for (var i = 0; i < map.length; i++) {
    var q = map[i];
    AvailableQuestions.push(new QuestionInstance(q.q, q.a));
  }
}

AvailableQuestions.length = 0;
loadQuestions(data);

export function getQuestions() {
  return AvailableQuestions;
}
