# Nethmi Wijekoon – Portfolio

A React + Vite + Tailwind CSS portfolio website.

🌐 My Developer Portfolio: nethmi-wijekoon-portfolio.netlify.app

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

## Editing content

All text (projects, certificates, tech stack, services, experience, education) is in **`src/data.js`**.

- Add your GitHub link: set `github` in `src/data.js` (it will appear automatically).
- Add live demo / GitHub links for a project: fill `Link` / `Github` in that project.
- Replace the generated project covers with real screenshots: put images in `public/` and set `Img: "/your-image.png"`.
- Profile photo: `public/Photo.png`.  CV: `public/Nethmi_Wijekoon_CV.pdf`.

## Contact form

The form sends mail through [FormSubmit](https://formsubmit.co). The first time someone submits the form, FormSubmit sends an activation email to the address in `src/data.js` — click the link in it once to activate.

## Deploy

Works out of the box on Vercel (see `vercel.json`).
