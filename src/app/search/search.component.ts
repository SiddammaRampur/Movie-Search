import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { MyServiceService } from '../my-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner"; 


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Output() newItemEvent = new EventEmitter<any[]>();
  constructor(private http: HttpClient,
            private service: MyServiceService,
            private router: Router,
            private route: ActivatedRoute,
            private SpinnerService: NgxSpinnerService){

}
mNames:any='';
details:any='';
ngOnInit(){
    
    this.router.navigate(['search']);
  }

  onSearch(val: any){
    this.SpinnerService.show();
    this.service.getMovie(val)
    .subscribe(data=>{
      this.mNames=data.Search;
      console.log(this.mNames);
      this.SpinnerService.hide();
    });
   
  }

onImgClick(val: any){
  

this.service.dbId=val;
this.router.navigate(['movieDetails']);
}
}
