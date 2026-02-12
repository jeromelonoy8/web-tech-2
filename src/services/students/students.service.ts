import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { CreateStudentPayload, GetStudents } from "../../models/students.model";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly http = inject(HttpClient);
  private readonly STUDENTS_API = 'http://localhost:3000/students';

  async getStudents(): Promise<GetStudents[]> {
    const response = await firstValueFrom(
      this.http.get<GetStudents[]>(`${this.STUDENTS_API}`)
    );
    return response ?? [];
  }

  async createStudent(student: CreateStudentPayload): Promise<GetStudents> {
    const response = await firstValueFrom(
      this.http.post<GetStudents>(`${this.STUDENTS_API}`, student)
    );
    return response;
  }

  async deleteStudent(studentId: string): Promise<void> {
    await firstValueFrom(
      this.http.delete<void>(`${this.STUDENTS_API}/${studentId}`)
    );
  }
}
