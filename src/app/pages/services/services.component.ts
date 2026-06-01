import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ServiceItem { icon: string; name: string; desc: string; }
interface ServiceGroup { id: string; icon: string; title: string; color: string; accentClass: string; services: ServiceItem[]; badges: string[]; }

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  activeTab = 'igaming';

  groups: ServiceGroup[] = [
    {
      id: 'igaming',
      icon: '🎰',
      title: 'iGaming Suite',
      color: 'var(--gold)',
      accentClass: 'igaming',
      services: [
        { icon: '🃏', name: 'Casino Reviews & Content',   desc: 'In-depth, authoritative casino reviews written for specific GEOs. UK, USA, SA, Nigeria and beyond.' },
        { icon: '⚽', name: 'Sports Betting Content',     desc: 'Comprehensive guides, match previews, and betting strategy content for affiliates and operators.' },
        { icon: '🎰', name: 'Slots & Games Content',      desc: 'RTP-focused slot reviews, game guides, and bonus content that converts casual readers to players.' },
        { icon: '🤝', name: 'Affiliate & Operator Content', desc: 'Full affiliate site builds, product descriptions, landing pages and promotional copy.' },
        { icon: '🔍', name: 'SEO Blog Posts & Guides',    desc: 'Keyword-optimised long-form content ranking for competitive iGaming terms.' },
        { icon: '📊', name: 'Keyword Research & Strategy', desc: 'GEO-specific competitive keyword analysis and full content strategy planning.' },
        { icon: '🖊️', name: 'Ghostwriting & News',        desc: 'Industry roundups, ghostwritten columns and white-label content delivered on time, every time.' },
        { icon: '🎲', name: 'Sweepstakes Casino Content',  desc: 'US sweepstakes-specific content expertise. Compliant, converting, and GEO-appropriate.' },
      ],
      badges: ['UK Regulated', 'US Market', 'SA Market', 'Nigeria', 'Canada', 'Multi-GEO'],
    },
    {
      id: 'academic',
      icon: '🎓',
      title: 'Academic Wing',
      color: 'var(--em)',
      accentClass: 'academic',
      services: [
        { icon: '📚', name: 'Dissertations & Theses',      desc: 'Full dissertation support from proposal to defence — business, nursing, law, psychology and more.' },
        { icon: '📝', name: 'Essays & Literature Reviews',  desc: 'Scholarly essays, systematic reviews and annotated bibliographies with 50+ peer-reviewed sources.' },
        { icon: '📋', name: 'Coursework & Assignments',    desc: 'Weekly assignments, case studies, reflective papers and discussion board responses.' },
        { icon: '🏥', name: 'Nursing & Healthcare',         desc: 'PICO papers, capstone projects, evidence-based practice assignments and clinical case analyses.' },
        { icon: '⚖️', name: 'Law & Criminal Justice',       desc: 'Constitutional analysis, contract law, criminal procedure and policy brief papers.' },
        { icon: '💼', name: 'Business & MBA',               desc: 'Strategic management, financial analysis, HR, supply chain and MBA-level case studies.' },
        { icon: '🖥️', name: 'Computer Science & IT',        desc: 'Programming projects, system design papers, IT security and software engineering docs.' },
        { icon: '📅', name: 'Online Class Management',      desc: 'Full semester management — discussions, assignments, quizzes and exam prep. WGU, SNHU, Walden.' },
      ],
      badges: ['0% Plagiarism', 'Turnitin Clean', 'Timely Delivery', 'Confidential', 'Top Grades'],
    }
  ];

  get activeGroup(): ServiceGroup {
    return this.groups.find(g => g.id === this.activeTab)!;
  }

  setTab(id: string): void { this.activeTab = id; }
}
