import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './list/user.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    imports: [
        UserRoutingModule,
        CommonModule,
        NzTableModule,
        NzDividerModule,
        NzButtonModule,
        NzIconModule
    ],
    declarations: [UserComponent],
    exports: [UserComponent]
})
export class UserModule { }
