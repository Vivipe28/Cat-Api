import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private urlCatList1 = environment.urlCatList1;
  private urlCatList2 = environment.urlCatList2;
  private urlCatList3 = environment.urlCatList3;
  private urlId = environment.urlId;

  public imgUrl:any;
  public catInfo:any;

  constructor(private http: HttpClient) { }

  catList1(){
    const path = this.urlCatList1;
    return this.http.get(path)
  }

  catList2(){
    const path = this.urlCatList2;
    return this.http.get(path)
  }

  catList3(){
    const path = this.urlCatList3;
    return this.http.get(path)
  }

  infoCat(id:string){
    const path = this.urlId + id;
    return this.http.get(path)
  }
}
