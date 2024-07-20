// to-do process the data from backend

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  imports: [MatProgressBarModule] 
})
export class ResultsComponent implements OnInit {
  loading: boolean = true;
  data: any[] = [];
  paginatedData: any[] = [];
  page: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const input1 = params['input1'];
      const input2 = params['input2'];
      this.fetchData(input1, input2);
    });
  }

  fetchData(input1: string, input2: string) {
    this.loading = true;
    this.dataService.getData({ input1, input2 }).subscribe(response => {
      this.data = response;
      this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
      this.updatePaginatedData();
      this.loading = false;
    });
  }

  updatePaginatedData() {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.updatePaginatedData();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.updatePaginatedData();
    }
  }
}
