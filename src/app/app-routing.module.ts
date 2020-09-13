import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/lib/home/home.component';
import { ParentComponent } from 'src/lib/parent/parent.component';
import { ResourceSubscriber1Component } from 'src/lib/resource-subscriber/resource-subscriber-1.component';
import { ResourceSubscriber2Component } from 'src/lib/resource-subscriber/resource-subscriber-2.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'r1', component: ResourceSubscriber1Component },
    { path: 'r2', component: ResourceSubscriber2Component },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
