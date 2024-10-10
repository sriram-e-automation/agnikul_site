# Agnikul Website

This is the source code of the offical website of Agnikul. 

Initially, the pages are designed as individual html pages.
In order to have professional route names and data transfer between routes, the project is revamped to run over React Js. 
Hence, the files will not be of pure react nature.


## Folder Structure
```
agnikul-react
|
|---public
|   └───images
|        └───team-photos
|             /* The photos of the team members should be kept inside the public folder since it is being referenced dynamically in the js/team.js file */
|---src
    ├───css
    │   └───poppins
    ├───images
    │   ├───about
    │   │   ├───advisors
    │   │   ├───customers
    │   │   ├───investors
    │   │   └───partners
    │   ├───book
    │   ├───book-complete
    │   ├───career
    │   ├───form-icons
    │   ├───home
    │   ├───launch
    │   ├───news
    │   ├───products
    │   └───team
    └───js   
    |
    /* The html pages for each route */
    |---Home-Page.js
    |---About-Page.js
    |---Products-Page.js
    |---Team-Page.js
    |---Career-Page.js
    |---News-Page.js
    |---Launch-Page.js
    |---Book-Page.js
    |---BookComplete-Page.js
    /* The file where the route is mapped to the component */
    |---App.js    
```

## File naming

- The component files are named as &lt;Component&gt;-Page.js
- The js files are named as &lt;Component&gt;.js. common.js has the function required for making navbar responsive
- The css files are named as &lt;Component&gt;.css. styles.css has the css for navbar, footer and the privacy policy modal.

## CSS Files
- Each file is separated into sections by comments
- All classes should have the component name as prefix since in React, the css files which are not included in the page can also be loaded sometimes.

<h2>JS Files</h2>
<ul>
<li>All the functions are wrapped into a outer function called Init.</li>
<li>The component calls the corresponding Init function before rendering</li>
</ul>



<h2>Running the code base</h2>

After cloning the repository, run:

### 'npm instaal --save'

This will load all the libraries needed.

Then, in the project directory, run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
