import {Routes, RouterModule} from "@angular/router";
import {DownloadfilesComponent} from "./downloadfiles/downloadfiles.component";
import {UploadfileComponent} from "./uploadfile/uploadfile.component";
import {AppComponent} from "./app.component";
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
{path: '', component:HomeComponent},
{path: 'Upload', component: UploadfileComponent},
{path: 'files', component: DownloadfilesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);