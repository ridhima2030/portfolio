# Profile Links Guide

## Where to Update Your LinkedIn and GitHub Profile Links

Update your profile URLs in the following files:

### 1. Hero Section (Top of Page)
**File:** `src/components/Hero/Hero.tsx`

**Lines to update:**
- **LinkedIn:** Line 58 - Change `https://www.linkedin.com/in/ridhima-chaturvedi` to your LinkedIn profile URL
- **GitHub:** Line 65 - Change `https://github.com/ridhima-chaturvedi` to your GitHub profile URL

```tsx
<a href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME" target="_blank" rel="noreferrer">
<a href="https://github.com/YOUR-GITHUB-USERNAME" target="_blank" rel="noreferrer">
```

### 2. Contact Section
**File:** `src/components/Contact/Contact.tsx`

**Lines to update:**
- **LinkedIn:** Line 31 - Change `https://www.linkedin.com/in/ridhima-chaturvedi` to your LinkedIn profile URL
- **GitHub:** Line 41 - Change `https://github.com/ridhima-chaturvedi` to your GitHub profile URL

### 3. Footer Section (Bottom of Page)
**File:** `src/components/Footer/Footer.tsx`

**Lines to update:**
- **LinkedIn:** Line 20 - Change `https://www.linkedin.com/in/ridhima-chaturvedi` to your LinkedIn profile URL
- **GitHub:** Line 27 - Change `https://github.com/ridhima-chaturvedi` to your GitHub profile URL

---

## Quick Steps:

1. Open each file mentioned above
2. Find the `href` attribute in the `<a>` tags
3. Replace the placeholder URLs with your actual profile URLs
4. Save the files
5. The changes will appear when you refresh your browser

---

## Example URLs:

- **LinkedIn:** `https://www.linkedin.com/in/your-username`
- **GitHub:** `https://github.com/your-username`

---

**Note:** All three locations (Hero, Contact, Footer) need to be updated separately. Look for comments in the code that say `/* UPDATE YOUR LINKEDIN PROFILE URL HERE */` and `/* UPDATE YOUR GITHUB PROFILE URL HERE */` to find the exact locations.
