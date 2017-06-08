import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];  // server array
  newServerName = '';   // variabler til navn og content
  newServerContent = '';


  // Methode til at lave server
  onAddServer() {
    this.serverElements.push({
      type: 'server',  // her får den nye server en type
      name: this.newServerName, // navnet er blir sat = det input fra .html filen
      content: this.newServerContent
    });
  }
  // Methode til at lave serverblueprint
  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
