import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateContentComponent } from './create-content.component';

const routes: Routes = [{ path: '', component: CreateContentComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateContentRoutingModule { }
