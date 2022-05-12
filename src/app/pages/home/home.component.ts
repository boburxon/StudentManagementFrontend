import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public studentsList: Student[] = [];

  constructor(public studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentService.getStudentsList().subscribe((data) => {
      this.studentsList = data;
    })
  }

}
