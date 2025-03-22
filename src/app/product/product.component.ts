import { Component, OnInit , HostListener, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Location } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {Title} from "@angular/platform-browser";
import { GlobalService } from "../global.service";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  colors: Array<String>;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
};

export type ChartOptionsPie = {
  colors: Array<String>;
  series: Array<Number>;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent implements OnInit, AfterViewInit {

  constructor(private storage: AngularFireStorage, private location: Location, private elementRef: ElementRef,  private rdb: AngularFireDatabase,
    private title: Title, private gl: GlobalService) {
    this.chartOptions = {
      colors : ['#a4aaff', '#868eff', '#616bf0'],
      series: [
        {
          name: 'first',
          data: [0]
        },
        {
          name: 'second',
          data: [0]
        },
        {
          name: 'third',
          data: [0]
        }
        
      ],
      chart: {
        height: '100%',
        width: '100%',
        type: "bar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ["", "",  ""],
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false,
        showAlways: false,
        showForNullSeries: false,
        labels: {
          show: false,
        }
      },
      tooltip: {
        enabled: false
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      }
   }

   this.chartOptionsPie = {
    colors : [ '#ffbb67', '#4ecf47', '#44bded'],
    series: [],
    chart: {
      height: '100%',
      width: '100%',
      type: "pie",
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: [" ", " ",  " "],
    },
    yaxis: {
      show: false,
      showAlways: false,
      showForNullSeries: false,
      labels: {
        show: false,
      }
    },
    tooltip: {
      enabled: false
    },
    dataLabels: {
      enabled: true,
      formatter: function(value, { seriesIndex, dataPointIndex, w }) {
        const series = w.config.series[seriesIndex];
        const label = series.name;
        const formattedValue = Number(value).toFixed(0);
        return formattedValue;
      },
      style: {
        fontSize: '10px'
      }
    },
    legend: {
      show: false
    },
    stroke: {
      show: false
      //colors: ['#545454']
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -7,
          minAngleToShowLabel: 10
        }
      }
    }
    
 }
  }

  public chartOptions: Partial<ChartOptions>;
  public chartOptionsPie: Partial<ChartOptionsPie>;

  /* PAGE 1 - SET UP */
  /*                 */

    /* PAGE 1 - VARIABLES */
    heightThreshold: number = 900;
    heightThresholdMini: number = 660;
    heightThresholdMax: number = 1100;
    thresholdResize: number = 1170;
    thresholdResizeMobile: number = 600;
    thresholdResizeMobileMini: number = 405;
    fontSizeHeaderLarge: string = '20px';
    fontSizeHeaderMedium: string = '18px';
    fontSizeHeaderSmall: string = '14px';
    fontSizeHeader: string = '26px';
    displayFlag: string = "flex";
    displayFlagMobile: string = "flex";
    displayFlagFooter: string = "flex";
    displayFlagHeight: string = "flex";
    displayFlagMini: string = "flex";
    displayThirdRow: string = "flex";
    displayFourthRow: string = "flex";
    sectionImgHeight: number = 180;
    fontSize1: string = '22px';
    fontSize2: string = '22px';
    footerHeight: number = 0;

    /* PAGE 1 - PNG URLs */
    buildingURL = this.gl.prefixURL + 'assets/product/page1/building.jpeg';
    rapanuiURL = this.gl.prefixURL + 'assets/product/page1/rapanuiM.jpeg';
    trexURL = this.gl.prefixURL + 'assets/product/page1/trexM.jpeg';
    whaleURL = this.gl.prefixURL + 'assets/product/page1/whaleM.jpeg';
    metURL = this.gl.prefixURL + 'assets/product/page1/metM.jpeg';

  /*                 */

  /* PAGE 1 - ViewChild Set Up */
  /*                           */

    @ViewChild('cont', {static: true}) cont: ElementRef;
    @ViewChild('bubbleWrap', {static: true}) bubbleWrap: ElementRef;
    @ViewChild('page1', {static: true}) page1: ElementRef;
    @ViewChild('page2', {static: true}) page2: ElementRef;
    @ViewChild('page3', {static: true}) page3: ElementRef;
    @ViewChild('page4', {static: true}) page4: ElementRef;
    @ViewChild('bubble1', {static: true}) bubble1: ElementRef;
    @ViewChild('bubble2', {static: true}) bubble2: ElementRef;
    @ViewChild('bubble3', {static: true}) bubble3: ElementRef;
    @ViewChild('bubble4', {static: true}) bubble4: ElementRef;
    @ViewChild('imageRef') imageRef!: ElementRef<HTMLImageElement>;
    @ViewChild('heading') heading!: ElementRef;
    @ViewChild('wrapper') wrapper!: ElementRef;
    @ViewChild('footer') footer!: ElementRef;

