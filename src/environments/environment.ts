// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {     // Initialize Firebase
    apiKey: "AIzaSyDE4OQX1XtiFcZI6qHRfiaQjw0XMHtGbus",
    authDomain: "projektarbeit-fb86a.firebaseapp.com",
    databaseURL: "https://projektarbeit-fb86a.firebaseio.com",
    projectId: "projektarbeit-fb86a",
    storageBucket: "projektarbeit-fb86a.appspot.com",
    messagingSenderId: "135842828834"
  }
};
