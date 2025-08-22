# 📢 Design Patterns – Homework: Resume Generator

This is a homework assignment for the Design Patterns course.

## ✨ Description
The goal of this homework is to implement a **resume generator** that demonstrates the use of five design patterns: **Facade, Template Method, Factory Method, Composite, and Decorator**.  

The application dynamically builds a self-contained HTML resume page from a single JSON data source (`resume.json`) and applies fixed CSS styles (`styles.css`). Projects marked as `isRecent: true` are highlighted in red using the Decorator pattern.  

---

## 🛠 Features

### Facade
- **Class:** `ResumePage`
- **Purpose:** Provides a simplified interface to the complex system of loading, processing, and rendering the resume.
- **Usage:** `init(jsonPath)` handles the entire workflow from JSON loading to rendering without exposing internal details.

### Template Method
- **Classes:** `AbstractImporter → ResumeImporter`
- **Purpose:** Defines the skeleton of the import and rendering algorithm:
  1. `validate()` – checks that all required sections (header, summary, experience, education, skills) exist.
  2. `map()` – converts raw JSON into internal `ResumeModel` types.
  3. `render()` – generates blocks using `BlockFactory` and appends them to `#resume-content`.
- **Note:** The concrete class `ResumeImporter` implements the abstract methods.

### Factory Method
- **Class:** `BlockFactory`
- **Purpose:** Encapsulates creation of different resume blocks.
- **Usage:** `createBlock(type, model)` returns the appropriate block instance implementing `IBlock { render(): HTMLElement }`.

### Composite
- **Classes:** `ExperienceBlock → ProjectBlock`
- **Purpose:** Allows handling a group of objects as a single entity.
- **Behavior:** `ExperienceBlock` contains multiple `ProjectBlock` children and recursively renders them.

### Decorator
- **Class:** `HighlightDecorator`
- **Purpose:** Dynamically extends functionality without modifying the original structure.
- **Behavior:** Adds a `.highlight` CSS class to projects with `isRecent: true` without changing their internal logic.

---

## 📁 File Structure

```
/
├── index.html                  # Static HTML layout
├── resume.json                 # Data source
├── vite.config.js              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── dist/                       # Build output
└── src/
    ├── styles.css              # Base styles + .highlight
    ├── facade/
    │   └── ResumePage.ts
    ├── importer/
    │   ├── AbstractImporter.ts
    │   └── ResumeImporter.ts
    ├── blocks/
    │   ├── BlockFactory.ts
    │   ├── HeaderBlock.ts
    │   ├── SummaryBlock.ts
    │   ├── ExperienceBlock.ts
    │   ├── ProjectBlock.ts
    │   ├── EducationBlock.ts
    │   └── SkillsBlock.ts
    ├── decorators/
    │   └── HighlightDecorator.ts
    ├── models/
    │   └── ResumeModel.ts
    └── main.ts                 # Entry point
```

---

## ⚡ Usage

1. Install dependencies:

```bash
npm install
```

2. Ignore `node_modules/` by adding it to `.gitignore`.

3. Run the development server:

```bash
npm run dev
```

4. Open `index.html` in a browser to view the generated resume.

5. For a production build:

```bash
npm run build
```

---

## 🧩 How to Extend the Project

To add a new resume block (e.g., **Certificates**):

1. Create a new block class in `src/blocks/CertificatesBlock.ts` implementing `IBlock`.
2. Add a corresponding case in `BlockFactory.createBlock(type, model)`.

This approach allows you to extend the resume generator **without modifying existing code**, maintaining adherence to SOLID principles.

---

## ✅ Summary

This assignment demonstrates:

- **Facade:** Simplifies interaction with the resume generator.
- **Template Method:** Defines a structured algorithm for importing and rendering.
- **Factory Method:** Encapsulates creation of various resume blocks.
- **Composite:** Handles groups of projects within experience sections recursively.
- **Decorator:** Dynamically highlights recent projects.
- **TypeScript Best Practices:** Modular, type-safe, and easily extensible architecture.
- **Dynamic HTML Generation:** All resume content is generated from `resume.json`.
