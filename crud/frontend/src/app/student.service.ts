import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://127.0.0.1:8000/api/students';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // tslint:disable-next-line:typedef
  createStudent(value: any) {
    return this.http.post(`${this.baseUrl}`, value);
  }
  // tslint:disable-next-line:typedef
  updateStudent(id: number, value: any) {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  getStudent(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  deleteStudent(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

