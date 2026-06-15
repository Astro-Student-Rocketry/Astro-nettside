Labelled text input for forms — join/recruitment forms, contact, sponsor enquiry.

```jsx
<Input label="Full name" placeholder="Ada Lovelace" required />
<Input label="Email" type="email" prefix="@" hint="We'll only use this for team updates." />
<Input label="Student ID" error="That ID isn't registered at HVL." />
```

Props: `label`, `hint`, `error`, `required`, `prefix`, `suffix` — plus all native `<input>` props. Error state replaces the hint and reddens the border.
