import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionServiceService } from '../helper/question-service.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {

  question: any;
  q: string;
  constructor(private questionService: QuestionServiceService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.question = this.questionService.getQuestionById(id);

    if (this.question == null) {
      // redirect na pocetnu
    } else {
      this.q = this.question.question;
    }
  }
  edit() {
    this.questionService.editQuestion(this.question.id, this.q);
    this.router.navigate(['/question-list']);
  }
  delete() {
    if (this.question == null)
      return;
    this.questionService.deleteQuestion(this.question.id);
    this.router.navigate(['/question-list']);
  }

}
