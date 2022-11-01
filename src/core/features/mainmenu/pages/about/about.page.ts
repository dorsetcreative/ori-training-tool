import { Component, OnInit } from '@angular/core';
import {CoreConfig} from "@services/config";
import {CoreConstants} from "@/core/constants";


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public colorScheme?: string;

  constructor(
  ) {
 
  }

  ngOnInit() {
  }

  public ionViewWillEnter() {
    this.setColorScheme();
  }

  public async setColorScheme(): Promise<void> {
    this.colorScheme = await CoreConfig.get(CoreConstants.SETTINGS_COLOR_SCHEME);
  }
}
