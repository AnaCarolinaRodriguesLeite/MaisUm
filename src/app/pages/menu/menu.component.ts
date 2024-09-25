import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private router: Router) {}

  goAtividades(){
    this.router.navigate(['/atividades']);
  }
  goProgresso(){
    this.router.navigate(['/progresso']);
  }
  goRefeicoes(){
    this.router.navigate(['/refeicoes']);
  }
}