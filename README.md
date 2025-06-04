# Ivan's Portfolio Website

A modern, responsive portfolio website built with React to showcase my skills, projects, and certificates.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for About, Projects, and Certificates
- Easy to customize and update

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to the project directory
```
cd portfolio
```

3. Install dependencies
```
npm install
```

4. Start the development server
```
npm start
```

5. Open your browser and visit `http://localhost:3000`

## Customization

### Adding Your Photo

1. Place your profile photo in the `public/images/` directory
2. Update the image path in the `Hero.js` component

### Adding Projects

Edit the projects array in the `Projects.js` component to add your own projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    image: '/images/projects/your-project-image.jpg',
    technologies: ['React', 'Node.js', 'etc'],
    githubLink: 'https://github.com/yourusername/project',
    liveLink: 'https://your-project-url.com'
  },
  // Add more projects...
];
```

### Adding Certificates

Edit the certificates array in the `Certificates.js` component to add your own certificates:

```javascript
const certificates = [
  {
    id: 1,
    title: 'Certificate Title',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    image: '/images/certificates/your-certificate-image.jpg',
    verificationLink: 'https://verification-url.com'
  },
  // Add more certificates...
];
```

## Deployment

To build the project for production:

```
npm run build
```

This will create a `build` folder with all the optimized files ready for deployment.

## Built With

- [React](https://reactjs.org/) - Frontend library
- [React Router](https://reactrouter.com/) - For navigation
- [Styled Components](https://styled-components.com/) - For styling
- [React Icons](https://react-icons.github.io/react-icons/) - For icons

## License

This project is licensed under the MIT License