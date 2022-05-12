import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentCreateComponent } from './pages/student-create/student-create.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student/create', component: StudentCreateComponent},
  {path: 'student/:id', component: StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
