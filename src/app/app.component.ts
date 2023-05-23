import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ServiceApiService } from 'src/app/serviceApi/service-api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'gameProj';

  navbg: any;
  triggerAnimation = false;
  inputValue = '';

  searchResult: any;

  constructor(private router: Router, private service: ServiceApiService) {}

  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': '#f52549',
        color: '#fff',
        transition: '0.5s ease-in',
      };
    } else {
      this.navbg = {};
    }
  }

  onInputChange() {}

  // formgroup
  searchForm = new FormGroup({
    gameName: new FormControl(null),
  });

  // api search game
  submitForm() {
    this.service.searchGame(this.searchForm.value).subscribe((rs) => {
      // console.log(`tim kiem `, rs.results);
      this.searchResult = rs.results;
      if (this.searchResult) {
        this.router.navigate(['/searchResult'], {
          queryParams: { data: JSON.stringify(this.searchResult) },
        });

        this.searchForm.reset();
      }
    });
  }
}
