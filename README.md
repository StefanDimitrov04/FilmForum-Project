Film forum project made by me(both the REST API and the Angular code)


This is a WEB application using Angular for the frontend. Used a Rest-api server for backend and MongoDB for storing data.

Steps for local instalation and review:
Navigate to Rest-api folder:
npm install - command for installation of all the packeges dependances;
npm start - command to start the back-end server;
Navigate to film-forum folder:
npm install - command to install all install all packeges dependances;
Run client Angular app - ng serve --open or ng s;


ALREADY LOGGED IN PROFILES: 

email: peter.john@gmail.com;
password: asdasd;

email: mariya.profile@abv.bg;
password: mariya1234

Home screen for not logged in users:
![homeScreenNotLogged](https://github.com/StefanDimitrov04/FilmForum-Project/assets/115184100/aae0339a-f978-4419-9fd5-4caddf844016)

The cards of the films for the not logged in users(They can only read the description, look at the likes and the comments):
![filmCardNotLogged](https://github.com/StefanDimitrov04/FilmForum-Project/assets/115184100/7326b731-8de5-4f67-b07c-2c17e91a22d3)

Film cards for users who are logged in, but are not owners of the film(They can COMMENT and LIKE or DISLIKE the film):
![filmCardLoggedNotOwner](https://github.com/StefanDimitrov04/FilmForum-Project/assets/115184100/44458a0f-ae45-4289-8090-e083cb9981e8)

Film card for the owners(They can EDIT and DELETE the film, but can not comment, like or dislike their own film)
![filmCardLoggedOwner](https://github.com/StefanDimitrov04/FilmForum-Project/assets/115184100/89f4174d-043d-4b0a-b54d-86b4d2750fb3)

Log in page, the email should end at(@abv.bg or @gmail.com)
Examples: asda@gmail.com, mariya.profile@gmail.com, stefan@abv.bg and etc.
![logInPage](https://github.com/StefanDimitrov04/FilmForum-Project/assets/115184100/c8dd87bb-3a1d-4bfc-9429-2f5b36b96211)
