import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { ConatctService } from './contact.service';

declare var ts2js_fileinput: any;

//import * as f from "../../assets/js/fileinput"
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService : ConatctService){
  }
  public mytitle = 'Donation form' ;
  // Array for ngFor
  cities:any[] ;
  

  // variable for bindings
  firstname:string = '';
  lastName:string = '';
  email:string;
  subject:string;

  // Binding for Pipe
  amount:number;

  comments:string;

  // Binding for Directive ngIf
  isRequest: boolean = false;

  ngOnInit() {
    this.cities = this.contactService.getCities();
    
  }

  // Event Binding
  submit()
  {
    alert(this.firstname  +  this.lastName + '     Your request has been successfully submitted '    );
  }
}
