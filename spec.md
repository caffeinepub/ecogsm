# EcoGSM

## Current State
New project. No existing pages or components.

## Requested Changes (Diff)

### Add
- 11 pages: Home, About, Ecosystem, Solutions, Use Cases & Impact, For Governments, For Partners & NGOs, Technology, Country Deployments, Join the Movement, Contact
- Global navigation bar (all pages):
  - White background with thin gray bottom border
  - Left: logo text "🌍 EcoGSM" in color #0d6e6e, links to Home
  - Center: nav links — About | Ecosystem | Solutions | For Governments | For Partners
  - Right: "Join the Movement" pill button, background #0d6e6e, white text, links to Join the Movement page
- Global footer (all pages):
  - Background #094f4f, white text
  - 4-column layout:
    - Col 1: Logo "🌍 EcoGSM" + tagline "Social medicine. Digitally enabled. Community owned."
    - Col 2 "Platform": Home, About, Ecosystem, Solutions, Technology
    - Col 3 "Engage": For Governments, For Partners & NGOs, Use Cases & Impact, Join the Movement, Contact
    - Col 4 "Contact": info@ecogsm.com, partners@ecogsm.com, media@ecogsm.com
  - Bottom bar: "© 2025 EcoGSM · Part of the TMU AI Ecosystem · www.ecogsm.com"
- React Router setup for all 11 routes

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Set up React Router with 11 routes
2. Build shared Navbar component matching exact spec
3. Build shared Footer component matching exact spec
4. Create 11 page components (empty/placeholder body content, no page content per instructions)
5. Wire Navbar and Footer into all pages via a Layout component
