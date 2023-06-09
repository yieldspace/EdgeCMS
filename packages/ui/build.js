import {build} from "esbuild";
import pkg from "./package.json" assert { type: "json" }

const entryFile = 'src/index.ts'
const shared = {
    bundle: true,
    entryPoints: [entryFile],
    external: Object.keys(pkg.dependencies),
    logLevel: 'info',
    minify: true,
    sourcemap: false,
}

build({
    ...shared,
    format: 'esm',
    jsx: "automatic",
    outfile: './dist/index.mjs',
    platform: "browser",
    target: "es2022",
    tsconfig: "tsconfig.json"
})

build({
    ...shared,
    format: 'cjs',
    outfile: './dist/index.cjs.js',
    target: ['ES6'],
    tsconfig: "tsconfig.json"
})
