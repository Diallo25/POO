class Produit {
    constructor(idProduit, nom, prix) {
        this.idProduit = idProduit;
        this.nom = nom;
        this.prix = prix;
    }
    

    afficherDetails() {
        return `ID: ${this.idProduit}, Nom: ${this.nom}, Prix: ${this.prix} €`;
    }
}

class ElementPanier {    
    
    constructor(produit, quantite) {
        this.produit = produit; 
        this.quantite = quantite;
    }

    calculerPrixTotal() {
        return this.produit.prix * this.quantite;
    }


    afficherDetails() {
    function obtenirNombreTotalArticles(panier) {
        return panier.reduce((total, article) => total + article.quantite, 0);
    }
        return `Produit: ${this.produit.nom}, Quantité: ${this.quantite}, Prix total: ${this.produit.prix * this.quantite} €`;
    }
}

class PanierAchat {
    constructor() {
        this.elements = []; 
    }

    ajouterElement(element) {
        this.elements.push(element);
    }

    calculerTotalPanier() {
        return this.elements.reduce((total, element) => total + element.calculerPrixTotal(), 0);
    }

    afficherContenu() {
        return this.elements.map(element => element.afficherDetails()).join('\n');
    }
}

class Panier {
    constructor() {
        this.articles = []; // Tableau pour stocker les articles
    }

    // Méthode pour ajouter un article
    ajouterArticle(nom, quantite, prix) {
        const articleExistant = this.articles.find(article => article.nom === nom);
        
        if (articleExistant) {
            articleExistant.quantite += quantite;
        } else {
            this.articles.push({ nom, quantite, prix });
        }
    }

    supprimerArticle(nom) {
        this.articles = this.articles.filter(article => article.nom !== nom);
    }

    
    afficherPanier() {
        if (this.articles.length === 0) {
            console.log("Le panier est vide.");
        } else {
            console.log("Contenu du panier :");
            this.articles.forEach(article => {
                console.log(`${article.nom} - Quantité : ${article.quantite}, Prix : ${article.prix}€`);
            });
        }
    }
}




