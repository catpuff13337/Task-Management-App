import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IntlModule } from "@progress/kendo-angular-intl";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { WEB_API_URL } from './app-injection-tokens';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ChartsModule, WavesModule, MDBBootstrapModule } from 'angular-bootstrap-md'

import { JwtModule } from '@auth0/angular-jwt'
import { ACCOUNT } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Account } from './models/account';
import { AddingTaskDialogComponent } from './components/adding-task-dialog/adding-task-dialog.component';
import { UpdateTaskDialogComponent } from './components/update-task-dialog/update-task-dialog.component';
import { DatePipe } from '@angular/common';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, YearService, AgendaService, MonthAgendaService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

export function tokenGetter() {
  var jsonAcc = localStorage.getItem(ACCOUNT)

  if (!jsonAcc) {
    return null
  }

  var acc = JSON.parse(jsonAcc) as Account

  if (!acc) {
    return null
  }

  return acc.token
}

export function emailGetter() {
  var jsonAcc = localStorage.getItem(ACCOUNT)

  if (!jsonAcc) {
    return null
  }

  var acc = JSON.parse(jsonAcc) as Account

  if (!acc) {
    return null
  }

  return acc.email
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    LoginComponent,
    SignupComponent,
    AddingTaskDialogComponent,
    UpdateTaskDialogComponent,
    SchedulerComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IntlModule,
    LabelModule,
    DateInputsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDividerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,

    DropDownListModule,
    DateTimePickerModule,
    SwitchModule,
    ScheduleModule,
    RecurrenceEditorModule,
    TextBoxModule,
    ButtonModule,

    ChartsModule, 
    WavesModule,
    MDBBootstrapModule.forRoot(),

    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [environment.tokenWhiteListedDomains]
      }
    })
  ],
  providers: [{
    provide: WEB_API_URL,
    useValue: environment.webApi
  },
    DatePipe, 

    DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService, 
    YearService,
    AgendaService,
    MonthAgendaService,
    DragAndDropService,
    ResizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
