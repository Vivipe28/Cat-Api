import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listOne:Array<Cat>= new Array<Cat>;

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.catList1().subscribe((resp:any) => {
      resp.forEach((item:any) => {
        if(item.image !== undefined){
        this.listOne.push(new Cat(item.name, item.image,item.id))
        }
      })
      
    })

  }

  list3(){
    this.listOne.length = 0;
    this.httpService.catList3().subscribe((resp:any)=>{
      resp.forEach((item:any) => {
        if(item.image !== undefined){
        this.listOne.push(new Cat(item.name, item.image,item.id))
        }
      });
    
    console.log(this.listOne);
    })
  }

  list2(){
    this.listOne.length = 0;
    this.httpService.catList2().subscribe((resp:any)=>{
      resp.forEach((item:any) => {
        if(item.image !==undefined){
        this.listOne.push(new Cat(item.name, item.image,item.id))
        }
      })
    console.log(this.listOne);
    })
  }

  list1(){
    this.listOne.length = 0;
    this.httpService.catList1().subscribe((resp:any)=>{
      resp.forEach((item:any) => {
        if(item.image !== undefined){
        this.listOne.push(new Cat(item.name, item.image,item.id))
        }
      });
    
    console.log(this.listOne);
    })
  }

  



}
