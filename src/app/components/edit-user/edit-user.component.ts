import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  @Input() updateUserDetail: User;
  userDetailsToUpdate: User;
  @Output() closePopup = new EventEmitter<boolean>();
  userRoles = [{
    'id': 2,
    'roleName': 'Activity Manager'

  },
  {
    'id': 3,
    'roleName': 'Volunteers'

  }
  ];

  constructor(private service:GlobalVolunteerService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.userDetailsToUpdate = JSON.parse(JSON.stringify(this.updateUserDetail));
    console.log('-- user details to update--', this.updateUserDetail);



  }

  updateUserdetail() {
    this.service.updateUserDetail(this.userDetailsToUpdate).subscribe(res => {
      this.toastr.success("user details updated successfully !!");
      this.closePopup.emit(true);
    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    })
  }

}
