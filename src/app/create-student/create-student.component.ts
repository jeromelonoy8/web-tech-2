import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./posts.component.css']
})
export class CreateStudentComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/students']);
  }
}
