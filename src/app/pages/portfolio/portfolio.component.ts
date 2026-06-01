import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  emoji: string; cat: string; catColor: string;
  title: string; desc: string; geo: string; type: string; tag: string;
}
interface Testimonial { q: string; name: string; role: string; init: string; grad: string; }

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  activeTab = signal<'ig' | 'ac'>('ig');

  igaming: PortfolioItem[] = [
    { emoji: '🎰', cat: 'Casino Review',   catColor: '#c9a84c', title: 'UK-Facing Online Casino Masterguide',      desc: '4,200-word authoritative review covering bonuses, games and payments. Ranked page one within 60 days.', geo: 'United Kingdom',  type: 'Long-form Review',     tag: 'Page 1 Ranked' },
    { emoji: '⚽', cat: 'Sports Betting',  catColor: '#4a7fa7', title: 'Premier League Betting Strategy Guide',    desc: 'Comprehensive betting guide for UK and African audiences covering match analysis and value bets.',       geo: 'UK + Africa',     type: 'Guide / Blog',         tag: '3,800 Words' },
    { emoji: '🎲', cat: 'SEO Content',     catColor: '#2ecc8b', title: 'Sweepstakes Casino Content Series',        desc: 'A 12-piece content cluster for a US sweepstakes operator covering game reviews and deposit guides.',     geo: 'United States',   type: 'Content Cluster',      tag: '12 Articles' },
    { emoji: '🦁', cat: 'Affiliate',       catColor: '#c9a84c', title: 'South African Casino Affiliate Hub',       desc: 'Built out 30+ pages of localised casino content covering rand-friendly casinos and local payment methods.', geo: 'South Africa',  type: 'Affiliate Content',    tag: '30+ Pages' },
    { emoji: '🎯', cat: 'Operator',        catColor: '#b3cfe5', title: 'Slot Review Series for iGaming Operator',  desc: 'Ongoing contract producing 15 reviews per month with RTP highlights and structured data markup.',         geo: 'Multi-GEO',       type: 'Monthly Retainer',     tag: '15/Month' },
    { emoji: '📰', cat: 'Ghostwriting',    catColor: '#4a7fa7', title: 'Weekly iGaming Industry Roundups',         desc: 'Ghost-written weekly news digests covering regulation changes, new game launches and market trends.',      geo: 'Global',          type: 'Ghostwriting',         tag: 'Weekly' },
  ];

  academic: PortfolioItem[] = [
    { emoji: '📚', cat: 'Dissertation',    catColor: '#2ecc8b', title: 'MBA Dissertation — Supply Chain Resilience',  desc: 'Full 15,000-word dissertation on post-pandemic supply chain strategies. Client scored a Distinction.', geo: 'United States',   type: 'Dissertation',         tag: 'Distinction' },
    { emoji: '🏥', cat: 'Nursing',         catColor: '#4a7fa7', title: 'MSN Capstone — Patient Safety Protocols',     desc: 'Evidence-based nursing capstone on hospital-acquired infection prevention. Passed first review, no revisions.', geo: 'United States', type: 'Capstone Project', tag: 'No Revisions' },
    { emoji: '💼', cat: 'Business',        catColor: '#c9a84c', title: 'Strategic Management Case Analysis',          desc: "In-depth case study using Porter's Five Forces and SWOT frameworks. Grade: A.",                     geo: 'United States',   type: 'Case Study',           tag: 'Grade: A' },
    { emoji: '⚖️', cat: 'Law',             catColor: '#2ecc8b', title: 'Constitutional Law Essay — First Amendment',  desc: 'Scholarly essay analysing landmark First Amendment cases and their modern implications. Scored 95%.', geo: 'United States',   type: 'Legal Essay',          tag: '95%' },
    { emoji: '🧠', cat: 'Psychology',      catColor: '#b3cfe5', title: 'Literature Review — CBT Efficacy',            desc: 'Systematic literature review of CBT efficacy across diverse patient populations. 50+ peer-reviewed sources.', geo: 'United States', type: 'Literature Review', tag: '50+ Sources' },
    { emoji: '💻', cat: 'Online Class',    catColor: '#4a7fa7', title: 'Full Semester Course Assistance — SNHU',      desc: 'Complete 8-week SNHU semester management covering discussion boards, assignments and exam prep.',     geo: 'United States',   type: 'Course Management',    tag: '8 Weeks · A' },
  ];

  testimonials: Testimonial[] = [
    { q: 'Our organic traffic grew 40% in three months. Consistently brilliant iGaming content.', name: 'Daniel Okonkwo', role: 'Head of Content, UK Affiliate', init: 'DO', grad: 'linear-gradient(135deg,#1A3D63,#4A7FA7)' },
    { q: 'My nursing dissertation received commendation. Thorough and evidence-based. Passed first review.', name: 'Angela Morrison', role: 'MSN Student, Walden', init: 'AM', grad: 'linear-gradient(135deg,#4A7FA7,#B3CFE5)' },
    { q: 'Six months of weekly roundups. Always on deadline. Always on brand.', name: 'Tom Fairbrass', role: 'Editor, iGaming Media Brand', init: 'TF', grad: 'linear-gradient(135deg,#1A3D63,#2ECC8B)' },
    { q: 'Scored A grades consistently at WGU. The academic support is second to none.', name: 'James Kelley', role: 'MBA Student, WGU', init: 'JK', grad: 'linear-gradient(135deg,#1a7a54,#2ECC8B)' },
  ];

  stars = [1,2,3,4,5];

  get currentItems(): PortfolioItem[] {
    return this.activeTab() === 'ig' ? this.igaming : this.academic;
  }
  setTab(t: 'ig' | 'ac'): void { this.activeTab.set(t); }
}
