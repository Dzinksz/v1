import { Injectable } from '@angular/core';
import { Question } from '../question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  questionCnt = 0;
  questions: Question[] = [
    {
      id: ++this.questionCnt,
      question: "Prvensvto Vojvodine",
      datum: "11.2.2021,",
      mesto: "Novi Sad"
    },{
      id: ++this.questionCnt,
      question: "Prvenstvo Srbije",
      datum: "19.2.2021,",
      mesto: "Cacak"
    },
    {
      id: ++this.questionCnt,
      question: "Kup prijateljstva",
      datum: "25.2.2021,",
      mesto: "Backa palanka"
    }
  ];

  getQuestionById(id: number) {
    for (const iterator of this.questions) {
      if (iterator.id == id) {
        return iterator;
      }
    }
    return null;
  }

  searchQuestions(q: string): Question[] {
    let filtered = [];

    for (const iterator of this.questions) {
      if (iterator.question.toLowerCase().includes(q.toLowerCase())) {
        filtered.push(iterator);
      }
    }
    if (filtered.length == this.questions.length)
      return this.questions;
    else
      return filtered;
  }

  addQuestion(question: string, mesto: string, datum: string) {
    this.questions.push(
      {
        id: ++this.questionCnt,
        question: question,
        mesto: mesto,
        datum: datum
      }
    );
  }

  deleteQuestion(id: number) {
    let q = this.getQuestionById(id);
    if (q == null) {
      return;
    }
    // Vrati poziciju elementa u nizu
    let index = this.questions.indexOf(q);
    // Brise element iz niza na poziciji koji odgovara vrednosti index
    this.questions.splice(index, 1);
  }

  editQuestion(id: number, newQuestion: string) {
    let q = this.getQuestionById(id);
    if (q == null) {
      return;
    }
    q.question = newQuestion;
  }

  constructor() { }
}
