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
      border-bottom: 1px solid transparent;

      @media (prefers-color-scheme: dark) {
        background: var(--background-dark);
      }

      &.scrolled {
        box-shadow: var(--shadow);
        border-bottom: 1px solid var(--border-light);

        @media (prefers-color-scheme: dark) {
          box-shadow: var(--shadow-dark);
          border-bottom: 1px solid var(--border-dark);
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
        font-weight: 700;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .logo-text {
      letter-spacing: -0.5px;
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
          font-weight: 500;
          color: var(--text-light);
          position: relative;
          transition: color 0.3s ease;

          @media (prefers-color-scheme: dark) {
            color: var(--text-dark);
          }

          &::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: width 0.3s ease;
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
      gap: 5px;
      background: none;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 24px;

      span {
        width: 100%;
        height: 3px;
        background: var(--text-light);
        border-radius: 2px;
        transition: all 0.3s ease;

        @media (prefers-color-scheme: dark) {
          background: var(--text-dark);
        }
      }

      &.active {
        span:first-child {
          transform: rotate(45deg) translate(8px, 8px);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:last-child {
          transform: rotate(-45deg) translate(7px, -7px);
        }
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }

    .theme-toggle {
      background: var(--surface-light);
      border: 1px solid var(--border-light);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (prefers-color-scheme: dark) {
        background: var(--surface-dark);
        border: 1px solid var(--border-dark);
      }

      &:hover {
        transform: scale(1.1) rotate(20deg);
      }
    }

    @media (max-width: 768px) {
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        background: var(--background-light);
        box-shadow: var(--shadow);
        display: none;
        transition: all 0.3s ease;

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
              color: var(--primary-color);
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

  private getPreferredColorScheme(): string {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }
}
