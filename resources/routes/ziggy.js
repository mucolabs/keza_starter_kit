/* eslint-disable no-undef */
const Ziggy = {
  url: 'http://localhost',
  port: null,
  defaults: {},
  routes: {
    'debugbar.openhandler': { uri: '_debugbar/open', methods: ['GET', 'HEAD'] },
    'debugbar.clockwork': {
      uri: '_debugbar/clockwork/{id}',
      methods: ['GET', 'HEAD'],
      parameters: ['id'],
    },
    'debugbar.assets.css': {
      uri: '_debugbar/assets/stylesheets',
      methods: ['GET', 'HEAD'],
    },
    'debugbar.assets.js': {
      uri: '_debugbar/assets/javascript',
      methods: ['GET', 'HEAD'],
    },
    'debugbar.cache.delete': {
      uri: '_debugbar/cache/{key}/{tags?}',
      methods: ['DELETE'],
      parameters: ['key', 'tags'],
    },
    'debugbar.queries.explain': {
      uri: '_debugbar/queries/explain',
      methods: ['POST'],
    },
    'sanctum.csrf-cookie': {
      uri: 'sanctum/csrf-cookie',
      methods: ['GET', 'HEAD'],
    },
    'resend.webhook': { uri: 'resend/webhook', methods: ['POST'] },
    'execute-laravel-error-solution': {
      uri: '__execute-laravel-error-solution',
      methods: ['POST'],
    },
    'welcome': { uri: '/', methods: ['GET', 'HEAD'] },
    'dashboard': { uri: 'dashboard', methods: ['GET', 'HEAD'] },
    'user.profile': { uri: 'user/profile', methods: ['GET', 'HEAD'] },
    'profile.update': { uri: 'profile', methods: ['PATCH'] },
    'profile.destroy': { uri: 'profile', methods: ['DELETE'] },
    'user.settings': { uri: 'user/settings', methods: ['GET', 'HEAD'] },
    'register': { uri: 'register', methods: ['GET', 'HEAD'] },
    'login': { uri: 'login', methods: ['GET', 'HEAD'] },
    'password.request': { uri: 'forgot-password', methods: ['GET', 'HEAD'] },
    'password.email': { uri: 'forgot-password', methods: ['POST'] },
    'password.reset': {
      uri: 'reset-password/{token}',
      methods: ['GET', 'HEAD'],
      parameters: ['token'],
    },
    'password.store': { uri: 'reset-password', methods: ['POST'] },
    'verification.notice': { uri: 'verify-email', methods: ['GET', 'HEAD'] },
    'verification.verify': {
      uri: 'verify-email/{id}/{hash}',
      methods: ['GET', 'HEAD'],
      parameters: ['id', 'hash'],
    },
    'verification.send': {
      uri: 'email/verification-notification',
      methods: ['POST'],
    },
    'password.confirm': { uri: 'confirm-password', methods: ['GET', 'HEAD'] },
    'password.update': { uri: 'password', methods: ['PUT'] },
    'logout': { uri: 'logout', methods: ['POST'] },
    'storage.local': {
      uri: 'storage/{path}',
      methods: ['GET', 'HEAD'],
      wheres: { path: '.*' },
      parameters: ['path'],
    },
  },
}
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes)
}
export { Ziggy }
