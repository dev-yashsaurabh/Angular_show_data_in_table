import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  search: FormControl = new FormControl('');
  count = 0;
  data: any;
  error: any;
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((val) => {
      this.data = val;
    }),
      (error: any) => this.error = error
  }

  sortLat() {
    // console.log(this.data);
    if(this.count===0) {
      this.data.sort((a:any,b:any)=>a.address.geo.lat - b.address.geo.lat)
      this.count++;
    }
    else if(this.count===1){
      this.data.reverse();
      this.count++;
    }
    else if(this.count===2){
      this.data.sort((a:any,b:any)=>a.id - b.id)
      this.count = 0;
    }
  }

  filterData(tabledata: any, keys: any[]) {
    let bool = false;
    keys.forEach(element => {
      if(tabledata[element].toLowerCase().includes(this.search.value.toLowerCase())){
        bool = true;
      }
    })
    return bool;
  }

  onSearch() {
    let keys = Object.keys(this.data[0]);
    keys.shift();
    this.data = this.data.filter((tabledata:any) => this.filterData(tabledata, keys))
  }
  //https://jsonplaceholder.typicode.com/users    (Get Api)
}
