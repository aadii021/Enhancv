# Enhancv — AI Resume Analyzer

![Enhancv Banner](public/readme/hero.webp)

Enhancv is an AI-powered resume analyzer that helps job seekers optimize their resumes for ATS (Applicant Tracking Systems) and get personalized feedback tailored to specific job descriptions. Upload your resume, paste the job description, and get an instant score with detailed improvement tips.

---

## 🌐 Live Demo

🚀 [enhancv.vercel.app](https://enhancv.vercel.app)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 🔐 **Seamless Authentication** — Browser-based auth via Puter.js, no backend required
- 📄 **Resume Upload & Storage** — Upload PDF resumes and store them securely in the cloud
- 🤖 **AI-Powered Analysis** — Get ATS score, tone & style feedback, content review, structure tips, and skills gap analysis
- 🎯 **Job-Specific Feedback** — Paste any job description and get feedback tailored to that exact role
- 📊 **Detailed Score Breakdown** — Visual scores across 5 categories: ATS, Tone & Style, Content, Structure, Skills
- 🇮🇳 **Indian Market Focus** — Optimized for top Indian tech companies like Razorpay, Flipkart, Swiggy, CRED, Zepto
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- ⚡ **Fast & Lightweight** — Built with Vite for instant startup and blazing fast builds

---

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| React Router v7 | Client-side routing |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Vite | Build tool & dev server |
| Puter.js | Auth, storage, AI (no backend needed) |
| Zustand | Global state management |
| Docker | Containerization |

---

## 📂 Project Structure

```
enhancv/
├── app/
│   ├── components/         # Reusable UI components
│   │   ├── ATS.tsx         # ATS score display
│   │   ├── Accordion.tsx   # Expandable tips
│   │   ├── Details.tsx     # Resume detail view
│   │   ├── FileUploader.tsx# Drag & drop file upload
│   │   ├── Navbar.tsx      # Top navigation bar
│   │   ├── ResumeCard.tsx  # Resume card on dashboard
│   │   ├── ScoreBadge.tsx  # Score badge component
│   │   ├── ScoreCircle.tsx # Circular score indicator
│   │   ├── ScoreGauge.tsx  # Gauge chart for scores
│   │   └── Summary.tsx     # Feedback summary view
│   ├── lib/
│   │   ├── pdf2img.ts      # PDF to image converter
│   │   ├── puter.ts        # Puter.js store & helpers
│   │   └── utils.ts        # Utility functions
│   ├── routes/
│   │   ├── auth.tsx        # Authentication page
│   │   ├── home.tsx        # Dashboard page
│   │   ├── resume.tsx      # Resume detail & feedback page
│   │   ├── upload.tsx      # Resume upload & analyze page
│   │   └── wipe.tsx        # Clear all data page
│   ├── app.css             # Global styles
│   └── root.tsx            # Root layout component
├── constants/
│   └── index.ts            # App constants & AI prompt
├── public/
│   ├── icons/              # SVG icons
│   ├── images/             # Static images & GIFs
│   └── readme/             # README assets
├── types/
│   └── index.d.ts          # Global TypeScript types
├── Dockerfile              # Docker configuration
├── package.json
├── react-router.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/aadii021/Enhancv.git
cd Enhancv
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Open in browser**
```
http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

### Docker

```bash
docker build -t enhancv .
docker run -p 3000:3000 enhancv
```

---

## 🔄 How It Works

1. **Sign In** — User authenticates via Puter.js (no password needed, browser-based)
2. **Upload Resume** — User uploads a PDF resume via drag & drop
3. **Enter Job Details** — User provides company name, job title, and job description
4. **AI Analysis** — The resume PDF is sent to Puter's AI which analyzes it against the job description
5. **Get Results** — User receives a detailed score breakdown across 5 categories with actionable tips
6. **Dashboard** — All analyzed resumes are saved and accessible from the dashboard

---

## 📊 Score Categories

| Category | What It Measures |
|---|---|
| **ATS Score** | How well the resume passes Applicant Tracking Systems |
| **Tone & Style** | Writing style, professionalism, and language clarity |
| **Content** | Quality of experience descriptions, achievements, and impact |
| **Structure** | Layout, formatting, section organization |
| **Skills** | Relevance of skills to the job description |

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit (`git commit -m 'add your feature'`)
5. Push (`git push origin feature/your-feature`)
6. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Aditya Jha**
- GitHub: [@aadii021](https://github.com/aadii021)
- Email: adityajha9313@gmail.com

---

> Built with ❤️ for developers who want to land their dream job.
