import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'masonry.ts',
  output: {
    file: 'dist/masonry.js',
    format: 'umd',
    name: 'masonry',
  },
  plugins: [typescript()],
};
