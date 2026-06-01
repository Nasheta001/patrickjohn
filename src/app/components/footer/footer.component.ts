import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  igamingLinks = [
    { label: 'Casino Reviews', path: '/services' },
    { label: 'Sports Betting', path: '/services' },
    { label: 'Affiliate Content', path: '/services' },
    { label: 'SEO Blog Posts', path: '/services' },
    { label: 'Ghostwriting', path: '/services' },
  ];

  academicLinks = [
    { label: 'Dissertations', path: '/services' },
    { label: 'Essays & Coursework', path: '/services' },
    { label: 'Nursing Papers', path: '/services' },
    { label: 'Online Classes', path: '/services' },
    { label: 'Business Writing', path: '/services' },
  ];

  quickLinks = [
    { label: 'About Me',     path: '/about' },
    { label: 'Services',     path: '/services' },
    { label: 'Portfolio',    path: '/portfolio' },
    { label: 'Contact',      path: '/contact' },
  ];

  socials = [
    { label: 'WA', icon: '💬', href: 'https://wa.me/27717225973' },
    { label: 'in', icon: 'in', href: '#' },
    { label: '𝕏',  icon: '𝕏',  href: '#' },
    { label: '✉',  icon: '✉',  href: 'mailto:patrickjohn@email.com' },
  ];
}
