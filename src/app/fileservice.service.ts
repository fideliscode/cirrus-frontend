import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {File } from "./file.interface";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class FileserviceService {
filearray:File[];

  constructor(private http: HttpClient) { }

public getFilesList():Observable<File[]>
{
	return this.http.get<File[]>('http://127.0.0.1:8000/api/getAllFiles');
	
}
 
 public getthefiles(){
 	this.getFilesList().subscribe(
 		(files: File[]) => 
 		{this.filearray = files;console.log(this.filearray);})
 }

 
}



 