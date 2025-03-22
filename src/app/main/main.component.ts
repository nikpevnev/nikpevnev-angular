import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import {Title} from "@angular/platform-browser";
import { GlobalService } from "../global.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private title: Title, private gl: GlobalService) { }

  @ViewChild('el', {static: true}) el: ElementRef;

  windowHeight: number = window.innerHeight;
  windowWidth: number = window.innerWidth;
  myImageURL: string = this.gl.prefixURL + 'assets/main/me.jpeg';
  desktopURL: string = this.gl.prefixURL + 'assets/main/Desktop.png';
  tabletURL: string = this.gl.prefixURL + 'assets/main/Tablet.png';
  phoneURL: string = this.gl.prefixURL + 'assets/main/Phone.png';
  windowThresholdMax: number = 1000;
  windowThresholdMobile: number = 600;
  windowThresholdMin: number = 380;
  fontSizeNav: number = 30;
  fontSizeNavText: number = 21;
  fontSizeRow1: number = 22;
  fontSizeRow2: number = 22;
  year: number;
  imgs = new Array();

  ngOnInit(): void {

    //this.loadImages();

    var date =  new Date(Date.now());
    var year = date.getFullYear();
    this.year = year;

    this.title.setTitle("Nik Pevnev - designing and creating web for customer needs. Nikolay Pevnev creations. Rates start from $299.");

    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    if (this.windowWidth < this.windowThresholdMin) {
      this.fontSizeNav = 28;
      this.fontSizeNavText = 23;
      this.fontSizeRow1 = 20;
      this.fontSizeRow2 = 21;
    } else if (this.windowWidth < this.windowThresholdMobile) {
      this.fontSizeNav = 30;
      this.fontSizeNavText = 23;
      this.fontSizeRow1 = 22;
      this.fontSizeRow2 = 21;
    } else if (this.windowWidth < this.windowThresholdMax) {
      this.fontSizeNav = 36;
      this.fontSizeNavText = 30;
      this.fontSizeRow1 = 26;
      this.fontSizeRow2 = 23;
    } else {
      this.fontSizeNav = 36;
      this.fontSizeNavText = 30;
      this.fontSizeRow1 = 26;
      this.fontSizeRow2 = 24;
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;

      if (this.windowWidth < this.windowThresholdMin) {
        this.fontSizeNav = 28;
        this.fontSizeNavText = 22;
        this.fontSizeRow1 = 20;
        this.fontSizeRow2 = 21;
      } else if (this.windowWidth < this.windowThresholdMobile) {
        this.fontSizeNav = 30;
        this.fontSizeNavText = 23;
        this.fontSizeRow1 = 22;
        this.fontSizeRow2 = 21;
      } else if (this.windowWidth < this.windowThresholdMax) {
        this.fontSizeNav = 36;
        this.fontSizeNavText = 30;
        this.fontSizeRow1 = 26;
        this.fontSizeRow2 = 23;
      } else {
        this.fontSizeNav = 36;
        this.fontSizeNavText = 30;
        this.fontSizeRow1 = 26;
        this.fontSizeRow2 = 24;
      }
    }

    startEmail(email) {
      window.location.href = 'mailto:' + email;
    }

    showImage(id) {
      document.getElementById(id).style.display = 'block';
      console.log('HERE')
    }

    link(url) {
      window.open(url, "_blank");
    }


}
