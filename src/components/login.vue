<template>
<div class="form-box" style="background-color: rgb(23, 26, 79);color: white;" >
    <div class="button-box" style="color: white;">
      <div id="btn" :style="{ left: buttonPosition }" ></div>
      <button type="button" class="toggle-btn" @click="toggleForm('login')">Log In</button>
      <button type="button" class="toggle-btn" @click="toggleForm('register')">Register</button>
    </div>
		<div class="social-icons">
			<h4> Follow Us</h4>
            <br>
            <div style="display: flex;justify-content: center;">
            <a href="https://www.linkedin.com/company/lms-invention/" class="ml-5 text-neutral-800 dark:text-neutral-200" >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 9H2V21H6V9Z" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
        </div>
		</div>

<!--login-->
		<form id="login"  method="POST" class="input-group" style="left: -400px;">
			<input type="text" name="name" class="input-field" placeholder=" Name" required=""> 
			<input type="text" name="password" class="input-field" placeholder="Enter Password" required="">
			<input type="checkbox" class="check-box"><span>Remember Password</span>
			<button v-on:click="register" type="submit" class="submit-btn"> Log In</button>
		</form>

<!--register-->
		<form id="register"  method="POST" class="input-group" style="left: 50px;">
			<input type="text" name="name" class="input-field" placeholder="Name" required=""> 
			<input type="email" v-model="email" name="email" class="input-field" placeholder="Email" required="">
			<input type="text" name="function" class="input-field" placeholder="Function or Occupation" required="">
			<input type="text" name="password" v-model="password" class="input-field" placeholder="Enter Password" required="">
			<input type="checkbox" class="check-box"><span>I agree to the terms &amp; conditions</span>
			<button v-on:click="register" type="submit" class="submit-btn"> Register</button>
		</form>
		</div>
  </template>
  
  <script>
  import AuthentificationService from '../services/AuthentificationService';
  export default {
    data() {
      return {
        email: '',
        password: '',
      
      };
    },
    methods: {
       async register(){
           const response= await AuthentificationService.register({
                email:this.email,
                password:this.password
            })
            console.log(response.data)

        },
        login() {
      // Ajoutez ici la logique de connexion
      console.log('Connexion avec', this.email);
      // Rediriger vers la page de profil ou autre après la connexion
    },
    toggleForm(form) {
      if (form === 'login') {
        var x =document.getElementById("login");
        var y =document.getElementById("register");
		var z =document.getElementById("btn");
        this.buttonPosition = '110px';
        x.style.left="50px";
			y.style.left= "450px";
			z.style.left= "0";


      } else if (form === 'register') {
        var x =document.getElementById("login");
  var y =document.getElementById("register");
		var z =document.getElementById("btn");
        this.buttonPosition = '0';
        x.style.left="-400px";
			y.style.left= "50px";
			z.style.left= "110px";
      }
    },
}
  };

  </script>
  
  <style scoped>
  /*----login-----*/

.hero{
    height: 98%;
    width: 98%;
    background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(image/banner.jpg); 
    background-position: center;
    background-size: cover;
    position: absolute;
}
.form-box{
    width: 380px;
    height: 580px;
    position: relative;
    margin: 0% auto;
    background-color: #ffffff;
    padding: 5px;
    overflow: hidden; /* hide on option(log or reg) */

}
.button-box{
    width: 225px;
    margin: 35px auto;
    position: relative;
    box-shadow: 0 0 20px 9px #ff61241f;
    border-radius: 35px;
    color: rgb(0, 0, 0);
}

.toggle-btn{
    padding: 10px 30px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
    
}

#btn{
    top: 0;
    left: 110px;
    position: absolute;
    width: 110px;
    height: 100%;
    background: blue;
    color: white;
    border-radius: 20px;
    transition: .5s;
}

.social-icons{
    margin: 30px auto;
    text-align: center;
}
.social-icons img{
    width: 30px;
    margin: 0 12px;
    box-shadow: 0 0 20px 0 #7f7f7f3d;
    cursor: pointer;
    border-radius: 50%;
}

.input-group{
    top: 180px;
    position: absolute;
    width: 280px;
    transition: .5s;

}
.input-field{
    width: 100%;
    padding: 10px 0;
    margin: 5px 0;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid #999;
    outline: none;
    background: transparent;

}
.submit-btn{
    width: 85%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: auto;
    background: blue;
    color: white;
    border: 0;
    outline: none;

}
.check-box{
    margin: 30px 10px 30px 0;

}
.span{
    color: #777;
    font-size: 12px;
    bottom: 68px;
    position: absolute;
}

#login{
    left: 50px;
}
#register{
    left: 450px;
}

/* readmore*/
.box{
    width: 41%;
    float: left;
    margin: 50px 20px;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
}
.box a{
    display: inline-block;
    color: #fff;
    background-color: #2196f3;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 8px;
    margin-top: 15px;
}
.box p{
    font-size: 15px;
    line-height: 28px;
    height: 90px;
    overflow: hidden;
}

.box.showContent p{
    height: auto;
}

.box.showContent a.readmore-btn{
    background-color: rgb(69, 45, 248);
}
.box a :hover{
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}
.box img{
    width: 100%;
}
@media(max-width:700px){
    .blog-content{
        font-size: 24px;
        width: 780px;
        width: 100%;
    }
    .box {
    width: 78%;
}
}

.row.icons{
color: #6315ff;
margin: 0 13px;
cursor: pointer;
padding: 18px 0;

}

  </style>
  