# Currency Converter App

This repository contains a currency converter web application built using React. The app allows users to convert one currency to another based on the current market exchange rates obtained from an external API.

## Features

- Convert currency from one type to another.
- Real-time exchange rates obtained from a reliable API.
- Simple and intuitive user interface.

## How to Use

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm run dev` or `yarn start`.
5. Access the application in your browser at `http://localhost:5173`.

## Components

### InputBox

- Renders input fields for entering currency amount and selecting currency type.
- Props:
  - `label`: Label for the input box.
  - `currency`: Current currency type.
  - `amount`: Current amount value.
  - `onAmountChange`: Function to handle amount change.
  - `onCurrencyChange`: Function to handle currency change.
  - `currencyOptions`: Array of currency options.
  - `amountDisable`: Boolean to disable amount input.
  - `currencyDisable`: Boolean to disable currency selection.
  - `className`: Additional CSS class names.

### useCurrencyInfo Hook

- Custom hook to fetch currency information from an external API.
- Returns currency data based on the selected currency type.

## API Link

Replace `${currency}` in the URL below with the currency code to fetch the exchange rates for that specific currency with respect to others:

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.5/v1/currencies/${currency}.json
```

Make sure to replace `${currency}` with the appropriate currency code, such as `usd`, `eur`, `inr`, etc., when making the API request.

## App

- Main component that orchestrates the currency conversion process.
- State management for currency types, amounts, and conversion results.
- Utilizes `InputBox` component for user input and selection.
- Fetches currency information using the `useCurrencyInfo` hook.
- Provides functionality to convert currencies and swap conversion direction.

## Thanks
