# react-edu-project
An Edu web app built with react

# December week 1 Assignment
1. Setup your React Project and Push to github
- Done

2. What is NPM & package.json ?
NPM (Node Package Manager) is the default package manager for Node.js. It serves two primary functions:
Registry: It is a public online registry where developers can publish and share JavaScript packages (reusable code modules). This makes it easy to find and integrate existing solutions into projects.
Command-Line Interface (CLI): It provides a command-line tool for interacting with the NPM registry and managing project dependencies. This includes installing, updating, and removing packages, as well as running project scripts.

- The package.json file is core to the Node.js ecosystem and is a fundamental part of understanding and working with Node.js, npm, and even modern JavaScript. This file is used as a manifest, storing information about applications, modules, packages, and more.

# The Essential npm Commands
Using npm init to initialize a project
Using npm init --yes to instantly initialize a project
Install modules with npm install
Install modules and save them to your package.json as a dependency
Install modules and save them to your package.json as a developer dependency
Install modules globally on your system

# The Basics of package.json
# Identifying Metadata Inside package.json
1. The name property
The name property in a package.json file is one of the fundamental components of the package.json structure. At its core, the name is a string that is exactly what you would expect: the name of the module that the package.json is describing.
2. The version property
The version property is a crucial part of a package.json, as it denotes the current version of the module that the package.json file is describing.
While the version property isn't required to follow semver (semantic versioning) standards, which is the model used by the vast majority of modules and projects in the Node.js ecosystem, it's what you'll typically find in the version property of a package.json file.
3. The description property
The description property of a package.json file is a string that contains a human-readable description of the module. It's the module developer's chance to let users know what precisely a module does quickly. Search tools frequently index the description property like npm search and the npm CLI search tool to help find relevant packages based on a search query.
4. The keywords property
The keywords property inside a package.json file is, as you may have guessed, a collection of keywords that describe a module. Keywords can help identify a package, related modules and software, and concepts.

The keywords property is always an array, with one or more strings as the array's values; each one of these strings will, in turn, be one of the project's keywords.


# Functional Metadata Inside package.json
1. The main property
The main property of a package.json is a direction to the entry point to the module that the package.json is describing. In a Node.js application, when the module is called via a require statement, the module's exports from the file named in the main property will be returned to the Node.js application.
2. The repository property
The repository property of a package.json is an array that defines where the source code for the module lives. Typically, this would be a public GitHub repo for open source projects, with the repository array noting that the type of version control is git and the URL of the repo itself. One thing to note about this is that it's not just a URL where the repo can be accessed from, but the full URL the version control can be accessed from.} 
3. The scripts property 
The scripts property of a package.json file is simple conceptually but complex functionally, to the point that it's used as a build tool by many.

At its simplest, the scripts property contains a set of entries; the key for each entry is a script name, and the corresponding value is a user-defined command to be executed. Scripts are frequently used to test, build, and streamline the needed commands to work with a module.
To run scripts in the scripts property of a package.json, you'll need to use the default npm run command. So, to run the above example's build, you'd need to run this:

$ npm run build 
to run the test suite, you'd need to execute this:

$ npm test 

4. The dependencies property
The dependencies property of a module's package.json is defined by the other modules that this module uses. Each entry in the dependencies property includes the name and version of other packages required to run this package.

Note: You'll frequently find carets (^) and tildes (~) included with package versions. These are the notations for version range — taking a deep dive into these is outside the scope of this guide, but you can learn more in our primer on semver. In addition, you may specify URLs or local paths in place of a version range.
5. The devDependencies property
The devDependencies property of package.json is almost identical to the dependencies property in terms of structure. The main difference: while the dependencies property is used to define the dependencies that a module needs to run in production, devDependencies property is commonly used to define the dependencies the module needs to run in development

3. What is Vite?
- is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:
A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.
Vite is opinionated and comes with sensible defaults out of the box. Read about what's possible in the Features Guide. Support for frameworks or integration with other tools is possible through Plugins. The Config Section explains how to adapt Vite to your project if needed.
Vite is also highly extensible via its Plugin API and JavaScript API with full typing support.
You can learn more about the rationale behind the project in the Why Vite section.