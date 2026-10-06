<div align="center">

# 🖥️ Abhi's Portfolio

### A Windows 98-inspired developer portfolio built with modern frontend technology.

<p>
  <a href="https://abhiwillcode.vercel.app/">🌐 Live Site</a>
  •
  <a href="https://github.com/abhi-ghosh/abhi-portfolio">💻 Source Code</a>
</p>

<br />

![Status](https://img.shields.io/badge/status-live-008080?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-000000?style=for-the-badge&logo=framer&logoColor=white)

</div>

---

## 🪟 About

This is my personal developer portfolio, but I wanted it to be more than a collection of project cards and contact links.

Instead of building a conventional modern portfolio, I decided to recreate the feeling of using an old Windows desktop.

The interface uses:

- 🗔 Retro window chrome
- 📄 `.txt` files and document-style sections
- 💿 `.exe`-style applications
- 🖱️ Custom cursors
- 🎨 Pixel-style typography
- 🧱 Windows-inspired 3D borders and shadows
- 🐈 Nostalgic icons and small interactive details
- ✨ Modern animations underneath the retro aesthetic

The result is intentionally old-looking on the surface while being built with a modern frontend stack underneath.

---

## 🕰️ Why Windows 98?

My first real memory of using a computer goes back to school, where we had old machines running Windows 98.

To someone else, those computers might have looked outdated.

To me, they felt like magic.

The heavy CRT monitor, the click of the mouse, the tiny icons, the windows, and the feeling that an entire world was waiting behind that blue desktop made computers incredibly exciting.

I wanted to click everything.

I wanted to understand what things did, why they worked, and what would happen if I tried something else.

I didn't know it at the time, but that curiosity stuck with me.

Eventually, the question changed from:

> **"What happens when I click this?"**

to:

> **"What happens if I build this?"**

This portfolio is a small tribute to where that curiosity started.

The computer is very different now, but the feeling hasn't really changed.

I'm still learning, still building, and still wondering what happens when I click the next thing.

---

## 💾 The Story Behind the Design

The Windows 98 theme wasn't chosen simply because it looks nostalgic.

I wanted the visual identity of the portfolio to say something about me.

Modern developer portfolios often converge on a similar visual language:

`dark mode` → `gradients` → `glassmorphism` → `large typography` → `subtle animations`

There's nothing wrong with that, but I wanted to build something that immediately felt personal.

Windows 98 was one of the first interfaces that made computers feel tangible to me. Recreating that environment gave me a way to connect something from my earliest experiences with computers to what I'm doing with them now.

At the same time, I didn't want the portfolio to actually behave like a website from 1998.

That's where the modern layer comes in.

The interface uses modern responsive layouts, component-based React architecture, TypeScript, optimized images, and Motion-powered transitions.

The goal was:

> **Windows 98 on the outside. Modern frontend engineering underneath.**

---

## 🧪 My First Substantial TypeScript Project

This portfolio was also my first substantial experience using TypeScript in a real application.

Rather than learning TypeScript entirely through isolated examples, I used the portfolio itself as a place to apply it.

That meant working with:

- 🔷 Typed component props
- 🔷 Union types
- 🔷 Type inference
- 🔷 Generic React types
- 🔷 Typed data structures
- 🔷 `Record<K, V>`
- 🔷 `typeof`-based types
- 🔷 Literal types with `as const`
- 🔷 `satisfies`
- 🔷 Typed event handlers
- 🔷 Optional component props

One of the patterns I found particularly useful was deriving types directly from the data that drives the UI.

For example, project and work-experience button types can be derived from their respective data arrays instead of maintaining separate unions manually.

That keeps the data and the types connected as the application grows.

So the portfolio became both a finished product and a practical TypeScript learning project.

---

## ✨ Making a Retro Interface Feel Modern

A major design challenge was making the site feel modern without breaking the Windows 98 aesthetic.

The solution was to keep the visual language intentionally retro while using modern interaction techniques.

### Animation

Animations are used for:

- 🚪 Panel entrances
- 🔄 Content transitions
- 🖱️ Button interactions
- 📂 Dynamic project and work-experience content
- 💡 Status indicators
- ⚡ Retro-inspired visual effects

The animations are deliberately restrained and often use stepped timing or simple transforms so they feel compatible with the pixelated aesthetic.

Instead of putting modern animations on top of a retro skin, the animations themselves were designed around the retro theme.

Custom CSS keyframes are used for effects such as:

```css
blink
retroSpin
pingRetro
flipVertical
```

Motion is then used where component-level transitions and layout animation make more sense.

---

## 🎨 Custom Tailwind Styling

Tailwind CSS provides the foundation for the styling, but the default utility classes weren't enough to create the visual language I wanted.

The project therefore includes custom theme values, utilities, and animations for the retro interface.

### Custom styling includes

- 🪟 Windows-style 3D borders
- 🖥️ Retro panel styling
- ⬛ Hard retro shadows
- 🎨 Windows-inspired theme colors
- 🖱️ Custom cursor behavior
- 🟦 Retro grid backgrounds
- ⌜ Corner decorations
- ✨ Custom animation utilities
- 🕹️ Pixel-inspired animation timing

The visual system is based around a small Windows-inspired palette:

| Role         | Value     |
| ------------ | --------- |
| 🟦 Accent    | `#000080` |
| 🩶 Panel     | `#C0C0C0` |
| ⬜ Highlight | `#FFFFFF` |
| ⬛ Shadow    | `#000000` |
| ◻️ Muted     | `#808080` |
| 🖥️ Desktop   | `#008080` |

The result is a reusable styling system rather than a collection of one-off visual hacks.

---

## 🧰 Technology Stack

<div align="center">

![Status](https://img.shields.io/badge/status-live-008080?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-000000?style=for-the-badge&logo=framer&logoColor=white)

</div>

### Core

| Technology        | Purpose                                   |
| ----------------- | ----------------------------------------- |
| ⚛️ **React**      | Component-based UI                        |
| ▲ **Next.js**     | React framework and application structure |
| 🔷 **TypeScript** | Static typing and type safety             |

### Styling & Animation

| Technology          | Purpose                                                     |
| ------------------- | ----------------------------------------------------------- |
| 🎨 **Tailwind CSS** | Utility-first styling                                       |
| ✨ **Motion**       | Component, layout, and interaction animations               |
| 🧩 **Custom CSS**   | Theme variables, keyframes, retro utilities, and UI effects |

### Development & Deployment

| Technology          | Purpose                            |
| ------------------- | ---------------------------------- |
| 🐙 **Git / GitHub** | Version control and source hosting |
| 💻 **VS Code**      | Development environment            |
| 🎨 **Figma**        | UI planning and design             |
| ▲ **Vercel**        | Deployment                         |

---

## 🧩 Architecture

The portfolio is built as a component-driven React application.

Reusable UI elements are separated into components, while content such as projects, work experience, education, skills, contact information, and status information is stored in structured data and rendered dynamically.

This keeps the content separate from the presentation and makes the application easier to extend.

For example, adding another project or work-experience entry can be done primarily by updating the relevant data instead of duplicating an entire block of JSX.

### Component Structure

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── assets/
│   ├── contactIcons/
│   ├── educationIcons/
│   ├── icons/
│   ├── projectIcons/
│   ├── weatherIcons/
│   ├── hourGlass.gif
│   ├── kitty.gif
│   ├── pfp.jpeg
│   └── windesk.gif
│
└── components/
    ├── AboutSection.tsx
    ├── Badge.tsx
    ├── BruhButton.tsx
    ├── Button.tsx
    ├── ContactSection.tsx
    ├── CustomIntro.tsx
    ├── data.ts
    ├── EducationBlock.tsx
    ├── EducationSection.tsx
    ├── HoverMessage.tsx
    ├── MainTopHalf.tsx
    ├── Navbar.tsx
    ├── Panel.tsx
    ├── ProjectsSection.tsx
    ├── RetroButton.tsx
    ├── RetroPanel.tsx
    ├── Separator.tsx
    ├── services.tsx
    ├── Skills.tsx
    ├── Status.tsx
    ├── TextOptions.tsx
    ├── TimeDate.tsx
    ├── TinyInfoBlock.tsx
    ├── WeatherButton.tsx
    ├── WeatherModule.tsx
    ├── Why.tsx
    └── WorkExp.tsx
```

---

## 🗃️ Data-Driven UI

A large part of the application is driven by structured data.

Projects, work experience, education, skills, contact links, status information, and other repeated UI elements are represented as data and mapped into reusable components.

This approach keeps the JSX cleaner while making the content easier to maintain.

It also gave me a practical reason to use TypeScript to describe and constrain the data structures rather than treating everything as untyped objects.

---

## 📱 Responsive Design

The portfolio is designed to work across desktop, tablet, and mobile layouts.

CSS Grid and Flexbox are used throughout the interface, with custom breakpoints where the standard Tailwind breakpoints did not match the layout requirements.

For example, some layouts intentionally use custom breakpoints such as:

```text
Mobile       → 1 column
900px        → 2 columns
1200px       → 3 columns
```

The retro visual language is preserved across screen sizes rather than switching to a completely different mobile design.

---

## 🐈 Easter Eggs

There are a few small details hidden throughout the portfolio for people who explore it.

One of them is:

### `Kitty.exe`

Because every Windows desktop needs a cat application.

There are also small retro details throughout the interface intended to reward exploration rather than simply decorate the page.

---

## 🚀 Features

- 🪟 Windows 98-inspired user interface
- 📱 Fully responsive layout
- 📐 Custom responsive breakpoints
- ✨ Animated page and component transitions
- ☀️ Custom retro weather app module
- 📂 Interactive project showcase
- 💼 Work experience timeline
- 🧠 Skills and current learning sections
- 🎓 Education and certification timeline
- 📬 Contact section with clipboard functionality
- 📄 Downloadable resumes
- 🔗 External project and profile links
- 🧩 Reusable retro UI components
- 🖱️ Custom cursors
- 🎞️ Retro-inspired animations
- 🐈 Interactive Easter eggs

---

## 🛠️ Running Locally

Clone the repository:

```bash
git clone https://github.com/abhi-ghosh/abhi-portfolio.git
```

Navigate into the project:

```bash
cd abhi-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm start
```

---

## ☁️ Deployment

The portfolio is deployed using **Vercel**.

The application is built as a Next.js project and deployed as a production web application.

---

## 🧠 What This Project Taught Me

This project became much more than a visual exercise.

While building it, I worked through practical problems involving:

- React component architecture
- TypeScript
- Type inference
- Responsive CSS
- CSS Grid and Flexbox
- Tailwind CSS
- Custom CSS utilities
- Motion animations
- Dynamic rendering
- Data-driven component design
- Image handling
- Clipboard APIs
- Responsive UI design
- Deployment

Most importantly, it taught me that a project can be both technically useful and personally meaningful.

---

## ❤️ Why I Built It

A portfolio is usually treated as a place to display projects.

I wanted this one to also be a project itself.

Building it from scratch gave me a place to practice and demonstrate frontend engineering while creating something that actually feels like me.

It connects where my curiosity with computers started with what I'm trying to build with them now.

The computer is different.

The technology is different.

The curiosity isn't.

---

<div align="center">

### 🖥️ Made with curiosity, TypeScript, and probably too much CSS.

**Abhijit Ghosh**

[GitHub](https://github.com/abhi-ghosh) •
[LinkedIn](https://www.linkedin.com/in/abhiwillcode) •
[a7ghosh@gmail.com](mailto:a7ghosh@gmail.com)

</div>
