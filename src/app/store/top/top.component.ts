import { Component, OnInit, HostListener, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { GlobalService } from "../../global.service";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor( private title: Title, private router: Router, private location: Location, private gl: GlobalService) { }

  imgs = new Array();
  windowHeight: number = window.innerHeight;
  windowWidth: number = window.innerWidth;

  logoURL: string = this.gl.prefixURL + 'assets/store/design/logo2.png';
  cartURL: string = this.gl.prefixURL + 'assets/store/design/cart.png';
  searchURL: string = this.gl.prefixURL + 'assets/store/design/search.png';
  value: string = "";

  focused: boolean = false;
  routerActive: boolean = false;
  public scrollTop: number = 0;

  @ViewChild('container', {static: true}) container: ElementRef;
  @ViewChild('searchGroup', {static: true}) searchGroup: ElementRef;
  @ViewChild('input', {static: true}) input: ElementRef;
  @ViewChild('searchInputI', {static: true}) searchInputI: ElementRef;
  @ViewChild('barArea', {static: true}) barArea: ElementRef;
  @ViewChild('frontPost1', {static: true}) frontPost1: ElementRef;
  @ViewChild('frontPost2', {static: true}) frontPost2: ElementRef;
  @ViewChild('frontPost3', {static: true}) frontPost3: ElementRef;
  @ViewChild('frontItemsArea', {static: true}) frontItemsArea: ElementRef;

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

  scrolling(event) {
    this.scrollTop = event.target.scrollTop;
  }

  scrollMain: number = 0;

  ngOnInit(): void {




    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.title.setTitle("Nik Pevnev - Store page lays out a view that customers can purchase for their needs. More feature will make your vision of what it needs to be look great. Contact webfromnik@gmail.com for more");
    
    this.pload(
      this.logoURL,
      this.cartURL,
      this.searchURL
    );

    /*this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev:any) => {
        if (ev instanceof NavigationStart) {
            if (ev.url != this.lastPoppedUrl)
                this.yScrollStack.push(this.container.nativeElement.scrollTop);
        } else if (ev instanceof NavigationEnd) {
            if (ev.url == this.lastPoppedUrl) {
                this.lastPoppedUrl = undefined;
                console.log("NAV BACK - INITIAL WINDOW EVENT");
                window.scrollTo(0, this.yScrollStack.pop());
            } else
                console.log("NAV BACK - INITIAL WINDOW EVENT");
                window.scrollTo(0, 0);
        }
    });*/

  
  }


  @HostListener('scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    if (this.windowWidth <= 1000) {
      if (this.focused == true) {
        // Focus on searchPopUpBar input
        document.getElementById("searchIn").focus();
      }
    } else {
      if (this.focused == true) {
        // Focus on topBar input
        document.getElementById("searchIn").focus();
      }
    }
  }


  openNav() {
    this.container.nativeElement.scrollTop = 0;
    document.getElementById("mySidenav").style.width = "225px";
    document.getElementById("mySidenavBack").style.width = "100%";
    document.getElementById('mySidenavBack').classList.add('active');
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setTimeout(() => {
      document.getElementById("mySidenavBack").style.width = "0";
    }, 100);
    document.getElementById('mySidenavBack').classList.remove('active');
  }



  changeColor(s) {
    if (s == 'f') {
      document.getElementById("searchGroup").style.borderColor = 'rgb(94, 164, 255)';
      this.focused = true;
    } else {
      document.getElementById("searchGroup").style.borderColor = 'rgb(1, 1, 141)';
      this.focused = false;
    }
  }

  blurInput() {}

  scrollHandlerFrontItems(e) {
    var sT = this.frontItemsArea.nativeElement.scrollLeft;
    var sEW = this.frontPost1.nativeElement.offsetWidth;
  
    if (sT < (sEW * (2/3))) {
     // this.activePage = 1;
    } else if (sT > (sEW * (2/3)) && sT <= ((sEW * (2/3)) + sEW) ) {
     // this.activePage = 2;
    } else if (sT >  ((sEW * (2/3)) + sEW) && sT <= ((sEW * (2/3)) + sEW * 2) ) {
     // this.activePage = 3;
    }
  }

  scrollLeft(activePage) {
    //e.preventDefault();
    if (activePage == 1 ) {
      // DO NOTHING
    } else if (activePage == 2 ) {
      this.frontPost1.nativeElement.scrollIntoView({ block: 'nearest' });
    } else if (activePage == 3 ) {
      this.frontPost2.nativeElement.scrollIntoView({ block: 'nearest' });
    }
  }

  scrollRight(activePage) {
    //e.preventDefault();
    if (activePage == 1 ) {
      this.frontPost2.nativeElement.scrollIntoView({ block: 'nearest' });
    } else if (activePage == 2 ) {
      this.frontPost3.nativeElement.scrollIntoView({ block: 'nearest' });
    } else if (activePage == 3 ) {
      // DO NOTHING
    }
  }

  ngAfterViewInit() {

  }

}


