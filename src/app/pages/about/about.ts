import { Component } from '@angular/core';
import { Address } from "../../Components/address/address";
import { Info } from "../../Components/info/info";

@Component({
  selector: 'app-about',
  imports: [Address, Info],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
