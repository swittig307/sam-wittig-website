# Samantha Wittig Actor Website

## Getting Started

### Prerequisites

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/download/)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/)

```
node@v10.16.0 or higher
npm@6.9.0 or higher (comes with node)
git@2.17.1 or higher
gatsby-cli@2.8.22 or higher
```

---

## How To Use

````bash
# Clone this repository
$ git clone https://github.com/swittig307/swittig301.github.io

# Go into the repository
$ cd swittig307.github.io

Install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run develop
````

**NOTE**:
If your run into issues installing the dependencies with NPM, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

Once your server has started, go to `http://localhost:8000/` in your browser.

---

## Instructions:

### Step 1 - CONTENT

The content is in `src/components/<section>`, organized by sections:

- Header
- Headshots
- Video
- Resume
- Contact
- Footer

Each section has a corresponding stylesheet in `src/styles/sections/`.

### Step 2 - STYLES

To change the color theme of the website:
Go to `src/styles/abstracts/_variables.scss` and change the value of `$primary-color` to your prefered HEX color.

---

## Deployment

This site uses GitHub Pages for deployment.

## Technologies used 🛠️

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Sass](https://sass-lang.com/documentation) - CSS extension language

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
