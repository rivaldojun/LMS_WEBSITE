<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">
    <div class="container">
      <h1 class="text-[blue] font-bold display-4">Evenement</h1>
      <hr class="border-2 border-primary mt-4" />
    </div>
    <div class="mt-4" >
      <div class="img bg-opacity-20 p-4 " style="height: 500px;font-family: 'Raleway';" >
        <div class="container " style="background-image:url(../assets/ev.png); ;">
          <h1 class="text-white font-semibold display-1 pt-5">CONFERENCES</h1>
          <p class="font-medium text-white text-justify mt-3 mb-4">
            Désigne une conversation ou un échange verbal entre deux personnes ou plus.<br> Il s'agit d'une interaction sociale où les individus partagent leurs idées,<br> opinions et sentiments à travers des mots et des phrases.
          </p>
          <button class="btn btn rounded-pill px-4 py-2 mt-5" style="background-color: blue;">
            <a href="" class="text-white font-semibold text-decoration-none">En savoir plus <img src="../assets/Arrow.png" alt="" class="ml-2" /></a>
          </button>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="img bg-opacity-20 p-4" style="height: 500px;font-family: 'Raleway';">
        <div class="container">
          <h1 class="text-white font-semibold display-1 pt-5">FORMATIONS</h1>
          <p class="font-medium text-white text-justify mt-3 mb-4">
            Cette formation est faite pour toute personne<br> désireuse d'entamer un programme de professionnalisation <br>ou de reconversion dans les métiers du numérique.
          </p>
          <button class="btn btn  rounded-pill px-4 py-2 mt-5" style="background-color: blue;">
            <a href="" class="text-white font-semibold text-decoration-none">En savoir plus <img src="../assets/Arrow.png" alt="" class="ml-2" /></a>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  
  }
  .img {
    background-image: url(../assets/ev.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .background-section2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    opacity: 0.5;
  }
  </style>
  