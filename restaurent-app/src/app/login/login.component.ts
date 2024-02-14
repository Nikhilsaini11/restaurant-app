import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl('')

  })
  constructor(private resto: CommonService, private router: Router) { }

  logUser() {
    console.log(this.loginUser.value);
    this.resto.loginUser().subscribe((result) => {
      const user=result.find((a:any)=>{
        return a.Email===this.loginUser.value.Email && a.Password===this.loginUser.value.Password
      });
      if(user){
        alert("Successfully Login");
      this.loginUser.reset({});
        this.router.navigate(['list']);
    } else{
      alert("User not found!!");
    }
    })
  }
}
