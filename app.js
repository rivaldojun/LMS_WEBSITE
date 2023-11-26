// const express=require('express')
// const bodyParser=require('body-parser')
// const cors =require('cors')
// const morgan=require('morgan')
// const session = require('express-session');
// const path = require("path");
// const multer = require('multer');
// const bcrypt = require('bcrypt');
// const nodemailer = require('nodemailer');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
// const app=express()

// app.use(session({
//   secret: '1234567',
//   resave: false,
//   saveUninitialized: true,
// }));

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "src/views"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({origin:true,methods:["GET", "POST", "PUT", "DELETE"],credentials:true,}));
// app.use(morgan('combine'))

// app.use(express.static("public"))

// // Définissez le dossier de destination pour les fichiers téléchargés
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Spécifiez le chemin absolu où vous souhaitez enregistrer les fichiers
//     cb(null, path.join(__dirname, '..', 'public','assets', 'images_1'));
//   },
//   filename: function (req, file, cb) {
//     // Générez un nom de fichier unique (vous pouvez également le personnaliser)
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// const transporter = nodemailer.createTransport({
//   host: 'mail.lms-invention.com', // Remplacez par le serveur SMTP de votre e-mail
//   port: 465, // Port SMTP approprié
//   secure: true, // false pour le protocole SMTP, true pour SMTPS (SSL/TLS)
//   auth: {
//     user: 'info@lms-invention.com', // Votre adresse e-mail
//     pass: 'LMSINV@info23', // Mot de passe de votre adresse e-mail
//   },
// });

// // Gérer les soumissions de formulaire
// app.post('/submit-form', (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const subject = req.body.subject;
//   const message = req.body.message;

//   const mailOptions = {
//     from: 'info@lms-invention.com',
//     to: 'info@lms-invention.com', // Adresse e-mail du destinataire
//     subject: subject,
//     html: `Name: ${name}<br>Email: <a href="mailto:${email}">${email}</a><br>Message: ${message}`
//   };
  

//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           console.log(error);
//           res.render('confirmation_postul', {message: 'Erreur ',title:'Veuillez réessayer dans un moment',image:'../assets/wrong.jfif' })
//       } else {
//           console.log('Email sent: ' + info.response);
//           res.render('confirmation_postul', {message: 'Nous vous reviendront dans les délai dès que possible',title:'Votre message a été soumis avec succès',image:'../assets/newsletter.jfif'})
//       }
//   });
// });

// // Configuration de la route pour gérer la soumission du formulaire
// app.post('/submit-offer', upload.single('fichiers'), (req, res) => {
//   const titre = req.body.titre;
//   const name = req.body.Name;
//   const email = req.body.Email;
//   const message = req.body.message;
//   const filePath = req.file ? req.file.path : null; // Chemin du fichier téléchargé

//   const mailOptions = {
//       from: 'info@lms-invention.com',
//       to: 'info@lms-invention.com', // Adresse e-mail du destinataire
//       subject: 'Nouvelle soumission de formulaire',
//       text: `
//       Titre:Pour le poste de ${titre}
//       Nom: De la part de ${name}
//       Email: ${email}
//       Message: ${message}
//       `,
//       attachments: [
//           {
//               filename: 'CV.pdf', // Nom du fichier joint
//               path: filePath // Chemin du fichier téléchargé
//           }
//       ]
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           console.log(error);
//           res.render('confirmation_postul', {message: 'Erreur du server',title:'Veuillez réessayer dans un moment',image:'../assets/wrong.jfif' })
          
//       } else {
//           console.log('E-mail envoyé : ' + info.response);
//           res.render('confirmation_postul', {message: 'Nous vous reviendront après analyse de votre dossier',title:'Votre dossier a été soumis avec succès',image:'../assets/newsletter.jfif' })
//       }
//   });
// });

// app.post('/souscription_conf/:id', async (req, res) => {
//   try {
//     const userName=req.body.userName
//     const userEmail=req.body.userEmail
//     const idconf = req.params.id
//     const subscribeToNotifications = req.body.notif === 'on'; 

//     // Enregistrez les données dans la base de données à l'aide de Prisma
//     const souscription = await prisma.souscripconf.create({
//       data: {
//         name: userName,
//         email: userEmail,
//         idconf,
//         sub:subscribeToNotifications
//       },
//     });

//     // Répondez avec un message de succès ou effectuez une redirection
//     res.render('confirmation_postul', {
//       message: 'Nous vous enverrons le lien de la conférence très prochainement',
//       title: 'Vous êtes désormais parmi les participants de cette conférence',
//     });
//   } catch (error) {
//     // Gérez les erreurs ici
//     console.error(error);
//     res.render('confirmation_postul', {
//       message: 'Erreur du serveur',
//       title: 'Veuillez réessayer dans un moment',
//       image:'../assets/wrong.jfif'
      
//     });
//   }
// });


// app.post('/souscription_form/:id', async (req, res) => {
//   try {
//     const userName = req.body.userName;
//     const userEmail = req.body.userEmail;
//     const id = req.params.id;
//     const subscribeToNotifications = req.body.notif === 'on'; 

//     // Enregistrez les données dans la base de données à l'aide de Prisma
//     const souscription = await prisma.souscripformation.create({
//       data: {
//         name: userName,
//         email: userEmail,
//         sub:subscribeToNotifications

//       },
//     });

//     // Répondez avec une redirection vers la page de formation
//     res.redirect(`/formation/${id}`);
//   } catch (error) {
//     // Gérez les erreurs ici
//     console.error(error);
//     res.render('confirmation_postul', {
//       message: 'Erreur lors de la soumission du formulaire',
//       title: 'Veuillez réessayer dans un moment',
//       image:'../assets/wrong.jfif'
//     });
//   }
// });


// app.post('/newsletter', async (req, res) => {
//   const email = req.body.email;

//   // Rechercher l'e-mail dans la table newsletter
//   const existingSubscriber = await prisma.newsletter.findUnique({
//     where: {
//       email: email,
//     },
//   });

//   // Si l'abonné existe déjà, renvoyer une réponse appropriée
//   if (existingSubscriber) {
//     return res.render('newsletter_msg',{message: 'Cet adresse mail '+email+ ' est deja abonne a notre newsletter',title:'OOPS...',image:'../assets/wrong.jfif'});
//   }

//   // Si l'abonné n'existe pas, ajouter un nouvel enregistrement
//   const newSubscriber = await prisma.newsletter.create({
//     data: {
//       email: email,
//     },
//   });

//   // Réponse de succès
//   res.render('newsletter_msg', {message: 'Vous recevrez prochainement le prochain numéro de notre newsletter.',title:'Merci de vous etes abonné',image:'../assets/newsletter.jfif' });
// });



// app.get('/',(req,res)=>{
  
//     res.render('homepage')
// })

// app.get('/actualites',async (req,res)=>{
//     const blogs = await prisma.blog.findMany({
//       orderBy: {
//         id: 'desc'
//       }
//     });
//     res.render('actualites', { blogs });
// })
// app.get('/addblog',(req,res)=>{
//   if (req.session.isLoggedIn) {
//     res.render('addblog')
//   }else{return("impossible")}
// })
// app.get('/opportunite',(req,res)=>{
//     res.render('carriere')
// })
// app.get('/evenement',(req,res)=>{
//     res.render('evenement')
// })
// app.get('/faq',(req,res)=>{
//     res.render('faq')
// })
// app.get('/log',(req,res)=>{
//     res.render('log', { errorMessage: '' })
// })

