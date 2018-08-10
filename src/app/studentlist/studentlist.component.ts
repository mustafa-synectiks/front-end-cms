import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Student} from '../studenttypes';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit, OnChanges {

  students: Observable<Student[]>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getAllStudents();
  }

  ngOnChanges() {
    this.students = this.studentService.getAllStudents();
  }

}
