import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    data = ['Informatika', 'DKV', 'Ilmu Komunikasi']
    penj = ['abc','abc','abc']
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    
  }

}