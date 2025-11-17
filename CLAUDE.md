# @Techletariats/Commons

**Commons** is an open-source, accessibility-first component library and design system built by **Techletariats**.

### Mission

Techletariats builds products for mutual aid organizations to strengthen community. Commons provides the foundational components for these products, ensuring that everyone—especially people in marginalized communities—can participate fully and independently.

Many component libraries claim accessibility but fail WCAG guidelines or haven't considered real-world usage by people with disabilities. Commons takes a different approach: **accessibility is not a feature, it's the foundation**. Every component is designed, built, and tested with the full spectrum of human ability in mind.

### Principles

1. **Accessibility First**: WCAG compliance is the baseline, not the goal
2. **Inclusive by Design**: Consider cognitive, motor, visual, and auditory disabilities from the start
3. **Semantic HTML**: Use the platform's built-in accessibility features
4. **Real-World Testing**: Accessibility isn't theoretical—it's tested with actual assistive technology
5. **Community-Driven**: Built for the people who use mutual aid services

### Tech Stack

- **React** v19.2.0
- **TypeScript** for type safety
- **Vite** for build tooling and development
- **CSS Modules** for component styling
- **Storybook** (Next.js + Vite adapter) for component development and documentation
- **Next.js components** selectively used where appropriate

### Distribution

Published to NPM as a standalone package for use in any React application.

### Directory Structure

```
/src
  /components
    /Button
      index.tsx
      style.module.css
      story.stories.tsx
    /[ComponentName]
      ...
  /types
  shared.module.css
```

### Component Organization

- **Atomic Design**: Components are organized using atomic design principles (Atoms, Molecules, Organisms, etc.)
- **Co-location**: Each component lives in its own directory with all related files
- **Naming**: PascalCase for component directories and files

---

## Coding Conventions

### TypeScript Patterns

**Namespace Pattern for Props:**

```typescript
namespace ComponentName {
  export interface Props {
    // prop definitions
  }
}

export const ComponentName = (props: ComponentName.Props) => {
  // implementation
};
```

**Polymorphic Components:**
Use discriminated unions for components that can render as different HTML elements:

```typescript
type Props =
  | ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>);
```

### Styling Conventions

- **CSS Modules**: All component-specific styles use CSS modules
- **Shared Styles**: Common patterns (focus states, text selection, etc.) live in `shared.module.css`
- **Class Composition**: Use `classnames` library for conditional/composed class names
- **Design Tokens**: Use CSS custom properties (variables in /src/theme.css) for theming
- **Variants**: Define variants as a union type in `@/types` and apply via CSS classes

### Imports

- Use path aliases (`@/` for src root)
- Group imports: external libraries, then internal modules, then styles
- Prefer named exports over default exports

---

## Accessibility Requirements

### Non-Negotiables

- All interactive elements must be keyboard accessible
- Use semantic HTML elements (button, a, nav, etc.)
- Include ARIA attributes only when semantic HTML is insufficient
- Apply shared focus styles (`shared.focusOutline`) to all focusable elements
- Prevent text selection on interactive elements (`shared.preventSelect`)

### Testing for Accessibility

- Storybook play functions should use role-based queries (`getByRole`, `findByRole`)
- Test keyboard navigation in play functions when relevant
- Include disabled states and verify they're not interactive

---

## Testing Approach

### Storybook Stories

Stories serve as both documentation and interaction tests.

**Story Structure:**

- **Meta configuration**: Define component, parameters, tags, argTypes
- **Default args**: Provide sensible defaults for all stories
- **Play functions**: Test component behavior and interactions
- **Variants**: Create a story for each major variant/state

**Play Function Patterns:**

- Use `step()` for readable test organization
- Start with initial render verification
- Test user interactions with `userEvent`
- Verify callbacks with `expect` and mock functions (`fn()`)
- Chain from parent play functions when extending tests

---

## Before You Start Coding

When asked to implement a component or feature, always:

1. **Clarify requirements**: Ask about expected behavior, variants, and edge cases
2. **Identify accessibility needs**: What roles, labels, or keyboard interactions are required?
3. **Confirm styling approach**: Variants, states, responsive behavior
4. **Discuss tradeoffs**: If multiple approaches exist, present options with pros/cons

Your goal is to write production-ready, accessible, maintainable code — not just code that works.

---

## Notes for Claude Code

- **Never rush**: Ask questions before generating code
- **Follow existing patterns**: Reference this document and existing components
- **Accessibility first**: It's not optional, it's part of the definition of done
- **Think in systems**: Consider how the component fits into the larger architecture
- **Communicate clearly**: Explain your reasoning and any tradeoffs

---

_This document is a living guide. Update it as patterns evolve._
