import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatStepperModule
} from '@angular/material';

import {TablesComponent} from '../components/tables/tables.component';
import {CardLotteryComponent} from './card-lottery/card-lottery.component';
import {CardEventsComponent} from './card-events/card-events.component';
import {BallLotteryComponent} from './ball-lottery/ball-lottery.component';
import {TableBallLotteryComponent} from './table-ball-lottery/table-ball-lottery.component';
import {AppModule} from '../app.module';
import {PipesModule} from '../pipes/pipes.module';
import { CardLottoComponent } from './card-lotto/card-lotto.component';


@NgModule({

  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    PipesModule
  ],
  declarations: [
    TablesComponent,
    CardLotteryComponent,
    CardEventsComponent,
    BallLotteryComponent,
    TableBallLotteryComponent,
    CardLottoComponent

  ],
  exports: [
    CommonModule,
    TablesComponent,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    CardLotteryComponent,
    CardEventsComponent,
    CardLottoComponent,
  ]
})
export class ComponentsModule {
}
