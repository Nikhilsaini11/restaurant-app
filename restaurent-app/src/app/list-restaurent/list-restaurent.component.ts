import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service';

@Component({
  selector: 'app-list-restaurent',
  templateUrl: './list-restaurent.component.html',
  styleUrls: ['./list-restaurent.component.css']
})
export class ListRestaurentComponent implements OnInit {
  public collection:any;
  alert: boolean=false;
  constructor(private commonService:CommonService){}

  deleteRestoId(id:any){
    console.log(id);
    this.commonService.deleteResto(id).subscribe(()=>{
      this.ngOnInit();
      this.alert=true;
    });
  }
  closeAlert(){
    this.alert=false;
  }
  ngOnInit() {
    this.commonService.getRestoList().subscribe(result=>{
      this.collection=result;
      console.log(this.collection);
    })
    
  }
}
