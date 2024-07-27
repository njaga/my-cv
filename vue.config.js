export const css = {
  loaderOptions: {
    postcss: {
      postcssOptions: {
        plugins: [
          // eslint-disable-next-line no-undef
          require('tailwindcss'),
          // eslint-disable-next-line no-undef
          require('autoprefixer')
        ]
      }
    }
  }
}
