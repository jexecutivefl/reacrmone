import { Component, OnInit } from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public amplifyService: AmplifyService, public router: Router) {
    let url;
    url = this.router.url;
    console.log('url is ' + url);
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        if (url.includes('dashboard')) {
          if (authState.state === 'signedIn') {
            this.router.navigate(['list-practices']);
          }
        }
      });
  }

  ngOnInit() {
  }

}
