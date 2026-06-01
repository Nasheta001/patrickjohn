import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  name: string; email: string; service: string;
  budget: string; deadline: string; message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sent = signal(false);

  form: ContactForm = {
    name: '', email: '', service: '', budget: '', deadline: '', message: ''
  };

  channels = [
    { icon: '💬', label: 'WhatsApp', value: '+27 71 722 5973', sub: 'Fastest — reply within 1 hour', href: 'https://wa.me/27717225973', color: '#25D366' },
    { icon: '✉️', label: 'Email',     value: 'patrickjohn@email.com', sub: 'Response within 2 hours', href: 'mailto:patrickjohn@email.com', color: 'var(--gold)' },
    { icon: '🌍', label: 'GEOs',     value: 'UK · USA · SA · Nigeria · Canada · Kenya', sub: 'Available globally, 24/7', href: '#', color: 'var(--em)' },
  ];

  socials = [
    { icon: 'in', label: 'LinkedIn', href: '#', class: 'linkedin' },
    { icon: '𝕏',  label: 'Twitter',  href: '#', class: 'twitter' },
    { icon: '✉',  label: 'Email',    href: 'mailto:patrickjohn@email.com', class: 'email' },
  ];

  services = [
    { group: 'iGaming Content', items: ['Casino Reviews & Content','Sports Betting Content','Affiliate / Operator Content','SEO Blog Posts & Guides','Keyword Research & Strategy','Ghostwriting'] },
    { group: 'Academic Writing', items: ['Dissertation / Thesis','Essays & Coursework','Nursing Assignment','Business / Law Paper','Online Class Management','Other Academic'] },
  ];

  budgets = ['Under $100','$100 – $300','$300 – $600','$600 – $1,000','$1,000+','Let\'s discuss'];

  onSubmit(): void {
    this.sent.set(true);
    this.form = { name:'', email:'', service:'', budget:'', deadline:'', message:'' };
    setTimeout(() => this.sent.set(false), 5000);
  }
}
