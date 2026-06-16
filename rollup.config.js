import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import {readFileSync} from 'fs';

const { version, homepage } = JSON.parse(readFileSync('./package.json'));

const banner = `/*!
 * MasonryViw v${version}
 * ${homepage}
 * (c) ${(new Date(process.env.SOURCE_DATE_EPOCH ? (process.env.SOURCE_DATE_EPOCH * 1000) : new Date().getTime())).getFullYear()} MasonryView Contributors
 * Released under the MIT License
 */`;


export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.esm.js",
        format: "esm"
      },
      {
        file: "dist/index.cjs.js",
        format: "cjs"
      },
      {
        file: "dist/index.global.js",
        format: "iife",
        name: "masonry"
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" })
    ]
  },

  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()]
  }
];