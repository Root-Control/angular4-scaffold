import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
	public items : {}
  constructor() {
  	this.items = [{
  		option: 'Sidebar',
  		href: '/',
  		class: 'fa fa-pencil fa-fw'
  	}]
  }

  ngOnInit() {
  }

}
