import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  phone: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  portfolioData = signal<PortfolioData>({
    name: 'Your Name',
    title: 'Full Stack Developer',
    subtitle: 'UI/UX Enthusiast • Problem Solver',
    description: 'I craft beautiful and functional digital experiences with modern technologies. Passionate about clean code, responsive design, and creating solutions that matter.',
    email: 'hello@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  });

  updatePortfolioData(data: Partial<PortfolioData>) {
    this.portfolioData.update(current => ({ ...current, ...data }));
  }
}
