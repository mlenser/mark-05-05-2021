module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'no-duplicate-selectors': null,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
  },
};
