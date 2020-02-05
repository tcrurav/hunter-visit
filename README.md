# Hunter Visit

In march 2020 during 3 weeks about 10 students from Aalborg Techcollege (https://techcollege.dk/) and 20 students from IES El Rincón (http://www.ieselrincon.es) develop together an App in Gran Canaria.

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

***IMPORTANT: Google maps, Virtual Reality and PWA functionality are not going to work unless you add a Google maps API key, and you deploy the project in a https server. Follow next sections to get all that done.***

## Remarkable points regarding Google maps

In order to get Google maps working you have to put your Google Maps API Key in all places marked with (PUT YOUR GoogleMaps API Key HERE). Here is the list of files:

```
src/environments/environment.prod.ts
src/environments/environment.ts
package.json
config.xml
```

***IMPORTANT: In package.json put your API Key only in (PUT YOUR GoogleMaps API Key HERE) and not in (YOUR_API_KEY_IS_HERE)***

## Remarkable points regarding PWA with Ionic 4 and uploading to firebase

As stated in the example in https://ionicthemes.com/tutorials/about/the-complete-guide-to-progressive-web-apps-with-ionic4:

1. Install @angular/pwa package:

```
ng add @angular/pwa
```

2. Build the app:

```
npm run buildwww
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
 ? What do you want to use as your public directory? docs
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

## Planned resources

* Google maps
* Images
* Videos <sub><sup>(Not implemented yet)</sup></sub>
* Audios <sub><sup>(Not implemented yet)</sup></sub>
* Virtual Reality (A-Frame) 

### Prerequisites

All you need is... some time and...
* Visual Studio Code.
* Ionic
* A-Frame.
* Google maps.
* More hours than you first could think of...

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Ionic 4](https://ionicframework.com/docs/intro) - Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies (HTML, CSS, and JavaScript).
* [A-Frame](https://aframe.io/) - A web framework for building virtual reality experiences
* [Street View Grabber](https://www.purebasic.fr/english/viewtopic.php?f=27&t=50248) - A tool to capture and download Street View 360º images.
* [Google maps]() - Find local businesses, view maps and get driving directions in Google Maps.

## Acknowledgments

* https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md - Excellent example using Google maps in Ionic.
* https://www.joshmorony.com/augmented-reality-in-an-ionic-angular-pwa/. Basic example to start working with A-Frame in Ionic using an iframe element.
* https://github.com/bohdanafanasyev/angular-cli-aframe. Good example to incorporate A-Frame in an Ionic project.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://ionicthemes.com/tutorials/about/the-complete-guide-to-progressive-web-apps-with-ionic4. A complete guide to develop pwa with ionic 4.