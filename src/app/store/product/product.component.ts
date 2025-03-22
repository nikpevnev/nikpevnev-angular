import { Component, OnInit } from '@angular/core';
import {TopComponent} from '../top/top.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  windowHeight: number = window.innerHeight;
  windowWidth: number = window.innerWidth;
  ngOnInit(): void {
  }

}
