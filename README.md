# Eco Warriors Hub Readme

Currently the application resides in the Rhok Eco Warriors Github repo found [here](https://github.com/RHoKAustralia/eco-warriors-hub-web)

## Production app

The production app is hosted at [eco warriors web url](https://eco-warriors-hub.web.app/)

## Development

This project is based on `create-react-app` 

### Running the app

Run `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Running the tests

Run `yarn test`

### Building the app

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Technology

The application is currently hosted using Google firebase.

The login uses the `admin` eco warriors google email.

The projects listed on the app are stored in a no sql `firestore` database.

## Deployment

The application uses Github actions to automatically deploy when any new code is pushed to the `master` branch of the repo above.

## Uploading projects

The `fireman` app can be used to view / edit and upload new projects easier than using the Google developer web interface. The steps are below.

1. Download the `fireman` app [here](https://getfireman.com/).
2. Inside the Google developer console open the `eco-warriors-hub` firebase project
3. From Firebase project, go to Project settings > Service accounts. Click Generate new private key.
4. Download the private key. Note make sure this is kept in a secure place and not shared to anyone as it allows full read write access to the `firestore` DB.
5. Open `fireman` app and enter private key and set database name to `eco-warriors-hub`.
6. Click connect, once connected the `fireman` app should save this connection and you can skip steps `1-5` in the future.

### Fetching all projects

Once you have a connection setup

1. Set collection name to `projects`.
2. Tap on `fetch documents in collection` option.
3. This should show a list of all available projects.
4. These can be edited and then updated by pressing enter. Be careful this will change the production data so make sure the update looks good.

### Importing new projects

`fireman` has a feature to import via csv. New projects can be imported via a csv in the following format.

```
title,summary,link,img
<project title>,<project summary>,<project link>,<project img>
```
