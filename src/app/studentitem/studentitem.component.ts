import { Component, OnInit, Input } from '@angular/core';
import {Student} from '../studenttypes';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './studentitem.component.html',
  styleUrls: ['./studentitem.component.css']
})
export class StudentitemComponent implements OnInit {
  @Input() student: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

}
