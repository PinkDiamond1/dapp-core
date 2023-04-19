import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import sass from 'rollup-plugin-sass';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import json from "@rollup/plugin-json";

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: true,
      browser: true,
    }),

    sass({ insert: true }),
    external(),
    commonjs(),
    peerDepsExternal(),
    replace({
      preventAssignment: true,
    }),
    terser(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
    }),
    json(),
  ],
  external: [
    'events'
  ],
  context: 'window',
};
