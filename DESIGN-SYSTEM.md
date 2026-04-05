# Pawan Karki Portfolio — Design System

> Living document. Update this file whenever design tokens or component styles change.

---

## Brand

| Token       | Value                              |
|-------------|------------------------------------|
| Name        | Pawan Karki                        |
| Tagline     | Designing Practical & Human-Centered Products |
| Theme       | Light only                         |

---

## Color Tokens

| Token          | Value       | Usage                                      |
|----------------|-------------|--------------------------------------------|
| `brand`        | `#FF5A0E`   | Labels, hover states, key highlights — use sparingly |
| `foreground`   | `#0a0a0a`   | Primary text, headings, buttons            |
| `background`   | `#ffffff`   | Page background                            |
| `muted`        | `#737373`   | Subheadings, body descriptions             |
| `subtle`       | `#a3a3a3`   | Placeholder text, secondary labels         |
| `border-light` | `#f5f5f5`   | Dividers, card borders (neutral-100)       |
| `border-mid`   | `#e5e5e5`   | Stronger borders (neutral-200)             |
| `surface`      | `#fafafa`   | Section backgrounds (neutral-50)           |

---

## Typography

### Font Family
- **Primary:** Inter (Google Fonts)
- **Fallback:** system-ui, sans-serif

### Scale

| Element          | Size                          | Weight      | Line Height | Letter Spacing  |
|------------------|-------------------------------|-------------|-------------|-----------------|
| Hero Heading     | `clamp(2rem, 5vw, 4.5rem)`    | 700 (Bold)  | `1.2` (120%)| `-0.035em`      |
| Section Heading  | `2.75rem` (44px)              | 700 (Bold)  | `1.1`       | `-0.03em`       |
| Sub Heading      | `1.5rem` (24px)               | 600         | `1.3`       | `-0.02em`       |
| Body             | `0.9375rem` (15px)            | 400         | `1.8`       | `0`             |
| Small / Label    | `0.6875rem` (11px)            | 500         | `1.5`       | `0.15em–0.2em`  |
| Tag / Mono       | `0.6875rem` (11px)            | 400         | `1.4`       | `0`             |

### Label Style
- Always **uppercase**
- Letter spacing: `tracking-[0.2em]`
- Color: `#FF5A0E` for section labels, `#a3a3a3` for secondary labels

---

## Spacing

| Token   | Value  | Usage                              |
|---------|--------|------------------------------------|
| `xs`    | `4px`  | Tag gaps, inline spacing           |
| `sm`    | `8px`  | Component inner padding            |
| `md`    | `16px` | Between small elements             |
| `lg`    | `24px` | Card padding, section sub-gaps     |
| `xl`    | `48px` | Container padding (px-12)          |
| `2xl`   | `80px` | Section vertical padding           |
| `3xl`   | `112px`| Large section vertical padding     |

---

## Layout

| Token             | Value       | Notes                              |
|-------------------|-------------|------------------------------------|
| Max Content Width | `72rem`     | `max-w-6xl` (1152px)               |
| Content Padding   | `48px`      | `px-12` on desktop                 |
| Mobile Padding    | `24px`      | `px-6` on mobile                   |

### Vertical Grid Lines
- 3 lines total (2nd line from left removed)
- Left boundary: `28px` from container left edge
- Column 2→3 divider: `66.666%` of container
- Right boundary: `28px` from container right edge
- Scope: Hero section only — from bottom of nav (`top: 72px`) to bottom of hero section (`bottom: 112px`)

---

## Components

### Buttons

#### Primary Button
```
Background:    #FF5A0E
Text:          #ffffff
Font:          Inter 16px / font-medium (500)
Padding:       px-7 py-3.5  (28px horizontal, 14px vertical)
Border Radius: 4px
Border:        none
Hover:         background → #E04E0C
Transition:    all 300ms
Example:       "View Selected Work", "Let's Talk"
```

#### Secondary Button
```
Background:    #ffffff (white)
Text:          #737373 (neutral-500)
Font:          Inter 16px / font-medium (500)
Padding:       px-7 py-3.5  (28px horizontal, 14px vertical)
Border Radius: 4px
Border:        1px solid #e5e5e5 (neutral-200)
Hover:         border → #a3a3a3 (neutral-400), text → #0a0a0a
Transition:    all 300ms
Example:       "Get in Touch"
```

#### Ghost / Text Button
```
Background:    transparent
Text:          #0a0a0a
Font:          Inter 13px / font-medium (500)
Padding:       none
Border:        none
Hover:         text → #FF5A0E
Example:       "Download Resume ↗"
```

### Tags / Pills
- Background: `bg-neutral-50`
- Text: `text-neutral-400`
- Size: `text-[11px]`
- Padding: `px-3 py-1`
- Border radius: `rounded-[4px]`

### Cards / Project Items
- Border: `border-neutral-100`
- Hover border: `border-neutral-300`
- Background on hover: `bg-neutral-50`
- Border radius: `rounded-lg`

---

## Sections

### Hero
- Layout: Full viewport height (`min-h-[100svh]`)
- Copy width: `w-2/3` (constrained to 3rd vertical line from left), `pr-12` on desktop
- Portrait: Absolutely positioned between grid line 3 (`66.666% + 30px`) and right-`58px`, `aspect-ratio: 3/4`, `maxHeight: 62vh`, `rounded-[8px]`
- Lamp tube: Glowing orange tube (`#FF5A0E`) placed 12px below portrait, same width as image
- Stats: Removed
- Heading line height: `1.2` (120%)
- Vertical centering: `pb-28` on outer wrapper compensates for removed stats

### Work / Case Studies
- Project covers: `aspect-[16/8]`, `rounded-lg`
- Layout: Stacked full-width list

### About
- Grid: `md:grid-cols-12` — Bio: 7 cols, Skills: 5 cols

### Contact
- Layout: Flex row — Heading left, CTAs right

---

## Animations

| Property        | Value                                  |
|-----------------|----------------------------------------|
| Easing          | `[0.22, 1, 0.36, 1]` (custom ease out)|
| Duration        | `0.6s – 0.8s`                          |
| Trigger         | `whileInView`, `once: true`            |
| Stagger         | `0.1s – 0.15s` per element             |
| Transform       | `y: 30px → 0`                          |
| Opacity         | `0 → 1`                                |

---

## Do's & Don'ts

### Do
- Use `#FF5A0E` sparingly — labels, hover accents, one key highlight per section
- Use `rounded-full` for buttons and tags
- Use `rounded-lg` for cards and image containers
- Use `rounded-sm` for subtle UI elements
- Keep generous whitespace — minimal is intentional

### Don't
- Never use dark mode
- Never use more than 2 font weights per section (Bold + Regular)
- Don't add drop shadows — borders and whitespace define depth
- Don't center-align body text
- Don't use more than 1 brand orange element per viewport at a time
