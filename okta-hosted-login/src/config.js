const CLIENT_ID = '0oa1veulkoAvO4uOC357';
const ISSUER = 'https://dev-114819.okta.com/oauth2/default';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'https://okta-ie11-pkce.herokuapp.com/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
