import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  constructor(private http: HttpClient){}

  ngOnInit() {
  }
 selectedFile: File  = null;

  onFileSelected(event){
	  	this.selectedFile = <File>event.target.files[0];
	  	console.log(this.selectedFile.name);
	    }
  onUpload(form: NgForm){
		   const fd = new FormData();
		   console.log(this.selectedFile.name);
		   fd.append('title', form.value.title);
		   fd.append('description', form.value.description);
		   fd.append('file', this.selectedFile);
   

     this.http.post('http://127.0.0.1:8000/api/files', fd)
    .subscribe(
      response => console.log(response),
      err => console.error(err),
      ()=> alert('File Uploaded')
        );
      form.reset();
  }
  
}
