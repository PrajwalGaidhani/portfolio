import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Prajwal Gaidhani</h3>
            <p>Software Consultant • System Design & Cloud Architecture Enthusiast</p>
            <div class="social-links">
              <a href="https://github.com/PrajwalGaidhani" target="_blank" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/prajwal-gaidhani/" target="_blank" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://leetcode.com/u/prajwal_gh123/" target="_blank" title="LeetCode">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226 3.75 2.859A1.373 1.373 0 002.788 2.588c-.686 0-1.081.409-1.081 1.061v10.865c0 .884.525 1.294 1.061 1.294.636 0 1.081-.41 1.081-1.294V4.615l2.916 2.916c.272.272.633.408.961.408s.69-.136.96-.408l2.916-2.916v10.865c0 .884.526 1.294 1.061 1.294.636 0 1.081-.41 1.081-1.294V3.649c0-.652-.395-1.061-1.081-1.061zm11.276 13.381v-3.378c0-.884-.525-1.294-1.061-1.294s-1.081.41-1.081 1.294v3.378c0 .884.525 1.294 1.061 1.294s1.081-.41 1.081-1.294z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Experience</h4>
            <ul>
              <li><a href="#about">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="https://www.linkedin.com/in/prajwal-gaidhani/" target="_blank">LinkedIn</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Technical Stack</h4>
            <ul>
              <li>Java, Python, React</li>
              <li>AWS, Docker, Kubernetes</li>
              <li>System Design, DSA</li>
              <li>Microservices, Cloud</li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Get In Touch</h4>
            <p>Email: prajwalgaidhani18@gmail.com</p>
            <p>Phone: +91 8530259554</p>
          </div>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-bottom">
          <p>&copy; 2024-2026 Prajwal Gaidhani. All rights reserved.</p>
          <div class="footer-links">
            <a href="https://github.com/PrajwalGaidhani" target="_blank">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/prajwal-gaidhani/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #000000;
      border-top: 3px solid var(--accent-red);
      box-shadow: inset 0 1px 0 var(--glow-red);
      color: #ffffff;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem 1rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .footer-section {
      h3, h4 {
        margin-bottom: 1rem;
        font-size: 1.1rem;
        color: var(--accent-red);
        font-weight: 900;
        font-family: 'JetBrains Mono', monospace;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      p {
        line-height: 1.6;
        margin-bottom: 0.5rem;
        opacity: 0.9;
        font-family: 'JetBrains Mono', monospace;
        color: #ffffff;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.5rem;

          a {
            color: #ffffff;
            transition: all 0.3s ease;
            font-family: 'JetBrains Mono', monospace;

            &:hover {
              color: var(--accent-red);
              text-shadow: var(--glow-red);
            }
          }
        }
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      a {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0a0a0a;
        border-radius: 0;
        color: var(--accent-red);
        transition: all 0.3s ease;
        border: 2px solid var(--accent-red);
        box-shadow: var(--glow-red);

        &:hover {
          background: var(--accent-red);
          color: #ffffff;
          transform: rotate(10deg) scale(1.1);
          box-shadow: var(--glow-red-intense);
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .footer-divider {
      height: 3px;
      background: var(--accent-red);
      margin: 2rem 0;
      box-shadow: var(--glow-red);
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      text-align: center;

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }

      p {
        margin: 0;
        opacity: 0.8;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        color: #ffffff;
      }
    }

    .footer-links {
      display: flex;
      gap: 1rem;
      justify-content: center;

      a {
        color: #ffffff;
        transition: all 0.3s ease;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;

        &:hover {
          color: var(--accent-red);
          text-shadow: var(--glow-red);
        }
      }

      span {
        opacity: 0.5;
        color: var(--accent-red);
      }
    }
  `]
})
export class FooterComponent {}
