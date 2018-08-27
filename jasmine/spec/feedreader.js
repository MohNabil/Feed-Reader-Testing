/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
        //All the test suits required.
    describe('RSS Feeds', function() {
        /*
        A spec that tests to make sure that the
          allFeeds variable has been defined and that it is not
          empty.
        */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //A spec to ensure the feeds has a defined URL and the URL is not empty.
        it('url is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        //A spec to ensure the feeds has a name defined and the name is not empty.
        it('name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {

        //A spec that ensures the menu element is hidden by default.
        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //A spec that ensures the menu changes visibility when the menu icon is clicked.
        it('visibility on clicking', function() {
            var menuClick = $('.menu-icon-link');
            menuClick.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuClick.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        var feedLength;
        /* 
        A spec that ensures when the loadFeed function is called and completes its work, there is at least
        a single entry element within the feed container.
        */
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedLength = $('.feed .entry').length;
                done();
            });
        });
        it('has one entry', function(done) {
            expect(feedLength).toBeGreaterThan(0);
            done();
        });
    });


    describe('New Feed Selection', function() {
        /*
        A spec that ensures when a new feed is loaded
        by the loadFeed function that the content actually changes.
        */
        var oldFeed,
            newFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });
        it('change content when new feed is loaded', function(done) {
            expect(newFeed).not.toEqual(oldFeed);
            done();
        });
    });
}());