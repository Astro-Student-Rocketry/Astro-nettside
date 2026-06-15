A brand-styled button — the primary call to action across Astro HVL surfaces. Use `primary` for the single most important action on a view; `secondary`/`ghost` for supporting actions.

```jsx
<Button variant="primary" size="lg" href="#join">Join the team</Button>
<Button variant="secondary">View projects</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="primary" loading>Saving…</Button>
```

Variants: `primary` (blue fill) · `secondary` (outline) · `ghost` (text) · `danger`.
Sizes: `sm` · `md` (default) · `lg`. Props: `icon`, `iconRight`, `loading`, `disabled`, `fullWidth`, `href`.
Keep one primary button per view. Pair an `icon` (16px stroke icon, see Iconography) for emphasis.
