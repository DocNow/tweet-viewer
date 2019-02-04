*tweet-viewer* is a minimal React based, infinite scroll viewer for a file of
tweet identifiers. 

You can use the canned file of tweet ids or put your file of tweet ids in place
at:

    public/data/tweets.csv

To run it locally in development mode:

    npm install
    npm start

If you like what you see, and want to move it up to your website, first edit `package.json` and remove the line with `"homepage"` or set it to your site's URL if you need to set a relative path. You don't need to do this if your site will be published at root level. Then:

    npm run build
    scp -r build me@example.org:/var/www/

