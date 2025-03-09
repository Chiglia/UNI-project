import { Component } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { ToggleSwitchModule } from "primeng/toggleswitch";
import { MenubarModule } from "primeng/menubar";

@Component({
  selector: "app-home",
  imports: [SharedModule, ToggleSwitchModule, MenubarModule],
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
  menuItems = [
    { label: "Home", icon: "pi pi-home", routerLink: "/" },
    { label: "Dashboard", icon: "pi pi-chart-line", routerLink: "/dashboard" },
    { label: "Impostazioni", icon: "pi pi-cog", routerLink: "/settings" },
  ];
}
