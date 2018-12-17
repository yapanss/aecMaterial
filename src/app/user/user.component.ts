import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any
  title: string
  updateDate = new Date()

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log(this.users)
    if(!this.users) {
      this.apiService.getList('user')
    .subscribe(users => {
      this.users = users
      this.title = 'Users'
    },
    error => console.log('une erreur est intervenu ', error),
    () => console.log(' TERMINE ... ')
    )
    }

  }
}