// app.get('/adminpage',(req,res)=>{
//   if (req.session.isLoggedIn) {
//   res.render('pageadmin')
//   }else{
//     return("impossible")
//   }
// })

// app.get('/addblog',(req,res)=>{
//   if (req.session.isLoggedIn) {
//   res.render('addblog')
//   }else{
//     return("Impossible")
//   }
// })

// app.get('/addformation',(req,res)=>{
//   if (req.session.isLoggedIn) {
//   res.render('addformation')
//   }else{
//     return("Impossible")
//   }
// })

// app.get('/addevents',(req,res)=>{
//   if (req.session.isLoggedIn) {
//   res.render('addevents')
//   }else{
//     return("Impossible")
//   }
// })

// app.get('/addoffer',(req,res)=>{
//   if (req.session.isLoggedIn) {
//   res.render('addoffer')
//   }else{
//     return("Impossible")
//   }
// })

// app.get('/addprojet',(req,res)=>{
//   if (req.session.isLoggedIn) {
//   res.render('addprojet')
//   }else{
//     return("Impossible")
//   }
// })


// app.get('/addblogadmin',async (req,res)=>{
//   if (req.session.isLoggedIn) {
//   const blogs = await prisma.blog.findMany({
//     orderBy: {
//       id: 'desc'
//     }
//   });
//   res.render('actualitesadmin',{blogs})
// }else{
//   return("Impossible")
// }
// })

// app.get('/addformationsadmin',async (req,res)=>{
//   if (req.session.isLoggedIn) {
//   const formations=await prisma.themeFormation.findMany({
//     orderBy: {
//       id: 'desc'
//     }
//   })
//   res.render('formationsadmin',{formations})
// }else{
//   return("Impossible")
// }
// })

// app.get('/addformationadmin/:id',async (req,res)=>{
//   if (req.session.isLoggedIn) {
//   const idform=parseInt(req.params.id)
//   const formations=await prisma.contentFormation.findMany(
//     {where:{
//       themeFormationId:idform,
//     }}
//   )
//   res.render('formationadmin',{formations,idform})
//   }else{
//     return("impossible")
//   }
// })

// app.get('/addeventsadmin',async (req,res)=>{
//   if (req.session.isLoggedIn) {
//   const confs = await prisma.conference.findMany({
//     orderBy: {
//       id: 'desc'
//     }
//   });
//   res.render('conferencesadmin',{confs})
// }else{
//   return("Impossible")
// }
// })

// app.get('/addofferadminemploi',async (req,res)=>{
//   if (req.session.isLoggedIn) {
//   const offers = await prisma.offre.findMany({
//     where: {
//       type: "emploi",
//     },
//   });
//   res.render('emploisadmin',{offers})
// }else{
//   return("Impossible")
// }
// })

// app.get('/addofferadminstage',async (req,res)=>{
//   if (req.session.isLoggedIn) {
//   const offers = await prisma.offre.findMany({
//     where: {
//       type: "stage",
//     },
//   });
//   res.render('emploisadmin',{offers})
// }else{
//   return("Impossible")
// }
// })

// app.get('/addprojetadmin',async (req,res)=>{
//   if (req.session.isLoggedIn) {
//   const projet = await prisma.projet.findMany({
//     orderBy: {
//       id: 'desc'
//     }
//   });
//   res.render('projetadmin',{projet})
// }else{
//   return("Impossible")
// }
// })

// app.get('/regist',(req,res)=>{
//   res.render('regist', { errorMessage: '' })
// })
// // Route pour le formulaire d'inscription (register)
// app.post('/register', async (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const func = req.body.function;
//   const password = req.body.password;
//   const confpassword = req.body.confpassword;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   // Effectuez ici la logique d'inscription en utilisant les données de req.body
//   // Par exemple, enregistrez l'utilisateur dans la base de données
//   if(password===confpassword){
//     await prisma.registration.create({
//       data: {
//         name,
//         email,
//         func,
//         password:hashedPassword,
//       },
//     });
//     // Redirigez l'utilisateur vers la page de connexion (ou autre page)
//     res.redirect('log')
//   }
//   else{
//     res.render('regist', { errorMessage: 'Mot de passe non correspondant' });
//   }
// });

// app.post('/login', async (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   console.log(email)

//   // Recherchez l'utilisateur en fonction de son e-mail dans la base de données
//   const user = await prisma.registration.findUnique({
//     where: {
//       email: email,
//     },
//   });
//   if (password==="Lmsmember" && email==="lms@gmail.com") {
//     // Le mot de passe ne correspond pas
//     req.session.isLoggedIn = true;
//     return res.redirect('adminpage');
//   }

//   if (!user) {
//     // L'utilisateur n'existe pas
//     return res.render('log', { errorMessage: 'Adresse e-mail incorrecte' });
//   }

//   // Vérifiez le mot de passe en comparant le mot de passe haché stocké avec le mot de passe fourni
//   const passwordMatch = await bcrypt.compare(password, user.password);

//   if (!passwordMatch) {
//     // Le mot de passe ne correspond pas
//     return res.render('log', { errorMessage: 'Mot de passe incorrect' });
//   }

//   res.redirect('/');
// });


// app.post('/enregistrer-article',upload.single('image'), async (req, res) => {
//     const titre = req.body.titre;
//     const contenu = req.body.contenu;
//     const image = req.body.image ; // Nom du fichier image s'il est téléchargé
//     const img="/assets/images_1/"+req.file.filename
//     // Enregistrez l'article de blog dans la base de données
//     const article = await prisma.blog.create({
//       data: {
//         titre: titre,
//         description: contenu, // Vous pouvez choisir d'enregistrer le contenu dans la description
//         imagePath: img,
//       },
//     });

//     console.log('Article enregistré avec succès:', article);

//     // Redirigez l'utilisateur vers une page de confirmation ou autre
//     res.redirect('confirmationblog');
// });


// app.post('/enregistrer-event', upload.single('image'), async (req, res) => {
//   const titre = req.body.titre;
//   const description = req.body.contenu;
//   const lieu = req.body.lieu;
//   const date = req.body.date;
//   const img="/assets/images_1/"+req.file.filename
//   const lien = req.body.lien;
//   const isoDateWithSeconds = date + ':00.000Z';
//     // Enregistrez l'article de la conférence dans la base de données
//     const article = await prisma.conference.create({
//       data: {
//         titre,
//         description,
//         imagePath: img,
//         lien,
//         lieu,
//         date: isoDateWithSeconds
//       },
//     });

//     console.log('Article enregistré avec succès:', article);

//     // Redirigez l'utilisateur vers une page de confirmation ou autre
//     res.redirect('confirmationevent');
// });


// app.post('/enregistrer-formation', upload.none(), async (req, res) => {
//   const titre = req.body.titre;
//   const contenu = req.body.contenu;

//     // Enregistrez la formation dans la base de données
//     const formation = await prisma.themeFormation.create({
//       data: {
//         titre,
//         description: contenu,
//       },
//     });

