import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="navbar-container">
        <div class="logo">
          <a routerLink="/">
            <span class="logo-text">Portfolio</span>
          </a>
        </div>
        
        <button class="menu-toggle" (click)="toggleMenu()" [class.active]="menuOpen()">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" [class.active]="menuOpen()">
          <li><a routerLink="/" (click)="closeMenu()">Home</a></li>
          <li><a href="#projects" (click)="closeMenu()">Projects</a></li>
          <li><a href="#about" (click)="closeMenu()">About</a></li>
          <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
          <li>
            <button class="version-toggle" (click)="toggleVersion()" title="Switch version">
              <span *ngIf="isAnimeVersion()">PRO</span>
              <span *ngIf="!isAnimeVersion()">ANIME</span>
            </button>
          </li>
          <li>
            <button class="theme-toggle" (click)="toggleTheme()" title="Toggle dark mode">
              <span *ngIf="!isDarkMode()">🌙</span>
              <span *ngIf="isDarkMode()">☀️</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      background: var(--background-light);
      box-shadow: none;
      transition: all 0.3s ease;
      z-index: 1000;
      border-bottom: 3px solid transparent;

      @media (prefers-color-scheme: dark) {
        background: var(--background-dark);
      }

      &.scrolled {
        border-bottom: 3px solid var(--accent-red);
        box-shadow: var(--shadow);

        @media (prefers-color-scheme: dark) {
          box-shadow: var(--shadow-dark);
        }
      }
    }

    .navbar-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      a {
        font-size: 1.5rem;
        font-weight: 900;
        color: var(--text-light);
        position: relative;
        letter-spacing: -1px;

        @media (prefers-color-scheme: dark) {
          color: var(--text-dark);
        }

        &::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 3px;
          background: var(--accent-red);
          transform: scaleX(1);
          transition: all 0.3s ease;
        }

        &:hover::before {
          box-shadow: var(--glow-red);
        }
      }
    }

    .logo-text {
      letter-spacing: -2px;
      font-weight: 900;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
      align-items: center;

      li {
        a {
          font-weight: 900;
          color: var(--text-light);
          position: relative;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;

          @media (prefers-color-scheme: dark) {
            color: var(--text-dark);
          }

          &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 0;
            height: 3px;
            background: var(--accent-red);
            transition: all 0.3s ease;
            box-shadow: var(--glow-red);
          }

          &:hover {
            color: var(--accent-red);
          }

          &:hover::after {
            width: 100%;
          }
        }
      }
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 24px;

      span {
        width: 100%;
        height: 3px;
        background: var(--text-light);
        border-radius: 1px;
        transition: all 0.3s ease;

        @media (prefers-color-scheme: dark) {
          background: var(--text-dark);
        }
      }

      &.active {
        span:first-child {
          transform: rotate(45deg) translate(10px, 10px);
          background: var(--accent-red);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:last-child {
          transform: rotate(-45deg) translate(8px, -8px);
          background: var(--accent-red);
        }
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }

    .theme-toggle {
      background: transparent;
      border: 2px solid var(--accent-red);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      box-shadow: var(--glow-red);

      @media (prefers-color-scheme: dark) {
        border: 2px solid var(--accent-red);
      }

      &:hover {
        transform: scale(1.15) rotate(25deg);
        box-shadow: var(--glow-red-intense);
      }
    }

    .version-toggle {
      background: transparent;
      border: 2px solid var(--accent-red);
      color: var(--accent-red);
      width: 50px;
      height: 40px;
      border-radius: 0;
      font-size: 0.8rem;
      font-weight: 900;
      font-family: 'JetBrains Mono', monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      box-shadow: var(--glow-red);
      letter-spacing: 1px;

      &:hover {
        transform: scale(1.1);
        box-shadow: var(--glow-red-intense);
        background: var(--accent-red);
        color: #ffffff;
      }
    }

    @media (max-width: 768px) {
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        flex-direction: column;
        gap: 1.5rem;
        padding: 2rem;
        background: var(--background-light);
        box-shadow: var(--shadow);
        display: none;
        transition: all 0.3s ease;
        border-top: 3px solid var(--accent-red);

        @media (prefers-color-scheme: dark) {
          background: var(--background-dark);
          box-shadow: var(--shadow-dark);
        }

        &.active {
          display: flex;
        }

        li {
          a {
            &::after {
              display: none;
            }

            &:hover {
              color: var(--accent-red);
              text-shadow: var(--glow-red);
            }
          }
        }
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);
  isDarkMode = signal(this.getPreferredColorScheme() === 'dark');
  isAnimeVersion = signal(this.getStoredVersion() === 'anime');

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    if (this.isDarkMode()) {
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.style.colorScheme = 'light';
    }
  }

  toggleVersion() {
    this.isAnimeVersion.update(v => {
      const newValue = !v;
      const version = newValue ? 'anime' : 'professional';
      localStorage.setItem('portfolio-version', version);
      document.documentElement.setAttribute('data-version', version);
      return newValue;
    });
  }

  private getPreferredColorScheme(): string {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }

  private getStoredVersion(): string {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('portfolio-version') || 'anime';
    }
    return 'anime';
  }

  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedVersion = localStorage.getItem('portfolio-version') || 'anime';
      document.documentElement.setAttribute('data-version', storedVersion);
    }
  }
}
