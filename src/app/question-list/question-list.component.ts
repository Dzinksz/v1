import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuestionServiceService } from '../helper/question-service.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = [];
  mesto: Question[] = [];
  datum: Question[] =[];
  newQuestion = "";
  mestoTakmicenja= "";
  datumTakmicenja= "";

  @ViewChild('searchBox') searchInput: ElementRef;

  constructor(private questionService: QuestionServiceService) { }

  ngOnInit(): void {
    this.questions = this.questionService.questions;
  }

  search() {
    const inputValue = this.searchInput.nativeElement.value;
    this.questions = this.questionService.searchQuestions(inputValue);
  }

  addQuestion() {
    this.questionService.addQuestion(this.newQuestion, this.mestoTakmicenja, this.datumTakmicenja)
  }


}
