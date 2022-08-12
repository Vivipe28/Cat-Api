import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listOne:any=[];

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.catList1().subscribe((resp:any) => {
      console.log(resp);
      this.listOne = resp;
    })

  }

  list2(){
    this.listOne.length = 0;
    this.httpService.catList3().subscribe((resp:any)=>{
    this.listOne = resp;
    console.log(this.listOne);
    })
  }

  list1(){
    this.listOne.length = 0;
    this.httpService.catList1().subscribe((resp:any)=>{
    this.listOne = resp;
    console.log(this.listOne);
    })
  }



}
