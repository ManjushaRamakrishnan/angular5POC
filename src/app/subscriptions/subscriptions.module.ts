import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions.component';
// import { ApplicationPipesModule } from '../../../application-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    PipesModule
  ],
  declarations: [SubscriptionsComponent],
  exports: [SubscriptionsComponent]
})
export class SubscriptionsModule { }
