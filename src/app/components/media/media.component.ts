import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.html',
  styleUrl: './media.css',
})
export class MediaComponent implements OnChanges {
  @Input() player?: Player;

  @ViewChild('mediaVideo') videoElement!: ElementRef<HTMLVideoElement>;
  
  isMuted: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['player']) {
      // Reset mute status when changing player
      this.isMuted = false;
      if (this.videoElement) {
        this.videoElement.nativeElement.load(); // Reload video for new src
      }
    }
  }

  playVideo(): void {
    if (this.videoElement) {
      this.videoElement.nativeElement.play();
    }
  }

  pauseVideo(): void {
    if (this.videoElement) {
      this.videoElement.nativeElement.pause();
    }
  }

  toggleMute(): void {
    this.isMuted = !this.isMuted;
  }
}
