import unocss from '@unocss/eslint-config/flat'

module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', unocss],
  rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off'
  }
};