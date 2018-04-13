// App
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from 'alyle-ui/core';
import { LyButton } from './button';
import { LyRippleModule } from 'alyle-ui/ripple-minimal';
import { LyShadowService } from 'alyle-ui/shadow';
import { LyIconButton } from 'alyle-ui/icon-button';

@NgModule({
  imports: [CommonModule, LyRippleModule, ThemeModule],
  exports: [LyButton],
  declarations: [LyButton],
  providers: [LyShadowService],
})
export class LyButtonModule {}
