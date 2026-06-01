import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Stat { n: string; l: string; }
interface Feature { icon: string; title: string; desc: string; color: string; }
interface Testimonial { q: string; name: string; role: string; init: string; grad: string; }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  stats: Stat[] = [
    { n: '8+',   l: 'Years Experience' },
    { n: '500+', l: 'Projects Done' },
    { n: '98%',  l: 'Client Satisfaction' },
    { n: '12+',  l: 'GEOs Covered' },
  ];

  features: Feature[] = [
    { icon: '🎰', title: 'iGaming Content',   desc: 'Casino reviews, sports betting guides, affiliate content and SEO strategy built for operators and affiliates across every GEO.',     color: 'var(--gold)' },
    { icon: '🎓', title: 'Academic Writing',  desc: 'Dissertations, theses, nursing, law, business and online class management. 0% plagiarism. Guaranteed top grades.',                  color: 'var(--em)' },
    { icon: '🔍', title: 'SEO Strategy',      desc: '4+ years of competitive iGaming SEO combined with GEO-specific intelligence. Content that gets found and then converts.',            color: '#4a9fd4' },
  ];

  testimonials: Testimonial[] = [
    { q: 'Consistently brilliant iGaming content. Our organic traffic grew 40% in three months.',           name: 'Daniel Okonkwo', role: 'Head of Content, UK Affiliate',    init: 'DO', grad: 'linear-gradient(135deg,#1A3D63,#4A7FA7)' },
    { q: 'I went from barely passing to A grades in one WGU semester. A complete game changer.',            name: 'James Kelley',   role: 'MBA Student, WGU',                 init: 'JK', grad: 'linear-gradient(135deg,#1a7a54,#2ECC8B)' },
    { q: 'The localised South African casino content is some of the best affiliate writing I\'ve seen.',    name: 'Priya Naidoo',   role: 'Affiliate Manager, SA',            init: 'PN', grad: 'linear-gradient(135deg,#0a1931,#C9A84C)' },
  ];

  trustPills = ['24/7 Available', 'Multi-GEO', '0% Plagiarism', 'Confidential', 'SEO-Optimised', 'Timely Delivery'];

  geos = ['UK','USA','Nigeria','South Africa','Canada','Kenya','Australia'];

  tickerItems = [
    '8+ Years Experience','Multi-GEO Expertise','0% Plagiarism Guarantee',
    '24/7 Availability','SEO-Optimised Content','Timely Delivery',
    'Absolute Confidentiality','High Conversion Writing',
  ];

  ngOnInit(): void {}
}
