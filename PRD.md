# Planning Guide

An interactive educational app that teaches 3rd graders five fascinating facts about the Earth's Equator through engaging visuals and simple explanations.

**Experience Qualities**: 
1. **Playful** - Uses bright colors, fun animations, and friendly illustrations that capture a child's attention and make learning feel like an adventure
2. **Clear** - Presents information in short, simple sentences with visual aids that help young learners understand geographic concepts easily
3. **Delightful** - Includes interactive elements and cheerful animations that reward exploration and make scientific learning memorable

**Complexity Level**: Light Application (multiple features with basic state)
An interactive educational showcase with clickable fact cards that open detailed modal views containing custom animated diagrams. Uses state management to track which fact is being explored.

## Essential Features

**Fact Cards Display**
- Functionality: Display five distinct facts about the Equator, each with an illustration/icon and simple text
- Purpose: Deliver educational content in digestible, memorable chunks appropriate for 3rd grade level
- Trigger: Automatically visible on page load
- Progression: User lands on page → sees all five facts presented as cards → can read through them at own pace
- Success criteria: All five facts are clearly visible, easy to read, and use age-appropriate language

**Visual Indicators**
- Functionality: Each fact card has a unique icon or illustration related to its content
- Purpose: Help visual learners connect concepts with imagery and make facts more memorable
- Trigger: Displayed with each fact card
- Progression: User sees icon → associates it with fact content → reinforces learning through visual memory
- Success criteria: Icons are colorful, relevant to each fact, and visually distinct from one another

**Interactive Fact Exploration**
- Functionality: Click on any fact card to open a detailed view with custom diagrams and visual explanations
- Purpose: Provide deeper learning through interactive visuals that explain complex concepts in kid-friendly ways
- Trigger: User clicks on a fact card or "Explore More" button
- Progression: User clicks fact → modal opens with animated diagram → user explores visual → closes modal to return to overview
- Success criteria: Each fact has a unique, educational diagram (Earth hemispheres, sunlight angles, distance comparison, day/night cycle, world map with 13 countries highlighted)

**Animated Diagrams**
- Functionality: Five custom SVG diagrams with progressive animations that build understanding step-by-step
- Purpose: Make abstract geographic concepts concrete through visual representation and motion
- Trigger: Displays when fact detail modal opens
- Progression: Diagram elements animate in sequence → labels appear → user can absorb information visually
- Success criteria: Diagrams are colorful, scientifically accurate for elementary level, and animations enhance rather than distract from learning

## Edge Case Handling
- **Small screens**: Cards stack vertically on mobile devices for easy reading; modal dialrams scroll vertically with touch-friendly interactions
- **Long text**: Fact descriptions are kept to 2-3 short sentences maximum for readability
- **Loading state**: Simple, child-friendly loading indicator if needed
- **Modal interaction**: Clear close button and click-outside-to-close behavior for intuitive navigation
- **SVG scaling**: All diagrams are responsive and scale proportionally on different screen sizes

## Design Direction

The design should feel playful, educational, and encouraging - like a vibrant classroom poster come to life. Bright, cheerful colors and friendly typography create an inviting learning environment that feels exciting rather than intimidating. The interface should be clean and uncluttered so young learners can focus on discovering facts without distraction.

## Color Selection

Triadic color scheme - using three equally spaced colors to create a vibrant, energetic palette that captures children's attention while maintaining visual harmony and educational clarity.

- **Primary Color**: oklch(0.55 0.22 210) - A bright, friendly blue that represents the ocean and water (which the Equator crosses), communicating trust and learning
- **Secondary Colors**: 
  - oklch(0.75 0.18 145) - A lively green representing tropical rainforests and nature at the Equator
  - oklch(0.70 0.20 35) - A warm yellow-orange for sunshine, representing the intense sunlight at the Equator
- **Accent Color**: oklch(0.65 0.24 330) - A cheerful coral-pink for highlighting important elements and call-to-actions
- **Foreground/Background Pairings**:
  - Background (White oklch(0.98 0 0)): Dark blue text oklch(0.25 0.05 230) - Ratio 11.2:1 ✓
  - Card (Soft cream oklch(0.96 0.02 85)): Dark blue text oklch(0.25 0.05 230) - Ratio 10.5:1 ✓
  - Primary (Bright Blue oklch(0.55 0.22 210)): White text oklch(0.98 0 0) - Ratio 5.8:1 ✓
  - Accent (Coral Pink oklch(0.65 0.24 330)): White text oklch(0.98 0 0) - Ratio 4.6:1 ✓

## Font Selection

Typography should be friendly, rounded, and highly legible - characteristics that appeal to young readers while maintaining educational credibility. Rounded sans-serif fonts feel approachable without being childish.

- **Typographic Hierarchy**: 
  - H1 (Page Title): Fredoka Bold/36px/tight tracking - Playful rounded font for the main heading
  - H2 (Fact Numbers): Fredoka SemiBold/20px/normal tracking - Clear hierarchy for fact numbering
  - Body (Fact Text): Nunito Regular/16px/relaxed line-height (1.6) - Highly legible for young readers
  - Small (Captions): Nunito Regular/14px/relaxed - For any supporting text

## Animations

Animations should be gentle and encouraging, creating moments of delight when facts appear or are interacted with, mimicking the excitement of turning pages in a colorful picture book.

- **Purposeful Meaning**: Subtle bounce and fade-in effects communicate friendliness and energy, matching the playful learning environment of an elementary classroom
- **Hierarchy of Movement**: 
  - High priority: Fact cards entering with staggered fade-in animations to guide reading order
  - Medium priority: Gentle hover effects on cards to encourage exploration
  - Low priority: Icons with subtle scale or rotate effects on card reveal

## Component Selection

- **Components**: 
  - Card component for each fact container with gentle shadows and rounded corners
  - Badge components for fact numbering (Fact 1, Fact 2, etc.)
  - Dialog component for modal fact detail views
  - Button component for "Explore More" call-to-action on cards
  - Custom SVG diagrams built with framer-motion animations
  - Scroll Area for modal content on smaller screens
  - Separator between header and content
- **Customizations**: 
  - Cards with extra-large radius (--radius: 1.5rem) for friendly, approachable feel
  - Custom gradient backgrounds within cards using the triadic color scheme
  - Larger-than-default padding for comfortable touch targets
- **States**: 
  - Cards with subtle hover lift effect (transform translateY(-4px) + shadow increase) and cursor pointer
  - Smooth transitions on all interactive elements (300ms ease-out)
  - Dialog open/closed state with backdrop blur
  - SVG elements with staggered animation states for visual storytelling
  - Hover states on country names in the interactive map
- **Icon Selection**: 
  - Globe/GlobeHemisphereWest for geographic facts
  - Sun for weather/climate facts
  - Ruler for measurement facts
  - MapPin for location facts
  - ThermometerSimple for temperature facts
- **Spacing**: 
  - Generous padding (p-8) on cards for breathing room
  - Large gaps (gap-6) between cards
  - Extra margin (my-12) around main content container
- **Mobile**: 
  - Stack cards vertically on small screens (grid-cols-1)
  - Reduce font sizes slightly (scale down by 10%)
  - Maintain touch-friendly spacing even on mobile
  - Header remains fixed with title, cards scroll below
