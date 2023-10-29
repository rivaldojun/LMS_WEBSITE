<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">
      <section class="w-full background-section flex justify-center items-center relative" >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
          <div class="sm:text-left p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between" style="z-index: 999;">
            <div>
              <h2 class="text-[48px] font-semibold  mb-4" style="color: #315BA6; font-size: 42px;">Section carrière</h2>
              <div class="w-16 h-1  mb-4" style="background-color: #315BA6 ;"></div> 
              <p class="text-lg mb-4" style="color: #5AC0D0; font-size: 24px;">Si vous aimez ce que vous faites,
                vous travaillez dans une entreprise qui vous permet de réaliser
                vos objectifs et aspirations. À Biris technologie, nous mettons 
                l’accent sur vos compétences et connaissances afin de vous donner
                l’occasion de devenir la meilleure version de vous-même, sur le plan personnel et professionnel.</p>
            </div>
            <div class="flex justify-between items-center">
              <a href="#" class="flex items-center text-white  font-semibold px-4 py-2 rounded-lg" style="background-color:#315BA6 ; font-size: 20px;">
                En savoir plus
                <div class="flex items-center ml-2">
                  <div class="w-0 h-px bg-turquoise"></div>
                  <svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </div>
              </a>
            </div>
          </div>
          <div class="md:text-left p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between" style="z-index: 999;">
            <div>
              <h2 class="text-[48px] font-semibold  mb-4" style="color: #315BA6; font-size: 42px;">Section Innovation</h2>
              <div class="w-16 h-1  mb-4" style="background-color: #315BA6 ;"></div> 
              <p class="text-lg mb-4" style="color: #5AC0D0; font-size: 24px;">Découvrez tous nos articles autour 
                du thème des nouvelles technologies disponibles à Biris technologie.</p>
            </div>
            <div class="flex justify-between items-center">
              <a href="#" class="flex items-center text-white  font-semibold px-4 py-2 rounded-lg" style="background-color:#315BA6 ; font-size: 20px;">
                En savoir plus
                <div class="flex items-center ml-2">
                  <div class="w-0 h-px bg-turquoise"></div>
                  <svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>

                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'YourComponent'
  };
  </script>
  
  <style scoped>
  .text-turquoise {
    color: #5AC0D0;
  }
  
  .background-section {
  background-image: url('../assets/Frame 9.png');
  background-size: cover;
  background-position: center;
  min-height: 110vh;
  position: relative;
}

.background-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
  }

  </style>
  