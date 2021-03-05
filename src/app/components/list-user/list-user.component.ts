import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { GlobalVolunteerService } from 'src/app/services/global-volunteer.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  userList: User[];

  editUserDetailModal: boolean = false;
  editUserObject: User;

  constructor(private service: GlobalVolunteerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(res => {
      this.userList = res;
      console.log('-- userList ---', this.userList);


    }, error => {
      this.toastr.error('everything is broken ', 'Major Error');
    });
  }

  formateDate(date: Date) {
    var m = new Date(date);
    let formatedDate = m.getDate() + "/" + (m.getMonth() + 1) + "/" + m.getUTCFullYear();
    return formatedDate;
  }
  openEditModal = (editUser: User) => {
    this.editUserDetailModal = true;
    this.editUserObject = editUser;


  }

  hideConfirmationEditModal(){
    this.editUserDetailModal=false;

  }

  closeModal($event) {
    if ($event) {
      this.hideConfirmationEditModal();
      this.service.getAllUsers().subscribe(res => {
        this.userList = res;
      }, error => {
        this.toastr.error('everything is broken ', 'Major Error');

      })
    }
  }

}
