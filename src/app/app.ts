import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Components/navbar/navbar";
import { Banner } from "./Components/banner/banner";
import { Homemain } from "./Components/homemain/homemain";
import { Footer } from "./Components/footer/footer";
import { Movies } from "./Components/movies/movies";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Banner, Homemain, Footer, Movies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-website');
}
