/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'deviz.eu', // the auth0 domain prefix
    audience: 'drink', // the audience set for the auth0 app
    clientId: '2YZEtM6cR9ttKG3ElRxTZLOCNlUkXDfH', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
