import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <!-- Background Animations -->
    <div class="background-effects">
      <!-- Fire Particles -->
      <div class="fire-particle"></div>
      <div class="fire-particle"></div>
      <div class="fire-particle"></div>
      <div class="fire-particle"></div>

      <!-- Wind Particles -->
      <div class="wind-particle"></div>
      <div class="wind-particle"></div>
      <div class="wind-particle"></div>

      <!-- Falling Leaves -->
      <div class="falling-leaf"></div>
      <div class="falling-leaf"></div>
      <div class="falling-leaf"></div>
      <div class="falling-leaf"></div>
      <div class="falling-leaf"></div>
    </div>

    <app-navbar></app-navbar>
    <main class="main-content">
      <app-hero></app-hero>
      <app-projects></app-projects>
      <app-about></app-about>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      overflow-x: hidden;
    }

    .background-effects {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }
  `]
})
export class App {}
