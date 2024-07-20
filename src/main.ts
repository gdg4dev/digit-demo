import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HomeComponent } from './app/home/home.component';
import { ResultsComponent } from './app/results/results.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'results', component: ResultsComponent },
        { path: '**', redirectTo: '' }
      ]),
      FormsModule,
      MatProgressBarModule
    )
  ]
})
.catch(err => console.error(err));
