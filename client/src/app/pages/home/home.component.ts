import { Component } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { MenubarModule } from "primeng/menubar";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  imports: [SharedModule, MenubarModule, RouterLink],
  templateUrl: "./home.component.html",
  styles: ``,
})
export class HomeComponent {}
