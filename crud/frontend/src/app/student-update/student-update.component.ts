import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  student!: any;
  id!: any;

  constructor(private service: StudentService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.student = new Student();
    this.service.getStudent(this.id).subscribe(
      data => {
        this.student = data;
      }, error => console.log(error)
    );
  }

  editStudent() {
    this.service.updateStudent(this.id, this.student).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['students']);
      }, error => console.log(error)
    );
  }

}
