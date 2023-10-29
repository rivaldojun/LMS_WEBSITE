<template>
<div class="container">
  <h1 class="text-center mb-5" style="color: blue;font-size: 30px;font-weight: bold;">Notre Équipe</h1>
  <div class="row">
    <div  v-for="(member, index) in teamMembers" :key="index">
      <div class="card">
    <div class="flex">
        <img :src="member.imageSrc" class="w-1/3" alt="Photo de {{ member.name }}" style="width: 200px; height: 200px;">
        <div class="ml-4">
            <h5 class="text-xl font-semibold">{{ member.name }}</h5>
            <p class="text-lg">{{ member.role }}</p>
            <p class="text-lg">{{ member.Formation }}</p>
            <p class="text-lg">Contact : {{ member.contact }}</p>
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
            name: 'ADIKPETO Rivaldo',
            role: 'Service IT',
            Formation: 'Ingenierie Intelligence artificielle & Data science',
            contact: 'adikpetojun@gmail.com',
            imageSrc: 'src/assets/profil/zinedine.png'
          },
          {
            name: 'AMAR Chaymae',
            role: 'Service RI&Finance',
            Formation: 'Ingénierie en Génie mécanique : structures et ingénierie de produits',
            contact: 'john@example.com',
            imageSrc: 'src/assets/profil/amar.png'
          },
          {
            name: 'BONI N. Edouard',
            role: 'Service IT',
            Formation: 'Génie Civil',
            contact: 'john@example.com',
            imageSrc: 'src/assets/profil/edouard.png'
          },
          {
            name: 'KALLI Moussa Salissou',
            role: 'Service R&D et Innovation',
            Formation: 'Ingénierie en Génie mécanique',
            contact: 'john@example.com',
            imageSrc: 'src/assets/profil/moussa.png'
          },
          {
            name: 'KOITE Abdrahamane',
            role: 'Service Projets',
            Formation: 'Ingénierie en Génie électrique et contrôle des systèmes industriels',
            contact: 'john@example.com',
            imageSrc: 'src/assets/profil/koite.png'
          },
          {
            name: 'MIKALIA Yahaya',
            role: 'Service Communication',
            Formation: 'Ingénierie en Énergie Électrique et Industrie Numérique',
            contact: 'john@example.com',
            imageSrc: 'src/assets/profil/mikalia.png'
          },
          {
            name: 'SANKARA Zakaria',
            role: 'Chef d’équipe',
            Formation: 'Ingénierie en Electromécanique option commande et management industriel, Digitalisation et Industrie 4.0',
            contact: 'john@example.com',
            imageSrc: 'src/assets/profil/sankara.png'
          },
          {
            name: 'ZOETYANDE Nerkièta Nafissatou',
            role: 'Service Formation',
            Formation: 'Ingénierie en Génie industriel option logistique et Industrie Numérique du futur',
            contact: 'john@example.com',
            imageSrc: 'src/assets/profil/nafissatou.png'
          },
          // Ajoutez les informations sur les autres membres de l'équipe ici
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Styles CSS personnalisés ici */
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  </style>
  