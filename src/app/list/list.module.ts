import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ListPageRoutingModule} from './list-routing.module';

import {ListPage} from './list.page';
import {TaskComponent} from './task/task.component';
import {DetailsComponent} from './details/details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListPageRoutingModule,
    ],
    exports: [
        ListPage
    ],
    declarations: [ListPage, TaskComponent, DetailsComponent]
})
export class ListPageModule {
}
