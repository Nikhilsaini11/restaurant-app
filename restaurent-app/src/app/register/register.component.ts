import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  alert:boolean=false;
  createUser=new FormGroup({
    Name: new FormControl(''),
    Password: new FormControl(''),
    Email: new FormControl('')
    
  })
  constructor(private resto:CommonService){}

  regUser(){
    console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value).subscribe((result)=>{
      this.alert=true;
      this.createUser.reset({});
      console.log(result,"Resistered");

    })
  }
  closeAlert(){
    this.alert=false;
  }
}
