import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrapangular';
  
  constructor(private titleservice:Title,private meta:Meta,@Inject(DOCUMENT) private document:HTMLDocument){
    titleservice.setTitle("Blog Post - Start Bootstrap Template");
    meta.updateTag({name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"});
    meta.addTag({name:"description",content:""});
    meta.addTag({name:"author",content:""});
    document.getElementById('appFavicon')?.setAttribute('href','assets/favicon.ico');
  }
}
