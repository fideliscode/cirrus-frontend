import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DownloadfilesComponent } from './downloadfiles/downloadfiles.component';
import {routing} from "./app.routing";
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import {FileserviceService} from './fileservice.service';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DownloadfilesComponent,
    UploadfileComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    RouterModule,
    FormsModule
  ],
  providers: [FileserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
