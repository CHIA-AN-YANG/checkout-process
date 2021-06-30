# Checkout Process Mock
A mock that showcases a checkout process, constructed with Vue.js.

---

## Installation
You can clone this project from here: [github link](https://github.com/CHIA-AN-YANG/checkout-process.git)
### 1. Clone and install
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
### 1. Compile and minify for production
Since webpack comes with Vue-cli and does the minification, it does not require external task runners.
```
npm run build
```
### 2. Compile and hot-reload
```
npm run serve
```
### Testing data for credit card payment:
- Enter random values for name on card, email, and country
- card number:      4242 4242 4242 4242
- cvc:              3 random digits
- expiration date:  Any future date

---

## Unit Test
This mock uses **Vue Test Utils** - the official unit testing utility library for Vue.js. 
Run the following script for unit testing:
```
npm run test:unit
```
---

## Security
Since no database is incorporated in this mock, routers are not checked with navigation guard and local storage is used to store success message.

## Version Information
  - vue: ^2.6.14
  - Node.js: ^14.17.1
  - npm: ^6.14.13
  - vue-router: ^3.5.2
  - @vue-stripe/vue-stripe: ^4.2.5
  - axios: ^0.21.1
  - dotenv: ^10.0.0
  - lodash: ^4.17.21
  - bootstrap-vue": "^2.21.2"
  - 
## Contributing
Drop me an email, leave a comment, or make pull request if you have any suggestions for improvement. I would greatly appreciate it!
My email address is: chiaan.y.creativeworker@gmail.com
