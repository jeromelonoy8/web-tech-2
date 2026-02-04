import { Routes } from '@angular/router';
import { Activity1Component } from './activity/activity-1.component';
import { PrelimExamComponent } from './prelim-exam/prelim-exam.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';

export const routes: Routes = [
  {
    path: 'activity-1',
    component: Activity1Component
  },
  {
    path: 'prelim-exam',
    component: PrelimExamComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'create-student',
    component: CreateStudentComponent
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  }
];
