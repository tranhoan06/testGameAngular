import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  data: any;

  currentPage: number = 1;
  pageSize: number = 10;
  totalItems!: number;
  pages!: number[];
  displayData: any[] = [];

  showError: boolean = false;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params['data']);

      if (!this.data || this.data.length === 0) {
        this.showError = true;
      }

      this.totalItems = this.data.length;
      this.calculatePages();
      this.loadData();
    });
  }

  calculatePages(): void {
    const pageCount = Math.ceil(this.totalItems / this.pageSize); // Hiển thị có bao nhiêu trang
    this.pages = Array(pageCount) // hiển thị số trang từ 1 đên pageCount
      .fill(0)
      .map((x, i) => i + 1);
  }

  loadData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize; // tính index bắt đầu
    const endIndex = startIndex + this.pageSize; // tính index kết thúc
    this.displayData = this.data.slice(startIndex, endIndex); // tính data của từng index rồi lưu vào biến displayData

    // Kiểm tra nếu không tìm thấy từ khóa
    // if (this.displayData.length === 0) {
    //   this.showError = true;
    // } else {
    //   this.showError = false;
    // }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadData();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
      this.loadData();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.pages.length) {
      this.currentPage = page;
      this.loadData();
    }
  }
}
