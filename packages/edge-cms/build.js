import {build} from "esbuild";
import * as glob from "glob"
import pkg from "./package.json" assert { type: "json" }

const entryFile = 'src/index.ts'
const shared = {
    bundle: true,
    entryPoints: glob.sync(["./src/*.ts", "./src/**/*.ts"]),
    // entryPoints: [entryFile],
    // external: Object.keys(pkg.dependencies),
    logLevel: 'info',
    minify: false,
    sourcemap: false,
}

build({
    ...shared,
    format: 'esm',
    outdir: './dist',
    target: ['ES2022'],
    tsconfig: "tsconfig.json"
})

// build({
//     ...shared,
//     format: 'cjs',
//     outfile: './dist/index.cjs.js',
//     target: ['ES6'],
//     tsconfig: "tsconfig.json"
// })
