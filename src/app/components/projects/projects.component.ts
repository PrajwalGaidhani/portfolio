import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects" id="projects">
      <div class="projects-container">
        <div class="section-header">
          <h2>Featured Projects</h2>
          <p>A selection of projects I've worked on</p>
        </div>

        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects()" 
               class="animate-fade-in"
               [style.--animation-delay]="(project.id * 0.1) + 's'">
            <div class="project-image">
              <div class="image-placeholder">{{ project.title }}</div>
              <div class="project-overlay">
                <div class="overlay-buttons">
                  <a [href]="project.link" target="_blank" class="btn-icon" title="View Project">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                  <a [href]="project.github" target="_blank" class="btn-icon" title="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 4rem 2rem;
      background: var(--background-light);

      @media (prefers-color-scheme: dark) {
        background: var(--background-dark);
      }
    }

    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: var(--accent-red);
        box-shadow: var(--glow-red);
      }

      h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        font-weight: 900;
        letter-spacing: -1px;

        @media (max-width: 768px) {
          font-size: 2rem;
        }
      }

      p {
        font-size: 1.1rem;
        color: var(--text-light);
        font-weight: 600;
        letter-spacing: 0.5px;

        @media (prefers-color-scheme: dark) {
          color: var(--text-dark);
        }

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }

    .project-card {
      background: var(--surface-light);
      border: 2px solid var(--accent-red);
      border-radius: 0;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: var(--glow-red);

      @media (prefers-color-scheme: dark) {
        background: var(--surface-dark);
      }

      &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: var(--glow-red-intense);
        border-color: #FF3366;

        .project-overlay {
          opacity: 1;
        }
      }
    }

    .project-image {
      width: 100%;
      height: 200px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, var(--accent-red), #FF3366);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-placeholder {
      color: white;
      font-size: 1rem;
      font-weight: 900;
      opacity: 0.9;
      letter-spacing: 1px;
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .overlay-buttons {
      display: flex;
      gap: 1rem;
    }

    .btn-icon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--accent-red);
      color: white;
      border-radius: 0;
      transition: all 0.3s ease;
      border: 2px solid var(--accent-red);
      box-shadow: var(--glow-red);

      &:hover {
        transform: scale(1.25) rotate(-10deg);
        background: #FF3366;
        box-shadow: var(--glow-red-intense);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .project-content {
      padding: 1.5rem;

      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        font-weight: 900;
        letter-spacing: -0.5px;
      }

      p {
        color: var(--text-light);
        margin-bottom: 1rem;
        font-size: 0.95rem;
        font-weight: 500;

        @media (prefers-color-scheme: dark) {
          color: var(--text-dark);
        }
      }
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag {
      display: inline-block;
      padding: 0.4rem 0.8rem;
      background: var(--accent-red);
      color: white;
      border-radius: 0;
      font-size: 0.85rem;
      font-weight: 900;
      border: 1px solid var(--accent-red);
      transition: all 0.3s ease;

      &:hover {
        box-shadow: var(--glow-red);
        transform: scale(1.05);
      }
    }
  `]
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'ecommerce',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'taskapp',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts.',
      tags: ['Vue.js', 'Chart.js', 'Express.js'],
      image: 'dashboard',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses and sentiment analysis.',
      tags: ['Angular', 'WebSocket', 'Python', 'TensorFlow'],
      image: 'chatapp',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'Mobile-responsive fitness app with workout tracking and nutrition planning.',
      tags: ['React Native', 'Firebase', 'Redux'],
      image: 'fitness',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Content Management System',
      description: 'Headless CMS with GraphQL API and modern content editor interface.',
      tags: ['Next.js', 'GraphQL', 'PostgreSQL', 'Headless UI'],
      image: 'cms',
      link: '#',
      github: '#'
    }
  ]);
}
