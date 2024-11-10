import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LayoutService } from '../layout/service/app.layout.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    standalone: true,
    imports: [RouterOutlet, CommonModule, StyleClassModule , DividerModule, ChartModule, PanelModule, ButtonModule,RouterModule]
})
export class LandingComponent {

  title = 'fraespa';
  link1 = 'https://wa.link/g3rtzm';
  link2 = 'https://wa.link/w45d3i';
  link3 = 'https://wa.link/6apoja';
  link4 = 'https://wa.me/c/56995309391';
  layoutService = inject(LayoutService);
  router = inject(Router);

  constructor() {
    console.log(this.layoutService.config())
   }

   get theme(): string {
     console.log(this.layoutService.config().theme);
     return this.layoutService.config().theme;
 }

  navigateToSection(sectionId: string) {
    this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Calcula la posición con el desplazamiento horizontal
            const targetPosition = element.offsetTop - 100; // Ajusta el valor de -20 según tus necesidades
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        // Oculta el menú (como en la respuesta anterior)
        const menuElement = document.getElementById('menu');
        if (menuElement) {
            menuElement.classList.add('hidden');
        }
    });
  }

  navigateToPage(page: string) {
    this.router.navigate([page]);
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
