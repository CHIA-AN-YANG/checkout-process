# checkout-process
A mock that showcase a checkout process.

export NODE_ENV=production
### Setup Environmental Variables
- Please refer to .env.example in root folder for reference.

### Minify with Task Runner
Since webpack comes with Vue-cli and does the minification, it does not require external task runners.

### Testing Data for Credit Card Payment:
- Enter random values for name on card, email, and country
- card number:      4242424242424242
- cvc:              Random 3 digits
- expiration date:  Any future date

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
### Version Information
  vue: ^2.6.14,
  vue-router: ^3.5.2
  @vue-stripe/vue-stripe: ^4.2.5,
  axios: ^0.21.1,
  dotenv: ^10.0.0,
  lodash: ^4.17.21,

