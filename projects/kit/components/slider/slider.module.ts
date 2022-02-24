import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiActiveZoneModule,
    TuiFocusableModule,
    TuiFocusVisibleModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiFormatNumberPipeModule} from '@taiga-ui/core';

import {TuiSliderComponent} from './slider.component';
import {TuiSliderKeyStepsDirective} from './slider-key-steps.directive';
import {TuiSliderOldComponent} from './slider-old.component';

@NgModule({
    imports: [
        CommonModule,
        TuiRepeatTimesModule,
        TuiFocusableModule,
        TuiFocusVisibleModule,
        TuiActiveZoneModule,
        TuiFormatNumberPipeModule,
    ],
    declarations: [TuiSliderComponent, TuiSliderKeyStepsDirective, TuiSliderOldComponent],
    exports: [TuiSliderComponent, TuiSliderKeyStepsDirective, TuiSliderOldComponent],
})
export class TuiSliderModule {}
