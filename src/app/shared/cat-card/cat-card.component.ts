import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from 'src/app/models/cat';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  @Input() cat!: Cat;

  constructor(private http: HttpService, private router : Router) { }

  ngOnInit(): void {
  }

  infoCat(id:string, url:any){
    this.http.infoCat(id).subscribe((resp:any)=>{
      console.log(resp);
      this.http.catInfo = resp;
      this.http.imgUrl = url
      console.log(this.http.imgUrl);
      this.router.navigate(['/infoCat'])
    })
  }

}
