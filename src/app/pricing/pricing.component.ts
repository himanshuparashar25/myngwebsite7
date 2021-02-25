import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing = {
    title:'',
    plans:[],
    tagline:''
   }; 
  
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.pricing = this.getPricing();
  }

  getPricing(){
    return this.config.getConfig().pricing;
  }
}
