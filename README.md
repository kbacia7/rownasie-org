# rownasie.org - SSG Website of Equality Factory Association

## Techstack
* Astro (and WebComponents API)
* TailwindCSS (and UnoCSS)
* TypeScript
* And for linting: eslint & prettier

## Run
```
yarn install
yarn run dev # yarn run build for production
```

## How to edit content
Website is SSG, after every commit to `main` branch, Github Action generates new version of website and updates rownasie.org.
All content of website can be easily modified by content files (markdown & json), which are located in `content/` directory.

`/content` simplified tree:

```
.
|-- about-us
|   |-- en
|   |   |-- association.md
|   |   |-- audit-committee
|   |   `-- board
|   |-- images
|   `-- pl
|       |-- association.md
|       |-- audit-committee
|       `-- board
|           
|-- association-info
|   |-- en
|   |   `-- main.json
|   `-- pl
|       `-- main.json
|-- documents
|   |-- en
|   `-- pl
|-- projects
|   |-- en
|   `-- pl
|-- support
|   |-- en
|   `-- pl
`-- support-us
    |-- en
    |   `-- support-us.md
    `-- pl
        `-- support-us.md
```

Like shown, every subdirectory in `content/` contains subdirectories `en/` and `pl/` with content for english & polish versions of website. 
Simple description of every directory with content:
* `about-us/` - Represents "About us" section on website, contains subdirectories `board/` and `audit-committee/` with markdown files which are represents persons in Audit committee/Board tabs. Directory contains also file `association.md` (in this case, filename is important) which represents descritpion in "Association" tab
* `association-info/` - There always `main.json` file with detailed informations of association (ex.: NIP, e-mails, address etc.). Used by "Contact" section on website and footer
* `documents` - Represents "Documents" section on website, only `documents-md` file is used for content. Document files should be placed in `public/documents/` directory
* `projects` - Represents "Projects" section on website, every file after compilation represents single project page. Page paths are project titles
* `support/` - Represents "Support" section on website, every file represents another tab in section
* `support-us/` - Represents "Support us" section on website, only `support-us.md` file is used for content