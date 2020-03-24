import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileUpload';
  userForm: any;
  form:any;
  constructor(private http: HttpClient) {
    this.userForm = new FormGroup({
      "file": new FormControl('')
    })
  }

  fileChange(event) {
    this.form = event.target.files[0];
  }

  submitFunc() {
    const fileData = new FormData();
    fileData.append('file', this.form);
    this.http.post("http://localhost:8000/file", fileData)
      .subscribe(res => {
        console.log("post successful");
      })
  }
}
