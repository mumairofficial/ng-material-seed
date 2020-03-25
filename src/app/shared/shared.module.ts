import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialFeaturesModule } from './material-features.module';

@NgModule({
  imports: [],
  exports: [
    // vendor
    CommonModule,
    RouterModule,

    // material
    MaterialFeaturesModule,
  ],
})
export class SharedModule {}
