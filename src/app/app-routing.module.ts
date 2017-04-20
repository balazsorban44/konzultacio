import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KonziComponent } from "app/konzi/konzi.component";
import { FaqComponent } from "app/faq/faq.component";

const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'konzultalnek' },
  { path: 'konzultalnek', component: KonziComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'konzultalnek' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
}) 
export class AppRoutingModule { }