import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedText: string = '';
  fullText: string = 'Full Stack .NET Developer';
  typingIndex: number = 0;
  isTyping: boolean = true;
  typingInterval: any;

  roles: string[] = [
    '.NET Developer',
    'ASP.NET Core Developer',
    'Full Stack Developer'
  ];
  currentRoleIndex: number = 0;

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTypingAnimation() {
    this.typingInterval = setInterval(() => {
      if (this.isTyping) {
        if (this.typingIndex < this.fullText.length) {
          this.displayedText += this.fullText.charAt(this.typingIndex);
          this.typingIndex++;
        } else {
          setTimeout(() => {
            this.isTyping = false;
            this.typingIndex = this.fullText.length;
          }, 2000);
        }
      } else {
        if (this.typingIndex > 0) {
          this.displayedText = this.displayedText.slice(0, -1);
          this.typingIndex--;
        } else {
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
          this.fullText = this.roles[this.currentRoleIndex];
          this.isTyping = true;
        }
      }
    }, 80);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
