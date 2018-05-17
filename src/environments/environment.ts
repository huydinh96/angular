// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    // Initialize Firebase
    apiKey: 'AIzaSyCKn-Amne814M-mFkR_XfSrdLcZspfBYSc',
    authDomain: 'quochuy-9db4a.firebaseapp.com',
    databaseURL: 'https://quochuy-9db4a.firebaseio.com',
    projectId: 'quochuy-9db4a',
    storageBucket: 'quochuy-9db4a.appspot.com',
    messagingSenderId: '657388166889'
  }
};