//     console.log('Formation enregistrée avec succès :', formation);

//     // Redirigez l'utilisateur vers une page de confirmation ou autre
//     res.redirect('confirmationformation');
// });

// app.post('/enregistrer-offer', upload.single('image'), async (req, res) => {
//   const annonceType = req.body['annonce-type'];
//   const contenu = req.body.contenu;
//   const fonc = req.body.fonc;
//   const date = req.body.date;
//   const img="/assets/images_1/"+req.file.filename

//     // Enregistrez l'offre dans la base de données
//     const offre = await prisma.offre.create({
//       data: {
//         type: annonceType,
//         description: contenu,
//         imagePath:img,
//         fonc:fonc ,
//       },
//     });

//     console.log('Offre enregistrée avec succès :', offre);

//     // Redirigez l'utilisateur vers une page de confirmation ou autre
//     res.redirect('confirmationoffre');
// });


// app.post('/enregistrer-projet', upload.single('image'), async (req, res) => {
//   const titre = req.body.titre;
//   const description = req.body.contenu;
//   const img="/assets/images_1/"+req.file.filename

//     // Enregistrez le projet dans la base de données
//     const projet = await prisma.projet.create({
//       data: {
//         titre,
//         description,
//         imagePath: img,
//       },
//     });

//     console.log('Projet enregistré avec succès :', projet);
//    // Redirigez l'utilisateur vers une page de confirmation ou autre
//    res.redirect('confirmationoffre');
//   });

//   app.get('/details_blog/:id', async (req, res) => {
//     const blogId = parseInt(req.params.id); // Obtenez l'ID du blog depuis les paramètres d'URL
  
//     try {
//       const blog = await prisma.blog.findUnique({
//         where: {
//           id: blogId,
//         },
//       });
  
//       if (!blog) {
//         return res.status(404).send('Blog non trouvé');
//       }
  
//       // Rendre la page de détails du blog en utilisant EJS
//       res.render('details_blog', { blog });
//     } catch (error) {
//       console.error('Erreur lors de la récupération des détails du blog :', error);
//       res.status(500).send('Erreur lors de la récupération des détails du blog');
//     }
//   });
  
//   app.get('/details_confs/:id', async (req, res) => {
//     const confId = parseInt(req.params.id); // Obtenez l'ID du blog depuis les paramètres d'URL
  
//     try {
//       const conf = await prisma.conference.findUnique({
//         where: {
//           id: confId,
//         },
//       });
  
//       if (!conf) {
//         return res.status(404).send('Blog non trouvé');
//       }
  
//       // Rendre la page de détails du blog en utilisant EJS
//       res.render('details_confs', { conf });
//     } catch (error) {
//       console.error('Erreur lors de la récupération des détails du blog :', error);
//       res.status(500).send('Erreur lors de la récupération des détails du blog');
//     }
//   });

//   app.get('/details_projet/:id', async (req, res) => {
//     const projId = parseInt(req.params.id); // Obtenez l'ID du blog depuis les paramètres d'URL
  
//     try {
//       const proj = await prisma.projet.findUnique({
//         where: {
//           id: projId,
//         },
//       });
  
  
//       // Rendre la page de détails du blog en utilisant EJS
//       res.render('details_projet', { proj });
//     } catch (error) {
//       console.error('Erreur lors de la récupération des détails du blog :', error);
//       res.status(500).send('Erreur lors de la récupération des détails du blog');
//     }
//   });

//   app.get('/conferences', async (req, res) => {
//     try {
//       // Récupérer toutes les conférences depuis la base de données
//       const confs = await prisma.conference.findMany({
//         orderBy: {
//           id: 'desc'
//         }
//       });
  
//       // Rendre la vue EJS et envoyer les données des conférences
//       res.render('conferences', { confs });
//     } catch (error) {
//       console.error('Erreur lors de la récupération des conférences :', error);
//       res.status(500).send('Erreur serveur');
//     }
//   });

//   app.get('/mentions_legales',(req,res)=>{
//     res.render('mentions_legales')
//   })
//   app.get('/politique_confidentialite',(req,res)=>{
//     res.render('politique_confidentialite')
//   })
//   app.get('/term',(req,res)=>{
//     res.render('term')
//   })
// app.get('/confirmationblog',(req,res)=>{
//   res.render('confirmation_blog')
// })
// app.get('/confirmationevent',(req,res)=>{
//   res.render('confirmation_event')
// })
// app.get('/confirmationformation',(req,res)=>{
//   res.render('confirmation_formation')
// })
// app.get('/confirmationoffre',(req,res)=>{
//   res.render('confirmation_offre')
// })
// app.get('/confirmationprojet',(req,res)=>{
//   res.render('confirmation_projet')
// })
// app.get('/partenaires',(req,res)=>{
//     res.render('partenaire')
// })
// app.get('/projet',async (req,res)=>{
//   const projet = await prisma.projet.findMany({
//     orderBy: {
//       id: 'desc'
//     }
//   });
//     res.render('projet',{projet})
// })
// app.get('/quisommesnous',(req,res)=>{
//     res.render('quisommesnous')
// })
// app.get('/services',(req,res)=>{
//     res.render('services')
// })
// app.get('/team',(req,res)=>{
//     res.render('team')
// })
// app.get('/contacte',(req,res)=>{
//   res.render('contacter')
// })

// app.get('/addformcontent/:id',(req,res)=>{
//   if (req.session.isLoggedIn) {
//   const idform=parseInt(req.params.id)
//   res.render('addformcontent',{idform} )
//   }
//   else{
//     return("impossible")
//   }
// })
// app.get('/formations',async (req,res)=>{
//   const formations=await prisma.themeFormation.findMany()
//   res.render('formations',{formations})
// })

// app.get('/formation/:id',async (req,res)=>{
//   const idform=parseInt(req.params.id)
//   const formations=await prisma.contentFormation.findMany(
//     {where:{
//       themeFormationId:idform,
//     }}
//   )
//   res.render('formation',{formations,idform})
// })

// app.get('/comment/:idform',async (req,res)=>{
//   const idform=parseInt(req.params.idform)
//   try {
//   const commentaires = await prisma.commentaireFormation.findMany(
//     {where: {
//       formationId: idform
//     }});
//   res.render('commentaire',{commentaires})
// } catch (error) {
//   console.error('Erreur lors de l\'enregistrement du commentaire :', error);
//   res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'enregistrement du commentaire.' });
// }
// })

// app.post('/enregistrer-commentaire/:idf', async (req, res) => {
//   try {
//     const contenu = req.body.commentaire;
//     const formationId = parseInt(req.params.idf);
//     const userName = req.body.username; // Récupérez le nom d'utilisateur depuis les données de la requête
//     const dateCommentaire = new Date();
//     // Utilisez Prisma pour créer un nouveau commentaire
//     const nouveauCommentaire = await prisma.commentaireFormation.create({
//       data: {
//         contenu:contenu,
//         auteur: userName,
//         formationId:formationId,
//         date: dateCommentaire,
//       }
//     });
//     res.redirect('/comment/' + formationId);
//   } catch (error) {
//     console.error("Erreur lors de l'enregistrement du commentaire :", error);
//     res.status(500).json({ message: "Une erreur s'est produite lors de l'enregistrement du commentaire." });
//   }
// });


