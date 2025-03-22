import { Component, OnInit, HostListener, ViewChild, ElementRef, ViewContainerRef, Renderer2, AfterViewInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl} from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import {TopComponent} from '../top/top.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private title: Title, private router: Router, private location: Location, private renderer: Renderer2) { }


  ngOnDestroy() {
    //console.log('LIST EMIT: ' + this.scrollTop);
  }

  imgs = new Array();
  windowHeight: number = window.innerHeight;
  windowWidth: number = window.innerWidth;


  @ViewChild('container', {static: true}) container: ElementRef;

  searchForm = new FormGroup({
    searchInput: new FormControl('', [
      //Validators.required
    ]),
  });

  pload(...args: any[]): void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
    }
  }


  //restoreScrollPosition(x) {
    //this.container.nativeElement.scrollTop = x;
  //}

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];


  scrollMain: number = 0;
  
  ngOnInit(): void {

    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.title.setTitle("Nik Pevnev - Store page lays out a view that customers can purchase for their needs. More feature will make your vision of what it needs to be look great. Contact webfromnik@gmail.com for more");
    
  
  }

  //activePage = 1;

  @HostListener('scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }



}
