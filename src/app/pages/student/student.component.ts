import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public student?: Student;

  constructor(private studentService: StudentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.updateStudent();
  }

  updateStudent() {
    this.route.paramMap.subscribe(params => {
      this.studentService.getStudentById(params.get('id')!).subscribe(data => {
        this.student = data;
      })
    });
  }

  deleteStudent() {
    this.studentService.deleteStudentById(this.student!.id).subscribe({
      next: (data) => {
        this.router.navigate(['/']);
      },
      error: () => { alert('Error') }
    });
  }

  postActionEnter() {
    this.studentService.postEnterAction(this.student!.id).subscribe({ next: (data) => { alert('Entered'); this.updateStudent() }, error: () => { alert('Error'); this.updateStudent(); } });
  }

  postActionLeave() {
    this.studentService.postLeaveAction(this.student!.id).subscribe({ next: (data) => { alert('Left'); this.updateStudent(); }, error: () => { alert('Error'); this.updateStudent(); } });
  }

}
