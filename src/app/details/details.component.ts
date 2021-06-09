import { HostListener, Component, OnInit, Input} from '@angular/core';
import { MyServiceService } from "../my-service.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  constructor(private service: MyServiceService,
              private router: Router,
              private SpinnerService: NgxSpinnerService) { }
details:any='';

  ngOnInit() {


this.SpinnerService.show();
this.service.getDetails(this.service.dbId)
 .subscribe(data=>{
      this.details=data;
      console.log(data);
      this.SpinnerService.hide();
    });
   
  }

  



}
