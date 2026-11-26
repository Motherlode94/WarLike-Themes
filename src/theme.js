export const THEMES=Object.freeze(["olive-dark","sand-light","tactical","heritage","clean","forest-classic"]);export const STORAGE_KEY='warlike-theme-v1';
export function normalizeTheme(value,fallback='olive-dark'){return THEMES.includes(value)?value:THEMES.includes(fallback)?fallback:'olive-dark';}
export function applyTheme(root,value,{storage=null,persist=true,fallback='olive-dark'}={}){const theme=normalizeTheme(value,fallback);root.setAttribute('data-wlt-theme',theme);if(persist)try{storage?.setItem(STORAGE_KEY,theme)}catch{}return theme;}
export function initializeTheme(root,{storage=null,fallback='olive-dark'}={}){let value;try{value=storage?.getItem(STORAGE_KEY)}catch{}return applyTheme(root,value,{storage,persist:false,fallback});}