// app.get('/emploi/:id',async (req,res)=>{
//   try {
//     const Idempp = parseInt(req.params.id);
//   const offers = await prisma.offre.findMany({
//     orderBy: {
//       id: 'desc'
//     }
//   });
//   const offre = await prisma.offre.findUnique({
//     where: {
//       id: Idempp,
//     },
//   });
//     // Rendre la page de détails du blog en utilisant EJS
//     res.render('emploi', { offre ,offers})
//   } catch (error) {
//     console.error('Erreur lors de la récupération des détails du blog :', error);
//     res.status(500).send('Erreur lors de la récupération des détails du blog');
//   }

// })

// app.get('/emplois',async (req,res)=>{
//   const offers = await prisma.offre.findMany({
//     where: {
//       type: "emploi",
//     },
//   });
//   res.render('emplois', { offers})
// })

// app.get('/stage',async (req,res)=>{
//   const offers = await prisma.offre.findMany({
//     where: {
//       type: "stage",
//     },
//   });
//   res.render('emplois', { offers})
// })

// // Gestion de la soumission du formulaire
// // ...

// // Gestion de la soumission du formulaire pour plusieurs fichiers
// app.post('/ajouter-formation/:id', upload.array('fichiers[]'), async (req, res) => {
//   try {
//     const idform=parseInt(req.params.id)
//     const titre = req.body.titre;
//     const description = req.body.description;
//       const fichiers = req.files.map(file => "/assets/images_1/"+file.filename);
//       const path = fichiers.join(', ');

//       // Enregistrement des données dans la base de données
//       const nouvelleFormation = await prisma.contentFormation.create({
//           data: {
//               titre:titre,
//               description:description,
//               path:path,
//               themeFormationId:idform,
//           },
//       });

//       res.redirect('/confirmationoffre');
//   } catch (error) {
//       console.error('Erreur lors de l\'ajout de la formation :', error);
//       res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'ajout de la formation' });
//   }
// });

// app.get('/formationview/:idf/:id', async (req, res) => {
//   const idform = parseInt(req.params.id);
//   const idf = parseInt(req.params.idf);

//   try {
//     const form = await prisma.contentFormation.findUnique({
//       where: {
//         id: idform,
//         themeFormationId: idf
//       }
//     });
//     const commentaires = await prisma.commentaireFormation.findMany({
//       where: {
//         formationId: idform
//       }
//     });
//     const formations =await form.path.split(',');
//       // Si le contenu de la formation existe, vous pouvez afficher ses détails
//       res.render('formationview', { form, formations, idf, commentaires });
  
//   } catch (error) {

//     res.render('pas_element');
//   }
// });


// app.get('/supprimerblog/:id', async (req, res) => {
//   const id = parseInt(req.params.id);
//   console.log(id);
//   try {
//     await prisma.blog.delete({
//       where: {
//         id: id
//       }
//     });

//     res.send('Blog supprimé avec succès.');
//   } catch (error) {
//     console.error('Une erreur s\'est produite lors de la suppression du blog :', error);
//     res.status(500).send('Une erreur s\'est produite lors de la suppression du blog.');
//   }
// });

// app.get('/supprimerconfs/:id', async (req, res) => {
//   const id = parseInt(req.params.id);

//   try {
//     await prisma.conference.delete({
//       where: {
//         id: id
//       }
//     });

//     res.send('Conférence supprimée avec succès.');
//   } catch (error) {
//     console.error('Une erreur s\'est produite lors de la suppression de la conférence :', error);
//     res.status(500).send('Une erreur s\'est produite lors de la suppression de la conférence.');
//   }
// });

// app.get('/supprimeremploi/:id', async (req, res) => {
//   const id = parseInt(req.params.id);

//   try {
//     await prisma.offre.delete({
//       where: {
//         id: id
//       }
//     });

//     res.send("Offre d'emploi supprimée avec succès.");
//   } catch (error) {
//     console.error('Une erreur s\'est produite lors de la suppression de l\'offre d\'emploi :', error);
//     res.status(500).send('Une erreur s\'est produite lors de la suppression de l\'offre d\'emploi.');
//   }
// });

// app.get('/Supprimerformation/:idf/:id', async (req, res) => {
//   const id = parseInt(req.params.id);
//   const idf = parseInt(req.params.idf);

//   try {
//     await prisma.contentFormation.delete({
//       where: {
//         id: id,
//         themeFormationId: idf
//       }
//     });

//     res.send('Contenu de la formation supprimé avec succès.');
//   } catch (error) {
//     console.error('Une erreur s\'est produite lors de la suppression du contenu de la formation :', error);
//     res.status(500).send('Une erreur s\'est produite lors de la suppression du contenu de la formation.');
//   }
// });

// app.get('/supprimerformations/:id', async (req, res) => {
//   const id = parseInt(req.params.id);

//   try {
//     await Promise.all([
//       prisma.contentFormation.deleteMany({
//         where: {
//           themeFormationId: id
//         }
//       }),
//       prisma.themeFormation.delete({
//         where: {
//           id: id
//         }
//       })
//     ]);

//     res.send('Formations supprimées avec succès.');
//   } catch (error) {
//     console.error('Une erreur s\'est produite lors de la suppression des formations :', error);
//     res.status(500).send('Une erreur s\'est produite lors de la suppression des formations.');
//   }
// });

// app.get('/supprimerprojet/:id', async (req, res) => {
//   const id = parseInt(req.params.id);

//   try {
//     await prisma.projet.delete({
//       where: {
//         id: id
//       }
//     });

//     res.send('Projet supprimé avec succès.');
//   } catch (error) {
//     console.error('Une erreur s\'est produite lors de la suppression du projet :', error);
//     res.status(500).send('Une erreur s\'est produite lors de la suppression du projet.');
//   }
// });

// // ...

// app.listen(process.env.PORT || 8082)



const express=require('express')
const bodyParser=require('body-parser')
const cors =require('cors')
const morgan=require('morgan')
const session = require('express-session');
const path = require("path");
const multer = require('multer');
const nodemailer = require('nodemailer');

const app=express()
// const { createPool } = require('mysql');

// const connection = createPool({
//   host: 'localhost',
//   user: 'wqqf3260_invention',
//   password: 'PVOl8studmrm',
//   database: 'wqqf3260_invention',
//   connectionLimit: 100 // Limite de connexions simultanées au pool
// });

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'wqqf3260_invention',
  password: 'PVOl8studmrm',
  database: 'wqqf3260_invention',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Use the connection for your queries
connection.query('SELECT * FROM Conference ORDER BY id DESC;', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
  } else {
    console.log('Query results:', results);
  }
});


app.use(session({
  secret: '1234567',
  resave: false,
  saveUninitialized: true,
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin:true,methods:["GET", "POST", "PUT", "DELETE"],credentials:true,}));
app.use(morgan('combine'))

app.use(express.static("public"))

