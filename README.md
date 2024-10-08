Name: Yang Yijie
Student number: 24275293
Web Development II - Assessment2
The purpose of designing this dynamic website is to manage crowdfunding for a non-profit organization, and the website will serve as a bridge connecting fundraisers and donors. Fundraisers may need financial support for specific reasons, while donors can find fundraising projects they are willing to support through this platform. Here is a timeline of my progress on this task:

2024/09/21： Create a Github repository and associate and pull local repositories
2024/09/22： Create the index.html(home page) project
2024/09/23： The home page header and banner client interfaces are set up
2024/09/24： Import the image material and complete the static page of the home page
2024/09/25： Complete the creation of the detail page
2024/09/26： Complete the search page
2024/09/27： Create servers, install dependencies, and create databases
2024/09/28： Example Create a routing interface on the server
2024/09/29： Interface to the home page and details page
2024/09/30： This interface connects to the search page
2024/10/01： Modify the page style and modify bugs
2024/10/02:  Add additional code comments and make final refinements to the assessment

RiseTogether
一、README.md              -> Project description document
二、.gitignore             -> Git ignore files
三、package.json           -> Project dependency management
四、package-lock.json      -> Dependency lock file
五、db/                    -> Database related file
   - crowdfunding_db.js    -> NodeJS file that connects to the database
   - init.sql              -> SQL script for initializing the database
六、server/                -> Server-side code
   - app.js                -> Main application file
   - routes/               -> API routing file
     - fundraiser.js       -> Fundraiser API route
     - category.js         -> Class API routing
   - models/               -> Data model file
     - fundraiser.js       -> Fundraiser data model
     - category.js         -> Category data model
七、client/                -> Client Code
   - index.html            -> Home Page
   - search.html           -> Search page
   - fundraiser.html       -> Fundraising Page
   - css/                  -> CSS style files
     - style.css           -> Main Style File
   - js/                   -> JavaScript files
     - index.js            -> Main Page Script
     - search.js           -> Search Page Script
     - fundraiser.js       -> Fundraising Page Script
   - images/               -> Photo Resources
  
