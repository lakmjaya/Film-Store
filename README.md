# DVDs on Sale / Project #2: The DVD Film Store

## Introduction and Motivation
This DVD Film Store website is for the second project of my Software Engineering bootcamp at Per Scholas.

I choose to go with a lot of DVD films those are on sale.
 
## Film Store - My 7 RESTful Routes (INDUCES)

### Short Video about the app
https://youtu.be/_WDMvBVISW0

### All Default Route Features
Users can navigate to the Home page, Films list page, add film page and  edit the film detail page using the nav bar. 

### Root Route (URL: /)
Welcome page details are display on this page. There is link to navigate the website.

![Home Route](/public/images/Home.png)

### Index Route (URL: /films)
Clicking on the menu links will redirect you to the Index route. Here, users can browse through the available DVD films for sale. A name, price and image is displayed for each film.  Clicking on a a film will redirect you to its show page. There are links available for Home page and add new film for sale.

![Home Route](/public/images/Index.png)

### New Route (URL: /films/new)
Clicking the Create a new films link on the button will redirect users to the New route where a form will be displayed. To create, users must fill in the properties for the new film and then click the Create film button. All parameters are required to be filled out in order to successfully create a new film DVD for sale.

Required input types for each property:
- Name - String
- Quantity - Number
- Image URL - String
- Price - Number
- Description - String

![Home Route](/public/images/New.png)

### Create Route (URL: /films)
Once the add film button is clicked, the user will be redirected to the index page. If the film was created successfully, it will be added to the mongodb database, and the new film DVD will now appear at the bottom of the index page.

### Show Route (URL: /films/:id)
Clicking on a index page film DVD will rediect users to its show page. All details of the film will be displayed along with navigation buttons. The buttons are for Buy, Edit, Return to Films and Delete. 

![Home Route](/public/images/Show.png)

### Edit Route (URL: /films/:id/edit)
Clicking the Edit button will redirect users to the Edit page of the film. A form will be displayed just like in the New route. But this time, the input boxes will be prefilled with the existing details saved in the database. Users can make changes to the details and then click the Submit  button. Once this is completed, the user will be redirected back to the show page, and the edited details will be displayed. The database will also be updated with these edits.

![Home Route](/public/images/Edit.png)

### Update Route (URL: /films/:id)
Clicking the Buy button will update the quantity of available film DVDs by decrementing it by 1. It also redirects the user to the show page which will now display the updated quantity. 

If the quantity remaining is ever less than 1, a OUT of Stock message will display on the show page, and the Buy button will be removed.

![Home Route](/public/images/Update.png)

### Destroy Route  (URL: /films/:id)
Clicking the Delete button will remove the film DVD from both the film display list and the database. The user will then be redirected to the index page.

## The Challenge

The biggest challenge of my project  was the "Update Route" syntax.


## Technologies Used
- JavaScript
- CSS
- HTML
- Node
- Express
- React
- MongoDB
- Visual Studio Code
- GitHub

## Acknowledgements and Resources
- My instructors Tishana Trainor and Kasper Kain
- My cohortmates Tamiru and Gary Newton
- Youtube
- https://www.w3schools.com


## To access this repo:
1. Clone or fork the repository Using your terminal copy the following code: git clone https://github.com/lakmjaya/Film-Store.git
2. Using VScode, download the required packages and use your localhost:300 to run the website.























