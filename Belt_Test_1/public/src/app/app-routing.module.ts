import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { NewComponent } from "./new/new.component";
import { UpdateComponent } from "./update/update.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "products", component: ProductsComponent },
  { path: "products/new", component: NewComponent },
  { path: "products/:id/edit", component: UpdateComponent },
  { path: "products/:id", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
