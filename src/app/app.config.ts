import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'results', component: ResultsComponent },
      { path: '**', redirectTo: '' }
    ]),
    HttpClientModule,
    FormsModule,
    MatProgressBarModule
  ],
  declarations: [
    HomeComponent,
    ResultsComponent
  ],
  providers: [],
  // Remove the bootstrap array here
})
export class AppModule { }
