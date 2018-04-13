# x_team_vue

X-Team Vue Example For Blog Post: x-team.com/blog/vue-2-5/ - "Vue 2.5, Vue Router, and Firebase"!

# What's Here?

This repo contains a `Vue 2.6`, `webpack 3.6`, and `live-server 1.2` example show-casing a simplified hot-load dev server setup, some Vue 2.6 basics, and how to incorporate `Firebase 4.12.6` into the app.

The app project is setup like so:
```
vueAppSrc
├── firebase
|		└── //... Test data
├── public
|		└── //... Static file serve
├── vueAppSrc
|		└── //... The Vue App
├── hotserver.js //... A slim, configurable, hot-dev server
└── webpack.config.js //The base webpack configuration with prod/dev options
```

The Vue App itself:
```
vueAppSrc
├── Components
|		└── //... Vue presentation cmponents
├── Firebase
|		└── //... Firebase helpers here
├── Router
|		└── //... Router here
├── App.vue
└── main.js
```

This is a transpiled `.vue` only Vue app.

Styling features a grid-only responsive layout.

# NPM

```bash
    $ npm install
    $ npm run build
    $ npm run start
    $ npm run all
```

# Licensing and Use

MIT licensed. Use it wherever, whenever.