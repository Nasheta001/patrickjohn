import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  credentials = [
    { icon: '📻', title: '32 FM 94.9 — Radio Broadcaster',       desc: 'On-air personality and content creator building brand equity and public influence across South African media markets.', color: 'rgba(201,168,76,0.12)' },
    { icon: '🎯', title: 'Managing Editor — bwise Media',          desc: 'Led editorial strategy, team management and content operations across multiple iGaming verticals and GEOs.', color: 'rgba(46,204,139,0.1)' },
    { icon: '📈', title: 'Content Manager — SweepsPulse',          desc: '4+ years managing SEO-focused iGaming content strategy with measurable ranking and conversion outcomes.', color: 'rgba(74,127,167,0.15)' },
    { icon: '🎓', title: 'US University Platform Specialist',      desc: 'Capella · WGU · Walden · SNHU · Chamberlain · Grand Canyon. Deep platform knowledge and proven academic outcomes.', color: 'rgba(201,168,76,0.12)' },
  ];

  expertise = [
    { area: 'iGaming Content',     level: 95 },
    { area: 'SEO Strategy',        level: 88 },
    { area: 'Academic Writing',    level: 97 },
    { area: 'Ghostwriting',        level: 92 },
    { area: 'Content Strategy',    level: 85 },
    { area: 'GEO Localisation',    level: 90 },
  ];

  universities = ['Capella', 'WGU', 'Walden', 'SNHU', 'Chamberlain', 'Grand Canyon', 'Liberty', 'Purdue Global'];

  geos = ['United Kingdom', 'United States', 'South Africa', 'Nigeria', 'Canada', 'Kenya', 'Australia', 'Multi-GEO'];
}
