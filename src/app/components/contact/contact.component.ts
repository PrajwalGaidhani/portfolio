import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact" id="contact">
      <div class="contact-container">
        <div class="section-header">
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's chat!</p>
        </div>

        <div class="contact-content">
          <div class="contact-info animate-slide-in-left">
            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
              <div>
                <h3>Email</h3>
                <p>prajwalgaidhani18@gmail.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+91 8530259554</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3>Location</h3>
                <p>Pune, India</p>
              </div>
            </div>
          </div>

          <form class="contact-form animate-slide-in-right" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <input
                type="text"
                placeholder="Your Name"
                [(ngModel)]="name"
                name="name"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <input
                type="email"
                placeholder="Your Email"
                [(ngModel)]="email"
                name="email"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <select [(ngModel)]="subject" name="subject" class="form-input">
                <option value="">Select Subject</option>
                <option value="project">Project Inquiry</option>
                <option value="collab">Collaboration</option>
                <option value="job">Job Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="form-group">
              <textarea
                placeholder="Your Message"
                [(ngModel)]="message"
                name="message"
                rows="5"
                required
                class="form-input"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary" [disabled]="submitted()">
              {{ submitted() ? 'Sending...' : 'Send Message' }}
            </button>

            <div *ngIf="successMessage()" class="success-message">
              {{ successMessage() }}
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 4rem 2rem;
      background: #000000;
    }

    .contact-container {
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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-item {
      display: flex;
      gap: 1.5rem;
      padding: 1.5rem;
      background: #0a0a0a;
      border-radius: 0;
      border: 2px solid var(--accent-red);
      box-shadow: var(--glow-red);
      transition: all 0.3s ease;

      &:hover {
        transform: translateX(10px) scale(1.02);
        box-shadow: var(--glow-red-intense);
      }

      h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: var(--accent-red);
        font-weight: 900;
        font-family: 'JetBrains Mono', monospace;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      p {
        color: #ffffff;
        font-family: 'JetBrains Mono', monospace;
      }
    }

    .info-icon {
      width: 50px;
      height: 50px;
      background: var(--accent-red);
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      flex-shrink: 0;
      box-shadow: var(--glow-red);

      svg {
        width: 24px;
        height: 24px;
      }
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-input {
      padding: 0.75rem 1rem;
      border: 2px solid var(--accent-red);
      border-radius: 0;
      font-size: 1rem;
      font-family: 'JetBrains Mono', monospace;
      background: #0a0a0a;
      color: #ffffff;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: var(--accent-red);
        box-shadow: var(--glow-red-intense);
      }

      &::placeholder {
        color: #ffffff;
        opacity: 0.5;
      }
    }

    select.form-input {
      cursor: pointer;
    }

    textarea.form-input {
      resize: none;
      font-family: 'JetBrains Mono', monospace;
    }

    .btn {
      padding: 0.75rem 2rem;
      border-radius: 0;
      font-size: 1rem;
      font-weight: 900;
      font-family: 'JetBrains Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.3s ease;

      &.btn-primary {
        background: var(--accent-red);
        color: #ffffff;
        border: 1px solid #ffffff;
        box-shadow: var(--glow-red);

        &:hover:not(:disabled) {
          transform: scale(1.05) rotate(-1deg);
          box-shadow: var(--glow-red-intense);
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }

    .success-message {
      padding: 1rem;
      background: var(--accent-red);
      color: #ffffff;
      border-radius: 0;
      text-align: center;
      animation: bounceIn 0.5s ease-out;
      box-shadow: var(--glow-red);
      font-weight: 900;
      font-family: 'JetBrains Mono', monospace;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  `]
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  submitted = signal(false);
  successMessage = signal('');

  onSubmit() {
    this.submitted.set(true);
    
    // Simulate API call
    setTimeout(() => {
      this.successMessage.set('Thank you! I will get back to you soon.');
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.submitted.set(false);

      setTimeout(() => {
        this.successMessage.set('');
      }, 3000);
    }, 1500);
  }
}


