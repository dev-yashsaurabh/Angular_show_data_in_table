import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project';
  products: any = [];
  constructor(private http: HttpClient){
    this.http.get<any>('https://dummyjson.com/products').subscribe((data)=>{
      this.products = data;
      console.log(this.products);
    })
  }
}
