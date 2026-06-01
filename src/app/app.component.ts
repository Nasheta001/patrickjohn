import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <!-- Custom Cursor -->
    <div class="cur-dot" id="curDot"></div>
    <div class="cur-ring" id="curRing"></div>

    <!-- Animated Background -->
    <div class="bg-canvas">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>

    <!-- App Shell -->
    <app-navbar></app-navbar>
    <main class="page-shell page-enter">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>

    <!-- WhatsApp FAB -->
    <a href="https://wa.me/27717225973" target="_blank" rel="noopener" class="wa-fab">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="wa-text">Need a quote?</span>
    </a>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'patrickjohn';

  ngAfterViewInit(): void {
    this.initCursor();
    this.initReveal();
  }

  private initCursor(): void {
    const dot = document.getElementById('curDot');
    const ring = document.getElementById('curRing');
    if (!dot || !ring) return;

    let mx = -200, my = -200, rx = -200, ry = -200;

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx - 4}px,${my - 4}px,0)`;
    }, { passive: true });

    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));
    document.addEventListener('mouseover', (e) => {
      const el = e.target as HTMLElement;
      const isHover = !!(el?.closest('a,button,.btn,.glass-card,.pcard,.tcard,.why-card,.cred-item,.service-card'));
      document.body.classList.toggle('cursor-hover', isHover);
    });

    const animRing = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.transform = `translate3d(${rx - 17}px,${ry - 17}px,0)`;
      requestAnimationFrame(animRing);
    };
    animRing();
  }

  private initReveal(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    const observe = () => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };
    observe();

    // Re-observe on route changes
    const mutObs = new MutationObserver(observe);
    mutObs.observe(document.body, { childList: true, subtree: true });
  }
}
