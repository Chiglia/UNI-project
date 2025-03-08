import { Component } from "@angular/core";
import { SharedModule } from "../../shared.module";

@Component({
  selector: "app-home",
  imports: [SharedModule],
  templateUrl: "./home.component.html",
  styles: ``,
})
export class HomeComponent {
  toggleTheme() {
    const element = document.querySelector("html");
    if (element) {
      element.classList.toggle("my-app-dark");
    }
  }
}
