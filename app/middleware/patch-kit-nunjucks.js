import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
// Go up 2 levels: middleware -> app -> project-root
const projectRoot = path.dirname(path.dirname(path.dirname(__filename)));
const require = createRequire(import.meta.url);

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

let patched = false;

export default () => {
  return (req, res, next) => {
    if (patched) return next();

    try {
      const app = req.app;
      if (!app) return next();

      const env = app.get('nunjucksEnv');
      if (!env) return next();

      console.log('[patch-kit-nunjucks] Patching on first request');
      
      // The kit stores paths in appViews - replace with our four paths
      if (env.loaders && env.loaders.length > 0) {
        const loader = env.loaders[0];
        if (loader.appViews) {
          console.log('[patch-kit-nunjucks] Old paths count:', loader.appViews.length);
          // Set to our four paths: app views, GOV.UK, Dynamic Forms, and kit's own layouts
          loader.appViews = [appViews, govukPath, dynamicFormsPath, kitPath];
          console.log('[patch-kit-nunjucks] New paths:', loader.appViews);
          
          // Clear the cache so templates are re-resolved
          if (loader.cache) {
            loader.cache = {};
            console.log('[patch-kit-nunjucks] Cleared loader cache');
          }
          
          // Also clear the environment cache
          if (env.cache) {
            env.cache = {};
            console.log('[patch-kit-nunjucks] Cleared environment cache');
          }
        }
      }

      patched = true;
      console.log('[patch-kit-nunjucks] Successfully patched');
    } catch (err) {
      console.error('[patch-kit-nunjucks] Error:', err.message);
    }
    
    next();
  };
};
