import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SPINNER_OVERLAY_TEXT } from '@core/components/spinner-overlay/spinner-overlay.model';

@Component({
  selector : 'pf-spinner-overlay',
  styleUrls : ['spinner-overlay.component.scss'],
  templateUrl : 'spinner-overlay.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
class SpinnerOverlayComponent {
  public readonly spinnerOverlayText : string = SPINNER_OVERLAY_TEXT;
}

export {
  SpinnerOverlayComponent
};
