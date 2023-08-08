import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  selectCase: any = {
    HEADER_MENU: 'headerMenu',
  };
  headerLogo = 'assets/img/logo_1.png';
  headerMenuList: any = [
    {id: 'homepage', name: 'Homepage', isActive: true},
    {id: 'service', name: 'Service', isActive: false},
    {id: 'benefit', name: 'Benefit', isActive: false},
    {id: 'gallery', name: 'Gallery', isActive: false},
    {id: 'testimonials', name: 'Testimonials', isActive: false},
    {id: 'contact', name: 'Contact', isActive: false},
  ];
  headerLanguageList: any = [
    {name: 'Tiếng việt', icon: 'assets/img/vn-flag-1.png'},
    {name: 'English', icon: 'assets/img/vn-flag-1.png'}
  ];

  bannerLink: string = 'https://img.freepik.com/free-vector/ornamental-vintage-floral-background_23-2148331600.jpg?w=2000';

  ngOnInit(): void {

  }

  onSelect(selectCase: any, i: any) {
    switch (selectCase) {
      case this.selectCase.HEADER_MENU: {
        if (i >= 0 && this.headerMenuList[i]) {
          this.headerMenuList.forEach((d:any) => d.isActive = false);
          this.headerMenuList[i].isActive = true;
        }
        break;
      }
    }
  }
}
