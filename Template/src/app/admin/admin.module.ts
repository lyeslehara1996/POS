import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { GestionFournisseurComponent } from './gestion-fournisseur/gestion-fournisseur.component';
import { GestionStockComponent } from './gestion-stock/gestion-stock.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { GestionCommandeClientComponent } from './gestion-commande-client/gestion-commande-client.component';
import { GestionCommandeFournisseurComponent } from './gestion-commande-fournisseur/gestion-commande-fournisseur.component';
import { GestionVenteComponent } from './gestion-vente/gestion-vente.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule
  ],
  declarations: [LayoutComponent, TopNavComponent, SideNavComponent, GestionClientComponent, GestionFournisseurComponent, GestionStockComponent, GestionProduitComponent, GestionCommandeClientComponent, GestionCommandeFournisseurComponent, GestionVenteComponent]
})
export class AdminModule {}
