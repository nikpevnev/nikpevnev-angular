import { Component, OnInit, HostListener, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor( private title: Title, private router: Router, private location: Location) { }

  imgs = new Array();
  windowHeight: number = window.innerHeight;
  windowWidth: number = window.innerWidth;
  logoURL: string = 'https://cdn.nikpevnev.com/store/design/logo2.png';
  cartURL: string = 'https://cdn.nikpevnev.com/store/design/cart.png';
  searchURL: string = 'https://cdn.nikpevnev.com/store/design/search.png';
  value: string = "";

  focused: boolean = false;
  routerActive: boolean = false;
  public scrollTop: number = 0;

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

  routerActivity(state) {
    this.routerActive = state;
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
    
  }
 

}
