// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
// import { StudentsService } from '../../services/students/students.service';
// import { CreateStudentPayload } from '../../models/students.model';

// @Component({
//   selector: 'app-create-student',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './create-student.component.html',
//   styleUrls: ['./create-student.component.css']
// })
// export class CreateStudentComponent {

//   private readonly router = inject(Router);
//   private readonly fb = inject(FormBuilder);
//   private readonly studentsService = inject(StudentsService);

//   // Create Form Group
// studentForm = this.fb.group({
//   first_name: ['', Validators.required],
//   last_name: ['', Validators.required],
//   email: ['', [Validators.required, Validators.email]],
//   age: ['', Validators.required],
//   course: ['', Validators.required],
//   year_level: ['', Validators.required],
//   gap: ['', Validators.required],
//   enrollment_status: ['', Validators.required], // ✅ ADD THIS
// });


//   async createStudent() {
//     if (this.studentForm.invalid) {
//       this.studentForm.markAllAsTouched();
//       return;
//     }

//     const payload = this.studentForm.value as unknown as CreateStudentPayload;

//     await this.studentsService.createStudent(payload);

//     this.router.navigate(['/students']);
//   }

//   goBack() {
//     this.router.navigate(['/students']);
//   }
// }

import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentsService } from '../../services/students/students.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateStudentPayload } from '../../models/students.model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CreateStudentComponent {

  private readonly studentsService = inject(StudentsService);
  private readonly router = inject(Router);

public form = new FormGroup({
  first_name: new FormControl('', Validators.required),
  last_name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  age: new FormControl('', Validators.required),
  course: new FormControl('', Validators.required),
  year_level: new FormControl('', Validators.required),
  gpa: new FormControl('', Validators.required),
  enrollment_status: new FormControl('', Validators.required),
});


  public async createStudent(): Promise<void> {
    if (this.form.invalid) {
      console.log('Form invalid');
      return;
    }

    const payload: CreateStudentPayload = {
      first_name: this.form.value.first_name ?? '',
      last_name: this.form.value.last_name ?? '',
      email: this.form.value.email ?? '',
      age: Number(this.form.value.age),
      course: this.form.value.course ?? '',
      year_level: Number(this.form.value.year_level),
      gpa: Number(this.form.value.gpa),
      enrollment_status: 'Active', // number type
    };

    try {
      console.log('Creating student', payload);
      await this.studentsService.createStudent(payload);
      // Navigate back to student list after creation
      this.router.navigate(['/students']);
    } catch (error) {
      console.error('Error creating student:', error);
    }
  }

  public back(): void {
    this.router.navigate(['/students']);
  }
}