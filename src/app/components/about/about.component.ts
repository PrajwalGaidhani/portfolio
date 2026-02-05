import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about" id="about">
      <div class="about-container">
        <div class="section-header">
          <h2>About Me</h2>
          <p>Get to know more about my background and expertise</p>
        </div>

        <div class="about-content">
          <div class="about-text animate-slide-in-left">
            <p>
              I'm a Software Consultant at Volkswagen IT Services with deep expertise in building scalable systems, automation, and cloud infrastructure. I have hands-on experience with Python, Java, and React, with a strong foundation in system design and DSA.
            </p>
            <p>
              My passion lies in creating fault-tolerant systems that drive operational efficiency. I've built automation frameworks that boosted system uptime by 30%, developed real-time logging systems monitoring 50+ servers, and created microservices architectures handling complex workflows.
            </p>
            <p>
              I love solving complex problems, optimizing performance, and continuously learning new technologies. I'm a Smart India Hackathon winner and have represented India at international competitions.
            </p>

            <div class="stats">
              <div class="stat">
                <div class="stat-number">3+</div>
                <div class="stat-label">YRS EXPERIENCE</div>
              </div>
              <div class="stat">
                <div class="stat-number">10+</div>
                <div class="stat-label">PROJECTS DELIVERED</div>
              </div>
              <div class="stat">
                <div class="stat-number">50+</div>
                <div class="stat-label">SERVERS MANAGED</div>
              </div>
            </div>
          </div>

          <div class="skills animate-slide-in-right">
            <div class="skill-category" *ngFor="let skill of skills()">
              <h3>{{ skill.category }}</h3>
              <div class="skill-items">
                <div class="skill-item" *ngFor="let item of skill.items">
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 4rem 2rem;
      background: #000000;
    }

    .about-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
      position: relative;
      padding-bottom: 1.5rem;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: var(--accent-red);
        box-shadow: var(--glow-red);
      }

      h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        font-weight: 900;
        color: #ffffff;
        font-family: 'JetBrains Mono', monospace;
        letter-spacing: -1px;

        @media (max-width: 768px) {
          font-size: 2rem;
        }
      }

      p {
        font-size: 1.1rem;
        color: #ffffff;
        font-family: 'JetBrains Mono', monospace;
      }
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .about-text p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      color: #ffffff;
      font-family: 'JetBrains Mono', monospace;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-top: 2rem;

      @media (max-width: 512px) {
        grid-template-columns: 1fr;
      }
    }

    .stat {
      background: #0a0a0a;
      padding: 1.5rem;
      border-radius: 0;
      text-align: center;
      border: 2px solid var(--accent-red);
      box-shadow: var(--glow-red);
      transition: all 0.3s ease;

      &:hover {
        box-shadow: var(--glow-red-intense);
        transform: scale(1.02);
      }

      &-number {
        font-size: 2rem;
        font-weight: 900;
        color: var(--accent-red);
        margin-bottom: 0.5rem;
        font-family: 'JetBrains Mono', monospace;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      &-label {
        font-size: 0.9rem;
        color: #ffffff;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
      }
    }

    .skills {
      display: grid;
      gap: 2rem;
    }

    .skill-category {
      h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: var(--accent-red);
        font-weight: 900;
        font-family: 'JetBrains Mono', monospace;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    .skill-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-item {
      background: var(--accent-red);
      color: #ffffff;
      padding: 0.6rem 1.2rem;
      border-radius: 0;
      font-size: 0.95rem;
      font-weight: 900;
      font-family: 'JetBrains Mono', monospace;
      transition: all 0.3s ease;
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: var(--glow-red);
      border: 1px solid #ffffff;

      &:hover {
        transform: scale(1.08) rotate(2deg);
        box-shadow: var(--glow-red-intense);
      }
    }
  `]
})
export class AboutComponent {
  skills = signal<Skill[]>([
    {
      category: 'Languages & Core',
      items: ['Java', 'Python', 'JavaScript', 'SQL', 'DSA', 'OOP', 'System Design']
    },
    {
      category: 'Frontend & Web',
      items: ['React', 'Angular', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Responsive Design']
    },
    {
      category: 'Backend & Cloud',
      items: ['Django', 'Node.js', 'AWS', 'Linux', 'Docker', 'Kafka', 'Microservices']
    },
    {
      category: 'Databases & Tools',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis', 'Git', 'CI/CD']
    }
  ]);
}
