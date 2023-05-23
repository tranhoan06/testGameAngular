import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/serviceApi/service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: ServiceApiService, private router: Router) {}

  mostResult: any = [];
  viewResult: any;

  ngOnInit(): void {
    this.mostData();
  }

  mostData() {
    this.service.mostPopular().subscribe((rs) => {
      this.mostResult = rs.results;
    });
  }

  redirectToViewMore() {
    this.service.viewMore().subscribe((rs) => {
      this.viewResult = rs.results;

      if (this.viewResult) {
        this.router.navigate(['/viewMore'], {
          queryParams: { data: JSON.stringify(this.viewResult) },
        });
      }
    });
  }
}