// Définissez le dossier de destination pour les fichiers téléchargés
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Spécifiez le chemin absolu où vous souhaitez enregistrer les fichiers
    cb(null, path.join(__dirname, '..', 'public','assets', 'images_1'));
  },
  filename: function (req, file, cb) {
    // Générez un nom de fichier unique (vous pouvez également le personnaliser)
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

const transporter = nodemailer.createTransport({
  host: 'mail.lms-invention.com', // Remplacez par le serveur SMTP de votre e-mail
  port: 465, // Port SMTP approprié
  secure: true, // false pour le protocole SMTP, true pour SMTPS (SSL/TLS)
  auth: {
    user: 'info@lms-invention.com', // Votre adresse e-mail
    pass: 'LMSINV@info23', // Mot de passe de votre adresse e-mail
  },
});

// Gérer les soumissions de formulaire
app.post('/submit-form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  const mailOptions = {
    from: 'info@lms-invention.com',
    to: 'info@lms-invention.com', // Adresse e-mail du destinataire
    subject: subject,
    html: `Name: ${name}<br>Email: <a href="mailto:${email}">${email}</a><br>Message: ${message}`
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.render('confirmation_postul', {message: 'Erreur ',title:'Veuillez réessayer dans un moment',image:'../assets/wrong.jfif' })
      } else {
          console.log('Email sent: ' + info.response);
          res.render('confirmation_postul', {message: 'Nous vous reviendront dans les délai dès que possible',title:'Votre message a été soumis avec succès',image:'../assets/newsletter.jfif'})
      }
  });
});

// Configuration de la route pour gérer la soumission du formulaire
app.post('/submit-offer', upload.single('fichiers'), (req, res) => {
  const titre = req.body.titre;
  const name = req.body.Name;
  const email = req.body.Email;
  const message = req.body.message;
  const filePath = req.file ? req.file.path : null; // Chemin du fichier téléchargé

  const mailOptions = {
      from: 'info@lms-invention.com',
      to: 'info@lms-invention.com', // Adresse e-mail du destinataire
      subject: 'Nouvelle soumission de formulaire',
      text: `
      Titre:Pour le poste de ${titre}
      Nom: De la part de ${name}
      Email: ${email}
      Message: ${message}
      `,
      attachments: [
          {
              filename: 'CV.pdf', // Nom du fichier joint
              path: filePath // Chemin du fichier téléchargé
          }
      ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.render('confirmation_postul', {message: 'Erreur du server',title:'Veuillez réessayer dans un moment',image:'../assets/wrong.jfif' })
          
      } else {
          console.log('E-mail envoyé : ' + info.response);
          res.render('confirmation_postul', {message: 'Nous vous reviendront après analyse de votre dossier',title:'Votre dossier a été soumis avec succès',image:'../assets/newsletter.jfif' })
      }
  });
});



app.post('/souscription_conf/:id', (req, res) => {
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const idconf = req.params.id;
  const subscribeToNotifications = req.body.notif === 'on';

  // Exécutez la requête SQL pour insérer les données
  const sql = `
    INSERT INTO souscripconf (name, email, idconf, sub)
    VALUES (?, ?, ?, ?)
  `;
  
  connection.query(sql, [userName, userEmail, idconf, subscribeToNotifications], (error, results) => {
    if (error) {
      console.error(error);
      return res.render('confirmation_postul', {
        message: 'Erreur du serveur',
        title: 'Veuillez réessayer dans un moment',
        image: '../assets/wrong.jfif'
      });
    }

    // Répondez avec un message de succès ou effectuez une redirection
    res.render('confirmation_postul', {
      message: 'Nous vous enverrons le lien de la conférence très prochainement',
      title: 'Vous êtes désormais parmi les participants de cette conférence',
    });
  });
});



