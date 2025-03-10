import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { QuestionsComponent } from "./pages/questions/questions.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "questions",
    component: QuestionsComponent,
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];
