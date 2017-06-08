import { Component, OnInit } from '@angular/core'; // her definere man at det skal være et component og
                                                    // skabelonen skal hentes fra angular Core

@Component({
  selector: 'app-comp1',                    // en Selector er måden man kan hente det nye component ud på
  templateUrl: './comp1.component.html',    // her defineres hvilken html fil der skal bruges når selectoren kaldes
  styleUrls: ['./comp1.component.css']      // css styling. kan også fjernes og så styles direkte her
})
export class Comp1Component implements OnInit {

  navn: string; // Her kan alle variabler defineres og hvis man vil vhj typescript om det fx skal være string

  constructor() {

  }

  ngOnInit() {
  }

}
