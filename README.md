# 📚 BookSwap - Affordable Student Textbook Marketplace

<img width="1880" height="1032" alt="Screenshot 2026-01-31 205919" src="https://github.com/user-attachments/assets/8aba30ed-a828-4f56-92b7-ac534115498f" />
<img width="727" height="1027" alt="Screenshot 2026-01-31 210931" src="https://github.com/user-attachments/assets/13209d78-699e-466a-a4a8-ccbb7e519dd9" />


**BookSwap** is a modern student-focused marketplace platform designed to make university education more affordable and accessible. Students can buy, sell, and exchange textbooks at significantly reduced prices—often saving **50-70% off retail prices**.

> Making education affordable, one book at a time 📖

<img width="1847" height="974" alt="image" src="https://github.com/user-attachments/assets/87dec12e-e9d1-4a84-a793-126f31f9d7c0" />
<img width="1842" height="1019" alt="image" src="https://github.com/user-attachments/assets/36109e12-5867-44d3-8175-6fd83e0e877f" />
<img width="1871" height="1019" alt="image" src="https://github.com/user-attachments/assets/1c8b6d84-a220-4669-9b17-2356ddcba64b" />
<img width="1849" height="807" alt="image" src="https://github.com/user-attachments/assets/2dc57a8c-b652-4e39-a550-627b81861743" />
<img width="1861" height="944" alt="image" src="https://github.com/user-attachments/assets/e871a809-61c6-4f9b-a961-ffd433e78f72" />
<img width="1898" height="439" alt="image" src="https://github.com/user-attachments/assets/becbe72a-5e43-47fb-bc55-9455157b0a6e" />


## 🎯 Problem & Solution

### The Problem
University textbooks are expensive (often $100-$300 each), making education less accessible for many students. Used books are rarely available through official channels, and students have no way to recoup their investment after completing a course.

### Our Solution
BookSwap connects student buyers and sellers in a peer-to-peer marketplace where:
- 📚 **Students save money** - Buy books at 50-70% off retail prices
- 💰 **Students make money** - Sell used textbooks to recover costs
- 🌱 **Sustainable** - Reduce waste through book reuse
- 🤝 **Community** - Connect students from the same universities

## ✨ Key Features

### Search & Discovery
- 🔍 **Advanced Search** - 6 powerful filter options
- 🏫 **University-Based Filtering** - Find books from your uni
- 📖 **Course-Based Search** - Search by course code
- 💵 **Price Filtering** - Set your budget
- ⭐ **Condition Filtering** - Brand New to Fair condition

### Book Marketplace
- 📱 **Responsive Grid** - 1-3 column responsive layout
- 💳 **Price Comparison** - See original vs. sale price
- 🏷️ **Condition Badges** - Color-coded condition indicators
- 👤 **Seller Info** - University, rating, contact info
- 🤝 **Direct Contact** - Connect with sellers

### User Engagement
- ⭐ **Student Reviews** - Real testimonials from users
- 📊 **Trust Indicators** - 1000+ books, 4.9★ rating
- 💬 **Contact Form** - Easy communication
- 📧 **Newsletter** - Stay updated with new listings

### Technical Excellence
- 📱 **Mobile-Optimized** - Perfect on any device
- ⚡ **Fast Loading** - Optimized performance
- 🎨 **Professional Design** - Modern, clean interface
- ♿ **Accessible** - WCAG compliant
- 🎬 **Smooth Animations** - Framer Motion transitions

## 📊 Current Statistics

| Metric | Value |
|--------|-------|
| Available Books | 1,234+ |
| Active Sellers | 650+ |
| Avg. Savings/Student | Rs. 45,000/year |
| User Rating | 4.9/5 ⭐ |
| Supported Universities | 8 |
| Book Categories | 8 |

## 🚀 Tech Stack

### Frontend
- **React 18+** - Modern UI library with hooks
- **Tailwind CSS 3+** - Utility-first CSS framework
- **Framer Motion** - Smooth animations & transitions
- **React Toastify** - Notification system
- **Web3Forms** - Form submission service

### Build & Deploy
- **Vite** - Lightning-fast build tool
- **npm/yarn** - Package management
- **Responsive Design** - CSS Grid & Flexbox


## 📁 Project Structure

