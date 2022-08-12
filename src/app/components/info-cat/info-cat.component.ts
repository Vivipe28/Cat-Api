import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-info-cat',
  templateUrl: './info-cat.component.html',
  styleUrls: ['./info-cat.component.css']
})
export class InfoCatComponent implements OnInit {

  public imageUrl: any;

  public name: any;

  public description: any;

  public temperament:any;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {

    this.imageUrl = this.http.imgUrl;
    this.name = this.http.catInfo.name;
    this.description = this.http.catInfo.description;
    let stringFts = this.http.catInfo.temperament;
    this.temperament = stringFts.split(',')
  }

  back(){
    this.router.navigate(['/home'])
  }

}
