# Sveltekit Frontend Template

```
 ▛                          ▜
                              
   Author : Akshay Aradhya    
   GitHub : DollarAkshay      
   Date   : 2024-10-22        
                              
 ▙                          ▟
```

This is my personal template for creating quick forntend projects. I have included how this template was created and how to use this template below.


## How this template was created

### 1. Initial files and folder setup
```bash
npx sv create .
# ◇  Where would you like your project to be created?   : *Press Enter*
# ◇  Which template would you like?                     : SvelteKit minimal
# ◇  Add type checking with Typescript?                 : No
# ◇  What would you like to add to your project?        : eslint, tailwind
# ◇  tailwindcss: Which plugins would you like to add?  : *none*
# ◇  Which package manager do you want to install?      : npm
#
# Note: sv create should install the npm pacakages. No need to do npm install

git init
git remote add origin https://github.com/DollarAkshay/sveltekit-template.git

```
 - For VSCode, install `ESLint` and `Svelte for VS Code` plugins
 - Delete `.npmrc` file
 - Update `README.md` file
 - Commit files to git and push

### 2. Eslint and typechecking configuration
Since I am very particular about my Eslint configuration, I added my custom Eslint configuration to the project.
 - *paste my config file* into eslint.config.js
 - Eslint fix. 
 - Update `README.md` file
 - Commit files to Git and push

### 3. Adding UI Libraries
```bash
npm i -D flowbite flowbite-svelte flowbite-svelte-icons
```
 - Update `tailwind.config.js` file according to the [Flowbite documentation](https://flowbite-svelte.com/docs/pages/introduction)
 - Update `README.md` file
 - Commit files to Git and push