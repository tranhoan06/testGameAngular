import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/serviceApi/service-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private service: ServiceApiService) {}

  mostResult: any = [];

  ngOnInit(): void {
    this.mostData();
  }

  mostData() {
    this.service.mostPopular().subscribe((rs) => {
      this.mostResult = rs.results;
    });
  }
}
