import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GetStudents } from '../../models/students.model';
import { StudentsService } from '../../services/students/students.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  private readonly studentsService = inject(StudentsService);

  students = signal<GetStudents[]>([]);

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    const students = await this.studentsService.getStudents();
    this.students.set(students);
  }

  goToCreateStudent() {
    this.router.navigate(['/create-student']);
  }

  public async deleteStudent(studentId: string): Promise<void> {
    try {
      await this.studentsService.deleteStudent(studentId);

      this.students.set(
        this.students().filter(student => student.id !== studentId)
      );

    } catch (error) {
      console.error(error);
    }
  }
}
