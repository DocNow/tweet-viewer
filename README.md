# DocNow Tweet Viewer

Generates a single "infinite scroll" page to show Tweets exported from a [DocNow App](http://demo.docnow.io/) collection.

## How to use the viewer

### Install

You will need node, npm, and [Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#install-gatsby-cli).

```shell
npm install --global gatsby-cli
npm i
```

* Download a collection data from DocNow
* Place `ids.csv` under `/src/data`
* Build site: 
  ```shell
  gastby build
  ```