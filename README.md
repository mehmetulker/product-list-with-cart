# React Product List with Cart (Responsive)

A fully responsive dessert ordering interface coded straight from the Frontend Mentor Figma design, built with React, TypeScript, Tailwind CSS 4, Zustand, and shadcn/ui components powered by Radix UI primitives.

---

**Live Demo:** [https://product-list-with-carts.netlify.app/](https://product-list-with-carts.netlify.app/)

---

## Features

- **Responsive Layout:** Adaptive product grid and cart layout designed for mobile through desktop.
- **Product Catalog:** Loads dessert data from `public/api/productsData.json` with device-specific imagery.
- **Interactive Cart:** Increment, decrement, or remove items with live quantity badges and order totals.
- **Order Confirmation:** Radix UI dialog summarises the order and resets the cart for a new checkout.
- **Accessible UI:** Keyboard-friendly controls, ARIA labels, and focus management for modal flows.
- **shadcn/ui Integration:** Reusable card, button, and dialog components styled with shadcn/ui over Radix primitives.
- **Modern Tooling:** Vite dev server, Tailwind CSS 4 utility layers, and type-safe state via Zustand.

---

## Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mehmetulker/product-list-with-cart.git
```

### 2. Install Dependencies

Use your preferred package manager (the project ships with a `pnpm-lock.yaml`, but npm also works):

```bash
cd product-list-with-cart
pnpm install
```

or

```bash
npm install
```

### 3. Run the Application

Start the Vite development server:

```bash
pnpm run dev
# or
npm run dev
```

Optional scripts:

- `pnpm run build` / `npm run build` compiles the production bundle.
- `pnpm run preview` / `npm run preview` serves the production build locally.
- `pnpm run lint` / `npm run lint` checks for linting issues.

## Project Description

This project recreates a **product list with shopping cart** experience focused on dessert items. The interface is coded pixel-perfect to the Frontend Mentor Figma design, letting users browse the catalog, add items to the cart, adjust quantities inline, review totals in a persistent cart column, and confirm their order in a modal dialog. It demonstrates modern React composition patterns, utility-first styling, treeshakeable shadcn/ui components, and concise global state handled with Zustand.

---

## What You Will Learn/Use

- **React + TypeScript:** Compose reusable UI with type-safe props and state.
- **Tailwind CSS 4:** Style the interface using the new Tailwind Layer API and custom design tokens.
- **Zustand:** Manage global cart state with simple, predictable store functions.
- **Shadcn/ui + Radix UI:** Build accessible dialogs, cards, and buttons with sensible defaults.
- **Vite:** Enjoy fast development feedback and optimized builds.
- **JSON-driven UI:** Drive the catalog via a portable JSON dataset.

---

## Requirements

- Node.js 18 or later
- pnpm (recommended) or npm/yarn for dependency management
- Basic familiarity with **React**, **TypeScript**, **HTML**, **CSS** **Tailwind**

---

## Folder Structure

```
product-list-with-cart/
├── public/
│   ├── api/
│   │   └── productsData.json
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cart.tsx
│   │   ├── CartItems.tsx
│   │   ├── DialogConfirmation.tsx
│   │   ├── ProductItem.tsx
│   │   └── Products.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── store/
│   │   └── cart.tsx
│   ├── type/
│   │   └── products.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Contributing

Contributions are welcome! Open an issue to discuss ideas or submit a pull request with improvements, bug fixes, or additional features.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Inspiration & Credits

“Coding the Cart Logic with React + Zustand | Shadcn & Tailwind”.

- **Design:** [Frontend Mentor – Product list with cart](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).