/*                           */

  /* PAGE 2 - SET UP */

    windowHeightPage2: number = 0;
    circleWidth: number = 90;
    fontSizeText: string = '24px';
    page2Scrolled: boolean = false;
    fontSizeRow2: string = '22px';
    fontSizeRow3: string = '22px'; // Small 17px; Big is 22px;
    fontSizeHeaderPage2: string = '22px';
    acHeight: string = '100%';
    imgTextSize: string = '22px'; // Big: 22; Small: 20;
    displayFlagPage2Row2: string = "flex";
    page2row3mT: string = '-20px';

    /* PNG URLs */
    AshleyCoombesURL = this.gl.prefixURL + 'assets/product/page2/AshleyCoombes2.jpeg';
    NinaBrooksURL = this.gl.prefixURL + 'assets/product/page2/NinaBrooks.jpeg';
    SteveGlassURL = this.gl.prefixURL + 'assets/product/page2/SteveGlass3.jpeg';
    NewYorkURL = this.gl.prefixURL + 'assets/product/page2/NewYork.jpeg';
    LogisticsURL = this.gl.prefixURL + 'assets/product/page2/Logistics.jpeg';
    CloudURL = this.gl.prefixURL + 'assets/product/page2/Cloud.jpeg';
    OfficeURL = this.gl.prefixURL + 'assets/product/page2/Office.jpeg';
  /*                 */

  /* PAGE 3 - SET UP */
    windowHeightPage3: number = 0;
    nELogoURL = this.gl.prefixURL + 'assets/product/page3/whisk.png';
    activePage3 = 1;
    @ViewChild('scrollArea', {static: true}) scrollArea: ElementRef;
    @ViewChild('scrollEl', {static: true}) scrollEl: ElementRef;
    @ViewChild('scrollEl2', {static: true}) scrollEl2: ElementRef;
    @ViewChild('scrollEl3', {static: true}) scrollEl3: ElementRef;
    @ViewChild('row2_p3', {static: true}) row2_p3: ElementRef;
    @ViewChild('clickArea', {static: true}) clickArea: ElementRef;
    @ViewChild('clickArea2', {static: true}) clickArea2: ElementRef;
    @ViewChild('clickArea3', {static: true}) clickArea3: ElementRef;

    LocationURL = this.gl.prefixURL + 'assets/product/page3/Loc2.png';
    deliveryLogoURL = this.gl.prefixURL + 'assets/product/page3/Delivery.png';
    menuLogoURL = this.gl.prefixURL + 'assets/product/page3/Menu.png';
    qualityLogoURL = this.gl.prefixURL + 'assets/product/page3/Quality.png';
    AcsURL = this.gl.prefixURL + 'assets/product/page3/Acs.jpeg';
    RgcURL = this.gl.prefixURL + 'assets/product/page3/Rgc.jpeg';
    SbbURL = this.gl.prefixURL + 'assets/product/page3/Sbb.jpeg';
    fontSizepage3: string = '24px';
    fontSizepage3Heading: string = '26px';
  /*                 */

  /* PAGE 4 - SET UP */
    windowHeightPage4: number = 0;
    DumbbellURL = this.gl.prefixURL + 'assets/product/page4/Dumbbell.png';
    InstaURL = this.gl.prefixURL + 'assets/product/page4/Insta.png';
    GwURL = this.gl.prefixURL + 'assets/product/page4/Gw.jpeg';
    fontSizepage4Heading = '34px';
    fontSizepage4Row1 = '25px'; // SMALL 20px //25px BIG
    fontSizepage4Footer = '13px';
    emailError = false;
    @ViewChild('email', {static: true}) email: ElementRef;
    emailPlaceholderText = 'Enter email';
    emailSaved = false;

  /*                 */

  ngOnInit(): void {
    
    this.title.setTitle("Nik Pevnev - Product page lays out 4 views that customers can purchase for their needs. More feature will make your vision of what it needs to be look great. Contact webfromnik@gmail.com for more");


    /*                                          */
    /*  PAGES - WINDOW OBJECT VIEW LOGIC [INIT] */
    /*                                          */

      if ( window.innerWidth < this.thresholdResizeMobile) {
        if (window.innerWidth < this.thresholdResizeMobileMini) {
          this.pageWidth = '78%';

          // PAGE 2
          document.getElementById('pieChart').style.height = '64%';
          this.fontSizeHeaderPage2 = this.fontSizeHeaderLarge;
          this.acHeight = '100%';

          // PAGE 3
          this.fontSizepage3 = '18px';

        } else {
          this.pageWidth = '83%';

          // PAGE 2
          document.getElementById('pieChart').style.height = '75%';
          this.fontSizeHeaderPage2 = '24px';
          this.acHeight = '100%';

          // PAGE 3
          this.fontSizepage3 = '20px';

        }
        this.fontSizeHeader = this.fontSizeHeaderSmall;
        this.displayFlag = "none";
        this.sectionImgHeight = 100;
        this.fontSize1 = '19px';
        this.fontSize2 = '18px';
        this.displayFlagMobile = "none";
        this.displayThirdRow = "none";
        this.displayFourthRow = "none";
        this.displayFlagFooter = "none";

        // PAGE 2
        this.circleWidth = 75;
        this.fontSizeText = '21px';
        this.fontSizeRow2 = '19px';
        this.fontSizeRow3 = '17px';
        this.imgTextSize = '20px';
        this.displayFlagPage2Row2 = 'flex'; 
        this.page2row3mT = '-20px';

        // PAGE 3
        this.fontSizepage3Heading = '21px';

        // PAGE 4
        this.fontSizepage4Heading = '32px';
        this.fontSizepage4Row1 = '22px';
        this.fontSizepage4Footer = '13px';

      } else if ( window.innerWidth < this.thresholdResize) {
        this.pageWidth = '85%';
        this.fontSizeHeader = this.fontSizeHeaderSmall;
        this.displayFlag = "none";
        this.sectionImgHeight = 125;
        this.fontSize1 = '20px';
        this.fontSize2 = '20px';

        // PAGE 2
        this.circleWidth = 90;
        this.fontSizeText = '22px';
        this.fontSizeRow2 = '21px'; 
        document.getElementById('pieChart').style.height = '90%';
        this.fontSizeHeaderPage2 = '28px';
        this.fontSizeRow3 = '22px';
        this.acHeight = '100%';
        this.imgTextSize = '20px';
        this.displayFlagPage2Row2 = 'flex';
        this.page2row3mT = '10px';

        // PAGE 3
        this.fontSizepage3 = '23px';
        this.fontSizepage3Heading = '25px';

        // PAGE 4
        this.fontSizepage4Heading = '33px';
        this.fontSizepage4Row1 = '23px';
        this.fontSizepage4Footer = '17px';

        if (window.innerHeight < this.heightThresholdMini) {
          this.displayFlagMobile = "none";
          this.displayThirdRow = "none";
          this.displayFourthRow = "none";
          this.displayFlagFooter = "flex";

          // PAGE 2
          this.fontSizeText = '21px';
          this.fontSize2 = '18px';
          this.fontSize1 = '19px';
          this.displayFlagPage2Row2 = 'none';
          this.fontSizeRow3 = '18px';
          this.page2row3mT = '-5px';

          // PAGE 3
          this.fontSizepage3Heading = '23px';
          this.fontSizepage3 = '20px';

        } else if (window.innerHeight < this.heightThreshold) {
          this.displayFlagMobile = "flex";
          this.displayThirdRow = "none";
          this.displayFourthRow = "none";
          this.displayFlagFooter = "flex";
        } else if (window.innerHeight < this.heightThresholdMax) {
          this.displayFlagMobile = "flex";
          this.displayThirdRow = "flex";
          this.displayFourthRow = "none";
          this.displayFlagFooter = "flex";
        } else if (window.innerHeight > this.heightThresholdMax) {
          this.displayFlagMobile = "flex";
          this.displayThirdRow = "flex";
          this.displayFourthRow = "flex";
          this.displayFlagFooter = "flex";
        }
      
      } else {
        this.pageWidth = '85%';
        this.fontSizeHeader = this.fontSizeHeaderLarge;
        this.displayFlag = "flex";
        this.sectionImgHeight = 150;
        this.fontSize1 = '22px';
        this.fontSize2 = '23px';
        this.displayFlagMobile = "flex";
        this.displayFlagFooter = "flex";

        // PAGE 2
        this.circleWidth = 90;
        this.fontSizeText = '24px';
        this.fontSizeRow2 = '22px';
        document.getElementById('pieChart').style.height = '90%';
        this.fontSizeHeaderPage2 = '30px';
        this.fontSizeRow3 = '22px';
        this.acHeight = '100%';
        this.imgTextSize = '22px';
        this.displayFlagPage2Row2 = 'flex';
        this.page2row3mT = '10px';

        // PAGE 3
        this.fontSizepage3 = '24px';
        this.fontSizepage3Heading = '26px';

        // PAGE 4
        this.fontSizepage4Heading = '34px';
        this.fontSizepage4Row1 = '25px';
        this.fontSizepage4Footer = '19px';

        if (window.innerHeight < this.heightThresholdMini) {
          this.displayThirdRow = "none";
          this.displayFourthRow = "none";
        } else if (window.innerHeight < this.heightThreshold) {
          this.displayThirdRow = "none";
          this.displayFourthRow = "none";
        } else if (window.innerHeight < this.heightThresholdMax) {
          this.displayThirdRow = "flex";
          this.displayFourthRow = "none";
        } else if (window.innerHeight > this.heightThresholdMax) {
          this.displayThirdRow = "flex";
          this.displayFourthRow = "flex";
        }
      }

      if (window.innerHeight < this.heightThresholdMini) {
        this.displayFlagMini = "none";

        if (window.innerHeight < 550) {
        // PAGE 2
        this.displayFlagPage2Row2 = "none";
        }

      } else if (window.innerHeight < this.heightThreshold) {
        this.displayFlagMini = "flex";

        // PAGE 2
        this.displayFlagPage2Row2 = "flex";
      } else if (window.innerHeight > this.heightThreshold) {
        this.displayFlagMini = "flex";

        // PAGE 2
        this.displayFlagPage2Row2 = "flex";
      }

    /*                                   */


  }
  public int: number = 0;

  windowHeight: number = window.innerHeight;
  windowWidth: number = window.innerWidth;
  pageWidth: string = '90%';


  //public test: number = 0;

  @HostListener('window:resize', ['$event'])
    onResize(event) {

      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;

    /*                                            */
    /* PAGES - WINDOW OBJECT VIEW LOGIC [RESIZE] */
    /*                                            */

      if ( window.innerWidth < this.thresholdResizeMobile) {
        if (window.innerWidth < this.thresholdResizeMobileMini) {
          this.pageWidth = '78%';

          // PAGE 2
          document.getElementById('pieChart').style.height = '64%';
          this.fontSizeHeaderPage2 = this.fontSizeHeaderLarge;
          this.acHeight = '100%';

          // PAGE 3
          this.fontSizepage3 = '18px';

        } else {
          this.pageWidth = '83%';

          // PAGE 2
          document.getElementById('pieChart').style.height = '75%';
          this.fontSizeHeaderPage2 = '24px';
          this.acHeight = '100%';

          // PAGE 3
          this.fontSizepage3 = '20px';

        }
        this.fontSizeHeader = this.fontSizeHeaderSmall;
        this.displayFlag = "none";
        this.sectionImgHeight = 100;
        this.fontSize1 = '19px';
        this.fontSize2 = '18px';
        this.displayFlagMobile = "none";
        this.displayThirdRow = "none";
        this.displayFourthRow = "none";
        this.displayFlagFooter = "none";

        // PAGE 2
        this.circleWidth = 75;
        this.fontSizeText = '21px';
        this.fontSizeRow2 = '19px';
        this.fontSizeRow3 = '17px';
        this.imgTextSize = '20px';
        this.displayFlagPage2Row2 = 'flex'; 
        this.page2row3mT = '-20px';

        // PAGE 3
        this.fontSizepage3Heading = '21px';

        // PAGE 4
        this.fontSizepage4Heading = '32px';
        this.fontSizepage4Row1 = '22px';
        this.fontSizepage4Footer = '13px';

      } else if ( window.innerWidth < this.thresholdResize) {
        this.pageWidth = '85%';
        this.fontSizeHeader = this.fontSizeHeaderSmall;
        this.displayFlag = "none";
        this.sectionImgHeight = 125;
        this.fontSize1 = '20px';
        this.fontSize2 = '20px';

        // PAGE 2
        this.circleWidth = 90;
        this.fontSizeText = '22px';
        this.fontSizeRow2 = '21px'; 
        document.getElementById('pieChart').style.height = '90%';
        this.fontSizeHeaderPage2 = '28px';
        this.fontSizeRow3 = '22px';
        this.acHeight = '100%';
        this.imgTextSize = '20px';
        this.displayFlagPage2Row2 = 'flex';
        this.page2row3mT = '10px';

        // PAGE 3
        this.fontSizepage3 = '23px';
        this.fontSizepage3Heading = '25px';

        // PAGE 4
        this.fontSizepage4Heading = '33px';
        this.fontSizepage4Row1 = '23px';
        this.fontSizepage4Footer = '17px';

        if (window.innerHeight < this.heightThresholdMini) {
          this.displayFlagMobile = "none";
          this.displayThirdRow = "none";
          this.displayFourthRow = "none";
          this.displayFlagFooter = "flex";

          // PAGE 2
          this.fontSizeText = '21px';
          this.fontSize2 = '18px';
          this.fontSize1 = '19px';
          this.displayFlagPage2Row2 = 'none';
          this.fontSizeRow3 = '18px';
          this.page2row3mT = '-5px';

          // PAGE 3
          this.fontSizepage3Heading = '23px';
          this.fontSizepage3 = '20px';

        } else if (window.innerHeight < this.heightThreshold) {
          this.displayFlagMobile = "flex";
          this.displayThirdRow = "none";
          this.displayFourthRow = "none";
          this.displayFlagFooter = "flex";
        } else if (window.innerHeight < this.heightThresholdMax) {
          this.displayFlagMobile = "flex";
          this.displayThirdRow = "flex";
          this.displayFourthRow = "none";
          this.displayFlagFooter = "flex";
        } else if (window.innerHeight > this.heightThresholdMax) {
          this.displayFlagMobile = "flex";
          this.displayThirdRow = "flex";
          this.displayFourthRow = "flex";
          this.displayFlagFooter = "flex";
        }
      
      } else {
        this.pageWidth = '85%';
        this.fontSizeHeader = this.fontSizeHeaderLarge;
        this.displayFlag = "flex";
        this.sectionImgHeight = 150;
        this.fontSize1 = '22px';
        this.fontSize2 = '23px';
        this.displayFlagMobile = "flex";
        this.displayFlagFooter = "flex";

        // PAGE 2
        this.circleWidth = 90;
        this.fontSizeText = '24px';
        this.fontSizeRow2 = '22px';
        document.getElementById('pieChart').style.height = '90%';
        this.fontSizeHeaderPage2 = '30px';
        this.fontSizeRow3 = '22px';
        this.acHeight = '100%';
        this.imgTextSize = '22px';
        this.displayFlagPage2Row2 = 'flex';
        this.page2row3mT = '10px';

        // PAGE 3
        this.fontSizepage3 = '24px';
        this.fontSizepage3Heading = '26px';

        // PAGE 4
        this.fontSizepage4Heading = '34px';
        this.fontSizepage4Row1 = '25px';
        this.fontSizepage4Footer = '19px';

        if (window.innerHeight < this.heightThresholdMini) {
          this.displayThirdRow = "none";
          this.displayFourthRow = "none";
        } else if (window.innerHeight < this.heightThreshold) {
          this.displayThirdRow = "none";
          this.displayFourthRow = "none";
        } else if (window.innerHeight < this.heightThresholdMax) {
          this.displayThirdRow = "flex";
          this.displayFourthRow = "none";
        } else if (window.innerHeight > this.heightThresholdMax) {
          this.displayThirdRow = "flex";
          this.displayFourthRow = "flex";
        }
      }


      if (window.innerHeight < this.heightThresholdMini) {
      this.displayFlagMini = "none";
        
        if (window.innerHeight < 400) {
        // PAGE 2
        this.displayFlagPage2Row2 = "none";
        }

      } else if (window.innerHeight < this.heightThreshold) {
        this.displayFlagMini = "flex";

        // PAGE 2
        this.displayFlagPage2Row2 = "flex";
      } else if (window.innerHeight > this.heightThreshold) {
        this.displayFlagMini = "flex";

        // PAGE 2
        this.displayFlagPage2Row2 = "flex";
      }

    /*                                            */

    }
  


  /*                             */
  /* ALL - Bubble Scroll Set Up */
  /*                             */

    @HostListener('scroll', ['$event'])
    public activePage: number = 1;
    public newHeight: number = this.windowHeight;
    public initialized: boolean = false;

    ngAfterViewInit() {

      // ADD CSS SNAP LOGIC AFTER INIT - they trigger unwanted scroll behavior
      document.getElementById('page2').classList.add('snap');
      document.getElementById('page3').classList.add('snap');
      document.getElementById('page4').classList.add('snap');

      this.bubbleWrap.nativeElement.addEventListener('touchstart', (event) => {
        event.preventDefault();
      });

      this.bubble1.nativeElement.addEventListener('touchstart', (event) => {
        this.page1.nativeElement.scrollIntoView({ behavior: 'smooth' });
      });

      this.bubble2.nativeElement.addEventListener('touchstart', (event) => {
        this.page2.nativeElement.scrollIntoView({ behavior: 'smooth' });
      });

      this.bubble3.nativeElement.addEventListener('touchstart', (event) => {
        this.page3.nativeElement.scrollIntoView({ behavior: 'smooth' });
      });

      this.bubble4.nativeElement.addEventListener('touchstart', (event) => {
        this.page4.nativeElement.scrollIntoView({ behavior: 'smooth' });
      });

      /* PAGE 2 SET UP for PEBBLES */
        document.getElementById('p3SB1').style.backgroundColor = 'rgba(75, 153, 241, 0.8)';
        document.getElementById('p3SB2').style.backgroundColor = 'rgba(109, 168, 250, 0.5)';
        document.getElementById('p3SB3').style.backgroundColor = 'rgba(109, 168, 250, 0.5)';

        this.row2_p3.nativeElement.addEventListener('touchstart', (event) => {
          event.preventDefault();
        });
        
        this.clickArea.nativeElement.addEventListener('touchstart', (event) => {
          this.scrollEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
        });

        this.clickArea2.nativeElement.addEventListener('touchstart', (event) => {
          this.scrollEl2.nativeElement.scrollIntoView({ behavior: 'smooth' });
        });

        this.clickArea3.nativeElement.addEventListener('touchstart', (event) => {
          this.scrollEl3.nativeElement.scrollIntoView({ behavior: 'smooth' });
        });

      /*                           */

    }

    public animatedFlag: boolean = false;


    scrollPage(page) {
     
      if (page == 1) {
        this.page1.nativeElement.scrollIntoView({ behavior: 'smooth' });
      } else if (page == 2) {
        this.page2.nativeElement.scrollIntoView({ behavior: 'smooth' });
      } else if (page == 3) {
        this.page3.nativeElement.scrollIntoView({ behavior: 'smooth' });
      } else if (page == 4) {
        this.page4.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }


    scrollHandler(e) {
        
        var sT = this.cont.nativeElement.scrollTop;
        
        if (sT < (this.windowHeight * (2/3))) {
          this.activePage = 1;
          document.getElementById('bubOne').style.backgroundColor = 'rgba(34, 34, 34, 0.652)';
          document.getElementById('bubTwo').style.backgroundColor = 'rgba(86, 86, 86, 0.615)';
          document.getElementById('bubThree').style.backgroundColor = 'rgba(86, 86, 86, 0.615)';
          document.getElementById('bubFour').style.backgroundColor = 'rgba(86, 86, 86, 0.615)';
        } else if (sT > (this.windowHeight * (2/3)) && sT <= ((this.windowHeight * (2/3)) + this.windowHeight) ) {
          this.activePage = 2;
          document.getElementById('bubOne').style.backgroundColor = 'rgba(141, 198, 255, 0.868)';
          document.getElementById('bubTwo').style.backgroundColor = 'rgba(44, 83, 255, 0.652)';
          document.getElementById('bubThree').style.backgroundColor = 'rgba(141, 198, 255, 0.868)';
          document.getElementById('bubFour').style.backgroundColor = 'rgba(141, 198, 255, 0.868)';

          this.animateLogo();

          if (!this.page2Scrolled) {
            this.chartOptions.series = [{data: [10]}, {data: [20]}, {data: [30]}];
            this.chartOptionsPie.series = [10, 20, 40];
          }
          this.page2Scrolled = true;

        } else if (sT >  ((this.windowHeight * (2/3)) + this.windowHeight) && sT <= ((this.windowHeight * (2/3)) + this.windowHeight * 2) ) {
          this.activePage = 3;
          document.getElementById('bubOne').style.backgroundColor = 'rgb(227, 250, 109)';
          document.getElementById('bubTwo').style.backgroundColor = 'rgb(227, 250, 109)';
          document.getElementById('bubThree').style.backgroundColor = 'rgb(196, 223, 63)';
          document.getElementById('bubFour').style.backgroundColor = 'rgb(227, 250, 109)';
        } else if (sT >  ((this.windowHeight * (2/3)) + this.windowHeight*2))  {
          this.activePage = 4;
          document.getElementById('bubOne').style.backgroundColor = 'rgba(138, 82, 244, 0.3)';
          document.getElementById('bubTwo').style.backgroundColor = 'rgba(138, 82, 244, 0.3)';
          document.getElementById('bubThree').style.backgroundColor = 'rgba(138, 82, 244, 0.3)';
          document.getElementById('bubFour').style.backgroundColor = 'rgba(138, 82, 244, 0.652)';
        }

    }

  /*                             */


  /* HELPER FUNCTIONS */

    link(url) {
      window.open(url, "_blank");
    }

  /*                 */

  /* PAGE 2 FUNCTIONS */

    animateLogo() {
      document.getElementById("1").classList.add("active");
      document.getElementById("2").classList.add("active");
      document.getElementById("3").classList.add("active");
      document.getElementById("4").classList.add("active");
      document.getElementById("5").classList.add("active");
      document.getElementById("6").classList.add("active");
    }

    startEmail(email) {
      window.location.href = 'mailto:' + email;
    }

    onMouseEnter(el) {
      if (el == 'cP') {
        document.getElementById('cloudPhoto').classList.add('hoverEvent');
        document.getElementById('cPText').classList.add('hoverText');
      } else if (el == 'nP') {
        document.getElementById('newYorkPhoto').classList.add('hoverEvent');
      } else if (el == 'lP') {
        document.getElementById('logisticsPhoto').classList.add('hoverEvent');
      } else if (el == 'oP') {
        document.getElementById('officePhoto').classList.add('hoverEvent');
      }
    }

    onMouseLeave(el) {
      if (el == 'cP') {
        document.getElementById('cloudPhoto').classList.remove('hoverEvent');
        document.getElementById('cPText').classList.remove('hoverText');
        document.getElementById('cPText').classList.remove('hovered');
      } else if (el == 'nP') {
        document.getElementById('newYorkPhoto').classList.remove('hoverEvent');
      } else if (el == 'lP') {
        document.getElementById('logisticsPhoto').classList.remove('hoverEvent');
      } else if (el == 'oP') {
        document.getElementById('officePhoto').classList.remove('hoverEvent');
      }
    }

    fakeClick() {
        const element = this.elementRef.nativeElement.querySelector('nbPhoto');
        element.dispatchEvent(new MouseEvent('click'));
    }

  /*                  */


  /* PAGE 3 FUNCTIONS */

    scrollHandlerPage3(e) {
      var sT = this.scrollArea.nativeElement.scrollLeft;
      var sEW = this.scrollEl.nativeElement.offsetWidth;
    
      if (sT < (sEW * (2/3))) {
        this.activePage3 = 1;
        document.getElementById('p3SB1').style.backgroundColor = 'rgba(75, 153, 241, 0.8)';
        document.getElementById('p3SB2').style.backgroundColor = 'rgba(109, 168, 250, 0.5)';
        document.getElementById('p3SB3').style.backgroundColor = 'rgba(109, 168, 250, 0.5)';
      } else if (sT > (sEW * (2/3)) && sT <= ((sEW * (2/3)) + sEW) ) {
        this.activePage3 = 2;
        document.getElementById('p3SB1').style.backgroundColor = 'rgba(109, 168, 250, 0.5)';
        document.getElementById('p3SB2').style.backgroundColor = 'rgba(75, 153, 241, 0.8)';
        document.getElementById('p3SB3').style.backgroundColor = 'rgba(109, 168, 250, 0.5)';
      } else if (sT >  ((sEW * (2/3)) + sEW) && sT <= ((sEW * (2/3)) + sEW * 2) ) {
        this.activePage3 = 3;
        document.getElementById('p3SB1').style.backgroundColor = 'rgba(109, 168, 250, 0.5)';
        document.getElementById('p3SB2').style.backgroundColor = 'rgba(109, 168, 250, 0.5)';
        document.getElementById('p3SB3').style.backgroundColor = 'rgba(75, 153, 241, 0.8)';
      }
    }

    scrollPage3(page) {
      if (page == 1) {
        this.scrollEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
      } else if (page == 2) {
        this.scrollEl2.nativeElement.scrollIntoView({ behavior: 'smooth' });
      } else if (page == 3) {
        this.scrollEl3.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    startCall(tel) {
      window.location.href = 'tel:' + tel;
    }

  /*                  */

  /* PAGE 4 FUNCTIONS */

    saveEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(email)) {
        this.emailError = false;
        this.email.nativeElement.style.color = 'blue';
        this.email.nativeElement.value = 'Signed up!';
        this.emailSaved = true;
        this.savingEmail(email);
        setTimeout(() => {
          this.email.nativeElement.value = savedEmail;
          this.email.nativeElement.style.color = 'black';
          this.email.nativeElement.caretColor = 'black';
          this.email.nativeElement.value = '';
          this.emailSaved = false;
        }, 1000);
      } else {
        var savedEmail = this.email.nativeElement.value;
        this.emailError = true;
        this.emailSaved = false;
        this.email.nativeElement.style.color = 'red';
        this.email.nativeElement.value = 'Enter valid email';
        this.email.nativeElement.focus();
        setTimeout(() => {
          this.email.nativeElement.value = savedEmail;
          this.email.nativeElement.style.color = 'black';
          this.email.nativeElement.caretColor = 'black';
        }, 500);
      }    
    }

    checkEmail(email) {
      if (email !== '') {
        
      } else {
        this.emailError = false;
        this.emailSaved = false;
      }
    }

    savingEmail(email) {
      if (email.trim() !== '') {
        
        var date =  new Date(Date.now());
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var time = date.getTime();

        this.rdb.database.ref('page4/signUps/' + year + '_' + month + '/total').once('value', async data => {

          if (data.val()) {
            this.rdb.database.ref('page4/signUps/' + year + '_' + month + '/emails/' + (Number(data.val())+1)).update({
              email
            });
          } else {
            this.rdb.database.ref('page4/signUps/' + year + '_' + month + '/emails/' + (Number(1))).update({
              email
            });
          }

          this.rdb.database.ref('page4/signUps/' + year + '_' + month + '/total')
          .transaction(val => ++val , (err) => {
            if (err) { throw err; }
          });
  
          this.rdb.database.ref('page4/signUps/total')
          .transaction(val => ++val , (err) => {
            if (err) { throw err; }
          });

        });



      }
    }


  /*                  */

  /*                 */

}
