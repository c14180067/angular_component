import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  jurusan : string;
  penjelasan : string;
  data = ['Informatika', 'DKV', 'Ilmu Komunikasi']
  penj = ['abc','abc','abc']
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
  }
  submit() {
    this.data.push(this.jurusan);
    this.penj.push(this.penjelasan);
  }

}
