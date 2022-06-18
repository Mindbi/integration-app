import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationRoutingModule } from './integration-routing.module';

import { IntegrationComponent } from './list/integration.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    imports: [
        IntegrationRoutingModule,
        CommonModule,
        NzTableModule,
        NzDividerModule,
        NzButtonModule,
        NzIconModule
    ],
    declarations: [IntegrationComponent],
    exports: [IntegrationComponent]
})
export class IntegrationModule { }
