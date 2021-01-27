import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StudentUpdateComponent} from './student-update/student-update.component';

const routes: Routes = [
  {path: 'add', component: StudentCreateComponent},
  {path: 'edit/:id', component: StudentUpdateComponent},
  {path: 'students', component: StudentListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
