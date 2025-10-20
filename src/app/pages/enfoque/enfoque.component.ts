import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-enfoque',
  imports: [NgOptimizedImage],
  templateUrl: './enfoque.component.html',
  styleUrl: './enfoque.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnfoqueComponent {}
