# 301-practice-4

__Q1- In an express server application, what does dotenv do__

The Answer : it's a libarary we need to install it to loads all enviroment variables from .env file and uses its in our code , something make our server more secure , and we can calls it by using special object "process.env" provided by Node.js to configure it externally. 

__Q2- What does the following code do:__

function render( item ) {                                       // print out function for any created object 
  let markup = $('#item-template').html();                      // takes all markup from html (clone it)
  let runTemplate = Handlebars.compile(markup);                 // convert the template into function to do the needful by using handlebar CDN 
  $("#list").append( runTemplate(markup) );                     // show it on the section must be appear in html 
};

The Answer : it's a function that used a handlebars which is a template language to replace any values from a particuler input object into our HTML file. 


__Q3 - What is the difference between relative and absolute positioning in CSS? In which SMACSS file would you put a rule with positioning?__
* Relative - the element is positioned relative to its normal position  
* Absolute - the element is positioned absolutely to its first positioned parent.

We put anything related to positioning into Layout. 


