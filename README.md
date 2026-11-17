# INFR3120 Assignment 2 - Express Portfolio Site

**Student Name:** Kyron Magbujos  
**Student ID:** 100xxxxxx  
**Course:** INFR3120 - Web and Scripting Programming  
**Institution:** Ontario Tech University  

---

## 📌 Project Overview
This project is a multi-page personal portfolio application built with Node.js, Express.js, and the EJS templating engine. The site showcases past university work (Python Games, Cisco Network Topologies, and Assignment 1 Static Portfolio) using dynamic routing and layout partials.

---

## 🛠️ Code Sources & References (Citations)

In accordance with course guidelines, all external libraries, scaffolding tools, and styling frameworks are cited below with direct links:

### 1. Framework & Server Setup
* **Express Application Generator:** Used `npx express-generator --views=ejs` to scaffold the project structure (`bin/`, `public/`, `routes/`, `views/`).  
  * Reference & Documentation: [Express Application Generator Guide](https://expressjs.com/en/starter/generator.html)
* **Express Router API:** Router implementation for standard routes (`/`, `/about`, `/projects`, `/contact`) and dynamic route parameters (`/projects/:id`).  
  * Reference & Documentation: [Express.js Routing Guide](https://expressjs.com/en/guide/routing.html)

### 2. Templating & View Engine
* **EJS (Embedded JavaScript Templating):** Server-side view rendering using layout partials (`<%- include('partials/header') %>`) and dynamic loops (`<% projectList.forEach(...) %>`).  
  * Official Documentation: [EJS Templating Language](https://ejs.co/)

### 3. Front-End Frameworks & Libraries
* **Bootstrap 5.3 CSS:** Used for responsive grid layout (`container`, `row`, `col-md-4`), cards, and navigation.  
  * Official Docs: [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)  
  * CDN Link: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css`
* **Font Awesome 6 Icons:** Integrated for social media (GitHub, LinkedIn) and contact interface icons.  
  * Official Docs: [Font Awesome Icon Gallery](https://fontawesome.com/)  
  * CDN Link: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`

### 4. Design & Color Palette
* **"A House of Bees 1" Color Theme:** Custom CSS palette defined in `public/stylesheets/style.css` (`#D6AA58` Gold, `#477A91` Slate Blue, `#E1EBF0` Off-White, `#121212` Dark Background).  
  * Palette Reference Inspiration: [Color-Hex Bee House Palette](https://www.color-hex.com/color-palette/65236) & [SchemeColor Honey Bee Palette](https://www.schemecolor.com/cute-honey-bee-color-scheme.php)

### 5. Media & Asset References
* **Python Official Logo:** Used for Python Games project thumbnail.  
  * Reference: [Python Community Logos](https://www.python.org/community/logos/)
* **Cisco Networking Academy Assets:** Used for Packet Tracer topology project card.  
  * Reference: [Cisco NetAcad Resources](https://www.netacad.com/)

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kyronmagbujos/YOUR-NEW-REPO-NAME.git
   cd YOUR-NEW-REPO-NAME
