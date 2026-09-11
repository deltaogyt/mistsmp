import { tebexConfig } from "./config";
/** Server integration seam for future Headless basket creation. */
export async function createTebexBasket() { if (!tebexConfig.enabled) throw new Error("Tebex checkout is not configured yet."); }
export async function addPackageToBasket() { return createTebexBasket(); }
export async function getTebexPackage() { return null; }
