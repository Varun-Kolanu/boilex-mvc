#!/usr/bin/env node

import inquirer from "inquirer";
import { questions } from "./config/assets.mjs";
import { createPackageJson } from "./helpers/createPackage.mjs";

async function main() {
    try {
        const answers = await inquirer.prompt(questions);
        createPackageJson(answers);

    } catch (err) {
        console.error('Error creating package.json:', err.message);
    }
}

main();
