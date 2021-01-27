import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../student.service';
import {Student} from '../student';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students!: Observable<Student[]>;

  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reLoadData();
  }

  // tslint:disable-next-line:typedef
  reLoadData() {
    // @ts-ignore
    console.log(1);
    this.students = this.studentService.getStudentList();
    // console.log(this.students);
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(
      data => {
        this.reLoadData();
      }, error => console.log(error)
    )
  }

}
