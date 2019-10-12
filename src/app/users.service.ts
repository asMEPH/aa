import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = ['Liao', ' Xi', ' Wang'];
  nextUserId = 1;

  constructor() { }

  getUsers() {
    console.log('loading customers...');
    return this.users;

  }
  public getNextUser() {
    let username = 'User' + this.nextUserId;
    this.nextUserId +=1;
    return username;
  }

  static getRandomUser() {
    let username = 'User' + Math.floor(Math.random() * 100);
    return username;
  }
}
