import nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
// Go up 2 levels: init-nunjucks.js in app -> app -> project-root
const projectRoot = path.dirname(path.dirname(__filename));
const require = createRequire(import.meta.url);

// Resolve all four paths
const appViews = path.join(projectRoot, 'app', 'views');
const govukPath = path.join(
  path.dirname(require.resolve('govuk-frontend/package.json')),
  'dist'
);
const dynamicFormsPath = path.join(
  path.dirname(require.resolve('@planning-inspectorate/dynamic-forms/package.json')),
  'src'
);
const kitPath = path.join(
  path.dirname(require.resolve('govuk-prototype-kit/package.json')),
  'lib',
  'nunjucks'
);

// Configure Nunjucks with all paths globally BEFORE the kit initializes
// This ensures Nunjucks can find all templates
nunjucks.configure([appViews, govukPath, dynamicFormsPath, kitPath], {
  autoescape: true,
  noCache: true  // Disable caching to avoid stale content issues
});

console.log('[app/init-nunjucks.js] Configured Nunjucks paths:');
console.log('  - App views:', appViews);
console.log('  - GOV.UK:', govukPath);
console.log('  - Dynamic Forms:', dynamicFormsPath);
console.log('  - Kit layouts:', kitPath);
