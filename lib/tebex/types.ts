export type CheckoutMode = "direct" | "headless" | "disabled";
export type TebexProduct = { tebexPackageId?: string; tebexDirectLink?: string; checkoutMode: CheckoutMode };
