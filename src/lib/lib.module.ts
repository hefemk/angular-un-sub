import { NgModule } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { ComponentHolderService } from './componen-holder.service';
import { ResourceService } from './resource-service';
import { ResourceSubscriber1Component } from './resource-subscriber/resource-subscriber-1.component';
import { ResourceSubscriber2Component } from './resource-subscriber/resource-subscriber-2.component';

@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent,
        HomeComponent,
        ResourceSubscriber1Component,
        ResourceSubscriber2Component,
    ],
    providers: [
        ComponentHolderService,
        ResourceService,
    ],
    exports: [
        ParentComponent,
        ChildComponent,
        HomeComponent,
        ResourceSubscriber1Component,
        ResourceSubscriber2Component,
    ]
})
export class LibModule {}
