import { ExperimentalModule } from './experimental/experimental.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxRefaiModule} from 'ngx-refai';
import { AppComponent } from './app.component';
import { NgxTimePickerDirective } from './ngx-time-picker.directive';
import { ClockserviceService } from './clockservice.service';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NgxTimePickerDirective,
 ],
  imports: [
    BrowserModule,
    NgxRefaiModule,
    ExperimentalModule,
    FormsModule
  ],
  providers: [ClockserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
