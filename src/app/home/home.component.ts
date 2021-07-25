import { Component, OnInit } from '@angular/core';
import { SellbriteService } from '../services/sellbrite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

private sellbriteService: SellbriteService;

  constructor(private SellbriteService: SellbriteService) { 
    this.sellbriteService = SellbriteService;
  }

  ngOnInit(): void {

  }

  public async OnClick(){
    let results = await this.sellbriteService.GetInvetory();
  }



}
