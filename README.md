# Personal Portfolio — Kasymbek Orazaly

Live Website: https://constantXD.github.io/iwamad-sis1-portfolio/

## About the project

This is a personal portfolio site built from the ground up using semantic HTML5, modern CSS3 and vanilla JavaScript (no external libraries or UI kits). It's my own take on a basic web dev portfolio with sections for my background, a number of featured practice projects and an interactive contact form. It's a single page site with a very clear structure, designed to be accessible and to work across all device viewports.

## Design Decisions

1. **High-Contrast Cyber/Tech Palette**: I have used a special yellow and black colour scheme, fully implemented using CSS custom properties, since it establishes a clear visual hierarchy, ensures good readability whether in light or dark mode, and brings to prominence the key interactive states such as the borders of cards and the focus rings.
2. **Adaptive Grid Transition**: In the Projects section I introduced a mobile-first responsive layout which changes from a single vertical column when the viewport is narrow (375px) to a three-column CSS Grid at 768px and 1200px. This arrangement guarantees that the content remains readable on phones without the cards being squeezed.
3. **Micro-Interactions and Focus Outlines**: I introduced a 3px accent outline for `:focus-visible` to ensure that keyboard navigation remains accessible for all links, inputs, and buttons, and the project cards also have a slight `translateY(-4px)` lift together with a box-shadow transition when hovered for immediate tactile feedback.
