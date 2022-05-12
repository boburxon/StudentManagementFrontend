import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  public studentFullName: string = '';
  public formData: FormData = new FormData();

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
  }

  updateProfilePhotoValue(event: any) {
    let file = (event.target as HTMLInputElement).files![0];
    this.formData.set('profilePhoto', file);
  }

  createStudent() {
    this.formData.set('fullName', this.studentFullName);
    this.studentService.createStudent(this.formData).subscribe({
      next: alert,
      error: alert
    });
  }

}
