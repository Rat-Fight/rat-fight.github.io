# Rat-Fight Website

This repository contains the source code for the Rat-Fight website, hosted at **https://rat-fight.github.io**. It serves as the public site for the Rat-Fight project and includes the frontend code, assets, and build configuration required to run the site through GitHub Pages.

## Overview

The website is built using standard web technologies along with a modern frontend toolchain. It includes HTML, CSS, JavaScript, and configuration files for building and deploying the site. The project uses Vite as the development and build tool.

## Live Site

**https://rat-fight.github.io**

## Features

- Static website deployed through GitHub Pages  
- Clean project structure with organized source files  
- Uses Vite for fast development and optimized production builds  
- Includes public assets such as images and QR codes  
- Easy to update and redeploy through GitHub  

### Major Folders

src/ – Source code for the interactive frontend

public/ – Static assets served as is

docs/ – Optional GitHub Pages build output (if configured)

Root configs and project files for build tools and dependencies


### Key Directories

- **src/** – Main source code for the site’s frontend  
- **public/** – Static assets served directly  
- **docs/** – Optional build output for GitHub Pages  
- **index.html** – Root HTML file for the site  
- **vite.config.js** – Config file for Vite’s build process  

## Getting Started

Follow these steps to run the website locally.

### 1. Clone the repository
git clone https://github.com/Rat-Fight/rat-fight.github.io.git

### Install dependencies
npm install

### Start development server
npm run dev

### Build for production
npm run build

### Preview production build locally
npm run preview

This workflow uses Vite under the hood to quickly serve and bundle the site


## Deployment

This repository is designed to be deployed using GitHub Pages. The simplest setup uses either the default branch (usually `main`) or the `docs/` folder as the publishing source in your GitHub Pages settings.

Once configured:

- Commits pushed to the repository will automatically update the live site  
- All static assets will be published to the GitHub Pages endpoint  

## Contributing

Contributions from team members or collaborators are welcome.

To contribute:

1. Fork the repository  
2. Create a feature branch  
3. Make your changes  
4. Open a pull request for review  

Please follow any existing team or coding standards.

## License
