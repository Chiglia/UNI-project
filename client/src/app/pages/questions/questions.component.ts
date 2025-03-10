import { Component } from "@angular/core";

@Component({
  selector: "app-questions",
  imports: [],
  templateUrl: "./questions.component.html",
  styles: ``,
})
export class QuestionsComponent {
  questions = [
    "Qual è il colore del cielo?",
    "Quanti continenti ci sono?",
    "Chi ha scoperto l'America?",
  ];
  currentIndex = 0;

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }
}
