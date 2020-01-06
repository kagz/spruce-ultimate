import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { DataService } from 'app/services/data.service';
import { RestApiService } from 'app/services/rest-api.service';
import { Logger } from 'app/services/logger.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentSettings: any;
  name: ''

  constructor(
    public data: DataService,
    private rest: RestApiService,
  ) { }

  async ngOnInit () {
    try {
      if (!this.data.user) {
        await this.data.getProfile();
      }
      this.currentSettings = Object.assign({
        newPassword: '',
        confirmPassword: ''
      }, this.data.user);
    } catch (error) {
      this.data.error(error);
    }
  }

  validate (settings) {
    if (settings['name']) {
      if (settings['email']) {
        if (settings['newPassword']) {
          if (settings['confirmPassword']) {
            if (settings['newPassword'] === settings['confirmPassword']) {
              return true;
            } else {
              this.data.error('Passwords do not match.');
            }
          } else {
            this.data.error('Please enter confirmation password.');
          }
        } else {
          if (!settings['confirmPassword']) {
            return true;
          } else {
            this.data.error('Please enter new password.');
          }
        }
      } else {
        this.data.error('Please enter your email.');
      }
    } else {
      this.data.error('Please enter your name.');
    }
  }

  async update () {

    try {
      if (this.currentSettings) {
        const data = await this.rest.post(
          'https://sprucemvp-api.herokuapp.com/profile/changePassword',
          {

            oldPassword: this.currentSettings['oldpassword'],
            newPassword: this.currentSettings['newpassword'],

          }
        );

        data
          ? (this.data.getProfile(), this.data.success(data))
          : this.data.error(data);
      }
    } catch (error) {
      this.data.error(error);
    }

  }
}