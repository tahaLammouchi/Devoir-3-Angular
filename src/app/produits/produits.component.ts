import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produits.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
produits? : Produit[];
private produitService = new ProduitService();

  constructor() {  
  } 

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();

  }

}

