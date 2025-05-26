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
        let body = document.querySelector('body')
        let journal = data.journal;
        let main = document.querySelector('main')
        console.log(journal);

        // 1 : Barre de navigation
        let navigation = document.getElementById('navigation')

        // thèmes
        journal.themes.forEach(theme => {
          let menu = document.getElementById('menu')
          let listTheme = document.createElement('li')
          let lienTheme = document.createElement('a')
          lienTheme.textContent = theme.nom
          lienTheme.href = "#"

          listTheme.appendChild(lienTheme)
          menu.appendChild(listTheme)
          
        });
        navigation.appendChild(menu)

        //Bouton "s'abonner"
        let boutonPrimaire = document.createElement('a')
        boutonPrimaire.className = "bouton-primaire"
        boutonPrimaire.textContent = "S'abonner"
        boutonPrimaire.href = "#"

        // Photo de profil de l'utilisateur
        let photoProfil = document.createElement('a')
        photoProfil.href = "#"
        photoProfil.className = "photo-profil"

        let imgProfil = document.createElement('img')
        imgProfil.className='img-profil'
        imgProfil.src = "images/djibril.png"
        imgProfil.alt = "photo de profil"

        photoProfil.appendChild(imgProfil)

        let divPhotoBouton = document.createElement('div')
        divPhotoBouton.className = "photo-bouton"
        divPhotoBouton.append(boutonPrimaire, photoProfil)
        navigation.appendChild(divPhotoBouton)

        // 2 : Header

        let headerContainer = document.querySelector('header')
        let divTitre = document.createElement('div')
        divTitre.className = "titre"

        let petitTitre = document.createElement('h2')
        petitTitre.textContent = journal.nomJournal
        let grandTitre = document.createElement('h1')
        grandTitre.textContent = journal.phraseAccroche
        
        divTitre.append(petitTitre, grandTitre)
        headerContainer.appendChild(divTitre)
        main.appendChild(headerContainer)

        let divArticle = document.createElement('div')
        divArticle.className = 'divArticle'

        journal.themes.forEach(theme => {
          let articleTheme = document.createElement('article')
          articleTheme.className = "theme"
          divArticle.appendChild(articleTheme)

          let titreTheme = document.createElement('h2')
          titreTheme.textContent = theme.nom

          let texteTheme = document.createElement('p')
          texteTheme.className = "texte-theme"
          texteTheme.textContent = theme.description

          articleTheme.append(titreTheme, texteTheme)
          divArticle.appendChild(articleTheme)
          headerContainer.appendChild(divArticle)
          
        })

        // 3 : Section "actu à la une"

        let headlineSection = document.getElementById('headline')

        let imgHeadline = document.createElement('img')
        imgHeadline.className='img-headline'
        imgHeadline.src = journal.articlePrincipal.image
        imgHeadline.alt = "article principal"

        let articleHeadline = document.createElement('article')
        articleHeadline.className = 'headline'

        let divHeadlineTitle = document.createElement('div')
        divHeadlineTitle.className = 'title'

        let titleHeadline = document.createElement('h2')
        titleHeadline.textContent = journal.articlePrincipal.titre
        
        let themeHeadline = document.createElement('h3')
        themeHeadline.textContent = journal.articlePrincipal.theme

        divHeadlineTitle.append(titleHeadline, themeHeadline)

        let texteHeadline = document.createElement('p')
        texteHeadline.textContent = journal.articlePrincipal.description

        let boutonMore1 = document.createElement('a')
        boutonMore1.className = "bouton-primaire"
        boutonMore1.textContent = "Lire l'article"
        boutonMore1.href = "#"


        articleHeadline.append(divHeadlineTitle, texteHeadline, boutonMore1)
        headlineSection.append(imgHeadline, articleHeadline)

        // 4 : Section des articles

        let newsSection = document.getElementById('news')

        let divNewsContainer = document.createElement('div')
        divNewsContainer.className = 'news-container'

        // boucle présentation des articles
        journal.articles.forEach(article => {
          ajouterArticle (article, divNewsContainer)
        });

        function ajouterArticle (article, divNewsContainer) {
          let articleNews = document.createElement('article')
          articleNews.className = 'news'

          // Image d'illustration
          let imgNews = document.createElement('img')
          imgNews.className = 'img-news'
          imgNews.src = article.image
          imgNews.alt = "Image Article"
          
          // Texte News
          let divNewsTexte = document.createElement('div')
          divNewsTexte.className = 'news-texte'

          let divNewsTitle = document.createElement('div')
          divNewsTitle.className = 'news-title'

          let titleNews = document.createElement('h2')
          titleNews.textContent = article.titre
          
          let themeNews = document.createElement('h3')
          themeNews.textContent = article.theme

          divNewsTitle.append(titleNews, themeNews)

          let texteNews = document.createElement('p')
          texteNews.textContent = article.description

          boutonMore1 = document.createElement('a')
          boutonMore1.className = "bouton-primaire"
          boutonMore1.textContent = "Lire l'article"
          boutonMore1.href = "#"

          divNewsTexte.append(divNewsTitle, texteNews, boutonMore1)
          articleNews.append(imgNews, divNewsTexte)
          divNewsContainer.appendChild(articleNews)
        }

        
        newsSection.appendChild(divNewsContainer)

        // 5 : Section journalistes

        let teamSection = document.getElementById('team')

        let divTeamContainer = document.createElement('div')
        divTeamContainer.className = "team-container"
        
        journal.auteurs.forEach(auteur => {
          ajouterTeam (auteur, divTeamContainer)
        })

        function ajouterTeam (auteur, divTeamContainer) {
          let articleTeam = document.createElement('article')
          articleTeam.className = "team"

          let divTeamTexte = document.createElement('div')
          divTeamTexte.className = "team-texte"

          let imgTeam = document.createElement('img')
            imgTeam.src = auteur.image
            imgTeam.alt = "photo auteur"

          let nameTeam = document.createElement('h2')
            nameTeam.textContent = auteur.prenom

          let expTeam = document.createElement('h3')
            expTeam.textContent = auteur.typeExperience

          let descriptionTeam = document.createElement('p')
          descriptionTeam.textContent = auteur.presentation

          divTeamTexte.append(nameTeam, expTeam, descriptionTeam)
          articleTeam.append(imgTeam, divTeamTexte)
          divTeamContainer.appendChild(articleTeam)
        }
      
        teamSection.appendChild(divTeamContainer)
        
        main.append(headerContainer, headlineSection, newsSection, teamSection)

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici