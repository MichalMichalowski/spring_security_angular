import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service/data.service';

@Component({
  selector: 'app-example-auth',
  templateUrl: './example-auth.component.html',
  styleUrls: ['./example-auth.component.css']
})
export class ExampleAuthComponent implements OnInit {

  data?: string[];

  constructor (private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getImportantData().then( d => {
      console.log(d);
    });
  }

}
