<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet">
    <section class="w-full background-section flex justify-center items-center relative" >

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="margin-bottom: 100px;">
        <div class="flex flex-col gap-5">
        <p class="sm:text-[38px] text-[24px]  font-bold text-center" style="z-index: 999999999999;opacity: 100%;margin-bottom: 20px;margin-top: 20px;">
            WHY DIGITALIZATION?
        </p>
        <p class="sm:text-[18px] text-[24px]  text-center" style="z-index: 999999999999;opacity: 100%;margin-bottom: 20px;color: rgb(120, 120, 120);">
            Connect your installations and be informed and notified in real time! Obtain real-time data from connected objects placed on the vital infrastructures of your company or those of your customers. Be alerted automatically by SMS, Email or from your application as soon as a defined threshold is reached. Contact our agency to carry out a free diagnosis of your needs.
        </p>
    </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch">
        <div class="sm:text-left p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between" style="z-index: 999;">
          <div>
            <h2 class="text-[38px] font-semibold  mb-4" style="color: #315BA6; font-size: 22px;">DIGITALIZATION</h2>
            <div class="w-16 h-1  mb-4" style="background-color: #315BA6 ;"></div> 
            <img src="../assets/images/dig.jpeg" alt="" class="sm:w-[590px] w-[270px] h-[200px] mx-auto sm:h-[390px] my-auto" style="border-radius: 20px;margin-bottom: 20px;">
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
        <div class="sm:text-left p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between" style="z-index: 999;">
          <div>
            <h2 class="text-[38px] font-semibold  mb-4" style="color: #315BA6; font-size: 22px;">SMART HOME</h2>
            <div class="w-16 h-1  mb-4" style="background-color: #315BA6 ;"></div> 
            <img src="../assets/images/smhome.jpg" alt="" class="sm:w-[590px] w-[270px] h-[200px] mx-auto sm:h-[390px] my-auto" style="border-radius: 20px;margin-bottom: 20px;">
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

        <div class="sm:text-left p-6 rounded-lg shadow-lg bg-white flex flex-col justify-between" style="z-index: 999;">
          <div>
            <h2 class="text-[38px] font-semibold  mb-4" style="color: #315BA6; font-size: 22px;">ACCESS</h2>
            <div class="w-16 h-1  mb-4" style="background-color: #315BA6 ;"></div> 
            <img src="../assets/images/acess.jpg" alt="" class="sm:w-[590px] w-[270px] h-[200px] mx-auto sm:h-[390px] my-auto" style="border-radius: 20px;margin-bottom: 20px;">
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
