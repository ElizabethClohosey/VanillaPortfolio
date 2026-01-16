# Portfolio Changelog

## Document Purpose

This changelog serves as a clear and concise record of updates made to my frontend portfolio. It tracks visual, functional, and content-related changes across versions, with the goal of:

- Documenting design updates, UI/UX improvements, and accessibility enhancements
- Tracking new sections, project additions, or layout refinements
- Providing transparency into how the portfolio evolves over time
- Supporting maintenance and version control
- Demonstrating attention to detail and a thoughtful development process

This log is primarily intended for personal reference, potential employers, and collaborators who may review the project’s development history.

## [v2.0.1] - 2025-08-05

### Updated

- Updated resume PDF to latest finalized version

## [v2.0.0] - 2025-08-01

### Updated (Accessibility)

- Replaced Skills, Projects, About Me, Contact Me, and Photo Credit title SVG images with semantic heading elements and updated section-title styles
- Added descriptive `aria-label` to scroll-to-top button
- Changed all "Archived Projects Summaries" link `alt` attributes to `aria-label` and improved label text for clarity
- Added `role="img"` and descriptive `aria-label`s to all skills icons for better screen reader support
- Updated all photo credit sections to use semantic `<figure>` and `<figcaption>` elements
- Improved `alt` and `aria-label` attributes and added `sr-only` utility class where necessary
- Added linked images to all photo credit sections for better accessibility and usability

### Removed

- Temorarily removed all references to project-docs.html from navigation and roadmap

## [v1.1.7] - 2025-07-10

### Updated

- Updated roadmap section links for improved accuracy and consistency
- Renamed pdf 'wirframes' folder to 'designs'
- Renamed PDF files for clarity and consistent naming conventions

## [v1.1.6] - 2025-07-03

### Updated

- Replaced outdated documents with current versions: `archived-projects-summaries`, `roadmap-page-fsd`, and `roadmap-page-structure`
- Updated all instances of **"Archived project summaries"** to **"Archived projects summaries"**, including PDF filename and links
- Added navigation stalling bug to v2.0.0 Bug Fixes section of roadmap page

### Removed

- Removed roadmap link from the Projects section and all page footers

### Fixed

- Typo in header phrase to improve professionalism and clarity

### Added

- Added Documentation and Roadmap links to main navigation dropdown

## [v1.1.5] - 2025-06-30

### Fixed

- Corrected oversized logo on large screens by replacing calc() with clamp() and adjusting sizing values for better responsiveness

## [v1.1.4] - 2025-06-27

### Added

- Basic documentation page with links to planning and design files and linked from roadmap page
- Planning PDF files and wireframe PDFs added to assets

### Updated

- Roadmap page to include link to documentation page
- Layout styles reorganized; .roadmap-section_subsection style generalized to .section-subsection

## [v1.1.3] - 2025-06-16

### Fixed

- Prevent Contact Me button from pulsing size; pulse only box-shadow

### Added

- Created initial changelog document for version tracking
- Added changelog link to roadmap page and footer on all pages

## [v1.1.2] - 2025-06-16

### Fixed

- Broken project summaries link on resume PDF
- Missing bullet on page 2 of Archived Project Summaries PDF

### Updated

- Replaced resume and archive PDFs with corrected versions
