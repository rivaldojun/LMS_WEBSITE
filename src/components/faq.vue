<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">
    <div class="container my-5">
      <h1 class="text-center mb-5 text-primary font-weight-bold">FAQ</h1>
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-sm-6 mb-4"
          v-for="(member, index) in teamMembers"
          :key="index"
        >
          <div class="card" style="min-height: 400px;">
            <div class="d-flex">
              <div class="ml-4">
                <h5 class="text-xl font-weight-bold">{{ member.title }}</h5>
                <p class="text-lg">{{ member.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
 
 
      
      <script>
      export default {
        data() {
          return {
            teamMembers: [
            {
                title: "Qu'est-ce que l'industrie 4.0 ?",
                answer: "L'industrie 4.0 est la quatrième révolution industrielle, caractérisée par l'automatisation avancée, l'Internet des objets (IoT), l'intelligence artificielle et l'analyse de données pour améliorer la productivité et l'efficacité."
            },
            {
                title: "Quels services proposez-vous aux entreprises de l'industrie 4.0 ?",
                answer: "Nous offrons une gamme de services, notamment la mise en place de systèmes IoT, l'optimisation des chaînes d'approvisionnement, la cybersécurité industrielle et la formation à la transformation numérique."
            },
            {
                title: "Comment puis-je moderniser mes processus de fabrication ?",
                answer: "Nous pouvons vous aider à moderniser vos processus de fabrication en intégrant des technologies avancées telles que l'automatisation des machines, la robotique et la collecte de données en temps réel pour améliorer la qualité et la rentabilité de la production."
            },
            {
                title: "Quels avantages l'industrie 4.0 offre-t-elle aux entreprises au Maroc ?",
                answer: "L'industrie 4.0 peut aider les entreprises marocaines à améliorer leur compétitivité mondiale en automatisant les opérations, en réduisant les coûts de production et en favorisant l'innovation."
            },
            {
                title: "Quels secteurs bénéficient le plus de l'industrie 4.0 au Maroc ?",
                answer: "Les secteurs tels que l'automobile, la logistique, la santé et l'agriculture peuvent bénéficier considérablement de l'industrie 4.0 au Maroc en améliorant l'efficacité de leurs opérations."
            },
            {
                title: "Pouvez-vous aider les petites entreprises à adopter l'industrie 4.0 ?",
                answer: "Oui, nous proposons des solutions adaptées aux petites entreprises pour les aider à intégrer les technologies de l'industrie 4.0 de manière rentable."
            },
            {
                title: "Comment garantissez-vous la sécurité des données industrielles ?",
                answer: "Nous mettons en place des mesures de cybersécurité avancées pour protéger les données industrielles de nos clients contre les menaces en ligne."
            },
            {
                title: "Quelle est la durée typique de mise en œuvre de projets de transformation numérique ?",
                answer: "La durée dépend de la complexité du projet, mais nous nous efforçons de livrer rapidement des résultats tangibles à nos clients."
            },
            {
                title: "Offrez-vous une formation à l'industrie 4.0 ?",
                answer: "Oui, nous proposons des programmes de formation pour aider les entreprises à former leur personnel aux technologies de l'industrie 4.0."
            }
        ],
          };
        },
      };
      </script>
      
      <style scoped>
     /* Styles pour l'en-tête */
h1 {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: blue;
  margin-bottom: 20px;
}

/* Styles pour chaque élément FAQ */
.card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
}

.card h5 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card p {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

/* Styles pour les éléments FAQ au survol */
.card:hover {
  background-color: #f0f0f0;
  transform: translateY(-5px);
  transition: background-color 0.3s ease-in-out, transform 0.2s;
}

      </style>
      