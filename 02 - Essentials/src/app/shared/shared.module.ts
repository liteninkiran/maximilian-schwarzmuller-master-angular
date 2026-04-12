// Angular Modules
import { NgModule } from '@angular/core';

// Components
import { Card } from './card/card';

@NgModule({
  declarations: [Card],
  exports: [Card],
})
export class SharedModule {}
