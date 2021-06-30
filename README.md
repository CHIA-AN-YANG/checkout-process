# Checkout Process Mock
A mock that showcase a checkout process.

---

## Installation
You can clone this project from here: [github link](https://github.com/CHIA-AN-YANG/checkout-process.git)
### 1. Web app installation
Clone with HTTPs:

```bash
git clone https://github.com/CHIA-AN-YANG/checkout-process.git
```
Alternatively, clone with SSH:
```bash
git clone git@github.com:CHIA-AN-YANG/checkout-process.git
```
Run npm install to install required plugins.
```
npm install
```
### 2. Setup environmental Variables
- Please refer to `.env.example` in root folder for reference.
- For **publishable key** and **price id**, visit [Stripe](https://stripe.com/).
  1. Create a new account. 
  2. Create products, your institution, and use the test mode, then get API keys.
  3. Refer to documentation of [Vue Stripe - Get Started - One-time Payment](https://vuestripe.com/stripe-checkout/one-time-payment) for more detail.

---

## Usage 
### 1. Compiles and minifies for production
Since webpack comes with Vue-cli and does the minification, it does not require external task runners.
```
npm run build
```
### 2. Compiles and hot-reloads locally
```
npm run serve
```
### Testing Data for Credit Card Payment:
- Enter random values for name on card, email, and country
- card number:      4242424242424242
- cvc:              Random 3 digits
- expiration date:  Any future date

---

## Unit Test
This mock uses **Vue Test Utils** - the official unit testing utility library for Vue.js.
Run the following script for unit testing:
```
npm run test:unit
```
---

## Version Information
  vue: ^2.6.14,
  vue-router: ^3.5.2
  @vue-stripe/vue-stripe: ^4.2.5,
  axios: ^0.21.1,
  dotenv: ^10.0.0,
  lodash: ^4.17.21,
## Contributing
Drop me a line in email if you have any suggestions for improvement! 
My email address is: chiaan.y.creativeworker@gmail.com
