import { Component } from '@angular/core';
import { ResourceService } from '../resource-service';

@Component({
    selector: 'resource-subscriber-1',
    template: `
        <h1>Resource Subscriber 1</h1>
    `
})
export class ResourceSubscriber1Component {
    constructor(public resourceService: ResourceService) {
        resourceService.resource$.subscribe((resource: string) => {
            alert(`[R1] ${resource}`);
        });
    }
}
