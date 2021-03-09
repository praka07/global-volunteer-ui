import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivityDetails } from 'src/app/models/activityDetails';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {

  activityList: ActivityDetails[];
  showOnlySystemAdministartor: boolean ;
  loggedInUser: User;

  constructor(private service: GlobalVolunteerService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.loggedInUser = this.service.getLoggedInuser();
    this.showOnlySystemAdministartor = this.loggedInUser.role == 1 ? true : false;
    console.log('--- showOnlySystemAdministartor --',this.showOnlySystemAdministartor);

    this.service.getAllActivities().subscribe(res => {
      this.activityList = res;
      console.log(' available activity list ', this.activityList);
    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })
  }

  // onCheckboxChange(e:any) {
  //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;

  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  // submitForm() {
  //   console.log(this.form.value)
  // }
  updateActivityStatus(al: ActivityDetails) {
    al.status = !al.status;
    this.service.updateActivityStatus(al).subscribe(res => {
      console.log('-- update information -', res);

    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });



  }
}
