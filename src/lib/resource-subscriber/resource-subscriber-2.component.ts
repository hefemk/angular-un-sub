import { Component } from '@angular/core';
import { ResourceService } from '../resource-service';

@Component({
    selector: 'resource-subscriber-2',
    template: `
        <h1>Resource Subscriber 2</h1>
    `
})
export class ResourceSubscriber2Component {
    constructor(public resourceService: ResourceService) {
        resourceService.resource$.subscribe((resource: string) => {
            alert(`[R2] ${resource}`);
        });
    }
}
