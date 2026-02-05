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
                <h3>Message</h3>
                <p>hello@example.com</p>
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
                <p>+1 (555) 123-4567</p>
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
                <p>San Francisco, CA</p>
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
      background: var(--background-light);

      @media (prefers-color-scheme: dark) {
        background: var(--background-dark);
      }
    }

    .contact-container {
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
      background: var(--surface-light);
      border-radius: 8px;
      border: 1px solid var(--border-light);
      transition: all 0.3s ease;

      @media (prefers-color-scheme: dark) {
        background: var(--surface-dark);
        border: 1px solid var(--border-dark);
      }

      &:hover {
        transform: translateX(10px);
        box-shadow: var(--shadow);

        @media (prefers-color-scheme: dark) {
          box-shadow: var(--shadow-dark);
        }
      }

      h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: var(--text-light);

        @media (prefers-color-scheme: dark) {
          color: var(--text-dark);
        }
      }
    }

    .info-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;

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
      border: 2px solid var(--border-light);
      border-radius: 8px;
      font-size: 1rem;
      font-family: inherit;
      background: var(--background-light);
      color: var(--text-light);
      transition: all 0.3s ease;

      @media (prefers-color-scheme: dark) {
        background: var(--surface-dark);
        color: var(--text-dark);
        border: 2px solid var(--border-dark);
      }

      &:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
      }

      &::placeholder {
        color: var(--text-light);
        opacity: 0.5;

        @media (prefers-color-scheme: dark) {
          color: var(--text-dark);
        }
      }
    }

    select.form-input {
      cursor: pointer;
    }

    textarea.form-input {
      resize: none;
      font-family: inherit;
    }

    .btn {
      padding: 0.75rem 2rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.3s ease;

      &.btn-primary {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        border: none;
        box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);

        &:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.6);
        }

        &:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      }
    }

    .success-message {
      padding: 1rem;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      border-radius: 8px;
      text-align: center;
      animation: slideInRight 0.5s ease-out;
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


