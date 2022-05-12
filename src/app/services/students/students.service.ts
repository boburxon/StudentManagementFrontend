import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }


  getStudentsList() {
    return this.httpClient.get<Student[]>(environment.API_URL + '/Students/');
  }

  getStudentById(studentId: string) {
    return this.httpClient.get<Student>(environment.API_URL + `/Students/${studentId}/`);
  }

  createStudent(student: FormData) {
    return this.httpClient.post<Student>(environment.API_URL + `/Students/`, student);
  }

  deleteStudentById(studentId: string) {
    return this.httpClient.delete(environment.API_URL + `/Students/${studentId}/`);
  }

  updateStudentById(studentId: string, student: FormData) {
    return this.httpClient.put(environment.API_URL + `/Students/${studentId}/`, student);
  }

  postEnterAction(studentId: string) {
    return this.httpClient.post(environment.API_URL + `/Students/${studentId}/Enter/`, {});
  }


  postLeaveAction(studentId: string) {
    return this.httpClient.post(environment.API_URL + `/Students/${studentId}/Leave`, {});
  }



}
