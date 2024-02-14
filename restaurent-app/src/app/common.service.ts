import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url=('http://localhost:3000/resto');
  userurl=('http://localhost:3000/users');
  constructor(private _http:HttpClient) {}

    getRestoList(){
      return this._http.get<any>(this.url);
    }

    addResto(data:any){
      return this._http.post<any>(this.url,data);
    }

    deleteResto(id:any){
      const deleteUrl = this.url+'/'+id;
      console.log(deleteUrl);
      return this._http.delete<any>(deleteUrl);
    }

    getData(id:any){
      return this._http.get<any>(`${this.url}/${id}`);
    }

    updateResto(id:any,data:any){
      return this._http.put<any>(`${this.url}/${id}`,data);
    }
    createUser(data:any){
      return this._http.post<any>(this.userurl,data);
    }
    loginUser(){
      return this._http.get<any>(this.userurl);
    }
}
