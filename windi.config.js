import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig ({
  attributify: true,
  theme: {
    extend: {
      height: {
        base: '45px'
      },
      lineHeight: {
        base: '45px'
      },
      backgroundColor: {
        primary: '#99cc33',
      },
      colors: {
        primary: '#99cc33',
        activeLink: '#ff8833',
        deactiveLink: '#999999'

      }
    }
  },
})