import { Component } from '@angular/core';
import { CommonService} from '../common.service';
import { FormControl, FormGroup, } from '@angular/forms';


@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent {
  alert:boolean=false;
  addRestaurent=new FormGroup({
    Name: new FormControl(''),
    Phone: new FormControl(''),
    Address: new FormControl('')
    
  })
  constructor(private resto:CommonService){}

  createResto(){
    this.resto.addResto(this.addRestaurent.value).subscribe((result)=>{
      this.alert=true;
      this.addRestaurent.reset({});
      console.log("Data:", result);
      // alert("Restaurent Successfully Added. You can check in the List Restaurent Menu");
    })
  }
  closeAlert(){
    this.alert=false;
  }
}
