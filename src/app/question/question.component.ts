import { Component, OnInit, Input } from '@angular/core';
import { Question } from "app/question/question";


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() startNumber: number;
  @Input() question: Question;
  @Input() showLineNumbers: boolean;

  constructor() { }

  ngOnInit() {
  }

}
