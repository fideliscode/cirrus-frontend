import { Component, OnInit } from '@angular/core';
import {File } from "../file.interface";
import {FileserviceService } from "../fileservice.service";

@Component({
  selector: 'app-downloadfiles',
  templateUrl: './downloadfiles.component.html',
  styleUrls: ['./downloadfiles.component.css']
})
export class DownloadfilesComponent implements OnInit {
   file:  File;
   files: File[] = [];
   downloaadUrl="";
  
   
  constructor(private fileservice:FileserviceService) { 
  	this.fileservice.getFilesList().subscribe((files: File[]) => {this.files = files;
      console.log(this.files);
    },
  		(error: Response)=>{console.log(error);} );
   this.downloaadUrl="";
  }

  ngOnInit() {
  }
    onDownload(currentfile: File){
this.downloaadUrl="http://127.0.0.1:8000/api/downloadFile/" + currentfile.id;
console.log(this.downloaadUrl);
window.open(this.downloaadUrl,'_blank');
    }
}
