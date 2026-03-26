# Personal Webpage of Richard Nagy (rnagy95)
[![Build and Deploy](https://github.com/rnagy95/rnagy95.github.io/actions/workflows/cd-deploy.yml/badge.svg?branch=master)](https://github.com/rnagy95/rnagy95.github.io/actions/workflows/cd-deploy.yml) [![CI Pipepline](https://github.com/rnagy95/rnagy95.github.io/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/rnagy95/rnagy95.github.io/actions/workflows/ci.yml)

This project has a dual purpose:
- Personal website / online CV
- Demonstartion of coding skills

## Branches
- **master**: this is the main branch that reflects the production code deployed to github-pages environment
- **develop**: this is the development branch
- **feature/\***: these branches are used to develop a single feature. They are automatically deleted once merged into **develop**
- **hotfix/\***:  these branches are used to fix critical production issues. They are automatically deleted once merged into **master**.

## License
The project is licenced under multiple licenses. See [LICENSE](https://github.com/rnagy95/rnagy95.github.io/blob/master/LICENSE)

## Technology Stack

This project is built using a modern web development stack focused on Angular and supporting technologies:

### Frontend Framework
- **Angular 21.x**: Core framework for building the single-page application
- **Angular Material 21.x**: UI component library for consistent design and theming
- **Angular CDK 21.x**: Component DevKit for advanced UI primitives

### Programming Language
- **TypeScript 5.9.x**: Typed superset of JavaScript for enhanced development experience

### Styling
- **SCSS/Sass 1.98.x**: CSS preprocessor for advanced styling capabilities

### Reactive Programming
- **RxJS 7.5.x**: Reactive programming library for handling asynchronous operations

### Testing
- **Jasmine 4.x**: Behavior-driven development framework for unit tests
- **Karma 6.x**: Test runner for executing tests in multiple browsers
- **Chrome Headless**: Headless browser for CI/CD test execution

### Analytics
- **ngx-google-analytics 14.x**: Angular integration for Google Analytics tracking

### Build Tools
- **Angular CLI 21.x**: Command-line interface for Angular development
- **Node.js**: Runtime environment (version specified in package.json)

### Hosting and Deployment
- **GitHub Actions**: CI/CD pipeline for automated builds and deployments

## Project Structure

The repository structure is the following:

```
rnagy95.github.io/
├── README.md                    # Project documentation
├── docs/                        # Documentation and licenses
│   ├── LICENSE                  # License text
│   └── THIRD_PARTY_LICENSES.md  # NPM package licenses
├── webApp/                      # Angular application source
│   ├── angular.json             # Angular CLI configuration
│   ├── package.json             # Node.js dependencies and scripts
│   ├── karma.conf.js            # Karma test configuration
│   ├── tsconfig*.json           # TypeScript configurations
│   ├── generate-version-file.js # Build script for version tracking
│   ├── src/                     # Application source code
│   │   ├── app/                 # Angular components and modules
│   │   │   ├── about/           # About section component
│   │   │   ├── banner/          # Hero banner component
│   │   │   ├── experience/      # Work experience component
│   │   │   ├── tech-stack/      # Technology stack display
│   │   │   ├── services/        # Angular services
│   │   │   ├── interfaces/      # TypeScript interfaces
│   │   │   └── ...              # Other feature components
│   │   ├── assets/              # Static assets
│   │   │   ├── locale/          # Internationalization files
│   │   │   ├── experience/      # Experience data and logos
│   │   │   └── tech-stack/      # Technology stack data
│   │   ├── environments/        # Environment configurations
│   │   └── styles.scss          # Global styles
│   └── coverage/                # Test coverage reports
└── .github/                     # GitHub configuration
    └── workflows/               # CI/CD pipelines
```

## Development Setup

### Prerequisites
- Node.js (version 24+ recommended)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

### Installation
```bash
cd webApp
npm install
```

### Running the Application
```bash
cd webApp
npm run start
```

The application will be available at `http://localhost:4200` with hot reload enabled.

### Building for Production
```bash
cd webApp
npm run build
```

The build output is generated in the `../_site` directory, which serves as the site root for GitHub Pages deployment.

### Testing
```bash
cd webApp
npm run test
```

Tests run in headless Chrome by default.

### Debugging

#### Development Mode
- Use browser developer tools (F12) for client-side debugging
- Angular DevTools browser extension provides component inspection and performance profiling
- Source maps are enabled in development builds for accurate debugging

#### Testing
- Karma test runner provides detailed test output and debugging capabilities
- Use `ng test --watch` for continuous testing during development
- Individual test files can be debugged by focusing on specific test suites

#### Build Issues
- Check Angular CLI output for compilation errors
- Verify TypeScript configurations in `tsconfig*.json`
- Ensure all dependencies are installed and compatible

## Deployment

The project uses GitHub Actions for automated deployment to GitHub Pages:

- **Trigger**: Push to `master` branch
- **Process**: Version bump, build Angular app, deploy to GitHub Pages
- **Output**: Live site at `https://rnagy95.github.io`

Manual deployment can be triggered via GitHub Actions workflow dispatch.

## Configuration

### Environment Variables
- Production configuration in `webApp/src/environments/environment.prod.ts`
- Development configuration in `webApp/src/environments/environment.ts`

### Internationalization
- Locale files in `webApp/src/assets/locale/`
- Supported languages: English (en-US), Hungarian (hu-HU)

### Build Budgets
- Initial bundle: Warning at 1.5MB, error at 3MB
- Component styles: Warning at 10KB, error at 20KB

## Additional Notes

- The application includes Google Analytics tracking for usage analytics
- Version information is automatically generated from `package.json` during builds
- The project demonstrates modern Angular development practices including component architecture and material design
- All third-party licenses are documented in the `docs/` directory