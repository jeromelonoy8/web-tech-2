import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students = [
    { name: 'Krispy Wam', course: 'BSIT', year: '3rd Year' },
    { name: 'Ari Santol', course: 'BSCS', year: '2nd Year' },
    { name: 'Mike Oxlong', course: 'BSIS', year: '1st Year' }
  ];

  constructor(private router: Router) {}

  goToCreateStudent() {
    this.router.navigate(['/create-student']);
  }
}
