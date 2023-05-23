import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/serviceApi/service-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  constructor(
    private service: ServiceApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ratingResult: any = [];

  ngOnInit(): void {
    this.getGameRating();
  }

  getGameRating() {
    this.service.gameRating().subscribe((rs) => {
      this.ratingResult = rs.results;
    });
  }

  goToGameDetails(id: any) {
    this.router.navigate(['/detail', id]);
  }
}
