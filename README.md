# Login & Signup Form with Animated Style

A modern, responsive login and signup form with animated transitions, vibrant CSS border effects, and success notifications — built with plain HTML, CSS and JavaScript.

## Demo / Preview

Include a screenshot or a GIF here to show the animated transitions and success popups.

## Features

- Dual form system (Login & Signup) with smooth animated transitions
- Animated border effects using CSS conic-gradient and keyframe animations
- Animated success popup with bouncing check icon
- Client-side form validation (basic)
- Responsive layout that adapts to mobile and desktop screens
- Forgot password form/flow
- Easy to customize styles and animations

## File Structure

- index.html — Main page containing login, signup, and forgot password forms
- css/
  - style.css — All styles and animations
- js/
  - script.js — Form switching, validation, and success popup logic
- assets/ — Images, icons, and other static assets
- README.md — Project documentation

(Adjust this list to match your actual repository layout if filenames differ.)

## Installation

1. Clone the repository:
   git clone https://github.com/lalitkaushal007/Login-Signup-Forget-Password-Form.git

2. Open `index.html` in your browser:
   - Double-click the file, or
   - Serve it with a static server (recommended for consistent behavior):
     npx http-server .
     or
     python -m http.server 8000

## Usage

- Use the toggle controls to switch between Login and Signup.
- Fill in required fields and submit; correct input triggers an animated success popup.
- Use the "Forgot password" link to view the password recovery form (UI only — no backend).

## Customization

- Colors & theme: edit CSS variables in `style.css`.
- Animations: adjust keyframes and transition durations in `style.css`.
- Form validation and submission: update `js/script.js` to integrate with your backend or external auth provider.

## Accessibility & Improvements

- Add semantic labels and ARIA attributes for better screen-reader support.
- Improve keyboard navigation and focus outlines.
- Add server-side validation and secure authentication flows before production use.

## Contributing

Contributions are welcome. To contribute:
1. Fork the repo
2. Create a feature branch: git checkout -b feature-name
3. Commit your changes and push: git push origin feature-name
4. Open a Pull Request

Please include clear descriptions of changes and any screenshots/GIFs demonstrating UI/animation changes.

## License

Specify the license for this project (e.g., MIT). Example:
This project is licensed under the MIT License — see the LICENSE file for details.
