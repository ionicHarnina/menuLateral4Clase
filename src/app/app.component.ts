import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: Elemento[] = [{ titulo: 'home', enlace: '/home', icon: 'boat' }
    , { titulo: 'contactos', enlace: '/contactos', icon: 'contacts' },
  { titulo: 'chat', enlace: '/chat', icon: 'flask' }];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
export interface Elemento {
  titulo: string;
  enlace: string;
  icon: string;
}
