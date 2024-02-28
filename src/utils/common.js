export const scrollContainerToTop = () => {
  document
    .querySelector('[class*="container"]')
    .scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
