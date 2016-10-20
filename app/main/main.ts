import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app-module/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
