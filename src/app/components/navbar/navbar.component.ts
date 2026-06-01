import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  links = [
    { path: '/',          label: 'Home',       exact: true },
    { path: '/about',     label: 'About',      exact: false },
    { path: '/services',  label: 'Services',   exact: false },
    { path: '/portfolio', label: 'Portfolio',  exact: false },
    { path: '/contact',   label: 'Contact',    exact: false },
  ];

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 60); }

  toggleMenu(): void { this.menuOpen.set(!this.menuOpen()); }
  closeMenu(): void  { this.menuOpen.set(false); }
}
