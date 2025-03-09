import { Component } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { MenubarModule } from "primeng/menubar";

@Component({
  selector: "app-home",
  imports: [SharedModule, MenubarModule],
  templateUrl: "./home.component.html",
  styles: ``,
})
export class HomeComponent {}
