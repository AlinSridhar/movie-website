import { Component } from '@angular/core';
import { Banner } from "../../Components/banner/banner";
import { Navbar } from "../../Components/navbar/navbar";
import { Homemain } from "../../Components/homemain/homemain";
import { Movies } from "../../Components/movies/movies";
import { CurrentyRunning } from "../../Components/currenty-running/currenty-running";
import { Navs } from "../../Components/navs/navs";
import { Footer } from "../../Components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Banner, Navbar, Homemain, Movies, CurrentyRunning, Navs, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
