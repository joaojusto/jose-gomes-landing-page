This project is a WIP migration from site made in Gastby (v0.10) to modern Astro. The original source code is in the directory that sits directly above this one.

# Code style

- Use ES modules (import/export) syntax, not CommonJS (require)
- Destructure imports when possible (eg. import { foo } from 'bar')
- Typecheck everthing

# Workflow

- Be sure to typecheck when you’re done making a series of code changes
- Prefer running single tests, and not the whole test suite, for performance
- Don't leave comments on the code
- Remove any console.log and other artifacts created during debuging sessions
- Write small functions with a single responsibility
- Write small components, breakdown html/css into logic components
- Prefer composability and reusability over long and complex html structures
- Use modern css standards
