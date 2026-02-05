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
              I'm a passionate full-stack developer with over 5 years of experience building web applications.
              I specialize in creating user-centered solutions using modern technologies and best practices.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work. Now, I love solving complex problems
              and building applications that make a real impact. When I'm not coding, you can find me contributing to
              open-source projects or learning new technologies.
            </p>
            <p>
              I'm always excited to collaborate on interesting projects and help businesses achieve their goals through
              innovative web solutions.
            </p>

            <div class="stats">
              <div class="stat">
                <div class="stat-number">50+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
              <div class="stat">
                <div class="stat-number">30+</div>
                <div class="stat-label">Happy Clients</div>
              </div>
              <div class="stat">
                <div class="stat-number">5+</div>
                <div class="stat-label">Years Experience</div>
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
      background: linear-gradient(135deg, var(--surface-light) 0%, var(--background-light) 100%);

      @media (prefers-color-scheme: dark) {
        background: linear-gradient(135deg, var(--surface-dark) 0%, var(--background-dark) 100%);
      }
    }

    .about-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;

      h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;

        @media (max-width: 768px) {
          font-size: 2rem;
        }
      }

      p {
        font-size: 1.1rem;
        color: var(--text-light);

        @media (prefers-color-scheme: dark) {
          color: var(--text-dark);
        }
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
      color: var(--text-light);

      @media (prefers-color-scheme: dark) {
        color: var(--text-dark);
      }
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
      background: var(--surface-light);
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;
      border: 1px solid var(--border-light);

      @media (prefers-color-scheme: dark) {
        background: var(--surface-dark);
        border: 1px solid var(--border-dark);
      }

      &-number {
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
      }

      &-label {
        font-size: 0.9rem;
        color: var(--text-light);

        @media (prefers-color-scheme: dark) {
          color: var(--text-dark);
        }
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
        color: var(--primary-color);
      }
    }

    .skill-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-item {
      background: var(--primary-color);
      color: white;
      padding: 0.6rem 1.2rem;
      border-radius: 20px;
      font-size: 0.95rem;
      font-weight: 500;
      transition: all 0.3s ease;
      display: inline-block;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
      }
    }
  `]
})
export class AboutComponent {
  skills = signal<Skill[]>([
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'Django', 'Java', 'C#', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Databases & Tools',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Git', 'Docker', 'CI/CD', 'AWS']
    }
  ]);
}
