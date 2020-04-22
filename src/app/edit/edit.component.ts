import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  jurusan : string;
  penjelasan : string;
  data = ['Informatika', 'DKV', 'Ilmu Komunikasi']
  penj = ['abc','abc','abc']
  constructor(private route : 
  
  ActivatedRoute) { }

  ngOnInit() {
  }
  
  submit() {
    for(var i = 0;i< this.data.length;i++) {
      if(this.data[i] == this.jurusan) {
        this.penj[i] = this.penjelasan;
      }
    }
  }

}