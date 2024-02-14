import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent {
  alert: boolean = false;
  editRestaurent = new FormGroup({
    Name: new FormControl(''),
    Phone: new FormControl(''),
    Address: new FormControl('')

  })
  constructor(private resto: CommonService, private router: ActivatedRoute) { }
  ngOnInit() {
    this.resto.getData(this.router.snapshot.params['id']).subscribe((result) => {
      this.editRestaurent = new FormGroup({
        Name: new FormControl(result['Name']),
        Phone: new FormControl(result['Phone']),
        Address: new FormControl(result['Address'])
      })
    })
  }

  editResto() {
    this.resto.updateResto(this.router.snapshot.params['id'], this.editRestaurent.value).subscribe((result) => {
      this.alert=true;
      this.editRestaurent.reset({});
    console.log(result,"Updated Successfully");
    })
  }

}
