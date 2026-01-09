# JavaScript Scope & Hoisting

This module focuses on understanding how **JavaScript executes code internally**,  
with emphasis on **scope resolution, hoisting behavior, Temporal Dead Zone (TDZ),  
and closures**.

The examples intentionally include both **working code and error-producing code**
to demonstrate real JavaScript runtime behavior.

---

## 📌 Topics Covered

- Global scope vs function scope
- `var` hoisting and initialization
- `let` hoisting and Temporal Dead Zone (TDZ)
- Function declaration hoisting
- Block scope (`if`, `{}`)
- Variable shadowing
- Closures and lexical scope
- Debugging execution flow

---

## ⚠️ Important Note

Some code snippets in `app.js` are **expected to throw runtime errors**
(e.g. `ReferenceError`).

These errors are **intentional** and included for:
- Understanding JavaScript execution order
- Learning how TDZ works
- Practicing debugging and dry-run skills

Do **not** run the entire file at once without commenting sections.

---

## ▶️ How to Run

### Option 1: Browser Console
- Open DevTools → Console
- Paste code section by section

### Option 2: Node.js
```bash
node app.js
