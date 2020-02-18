import {NgModule, ModuleWithProviders} from '@angular/core';
import {GetImageWPPipe} from './get-image-wp.pipe';

@NgModule({
  imports: [],
  declarations: [GetImageWPPipe],
  exports: [GetImageWPPipe]
})
export class PipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PipesModule,
    };
  }
}
