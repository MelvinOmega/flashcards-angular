import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  subject:any

  getSubjects() {
    this.myService.getSubjects().subscribe((data: any) => {
      this.subject = data;
      console.log(this.subject);
    });
  }

  constructor(private myService: ServiceService) { }


  ngOnInit(): void {
    this.getSubjects();

  }

}
