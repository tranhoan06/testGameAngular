import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/serviceApi/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private service: ServiceApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  detailResult: any;
  trailerResult: any;
  gameOther: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let getParamsId = params.get('id');
      this.getGameDetails(getParamsId);
      this.getTrailerGame(getParamsId);
    });

    this.getGameOther();
  }

  getGameDetails(id: any) {
    this.service.gameDetails(id).subscribe((rs) => {
      console.log('result Detais', rs);
      this.detailResult = rs;
    });
  }

  // Trailer Game
  getTrailerGame(id: any) {
    this.service.gameTrailer(id).subscribe((rs) => {
      this.trailerResult = Object.values(rs.results[0].data)[0];
    });
  }

  // Other Game - Phần bấm vào
  getGameOther() {
    this.service.gameOther().subscribe((rs) => {
      this.gameOther = rs.results;
    });
  }

  goToGameDetails(id: any) {
    this.router.navigate(['/detail', id]);
  }
}