app.post('/newsletter', (req, res) => {
  const email = req.body.email;

  // Rechercher l'e-mail dans la table newsletter
  const checkSubscriberQuery = `
    SELECT * FROM Newsletter WHERE email = ?;
  `;

  connection.query(checkSubscriberQuery, [email], (error, results) => {
    if (error) {
      console.error(error);
      return res.render('newsletter_msg', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
    }

    // Si l'abonné existe déjà, renvoyer une réponse appropriée
    if (results.length > 0) {
      return res.render('newsletter_msg', { message: `Cet adresse mail ${email} est déjà abonné à notre newsletter`, title: 'OOPS...', image: '../assets/wrong.jfif' });
    }

    // Si l'abonné n'existe pas, ajouter un nouvel enregistrement
    const addSubscriberQuery = `
      INSERT INTO Newsletter (email) VALUES (?);
    `;

    connection.query(addSubscriberQuery, [email], (error, results) => {
      if (error) {
        console.error(error);
        return res.render('newsletter_msg', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
      }

      // Réponse de succès
      res.render('newsletter_msg', { message: 'Vous recevrez prochainement le prochain numéro de notre newsletter.', title: 'Merci de vous être abonné', image: '../assets/newsletter.jfif' });
    });
  });
});


app.get('/',(req,res)=>{
  
    res.render('homepage')
})

app.get('/actualites', (req, res) => {
  // Sélectionnez tous les blogs ordonnés par ID décroissant
  const getBlogsQuery = `
    SELECT * FROM Blog ORDER BY id DESC;
  `;

  connection.query(getBlogsQuery, (error, results) => {
    if (error) {
      console.error(error);
      return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
    }

    // Rendre la vue 'actualites' avec les blogs récupérés
    res.render('actualites', { blogs: results });
  });
});

app.get('/addblog',(req,res)=>{
  if (req.session.isLoggedIn) {
    res.render('addblog')
  }else{return("impossible")}
})
app.get('/opportunite',(req,res)=>{
    res.render('carriere')
})
app.get('/evenement',(req,res)=>{
    res.render('evenement')
})
app.get('/faq',(req,res)=>{
    res.render('faq')
})
app.get('/log',(req,res)=>{
    res.render('log', { errorMessage: '' })
})

app.get('/adminpage',(req,res)=>{
  if (req.session.isLoggedIn) {
  res.render('pageadmin')
  }else{
    return("impossible")
  }
})

app.get('/addblog',(req,res)=>{
  if (req.session.isLoggedIn) {
  res.render('addblog')
  }else{
    return("Impossible")
  }
})

app.get('/addformation',(req,res)=>{
  if (req.session.isLoggedIn) {
  res.render('addformation')
  }else{
    return("Impossible")
  }
})

app.get('/addevents',(req,res)=>{
  if (req.session.isLoggedIn) {
  res.render('addevents')
  }else{
    return("Impossible")
  }
})

app.get('/addoffer',(req,res)=>{
  if (req.session.isLoggedIn) {
  res.render('addoffer')
  }else{
    return("Impossible")
  }
})

app.get('/addprojet',(req,res)=>{
  if (req.session.isLoggedIn) {
  res.render('addprojet')
  }else{
    return("Impossible")
  }
})


app.get('/addblogadmin', (req, res) => {
  // Vérifier si l'utilisateur est connecté
  if (req.session.isLoggedIn) {
    // Sélectionnez tous les blogs ordonnés par ID décroissant
    const getBlogsQuery = `
      SELECT * FROM Blog ORDER BY id DESC;
    `;

    connection.query(getBlogsQuery, (error, results) => {
      if (error) {
        console.error(error);
        return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
      }

      // Rendre la vue 'actualitesadmin' avec les blogs récupérés
      res.render('actualitesadmin', { blogs: results });
    });
  } else {
    // L'utilisateur n'est pas connecté, rediriger vers la page de connexion
    res.redirect('/login');
  }
});

app.get('/addformationsadmin', (req, res) => {
  // Vérifier si l'utilisateur est connecté
  if (req.session.isLoggedIn) {
    // Sélectionnez toutes les formations triées par ID décroissant
    const getFormationsQuery = `
      SELECT * FROM ThemeFormation ORDER BY id DESC;
    `;

    connection.query(getFormationsQuery, (error, results) => {
      if (error) {
        console.error(error);
        return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
      }

      // Rendre la vue 'formationsadmin' avec les formations récupérées
      res.render('formationsadmin', { formations: results });
    });
  } else {
    // L'utilisateur n'est pas connecté, rediriger vers la page de connexion
    res.redirect('/login');
  }
});

app.get('/addformationadmin/:id', (req, res) => {
  // Vérifiez si l'utilisateur est connecté
  if (req.session.isLoggedIn) {
    // Récupérez l'ID du thème à partir des paramètres de la requête
    const idForm = parseInt(req.params.id);

    // Sélectionnez toutes les formations pour le thème spécifié
    const getFormationsQuery = `
      SELECT * FROM ContentFormation WHERE themeFormationId = ?;
    `;

    connection.query(getFormationsQuery, [idForm], (error, results) => {
      if (error) {
        console.error(error);
        return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
      }

      // Rendre la vue 'formationadmin' avec les formations récupérées et l'ID du thème
      res.render('formationadmin', { formations: results, idform: idForm });
    });
  } else {
    // L'utilisateur n'est pas connecté, rediriger vers la page de connexion
    res.redirect('/login');
  }
});

app.get('/addeventsadmin', (req, res) => {
  // Vérifiez si l'utilisateur est connecté
  if (req.session.isLoggedIn) {
    // Sélectionnez toutes les conférences, triées par ID décroissant
    const getConferencesQuery = `
      SELECT * FROM Conference ORDER BY id DESC;
    `;

    connection.query(getConferencesQuery, (error, conferences) => {
      if (error) {
        console.error(error);
        return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
      }

      // Rendre la vue 'conferencesadmin' avec les conférences récupérées
      res.render('conferencesadmin', { confs: conferences });
    });
  } else {
    // L'utilisateur n'est pas connecté, rediriger vers la page de connexion
    res.redirect('/login');
  }
});

app.get('/addofferadminemploi', (req, res) => {
  // Vérifiez si l'utilisateur est connecté
  if (req.session.isLoggedIn) {
    // Sélectionnez toutes les offres d'emploi
    const getJobOffersQuery = `
      SELECT * FROM Offre WHERE type = 'emploi';
    `;

    connection.query(getJobOffersQuery, (error, jobOffers) => {
      if (error) {
        console.error(error);
        return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
      }

      // Rendre la vue 'emploisadmin' avec les offres d'emploi récupérées
      res.render('emploisadmin', { offers: jobOffers });
    });
  } else {
    // L'utilisateur n'est pas connecté, rediriger vers la page de connexion
    res.redirect('/login');
  }
});

app.get('/addofferadminstage', (req, res) => {
  // Vérifiez si l'utilisateur est connecté
  if (req.session.isLoggedIn) {
    // Sélectionnez toutes les offres de stage
    const getInternshipOffersQuery = `
      SELECT * FROM Offre WHERE type = 'stage';
    `;

    connection.query(getInternshipOffersQuery, (error, internshipOffers) => {
      if (error) {
        console.error(error);
        return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
      }

      // Rendre la vue 'emploisadmin' avec les offres de stage récupérées
      res.render('emploisadmin', { offers: internshipOffers });
    });
  } else {
    // L'utilisateur n'est pas connecté, rediriger vers la page de connexion
    res.redirect('/login');
  }
});
app.get('/addprojetadmin', (req, res) => {
  // Vérifiez si l'utilisateur est connecté
  if (req.session.isLoggedIn) {
    // Sélectionnez tous les projets, triés par ID décroissant
    const getProjectsQuery = `
      SELECT * FROM Projet ORDER BY id DESC;
    `;

    connection.query(getProjectsQuery, (error, projects) => {
      if (error) {
        console.error(error);
        return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
      }

      // Rendre la vue 'projetadmin' avec les projets récupérés
      res.render('projetadmin', { projet: projects });
    });
  } else {
    // L'utilisateur n'est pas connecté, rediriger vers la page de connexion
    res.redirect('/login');
  }
});

app.get('/regist', (req, res) => {
  res.render('regist', { errorMessage: '' });
});

app.post('/register', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const func = req.body.function;
  const password = req.body.password;
  const confpassword = req.body.confpassword;
  const hashedPassword = password;

  // Vérifiez si le mot de passe correspond à la confirmation du mot de passe
  if (password === confpassword) {
    // Insérez l'utilisateur dans la table Registration
    const insertUserQuery = `
      INSERT INTO Registration (name, email, func, password) VALUES (?, ?, ?, ?);
    `;

    connection.query(insertUserQuery, [name, email, func, hashedPassword], (error) => {
      if (error) {
        console.error(error);
        return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
      }

      // Redirigez l'utilisateur vers la page de connexion (ou autre page)
      res.redirect('/log');
    });
  } else {
    res.render('regist', { errorMessage: 'Mot de passe non correspondant' });
  }
});

// Route de connexion
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Recherchez l'utilisateur en fonction de son e-mail dans la base de données
  const getUserQuery = `
    SELECT * FROM Registration WHERE email = ?;
  `;

  connection.query(getUserQuery, [email], (error, results) => {
    if (error) {
      console.error(error);
      return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
    }

    if (results.length === 0) {
      // L'utilisateur n'existe pas
      return res.render('log', { errorMessage: 'Adresse e-mail incorrecte' });
    }

    // Vérifiez le mot de passe
    const user = results[0];
    const passwordMatch = password === user.password;

    if (!passwordMatch) {
      // Le mot de passe ne correspond pas
      return res.render('log', { errorMessage: 'Mot de passe incorrect' });
    }

    // Authentification réussie
    req.session.isLoggedIn = true;
    res.redirect('/adminpage');
  });
});

// Route pour enregistrer un article de blog
app.post('/enregistrer-article', upload.single('image'), (req, res) => {
  const titre = req.body.titre;
  const contenu = req.body.contenu;
  const image = "/assets/images_1/" + req.file.filename;

  // Insérez l'article de blog dans la base de données
  const insertArticleQuery = `
    INSERT INTO Blog (titre, description, imagePath) VALUES (?, ?, ?);
  `;

  connection.query(insertArticleQuery, [titre, contenu, image], (error, results) => {
    if (error) {
      console.error(error);
      return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
    }

    res.redirect('confirmationblog');
  });
});

