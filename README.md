# Hunter Visit

In march 2020 during 3 weeks about 10 students from Aalborg Techcollege (https://techcollege.dk/) and 14 students from IES El Rincón (http://www.ieselrincon.es) develop together an App in Gran Canaria.

This repo is just a draft project developped by the teachers envolved in the project to explore possibilities and forsee problems students could get stuck with.

Here you can find a draft deploy of the project: (as mobile PWA only)
https://huntervisit-5df0b.firebaseapp.com/home

## Getting Started

Install a full ionic develop environment. And after that:

* Download this project repo.

```
git clone https://github.com/tcrurav/hunter-visit.git
```

* Install dependencies and lauch the App locally:

```
cd hunter-visit
npm install
ionic serve -l
```

Enjoy!

***IMPORTANT: Virtual Reality and PWA functionality are not going to work unless you deploy the project in a https server. Follow next sections to get all that done.***

***IMPORTANT: By default the data is hardcoded in api.service.ts. If you want to keep your data in the a firebase realtime database just follow next sections to get it done.***

***Google API KEY no longer needed by default: Now Leaflet is used instead of Google maps for the maps and Geolocation. If you still want to use Google Maps you need to add a Google maps API key. Follow next sections to get all that done.***

## Remarkable points regarding PWA with Ionic 4 and uploading to firebase

As stated in the example in https://ionicthemes.com/tutorials/about/the-complete-guide-to-progressive-web-apps-with-ionic4:

1. Install @angular/pwa package:

```
ng add @angular/pwa
```

2. Build the app:

```
ionic build --prod
```

3. Create a project in firebase and after that deploy your ionic built project to it:

```
npm install -g firebase-tools
```

Initilize your firebase project answering the questions the following way:

```
firebase init
? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices.
 ( ) Database: Deploy Firebase Realtime Database Rules
 ( ) Firestore: Deploy rules and create indexes for Firestore
 ( ) Functions: Configure and deploy Cloud Functions
>(*) Hosting: Configure and deploy Firebase Hosting sites
 ( ) Storage: Deploy Cloud Storage security rules
 ( ) Emulators: Set up local emulators for Firebase features
 ? What do you want to use as your public directory? www
 ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) n
 ? File docs/index.html already exists. Overwrite? (y/N) n
```

And now deploy your proyect:

```
firebase deploy
```

The execution of the above command returns the Hosting URL that you can try in your favorite mobile browser. (It's only ready for the mobile resolution right now)

Enjoy!

## Remarkable points regarding A-Frame framework

As stated in the example in https://github.com/bohdanafanasyev/angular-cli-aframe:

1. Edit Polyfills.ts

```
import 'aframe';
```

Note: current line should be inserted before import 'zone.js/dist/zone';


2. Modify the modules of the pages in which you include A-Frame to import CUSTOM_ELEMENTS_SCHEMA

```
import { ...CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [ ... ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
```

## Remarkable points regarding Firebase Realtime Database configuration

By default this draft project is using hardcoded data. If you want to use Firebase Realtime Database, then follow next steps:

1. Create a Firebase Realtime Database in your firebase project. Follow the instructions in this link:

https://morioh.com/p/208e6d5d903a


2. Don't forget to copy firebase configuration data in the following files:

```
environments/environments.ts
environments/environments.prod.ts
```

3. Don't forget to Uncomment the followin line in app.module.ts:

```
AngularFireModule.initializeApp(environment.firebase),
```

4. Edit the method getAllVisits() in the file api.service.ts uncommenting the lines to get data from your firebase realtime database of your firebase project.

5. Re-initialize your firebase project and select the option for the use of database:

```
firebase init
? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices.
 (*) Database: Deploy Firebase Realtime Database Rules
 ( ) Firestore: Deploy rules and create indexes for Firestore
 ( ) Functions: Configure and deploy Cloud Functions
>(*) Hosting: Configure and deploy Firebase Hosting sites
 ( ) Storage: Deploy Cloud Storage security rules
 ( ) Emulators: Set up local emulators for Firebase features
 ? What do you want to use as your public directory? www
 ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) n
 ? File docs/index.html already exists. Overwrite? (y/N) n
```

6. And now deploy your proyect again:

```
firebase deploy
```

7. Finally. Don't forget to use the following database rules. In database.rules.json should be to allow everyone "read" permission of your firebase realtime database:

```
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```

## Remarkable points regarding Google maps

Now this draft project is using Leaflet as default option for the maps and the geolocation. With this library you don't have to create any API Key. Wow!!!

If for any reason you prefer using Google maps, you have to put your Google Maps API Key in all places marked with (PUT YOUR GoogleMaps API Key HERE). Here is the list of files:

```
src/environments/environment.prod.ts
src/environments/environment.ts
package.json
config.xml
```

Uncomment the following line in the method answerTheQuestion() in visit.page.ts:

```
this.router.navigateByUrl('/geolocation');
```

If you use Google Maps don't use "ionic build --prod" to build project. Instead use the following line:

```
npm run buildwww
```

Re-initialize your firebase project and select the option for the use of database:

```
firebase init
? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices.
 (*) Database: Deploy Firebase Realtime Database Rules
 ( ) Firestore: Deploy rules and create indexes for Firestore
 ( ) Functions: Configure and deploy Cloud Functions
>(*) Hosting: Configure and deploy Firebase Hosting sites
 ( ) Storage: Deploy Cloud Storage security rules
 ( ) Emulators: Set up local emulators for Firebase features
 ? What do you want to use as your public directory? docs
 ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) n
 ? File docs/index.html already exists. Overwrite? (y/N) n
```

And finally deploy your proyect:

```
firebase deploy
```

***IMPORTANT: In package.json put your API Key only in (PUT YOUR GoogleMaps API Key HERE) and not in (YOUR_API_KEY_IS_HERE)***

## Planned resources

* Leaflet 
* Google maps <sub><sup>(alternative to Leaflet)<sub><sup>
* Images
* Videos <sub><sup>(Not implemented yet)</sup></sub>
* Audios <sub><sup>(Not implemented yet)</sup></sub>
* Virtual Reality (A-Frame) 

### Prerequisites

All you need is... some time and...
* Visual Studio Code.
* Ionic
* A-Frame.
* Leaflet (or alternatively Google maps).
* Firebase Real Time Database.
* Firebase Hosting.
* More hours than you first could think of...

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Ionic 4](https://ionicframework.com/docs/intro) - Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies (HTML, CSS, and JavaScript).
* [A-Frame](https://aframe.io/) - A web framework for building virtual reality experiences
* [Street View Grabber](https://www.purebasic.fr/english/viewtopic.php?f=27&t=50248) - A tool to capture and download Street View 360º images.
* [Leaflet](https://leafletjs.com/) - an open-source JavaScript library
for mobile-friendly interactive maps.
* [Google maps](https://www.google.es/maps) - Find local businesses, view maps and get driving directions in Google Maps.
* [Firebase Realtime Database](https://console.firebase.google.com/) - Store and sync data with a NoSQL cloud database.
* [Firebase Hosting](https://console.firebase.google.com/) - Firebase Hosting provides fast and secure hosting for your web app, static and dynamic content, and microservices.

## Acknowledgments

* https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md - Excellent example using Google maps in Ionic.
* https://www.joshmorony.com/augmented-reality-in-an-ionic-angular-pwa/. Basic example to start working with A-Frame in Ionic using an iframe element.
* https://github.com/bohdanafanasyev/angular-cli-aframe. Good example to incorporate A-Frame in an Ionic project.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://ionicthemes.com/tutorials/about/the-complete-guide-to-progressive-web-apps-with-ionic4. A complete guide to develop pwa with ionic 4.
* https://medium.com/@bviveksingh96/using-leaflet-with-ionic-4-f7acbd1c2464. A very good guide to start with Leaflet in ionic 4.