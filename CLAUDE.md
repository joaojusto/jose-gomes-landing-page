This project is a WIP migration from site made in Gastby (v0.10) to modern Astro. The original source code is in the directory that sits directly above this one.

**Migration Goal**: Everything should be migrated to Astro. Prefer Astro pages/components over static HTML files.

## CMS Setup

The project includes **Decap CMS** (formerly Netlify CMS) for content management:

- **Admin Interface**: Available at `/admin/` (src/pages/admin.astro)
- **Configuration**: public/admin/config.yml
- **Content Collections**: Events, News, and Translations
- **Backend**: GitHub with main branch
- **Media**: Stored in public/images/

### CMS Collections:
- **Events** (`src/content/events/`) - Concert and performance data
- **News** (`src/content/news/`) - News articles and updates  
- **Translations** (`src/content/translations/`) - Multi-language content

The CMS integrates with Astro's content collections system for type-safe content management.

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
