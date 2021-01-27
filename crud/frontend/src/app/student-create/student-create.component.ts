import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
import {Student} from '../student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student!: any;

  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.student = new Student();
  }

  addStudent() {
    this.studentService.createStudent(this.student).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['students']);
        this.student = new Student();
      },
      error => {
        console.log(error);
      }
    );
  }

}
