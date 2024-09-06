# 🌐 Personal Portfolio Website

Welcome to a sample **Personal Portfolio Website**! This is a responsive, single-page portfolio that showcases my projects and contact information. This is built to try out netlify form and daisy ui.

## ✨ Features

- **Responsive Design**: Optimized for both desktop and mobile views.
- **Interactive UI**: Styled using **DaisyUI** and **Tailwind CSS** for a clean, user-friendly interface.
- **Built with ReactJS**: A modern JavaScript library for building dynamic web applications.
- **Form Handling**: Contact form submission is powered by **Netlify Forms**.
- **Deployed on Netlify**: Enjoy fast, secure, and globally available hosting.

## 📦 Technologies Used

- **ReactJS**: For building the front-end of the application.
- **DaisyUI**: A Tailwind CSS-based component library for beautiful UI components.
- **Tailwind CSS**: Utility-first CSS framework for responsive and custom styling.
- **Netlify**: Deployment platform with seamless integration for React applications.
- **Netlify Forms**: For handling form submissions without needing a server.

## 🚀 Deployed Version

Check out the live version of my portfolio here:  
[Portfolio Website - Live](https://daisyuiweb.netlify.app)  


## 📨 Netlify Forms Setup

The contact form is powered by **Netlify Forms**. It allows form submissions without needing server-side code.

### How to use:
- Always include the `data-netlify="true"` attribute in the form for Netlify to recognize and process it.
- Insert the following code in your index.html:

```jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send</button>
</form>
```

## 🎨 Customization

Feel free to modify and customize the design, components, and content to fit your personal portfolio needs.

## 🛠️ Dependencies

- **ReactJS**
- **DaisyUI**
- **Tailwind CSS**
- **Netlify Forms**

