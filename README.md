*tweet-viewer* is a minimal React based, infinite scroll viewer for a file of
tweet identifiers. 

You can use the canned file of tweet ids or put your file of tweet ids in place
at:

    public/data/tweets.csv

To run it locally in development mode:

    npm install
    npm start
    open http://localhost:8000

If you like what you see, and want to move it up to your website:

    npm run build
    scp -r build me@example.org:/var/www/