// Route pour enregistrer un événement
app.post('/enregistrer-event', upload.single('image'), (req, res) => {
  const titre = req.body.titre;
  const description = req.body.contenu;
  const lieu = req.body.lieu;
  const date = req.body.date;
  const image = "/assets/images_1/" + req.file.filename;
  const lien = req.body.lien;
  const isoDateWithSeconds = date + ':00.000Z';

  // Insérez l'événement dans la base de données
  const insertEventQuery = `
    INSERT INTO Conference (titre, description, imagePath, lieu, date, lien) VALUES (?, ?, ?, ?, ?, ?);
  `;

  connection.query(insertEventQuery, [titre, description, image, lieu, isoDateWithSeconds, lien], (error, results) => {
    if (error) {
      console.error(error);
      return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
    }

    res.redirect('confirmationevent');
  });
});

app.post('/enregistrer-formation', (req, res) => {
  const titre = req.body.titre;
  const contenu = req.body.contenu;

  // Insérez la formation dans la base de données
  const insertFormationQuery = `
    INSERT INTO ThemeFormation (titre, description) VALUES (?, ?);
  `;

  connection.query(insertFormationQuery, [titre, contenu], (error, results) => {
    if (error) {
      console.error(error);
      return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
    }

    res.redirect('confirmationformation');
  });
});

// Route pour enregistrer une offre
app.post('/enregistrer-offer', upload.single('image'), (req, res) => {
  const annonceType = req.body['annonce-type'];
  const contenu = req.body.contenu;
  const fonc = req.body.fonc;
  const date = req.body.date;
  const img = "/assets/images_1/" + req.file.filename;

  // Insérez l'offre dans la base de données
  const insertOfferQuery = `
    INSERT INTO Offre (type, description, imagePath, fonc) VALUES (?, ?, ?, ?);
  `;

  connection.query(insertOfferQuery, [annonceType, contenu, img, fonc], (error, results) => {
    if (error) {
      console.error(error);
      return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
    }

    res.redirect('confirmationoffre');
  });
});

// Route pour enregistrer un projet
app.post('/enregistrer-projet', upload.single('image'), (req, res) => {
  const titre = req.body.titre;
  const description = req.body.contenu;
  const img = "/assets/images_1/" + req.file.filename;

  // Insérez le projet dans la base de données
  const insertProjetQuery = `
    INSERT INTO Projet (titre, description, imagePath) VALUES (?, ?, ?);
  `;

  connection.query(insertProjetQuery, [titre, description, img], (error, results) => {
    if (error) {
      console.error(error);
      return res.render('error', { message: 'Erreur du serveur', title: 'Veuillez réessayer dans un moment', image: '../assets/wrong.jfif' });
    }

    res.redirect('confirmationoffre');
  });
});

// Route pour les détails du blog
app.get('/details_blog/:id', (req, res) => {
  const blogId = parseInt(req.params.id);

  // Sélectionnez le blog en fonction de son ID dans la base de données
  const selectBlogQuery = `
    SELECT * FROM Blog WHERE id = ?;
  `;

  connection.query(selectBlogQuery, [blogId], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des détails du blog');
    }

    if (results.length === 0) {
      return res.status(404).send('Blog non trouvé');
    }

    const blog = results[0];
    res.render('details_blog', { blog });
  });
});
  
 // Route pour les détails des conférences
app.get('/details_confs/:id', (req, res) => {
  const confId = parseInt(req.params.id);

  // Sélectionnez la conférence en fonction de son ID dans la base de données
  const selectConferenceQuery = `
    SELECT * FROM Conference WHERE id = ?;
  `;

  connection.query(selectConferenceQuery, [confId], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des détails de la conférence');
    }

    if (results.length === 0) {
      return res.status(404).send('Conférence non trouvée');
    }

    const conf = results[0];
    res.render('details_confs', { conf });
  });
});

// Route pour les détails des projets
app.get('/details_projet/:id', (req, res) => {
  const projId = parseInt(req.params.id);

  // Sélectionnez le projet en fonction de son ID dans la base de données
  const selectProjetQuery = `
    SELECT * FROM Projet WHERE id = ?;
  `;

  connection.query(selectProjetQuery, [projId], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des détails du projet');
    }

    if (results.length === 0) {
      return res.status(404).send('Projet non trouvé');
    }

    const proj = results[0];
    res.render('details_projet', { proj });
  });
});

// Route pour afficher toutes les conférences
app.get('/conferences', (req, res) => {
  // Select all conferences from the database using the single connection
  connection.query('SELECT * FROM Conference ORDER BY id DESC;', (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des conférences');
    }
    // No need for connection.release() when using a single connection
    res.render('conferences', { confs: results });
  });
});

  app.get('/mentions_legales',(req,res)=>{
    res.render('mentions_legales')
  })
  app.get('/politique_confidentialite',(req,res)=>{
    res.render('politique_confidentialite')
  })
  app.get('/term',(req,res)=>{
    res.render('term')
  })
app.get('/confirmationblog',(req,res)=>{
  res.render('confirmation_blog')
})
app.get('/confirmationevent',(req,res)=>{
  res.render('confirmation_event')
})
app.get('/confirmationformation',(req,res)=>{
  res.render('confirmation_formation')
})
app.get('/confirmationoffre',(req,res)=>{
  res.render('confirmation_offre')
})
app.get('/confirmationprojet',(req,res)=>{
  res.render('confirmation_projet')
})
app.get('/partenaires',(req,res)=>{
    res.render('partenaire')
})
// Route pour afficher tous les projets
app.get('/projet', (req, res) => {
  // Sélectionnez tous les projets depuis la base de données
  const selectProjetsQuery = `
    SELECT * FROM Projet ORDER BY id DESC;
  `;

  connection.query(selectProjetsQuery, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des projets');
    }

    res.render('projet', { projet: results });
  });
});
app.get('/quisommesnous',(req,res)=>{
    res.render('quisommesnous')
})
app.get('/services',(req,res)=>{
    res.render('services')
})
app.get('/team',(req,res)=>{
    res.render('team')
})
app.get('/contacte',(req,res)=>{
  res.render('contacter')
})

app.get('/addformcontent/:id',(req,res)=>{
  if (req.session.isLoggedIn) {
  const idform=parseInt(req.params.id)
  res.render('addformcontent',{idform} )
  }
  else{
    return("impossible")
  }
})
// Route pour afficher toutes les formations
app.get('/formations', (req, res) => {
  // Sélectionnez toutes les formations depuis la base de données
  const selectFormationsQuery = `
    SELECT * FROM ThemeFormation;
  `;

  connection.query(selectFormationsQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des formations');
    }

    const formations = results;

    res.render('formations', { formations });
  });
});

// Route pour afficher une formation spécifique
app.get('/formation/:id', (req, res) => {
  const idform = parseInt(req.params.id);

  // Sélectionnez toutes les contentFormations pour la formation spécifique depuis la base de données
  const selectContentFormationsQuery = `
    SELECT * FROM ContentFormation WHERE themeFormationId = ${idform};
  `;

  connection.query(selectContentFormationsQuery, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des contentFormations');
    }

    const formations = results;

    res.render('formation', { formations, idform });
  });
});

// Route pour afficher les commentaires d'une formation
app.get('/comment/:idform', (req, res) => {
  const idform = parseInt(req.params.idform);

  // Sélectionnez tous les commentaires pour la formation spécifique depuis la base de données
  const selectCommentairesQuery = `
    SELECT * FROM CommentaireFormation WHERE formationId = ${idform};
  `;

  connection.query(selectCommentairesQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des commentaires');
    }

    const commentaires = results;

    res.render('commentaire', { commentaires });
  });
});

