import { Component, OnInit, NgModule } from '@angular/core';

declare function showSlides():any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    showSlides();
  }
 

}
