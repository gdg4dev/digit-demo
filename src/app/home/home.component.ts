import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule]  // Include FormsModule in imports
})
export class HomeComponent {
  input1: string = '';
  input2: string = '';

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/results'], {
      queryParams: { input1: this.input1, input2: this.input2 }
    });
  }
}
