#!/bin/bash
typedoc --readme ./README.md --tsconfig tsconfig.json --mode modules --excludeNotExported --excludePrivate \
    --ignoreCompilerErrors --exclude '{**/demo/**,src/**/*.css,src/**/*.css.ts,**/*test*,**/node_modules/**,**/test/**}' --out ./docs src/**/*.ts