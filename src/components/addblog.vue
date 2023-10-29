<template>
    <div>
      <h1>Ajouter un Blog</h1>
      <form @submit.prevent="ajouterBlog">
        <div class="form-group">
          <label for="titre">Titre</label>
          <input type="text" class="form-control" id="titre" v-model="blog.titre" required>
        </div>
        <div class="form-group">
          <label for="content">Contenu</label>
          <textarea class="form-control" id="content" v-model="blog.content" required></textarea>
        </div>
        <div class="form-group">
          <label for="path_image">Chemin de l'image</label>
          <input type="text" class="form-control" id="path_image" v-model="blog.path_image" required>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        blog: {
          titre: '',
          content: '',
          path_image: '',
        },
      };
    },
    methods: {
      ajouterBlog() {
        const nouveauBlog = {
          titre: this.blog.titre,
          content: this.blog.content,
          path_image: this.blog.path_image,
        };
  
        axios.post('/api/blogs', nouveauBlog) // Utilisez l'URL appropriée pour votre backend
          .then(response => {
            console.log('Blog ajouté avec succès:', response.data);
            this.$router.push('/blogs/' + response.data.id);
          })
          .catch(error => {
            console.error('Erreur lors de l\'ajout du blog:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles CSS personnalisés */
  </style>
  