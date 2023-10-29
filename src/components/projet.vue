<template>
    <div>

      <div class="w-2/4">
        <div class="text-center mt-8" style="color: blue;">
        <h2 class=" font-extrabold  relative mb-4" style="font-size: 48px;" >Projets</h2>
        <div class="w-16 h-1 bg-blue-900 mx-auto" style="background-color: blue;"></div>
        </div>
      </div>
      <div class="w-2/4"></div>



      <section class="w-full background-section1 flex relative my-12">
        <div class="absolute top-1/2 left-10 transform -translate-y-1/2">
          <img src="../assets/images/cloud.png" alt="ship" style="width: 450px; height: 251px;" >
          <div class="mb-8"></div> 
          <div class="w-full md:w-1/2"><p class="text-white  my-8" style="font-size: 30px;">
            Automatic tubes processing machine for automotive
          </p></div>
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
      </section>
  
      <section class="w-full background-section2 flex relative my-12">
        <div class="absolute top-1/2 left-10 transform -translate-y-1/2">
          <img src="../assets/images/automation.png" alt="blog ia" style="width: 430px; height: 240px;">
          <div class="mb-8"></div> 
          <div class="w-full md:w-1/2"><p class="text-white   my-8" style="font-size: 30px;">
            Automatic tubes processing machine for automotive
          </p></div>
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
      </section>
  
      <section class="w-full background-section3 flex relative ">
        <div class="absolute top-1/2 left-10 transform -translate-y-1/2">
          <img src="../assets/images/energy.jpg" alt="shaftcare" style="width:432px; height: 247px;">
          <div class="mb-8"></div> 
          <div class=""><p class="text-white   my-8  " style="font-size: 30px;">Automatic tubes processing machine for automotive</p></div>
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
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'YourComponent'
  };
  </script>
  
  <style scoped>
  .background-section1 {
    background-image: url('../assets/Rectangle.png');
    background-size: cover; 
    background-position: center;
    min-height: 100vh;
    position: relative;
  }
  
  .background-section1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: blue;
    opacity: 0.5;
  }

  .background-section2 {
    background-image: url('../assets/Rectangle 3.png');
    background-size: cover; 
    background-position: center;
    min-height: 100vh;
    position: relative;
  }
  
  .background-section2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: blue;
    opacity: 0.5;
  }
  .background-section3 {
    background-image: url('../assets/Rectangle 5.png');
    background-size: cover; 
    background-position: center;
    min-height: 100vh;
    position: relative;
  }
  
  .background-section3::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:blue;
    opacity: 0.5;
  }


  </style>
  