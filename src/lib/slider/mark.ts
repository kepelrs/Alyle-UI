import { untilComponentDestroyed } from '@alyle/ui';
import { Component, Input, Renderer2, ElementRef, ChangeDetectionStrategy, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { LySlider, гvalueToPercent, гbetween } from './slider';
import { LyTick } from './tick';

@Component({
  selector: 'ly-mark',
  templateUrl: 'mark.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LyMark implements OnInit, OnDestroy {
  /** @docs-private */
  readonly classes = this._slider.classes;

  private _markActiveClass?: string | null;

  @ViewChild(LyTick, { static: true}) _tick: LyTick;


  @Input() value: number;


  constructor(
    private _slider: LySlider,
    private _renderer: Renderer2,
    private _el: ElementRef
  ) {
    _renderer.addClass(_el.nativeElement, _slider.classes.mark);
  }

  ngOnInit() {
    this._renderer.insertBefore(this._slider._getHostElement(), this._tick._getHostElement(), this._slider._ticksRef.nativeElement);
    this._slider._changes.pipe(untilComponentDestroyed(this)).subscribe(() => {
      this._updateMark();
    });
  }

  private _updateMark() {
    const min = this._slider._minPercent;
    const max = this._slider._maxPercent;

    const className = this._slider.classes.markActive;
    const percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
    const pos = this._slider._calculatePosition(percent);

    if (гbetween(percent, min, max)) {
      this._markActiveClass = className;
      this._renderer.addClass(this._el.nativeElement, className);
    } else if (this._markActiveClass) {
      this._markActiveClass = null;
      this._renderer.removeClass(this._el.nativeElement, className);
    }

    this._renderer.setStyle(this._getHostElement(), 'bottom', null);
    this._renderer.setStyle(this._getHostElement(), 'left', null);
    this._renderer.setStyle(this._getHostElement(), 'right', null);
    this._renderer.setStyle(this._getHostElement(), pos.style, pos.value);

  }

  ngOnDestroy() { }

  private _getHostElement() {
    return this._el.nativeElement;
  }
}

