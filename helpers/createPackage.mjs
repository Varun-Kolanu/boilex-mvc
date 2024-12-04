import { defaultPackageJson } from "../config/assets.mjs";
import fs from "fs";
import path from "path";

export function createPackageJson(answers) {
    const packageJson = {
        ...defaultPackageJson,
        ...answers,
        keywords: answers.keywords[0] ? answers.keywords : []
    };

    const packageJsonPath = path.join(process.cwd(), 'package.json');
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}