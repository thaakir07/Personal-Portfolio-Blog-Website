# Personal Portfolio & Blog Website

This is a personal website built with **React + TypeScript** using **Vite**.
It features a profile, education, experience, projects, and certifications section with a blogging system.

---

## Features

- **Blog System**:
  - Add, search, sort, and tag blog posts.
  - Blog data is persisted in `localStorage`.

- **Profile Card**:
  - Editable profile details (name, bio, profile picture).
  - Changes are saved to `localStorage`.
  
- **Different sections**:
  - Dedicated sections for education, experience, projects, and certifications.
  
- **Responsive Design**:
  - Mobile-friendly layout with wrapping cards. 
  
---

## Folder Structure

```bash

project-root/
├── Code/
│    ├── src/
│    │    ├── assets/
│    │    ├── Background/ ##Background component with styling
│    │    ├── Blogs/      ##Blog component with styling
│    │    ├── Cards/      ##Different section components with styling
│    │    ├── Header/     ##Header component with styling
│    │    ├── Login/      ##Login component with styling
│    │    ├── App.tsx
│    │    ├── index.css
│    │    ├── main.tsx
│    │    └── vite-env.d.ts
│    ├── eslint.config.js
│    ├── index.html
│    ├── Makefile
│    ├── package.json
│    ├── package-lock.json
│    ├── package.json
│    ├── tsconfig.app.json
│    ├── tsconfig.json
│    ├── tsconfig.node.json
│    └── vite.config.ts
└── README.md
    

```

## Setup & Running
To run the program make sure you are in the Code/ directory. The program can be run using the Makefile with the following commands:

1. Install dependencies
```bash
    make install
```

2. Start server
```bash
    make start
```

3. Build for production
```bash
    make build
```

4. Preview production
```bash
    make preview
```

5. Remove node modules
```bash
    make clean
```

6. Run install + start
```bash
    make run
```

## AI declaration
I used an AI to explain basic TypeScript and React intricacies and how to avoid them. For example: **Why does React not render things immediately and how do I get it to render immediately?** to which the solution was to use the useEffect() functionality.

## Author
Thaakir Fernandez

## Contact information
If you have any queries please contact me on thaakir07@gmail.com
