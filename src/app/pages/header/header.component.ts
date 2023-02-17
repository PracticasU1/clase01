import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(){
    this.items = [];
  }
  
  items: MenuItem[];
  ngOnInit() {
    this.items = [
        {
            label: 'Menu',
            items: [{
                    label: 'Usuario', 
                    icon: 'pi pi-fw pi-id-card',
                    items: [
                        {label: 'Email', icon: 'pi pi-fw pi-envelope'},
                        {label: 'Contraseña', icon: 'pi pi-fw pi-key'},
                    ]
                },
                {label: 'Login', icon: ' pi pi-fw pi-user'},
                {label: 'Register', icon: 'pi pi-fw pi-pencil'}
            ]

            
        },
        {
            label: 'Mar Rodríguez'
        }

    ];
}

}
