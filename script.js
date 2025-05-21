function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
        // Traitez les données comme vous le souhaitez
        console.log('Données récupérées du fichier JSON :', data);
        /// ON ECRIT LE CODE ICI ! 
        let journal = data.journal;
        let main = document.querySelector('main')
        console.log(journal);
        
        // 1 : afficher dans la nav les thèmes
        // Sélection de la barre <nav>
        let navContainer = document.getElementById('navigation')

        // Dans la liste menu <ul>, intégrer les thèmes cliquables <li>.
        let menu = document.getElementById('menu')

        journal.themes.forEach(theme => {
          let listTheme = document.createElement('li')
          let lienTheme = document.createElement('a')
          lienTheme.href = "#"
          listTheme.appendChild(lienTheme)
          lienTheme.textContent = theme.nom
          navContainer.appendChild(listTheme)
        });

        //Bouton s'abonner
        let boutonPrimaire = document.createElement('a')
        boutonPrimaire.className = "bouton-primaire"
        boutonPrimaire.textContent = "S'abonner"
        boutonPrimaire.href = "#"
        navContainer.appendChild(boutonPrimaire)

        // Photo de profil de l'utilisateur
        let photoProfil = document.createElement('div')
        let lienProfil = document.createElement('a')
        lienProfil.href = "#"
        photoProfil.className = "photo-profil"

        let image = document.createElement('img')
        image.src = "images/djibril.png"
        image.alt = "photo de profil"

        lienProfil.appendChild(image)
        photoProfil.appendChild(lienProfil)
        navContainer.appendChild(photoProfil)

        // Header

        let headerContainer = document.createElement('header')
        let divTitre = document.createElement('div')
        divTitre.className = "titre"

        let petitTitre = document.createElement('h2')
        petitTitre.textContent = journal.nomJournal
        let grandTitre = document.createElement('h1')
        grandTitre.textContent = journal.phraseAccroche
        
        divTitre.append(petitTitre, grandTitre)
        headerContainer.appendChild(divTitre)
        main.appendChild(headerContainer)

        console.log(headerContainer);
        

        
        



      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici