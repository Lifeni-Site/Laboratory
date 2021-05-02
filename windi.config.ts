import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  extract: {
    include: ['src/**/*.tsx', './**/*.html'],
  },
  safelist: ['prose', 'prose-sm', 'm-auto'],
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {},
  },
});