```
bookswap/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Hero section with CTA
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── About.jsx            # About the platform
│   │   ├── BookSearch.jsx       # Advanced search form
│   │   ├── BookListings.jsx     # Book grid display
│   │   ├── Testimonials.jsx     # Customer reviews
│   │   ├── Contact.jsx          # Contact form
│   │   ├── Footer.jsx           # Footer section
│   │   └── Auth/
│   │       ├── SignIn.jsx
│   │       └── SignUp.jsx
│   ├── assets/
│   │   ├── assets.js            # Images & data
│   │   └── [images]/
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Global styles
│   ├── index.css                # Base styles
│   └── main.jsx                 # Entry point
├── public/
│   └── [static assets]
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 14+ or 16+
- npm 6+ or yarn 3+
- Git

### Step-by-Step Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/bookswap.git
cd bookswap
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Configure environment variables**
Create a `.env.local` file in the root directory:
```env
# Web3Forms API Key (for contact form)
VITE_WEB3FORMS_KEY=your_web3forms_api_key_here

# (Optional) Backend API URL
VITE_API_URL=http://localhost:5000
```

To get a Web3Forms API key:
- Visit [web3forms.com](https://web3forms.com)
- Sign up (free)
- Copy your API key from dashboard
<img width="1882" height="1035" alt="Screenshot 2026-01-31 211303" src="https://github.com/user-attachments/assets/5f8b4e53-e59d-4e01-9f07-b2d3bf07c190" />
<img width="1797" height="805" alt="Screenshot 2026-01-31 211319" src="https://github.com/user-attachments/assets/f527483e-457c-4257-a42a-f46dc2bc65a6" />



4. **Start development server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production**
```bash
npm run build
npm preview  # Test production build locally
```

## 📖 Component Documentation

### Components Overview

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **Header** | Hero section | Main CTA, value proposition |
| **Navbar** | Navigation | Links, Sign In/Up, responsive menu |
| **About** | Platform info | Mission, values, achievements |
| **BookSearch** | Search form | 6 filters, validation, stats |
| **BookListings** | Book grid | Cards, pricing, seller info |
| **Testimonials** | Reviews | Star ratings, trust indicators |
| **Contact** | Contact form | Validation, Web3Forms integration |
| **Footer** | Footer | Links, newsletter, copyright |


## 🎨 Design System

### Color Palette
```
Primary Blue:    #2563EB
Light Blue:      #DBEAFE / #EFF6FF
Dark Gray:       #111827
Medium Gray:     #6B7280
Light Gray:      #F3F4F6
White:           #FFFFFF
```

### Typography
```
Headings:   Bold 24px - 82px (5xl - 4xl)
Body:       Regular 14px - 16px
Labels:     Semibold 12px - 14px
Font:       System default (Tailwind)
```

### Spacing Scale
```
xs: 4px    (0.25rem)
sm: 8px    (0.5rem)
md: 16px   (1rem)
lg: 24px   (1.5rem)
xl: 32px   (2rem)
2xl: 48px  (3rem)
```

## 🔌 API Integration

### Web3Forms Setup (Contact Form)

BookSwap uses Web3Forms for form submissions:

1. **Sign up** at [web3forms.com](https://web3forms.com)
2. **Get API key** from dashboard
3. **Add to `.env.local`:**
```env
VITE_WEB3FORMS_KEY=your_api_key_here
```

### Future Enhancements (v2.0+)
📋 Planned
- Mobile app (React Native)
- Book recommendations engine
- Wishlist functionality
- Advanced analytics
- Admin dashboard
- Multiple language support
- Dark mode
- Community features


1. **Fork the repository**
```bash
git clone https://github.com/yourusername/bookswap.git
cd bookswap
```

2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**
```bash
# Edit files, test locally
npm run dev
```

4. **Commit your changes**
```bash
git add .
git commit -m "Add amazing feature"
```

5. **Push to the branch**
```bash
git push origin feature/amazing-feature
```

## 📝 Code Examples

### Adding a New Book
```jsx
const newBook = {
  id: 7,
  title: 'Advanced Algorithms',
  author: 'Cormen et al.',
  price: 4500,
  originalPrice: 14000,
  condition: 'Like New',
  seller: 'John Doe',
  university: 'University of Moratuwa',
  course: 'CS401',
  category: 'IT/Computer Science',
  description: 'Excellent condition, minimal highlighting.'
}
```

### Customizing Colors
```jsx
// Change all blue colors to your brand color
// Before:
className="bg-blue-600"

// After:
className="bg-amber-600"  // or your color
```

### Using with Filter State
```jsx
const [searchFilters, setSearchFilters] = useState(null)

const handleSearch = (filters) => {
  setSearchFilters(filters)
}

return (
  <>
    <BookSearch onSearch={handleSearch} />
    <BookListings filters={searchFilters} />
  </>
)
```


## 🙏 Acknowledgments

- **React** - UI library
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **Web3Forms** - Form service
- **All contributors** - Making BookSwap better
- **Students** - Our inspiration

> "Making quality education accessible to every student, one book at a time." 📚

