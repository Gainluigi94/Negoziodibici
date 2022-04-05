import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { AgGridModule } from '@ag-grid-community/angular';
import { DxDataGridModule,
   DxTooltipModule,
    DxLoadPanelModule,
     DxFileUploaderModule,
      DxButtonModule,
       DxTreeMapModule,
       DxTabPanelModule,
        DxTemplateModule,
         DxTemplateHost,
          DxDropDownBoxModule,
           DxFormModule, 
           DxPopoverModule} from 'devextreme-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './persona/persona.component';
import { UserComponent } from './User/user.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PersonaComponent,UserComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,AgGridModule.withComponents([]),
    FormsModule,
    DxButtonModule,
    DxDataGridModule,
    DxTooltipModule,
    DxLoadPanelModule,
    DxFileUploaderModule,
    DxTreeMapModule,
    DxTabPanelModule,
DxPopoverModule,
    DxTabPanelModule,
    BrowserAnimationsModule,
	
    DxTemplateModule,
    DxDropDownBoxModule,
    DxFormModule,ReactiveFormsModule,
    RouterModule.forRoot([
    {path: '', component: HomeComponent, pathMatch: 'full' },
    {path:'Registrati', component: PersonaComponent,pathMatch:'full'},
    {path:'Accedi', component: UserComponent,pathMatch:'full'},
    


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
