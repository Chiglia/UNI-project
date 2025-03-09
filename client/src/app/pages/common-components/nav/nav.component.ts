import { Component } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { SharedModule } from "../../../shared.module";

@Component({
  selector: "app-nav",
  imports: [SharedModule, MenubarModule],
  templateUrl: "./nav.component.html",
  styles: ``,
})
export class NavComponent {
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
