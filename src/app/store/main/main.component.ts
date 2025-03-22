import { Component, OnInit, HostListener, ViewChild, ElementRef, ViewContainerRef, ContentChild } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {TopComponent} from '../top/top.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainStoreComponent implements OnInit {

  constructor (private title: Title) { }
  

  imgs = new Array();
  windowHeight: number = window.innerHeight;
  windowWidth: number = window.innerWidth;
  logoURL: string = 'https://cdn.nikpevnev.com/store/design/logo2.png';
  cartURL: string = 'https://cdn.nikpevnev.com/store/design/cart.png';
  searchURL: string = 'https://cdn.nikpevnev.com/store/design/search.png';
  value: string = "";

  focused: boolean = false;
  routerActive: boolean = false;
  scrollTop: number = 0;

  @ViewChild('container', {static: true}) container: ElementRef;
  @ViewChild('searchGroup', {static: true}) searchGroup: ElementRef;
  @ViewChild('input', {static: true}) input: ElementRef;
  @ViewChild('searchInputI', {static: true}) searchInputI: ElementRef;
  @ViewChild('barArea', {static: true}) barArea: ElementRef;
  @ViewChild('frontPost1', {static: true}) frontPost1: ElementRef;
  @ViewChild('frontPost2', {static: true}) frontPost2: ElementRef;
  @ViewChild('frontPost3', {static: true}) frontPost3: ElementRef;
  @ViewChild('frontItemsArea', {static: true}) frontItemsArea: ElementRef;
  @ViewChild('carot1', {static: true}) carot1: ElementRef;
  @ViewChild('carot2', {static: true}) carot2: ElementRef;


  pload(...args: any[]): void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
    }
  }

  routerActivity(state) {
    this.routerActive = state;
  }

  ngOnInit(): void {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.title.setTitle("Nik Pevnev - Store page lays out a view that customers can purchase for their needs. More feature will make your vision of what it needs to be look great. Contact webfromnik@gmail.com for more");
    
    this.pload(
      this.logoURL,
      this.cartURL,
      this.searchURL
    );
  }

  ngOnDestroy() {
  }

  activePageMain = 1;

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

  scrolling(event) {
    //console.log(event.target.scrollTop);
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
      this.activePageMain = 1;
    } else if (sT > (sEW * (2/3)) && sT <= ((sEW * (2/3)) + sEW) ) {
      this.activePageMain = 2;
    } else if (sT >  ((sEW * (2/3)) + sEW) && sT <= ((sEW * (2/3)) + sEW * 2) ) {
      this.activePageMain = 3;
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
    this.carot1.nativeElement.addEventListener('touchstart', (event) => {
      event.preventDefault();
      this.scrollLeft(this.activePageMain);
    });
    this.carot2.nativeElement.addEventListener('touchstart', (event) => {
      event.preventDefault();
      this.scrollRight(this.activePageMain);
    });
  }

}
