## URL

    * Test: http://eu-osha.github.io/hwc-splashpage
    * Production: https://www.healthy-workplaces.eu

## Pre-requisites

Install NPM & Grunt to call the build tasks.
```
npm install -g grunt grunt-cli # global package to run grunt
```

## Build

```
git checkout master
npm install

Do development & commit

git checkout gh-pages
git merge master
grunt dist
git commit CSS & resources
```

## To create a new release

1. Bring all the changes to the ``gh-pages`` branch (i.e. ``git checkout gh-pages && git merge master``)
2. Build the distribution ``grunt pack``, which will result in a new build artifact called ``release.zip``. This is the release to be deployed in production.

This will create release.zip that is deployable in root directory of the web server.

3. Visit the *Release* tab and draft a new release, add comments, and upload the ``release.zip`` (first rename to next increment i.e ``release-1.2.4.zip``)

Info: The ``grunt pack`` compiles the LESS files into CSS, minifies the JS.

## Deployment guidelines

	* Visit the release page and download the ZIP file attached to the latest release (ie. hwc-splashpage-v.1.0.0.zip)
	* Unzip the file in the root directory of your web server's virtual host
