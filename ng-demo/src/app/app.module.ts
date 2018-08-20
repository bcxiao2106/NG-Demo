import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SiderNavComponent } from './shared/components/sider-nav/sider-nav.component';
import { MatIconModule } from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiderNavComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  //   const resourcePath = 'node_modules/material-design-icons/iconfont/MaterialIcons-Regular.svg';
  //   matIconRegistry.addSvgIcon('iconName', domSanitizer.bypassSecurityTrustResourceUrl(resourcePath));
  // }

  constructor() {
  }
}
