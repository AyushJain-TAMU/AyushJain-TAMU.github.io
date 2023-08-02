import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<h1>Hello world!</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './asset/vendor/aos/aos.css',
              './asset/vendor/bootstrap/css/bootstrap.min.css', 
              './asset/vendor/bootstrap-icons/bootstrap-icons.css', 
              './asset/vendor/boxicons/css/boxicons.min.css', 
              './asset/vendor/glightbox/css/glightbox.min.css', 
              './asset/vendor/swiper/swiper-bundle.min.css',
              './asset/css/style.css']

})
export class AppComponent {
  title = 'portfolio';
}