// Route pour enregistrer un commentaire
app.post('/enregistrer-commentaire/:idf', (req, res) => {
  try {
    const contenu = req.body.commentaire;
    const formationId = parseInt(req.params.idf);
    const userName = req.body.username; // Récupérez le nom d'utilisateur depuis les données de la requête
    const dateCommentaire = new Date();

    // Insérez un nouveau commentaire dans la base de données
    const insertCommentaireQuery = `
      INSERT INTO CommentaireFormation (contenu, auteur, formationId, date)
      VALUES (?, ?, ?, ?);
    `;

    connection.query(
      insertCommentaireQuery,
      [contenu, userName, formationId, dateCommentaire],
      (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).send('Erreur lors de l\'enregistrement du commentaire');
        }

        res.redirect('/comment/' + formationId);
      }
    );
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du commentaire :", error);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'enregistrement du commentaire." });
  }
});



// Route pour afficher les détails d'une offre d'emploi
app.get('/emploi/:id', (req, res) => {
  try {
    const Idempp = parseInt(req.params.id);

    // Sélectionnez les détails de l'offre spécifique depuis la base de données
    const selectOffreQuery = `
      SELECT * FROM Offre WHERE id = ${Idempp};
    `;

    connection.query(selectOffreQuery, async (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Erreur lors de la récupération des détails de l\'offre');
      }

      const offre = results[0];

      // Sélectionnez toutes les offres d'emploi depuis la base de données
      const selectAllOffresQuery = `
        SELECT * FROM Offre WHERE type = 'emploi' ORDER BY id DESC;
      `;

      connection.query(selectAllOffresQuery, async (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).send('Erreur lors de la récupération des offres d\'emploi');
        }

        const offers = results;

        // Rendre la page de détails de l'offre en utilisant EJS
        res.render('emploi', { offre, offers });
      });
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du blog :', error);
    res.status(500).send('Erreur lors de la récupération des détails du blog');
  }
});

// Route pour afficher toutes les offres d'emploi
app.get('/emplois', (req, res) => {
  // Sélectionnez toutes les offres d'emploi depuis la base de données
  const selectAllOffresQuery = `
    SELECT * FROM Offre WHERE type = 'emploi' ORDER BY id DESC;
  `;

  connection.query(selectAllOffresQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des offres d\'emploi');
    }

    const offers = results;

    // Rendre la vue EJS et envoyer les données des offres d'emploi
    res.render('emplois', { offers });
  });
});

// Route pour afficher toutes les offres de stage
app.get('/stage', (req, res) => {
  // Sélectionnez toutes les offres de stage depuis la base de données
  const selectStageOffresQuery = `
    SELECT * FROM Offre WHERE type = 'stage' ORDER BY id DESC;
  `;

  connection.query(selectStageOffresQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération des offres de stage');
    }

    const offers = results;

    // Rendre la vue EJS et envoyer les données des offres de stage
    res.render('emplois', { offers });
  });
});

// Gestion de la soumission du formulaire pour ajouter une formation
app.post('/ajouter-formation/:id', upload.array('fichiers[]'), async (req, res) => {
  try {
    const idform = parseInt(req.params.id);
    const titre = req.body.titre;
    const description = req.body.description;
    const fichiers = req.files.map(file => "/assets/images_1/" + file.filename);
    const path = fichiers.join(', ');

    // Insérez les données dans la base de données
    const insertFormationQuery = `
      INSERT INTO ContentFormation (titre, description, path, themeFormationId)
      VALUES ('${titre}', '${description}', '${path}', ${idform});
    `;

    connection.query(insertFormationQuery, async (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Erreur lors de l\'ajout de la formation');
      }

      res.redirect('/confirmationoffre');
    });
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la formation :', error);
    res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'ajout de la formation' });
  }
});

// Route pour afficher une formation et ses commentaires
app.get('/formationview/:idf/:id', async (req, res) => {
  const idform = parseInt(req.params.id);
  const idf = parseInt(req.params.idf);

  // Sélectionnez la formation et ses commentaires depuis la base de données
  const selectFormationQuery = `
    SELECT * FROM ContentFormation WHERE id = ${idform} AND themeFormationId = ${idf};
  `;

  const selectCommentairesQuery = `
    SELECT * FROM CommentaireFormation WHERE formationId = ${idform};
  `;

  connection.query(selectFormationQuery + selectCommentairesQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la récupération de la formation et des commentaires');
    }

    const [form, commentaires] = results;

    if (!form) {
      return res.render('pas_element');
    }

    const formations = form.path.split(',');

    // Rendre la vue EJS et envoyer les données de la formation et des commentaires
    res.render('formationview', { form, formations, idf, commentaires });
  });
});

// Route pour supprimer un blog
app.get('/supprimerblog/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  // Supprimez le blog de la base de données
  const deleteBlogQuery = `
    DELETE FROM Blog WHERE id = ${id};
  `;

  connection.query(deleteBlogQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la suppression du blog');
    }

    res.send('Blog supprimé avec succès.');
  });
});

// Route pour supprimer une conférence
app.get('/supprimerconfs/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  // Supprimez la conférence de la base de données
  const deleteConferenceQuery = `
    DELETE FROM Conference WHERE id = ${id};
  `;

  connection.query(deleteConferenceQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la suppression de la conférence');
    }

    res.send('Conférence supprimée avec succès.');
  });
});

// Route pour supprimer une offre d'emploi
app.get('/supprimeremploi/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  // Supprimez l'offre d'emploi de la base de données
  const deleteJobOfferQuery = `
    DELETE FROM Offre WHERE id = ${id};
  `;

  connection.query(deleteJobOfferQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Erreur lors de la suppression de l'offre d'emploi");
    }

    res.send("Offre d'emploi supprimée avec succès.");
  });
});

// Route pour supprimer le contenu d'une formation
app.get('/Supprimerformation/:idf/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const idf = parseInt(req.params.idf);

  // Supprimez le contenu de la formation de la base de données
  const deleteContentFormationQuery = `
    DELETE FROM ContentFormation WHERE id = ${id} AND themeFormationId = ${idf};
  `;

  connection.query(deleteContentFormationQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la suppression du contenu de la formation');
    }

    res.send('Contenu de la formation supprimé avec succès.');
  });
});

// Route pour supprimer toutes les formations
app.get('/supprimerformations/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  // Supprimez toutes les formations de la base de données
  const deleteAllFormationsQuery = `
    DELETE FROM ThemeFormation WHERE id = ${id};
  `;

  connection.query(deleteAllFormationsQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la suppression des formations');
    }

    res.send('Formations supprimées avec succès.');
  });
});

app.get('/supprimerprojet/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  // Supprimez le projet de la base de données
  const deleteProjetQuery = `
    DELETE FROM Projet WHERE id = ${id};
  `;

  connection.query(deleteProjetQuery, async (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de la suppression du projet');
    }

    res.send('Projet supprimé avec succès.');
  });
});
connection.end();

// ...

app.listen(process.env.PORT || 4323)

