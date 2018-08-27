Udacity Feed Reader

A web-based application that reads RSS feeds and allows users to read them.

How to use:
To open the app in the browser open the index.html file in the project folder.
Click any link to read feed. Use the menu to switch between feed sources.

Main functions:

loadFeed()
the loadFeed function loads feeds from a selected source from the allFeeds array, namely the id parameter, like so: loadFeed(0). The function cd parameter is a callback function that will be executed once the function completes its task.

Unit testing should be done in the feedreader.js file using the Jasmine framework.

This application uses:

jQuery 
Jasmine for unit testing
Handlebars JS for templating