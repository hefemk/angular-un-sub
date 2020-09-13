import { Component } from '@angular/core';
import { ComponentHolderService } from 'src/lib/componen-holder.service';
import { ResourceService } from 'src/lib/resource-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private holder: ComponentHolderService,
        private resourceService: ResourceService) {}

    sendEvent(): void {
        this.holder.childComps.forEach(comp => comp.newMessage.next('Hello'));
    }

    updateResource(): void {
        this.resourceService.updateResource('Updated resource');
    }
}
