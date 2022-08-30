import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../data.model';

@Component({
  selector: 'app-landingp',
  templateUrl: './landingp.component.html',
  styleUrls: ['./landingp.component.css']
})
export class LandingpComponent implements OnInit {

 @Input() accordion?: Data[];
  // descriptionIn: boolean;

  constructor() {
    
   }

  ngOnInit(): void {
  }


  onCollapseAccordion(event: any ){
    if (event.style.display === "block") {
      event.style.display = "none";
  } else {
        event.style.display = "block";
   }  
}


}
