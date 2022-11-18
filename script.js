function afficheVille() {
  // 1. RÃ©cupÃ©ration de la valeur courante du select, 
  // soit l'id de l'option sÃ©lectionnÃ©e 
  let nomVilleChoisie = document.getElementById("choixVille").value;
  console.log(nomVilleChoisie)

  // 2. RÃ©cupÃ©ration de la liste de toutes les div correspondant 
  // Ã  une div de mÃ©tÃ©o 
  let villes = document.getElementsByClassName("city");
  console.log(villes)

  // 3. Parcours de la liste des div mÃ©tÃ©o 
  // On cache celles qui ne sont pas sÃ©lectionnÃ©es.
 
  for (i=0; i<villes.length; i++) {
    console.log(villes[i])
    if (villes[i].id == nomVilleChoisie) {
      // garder l'element -> ELEMENT.style.display= "";
	  villes[i].style.display= "";
    } else {
	  // cacher l'element visible -> ELEMENT.style.display= "none";
	  villes[i].style.display= "none";
    }
  }
}