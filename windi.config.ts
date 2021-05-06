import { defineConfig } from 'windicss/helpers';
import filter from 'windicss/plugin/filters';

export default defineConfig({
  extract: {
    include: ['src/**/*.tsx', './**/*.html'],
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [filter],
});
