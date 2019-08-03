import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public sidenavImageIndex = 0;
  public sidenavImageIndexUpdate: EventEmitter<number> = new EventEmitter();
  public sidenavFilter = '#fff';
  public sidenavFilterUpdate: EventEmitter<string> = new EventEmitter();
  public sidenavColor = '#212122';
  public sidenavColorUpdate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  getsidenavImageIndex(): number {
    return this.sidenavImageIndex;
  }
  setsidenavImageIndex(id) {
    this.sidenavImageIndex = id;
    this.sidenavImageIndexUpdate.emit(this.sidenavImageIndex);
  }
  getsidenavFilter(): string {
    return this.sidenavFilter;
  }
  setsidenavFilter(color: string) {
    this.sidenavFilter = color;
    this.sidenavFilterUpdate.emit(this.sidenavFilter);
  }
  getsidenavColor(): string {
    return this.sidenavColor;
  }
  setsidenavColor(color: string) {
    this.sidenavColor = color;
    this.sidenavColorUpdate.emit(this.sidenavColor);
  }
}
