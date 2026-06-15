Telemetry-style metric: a big tabular mono number with a tracked uppercase label. The signature data element of the brand.

```jsx
<Stat value="3.2" unit="km" label="Target apogee" accent />
<Stat value="982" unit="N" label="Peak thrust" />
<Stat value="14.6" unit="s" label="Burn time" size="lg" />
```

Props: `value`, `unit`, `label`, `accent` (blue value), `size` (sm/md/lg). Group 3–4 in a row for a stat band; use `accent` on the hero metric only.
