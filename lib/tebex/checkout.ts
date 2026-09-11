import { TebexProduct } from "./types";
/** Opens only provider-supplied URLs. Never build undocumented Tebex query parameters. */
export function getTebexCheckoutUrl(product: TebexProduct) { return product.checkoutMode === "direct" ? product.tebexDirectLink : undefined; }
export function buildTebexCheckoutUrl(product: TebexProduct) { return getTebexCheckoutUrl(product); }
