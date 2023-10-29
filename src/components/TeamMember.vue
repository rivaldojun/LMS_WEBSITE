<template>
    <div class="team-member">
      <img :src="member.photoUrl" alt="Photo de {{ member.nom }}" />
      <h3>{{ member.prenom }} {{ member.nom }}</h3>
      <p><strong>Nationalité:</strong> {{ member.nationalite }}</p>
      <p><strong>Formation:</strong> {{ member.formation }}</p>
      <p><strong>Poste occupé:</strong> {{ member.poste }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      member: Object, // Propriété pour passer les données du membre de l'équipe
    },
  };
  </script>
  
  <style scoped>
  .team-member {
    text-align: center;
    margin: 20px;
  }
  </style>
  