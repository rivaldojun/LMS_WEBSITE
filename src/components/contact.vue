<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">
  <div>
    <div class="w-2/4">
      <div class="text-center mt-8" style="color: blue;">
        <h2 class="text-3xl font-bold  relative mb-4">Contacts</h2>
        <div class="w-20 h-[0.2rem] mt-6 ml-[280px]" style="background-color: white;"></div>
      </div>
    </div>
    <div class="w-2/4"></div>

    <section class="w-full background-section flex flex-col-reverse md:flex-row  mt-8 items-center">
      <div class="w-full md:w-1/4 pt-0 p-8 pr-0 pb-0 flex items-center  min-h-screen"
        style="z-index: 9999; background-color: white;">
        <div class="w-full">
          <h2 class="font-bold border-l-8 pl-4 h-20 flex items-center text-white"
            style="font-size: 48px;  border-color: #315BA6;">
            Contacts
          </h2>

          <form class="ml-8 mt-4">
            <div class="mb-6">
              <label class="block font-semibold" for="nom" style="color:#315BA6 ;">Votre nom</label>
              <div class="relative">
                <input type="text" id="nom" class="w-full focus:outline-none bg-transparent" />
                <div class="absolute bottom-0 left-0 w-full h-1 " style="background-color: #315BA6;"></div>
              </div>
            </div>

            <div class="mb-6">
              <label class="block font-semibold" for="email" style="color:#315BA6 ;">Votre email</label>
              <div class="relative">
                <input type="email" id="email" class="w-full focus:outline-none bg-transparent" />
                <div class="absolute bottom-0 left-0 w-full h-1 " style="background-color: #315BA6;"></div>
              </div>
            </div>

            <div class="mb-12">
              <label class="block font-semibold" for="message" style="color:#315BA6 ;">Messagerie</label>
              <div class="relative">
                <textarea id="message" class="w-full focus:outline-none bg-transparent"></textarea>
                <div class="absolute bottom-0 left-0 w-full h-1 " style="background-color: #315BA6;"></div>
              </div>
            </div>

            <button type="submit" class="text-white font-semibold mt-12 py-2 px-4 rounded"
              style="background-color: #315BA6; border-radius: 40px;">
              Envoyer
            </button>
          </form>
        </div>
      </div>

      <div class="w-full md:w-1/4 mr-48"></div>
      

      <div class="w-2/4 md:w-2/4 pl-24 flex" style="z-index: 9999;">
        <div>
          <h2 class="font-bold my-6" style="color:#315BA6 ; font-size: 26px;">Contactez-nous</h2>
          <p class="text-white " style="font-size: 18px;">Envoyez-nous un message en remplissant le formulaire, nous vous
            contacterons dans les plus brefs délais !</p>
          <p class="text-white my-6" style="font-size: 18px;">Si vous préférez obtenir des réponses via téléphone :</p>
          <h1 class="font-bold my-6" style="color:#315BA6 ; font-size: 24px;">(+229) 69 42 47 09</h1>
          <p class="mb-4 my-6 flex items-center justify-center md:justify-start text-white">
            Suivez-nous :
            <a href="#!" class="ml-2 text-neutral-800 dark:text-neutral-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </a>
            <a href="#!" class="ml-2 text-neutral-800 dark:text-neutral-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 9H2V21H6V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </p>
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
.background-section {
  background-image: url(../assets/Group2.png);
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  position: relative;
}

.background-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.5;
}
</style>