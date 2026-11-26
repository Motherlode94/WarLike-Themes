# WarLike Themes
Central versioned design system for the WarLike ecosystem. R01 preserves existing approved palette snapshots and introduces isolated semantic tokens and opt-in components. No global body or layout resets.

## Integration
Vendor src/themes.css, src/components.css and src/theme.js at an immutable reviewed commit, load locally, use data-wlt-theme on root and explicit wlt-* classes. Existing native theme managers must be adapted, not replaced. No floating selector or remote runtime CDN. localStorage is origin-specific; cross-app account synchronization is not implemented.

## Sources
Legacy files are exact snapshots from WarLike-Library and WarLike-Hub (source blob hashes in registry/sources.json). New token colors preserve existing palettes; missing semantic colors use the existing light/dark palette defaults. Forest Classic is a compatibility mapping of Foundation. App-specific adapters and actual rollout require separate reviewed PRs.

## Rules
Preserve editor layout, canvases, plugin skins, media, accessibility settings and semantic answer colors. HelianA keeps its educational visual identity. Backend-only services require no visual integration. Test text contrast, focus, native controls, menus, mobile and each app's existing UI before migration. Run npm test.
