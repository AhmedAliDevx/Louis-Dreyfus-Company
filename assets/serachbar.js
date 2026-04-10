const searchButton = document.querySelector(".search-button");
const crossButton = document.querySelector(".btn-close");
const searchbar = document.querySelector(".searchbar-parent");
const serachbarIcon = document.querySelector(".searchbar-icon");
const backdrop = document.getElementById("search-backdrop");
const searchField = document.getElementById("searchField");
const recommended = document.getElementById("recommended");
function openSearch() {
  searchbar.classList.add("active");
  backdrop.classList.add("active");

  setTimeout(() => {
    searchField.classList.add("show");
    recommended.classList.add("show");
  }, 150);
}

function closeSearch() {
  searchField.classList.remove("show");
  recommended.classList.remove("show");
  searchbar.classList.remove("active");
  backdrop.classList.remove("active");
}

function closeSidebar() {
  if (sideBar.classList.contains("active")) {
    sideBar.classList.remove("active");
    HambugerMenu.classList.remove("active");
    serachbarIcon.classList.remove("active");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
}

searchButton.addEventListener("click", (e) => {
  e.stopPropagation();
  openSearch();
});
serachbarIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  openSearch();
});
crossButton.addEventListener("click", () => closeSearch());
backdrop.addEventListener("click", () => closeSearch());

searchbar.addEventListener("click", (e) => e.stopPropagation());

document.addEventListener("click", () => closeSearch());

const HambugerMenu = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar-parent");
HambugerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  serachbarIcon.classList.toggle("active");
  HambugerMenu.classList.toggle("active");
  sideBar.classList.toggle("active");

  function LockScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }
  function UnlockScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
  if (sideBar.classList.contains("active")) {
    LockScroll();
  } else {
    UnlockScroll();
  }
});

sideBar.addEventListener("click", (e) => {
  e.stopPropagation();
});
document.addEventListener("click", () => {
  closeSidebar();
});
searchField.addEventListener("click", (e) => {
  e.stopPropagation();
});

function handleSearchInput() {
  const query = searchInput.value.trim();
  if (!query) {
    buildRecommendedList(defaultRecommendations);
    return;
  }
  const filtered = allProducts
    .filter((p) => p.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6);
  buildRecommendedList(filtered.length ? filtered : []);

  if (!filtered.length) {
    const noResult = document.createElement("div");
    noResult.className = "rec-item";
    noResult.textContent = "No products found";
    noResult.style.cssText = `
      padding: 10px 0;
      font-size: 15px;
      color: var(--color-text-secondary);
    `;
    recommendedDiv.appendChild(noResult);
  }
}

const allProducts = [
  "Natural and Synthetic Rubbers",
  "Carbon Black",
  "Zinc Oxide",
  "Rubber Process Oil [RPO] (Aromatic/ Paraffinic)",
  "Tire molds / Machinery",
  "Phthalic Anhydride [PA]",
  "Maleic Anhydride",
  "Pentaerythritol",
  "Glycerin (USP & TECH)",
  "Methyl Methacrylate (MMA)",
  "Unsaturated Polyester Resin",
  "Butyl Acetate",
  "Ethyl Acetate",
  "Methyl Acetate",
  "Butyl Acrylate",
  "Ethyl Acrylate",
  "Methyl Acrylate",
  "2-EHA",
  "VAM",
  "Styrene Monomer",
  "Benzyl Alcohol",
  "Gum Rosin",
  "Titanium Dioxide",
  "PTA",
  "Paint Additives",
  "LDPE (Low Density Polyethylene)",
  "HDPE (High Density Polyethylene)",
  "LLDPE (Linear Low Density Polyethylene)",
  "PVC (Polyvinyl Chloride)",
  "PP Homo (Homopolymer Polypropylene)",
  "PP Copo (Copolymer Polypropylene)",
  "GPPS (Crystal Polystyrene)",
  "HIPS (High Impact Polystyrene)",
  "PET (Polyethylene Terephthalate)",
  "ABS (Acrylonitrile Butadiene Styrene)",
  "POM (Polyacetal)",
  "EPS (Expandable Polystyrene)",
  "Dioctyl Phthalate [DOP]",
  "Dioctyl Terephthalate [DOTP]",
  "Diisononyl Phthalate [DINP]",
  "ESBO (Epoxidized Soybean Oil)",
  "TOTM (Trioctyl Trimellitate)",
  "2-Ethyl Hexanol",
  "Acetone",
  "Methanol",
  "Ethanol",
  "Isopropyl Alcohol (IPA)",
  "N-Butanol (NBA)",
  "Iso-butanol (IBA)",
  "Methyl Ethyl Ketone (MEK)",
  "Methyl Isobutyl Ketone (MIBK)",
  "Xylene",
  "Toluene",
  "Methylene Chloride",
  "Perchloroethylene",
  "Trichloroethylene",
  "Cyclohexanone",
  "Solvent Naphtha",
  "Varsol",
  "Phenol",
  "Monoethylene Glycol (MEG)",
  "Diethylene Glycol (DEG)",
  "Triethylene Glycol (TEG)",
  "PEG 200/400/600/4000/6000",
  "Propylene Glycol (MPG)",
  "Ethanolamine [MEA]",
  "Diethanolamine [DEA]",
  "Triethanolamine [TEA]",
  "Paraffin Wax",
  "Residue Wax / Foots Oil",
  "Polyethylene Wax",
  "White Spirit",
  "Bitumen",
  "Furnace Oil",
  "Base Oils",
  "Industrial & Automotive Lubricants",
  "Greases",
  "Formic Acid",
  "Sulfamic Acid",
  "Oxalic Acid",
  "Adipic Acid",
  "Benzoic Acid",
  "Sodium Formate",
  "Sodium Metabisulphite",
  "Sodium Hydrosulphite",
  "Sodium Gluconate",
  "Ammonium Chloride",
  "Magnesium Chloride",
  "Calcium Nitrate",
  "Hydrogen Peroxide",
  "White Mineral Oil",
  "N-Propyl Alcohol",
  "Sulfur Lumps / Granular",
  "Sulfuric Acid",
  "Hydrochloric Acid",
  "Nitric Acid",
  "Phosphoric Acid",
  "Acetic Acid (Glacial)",
  "Caustic Soda (Flakes/Pearls)",
  "Potassium Hydroxide",
  "Ammonia Solution",
  "TDI",
  "MDI",
  "Polyether Polyol",
  "Polymeric Polyol",
  "Silicone Surfactant",
  "Stannous Octoate",
  "Specialty Polyols",
  "TCCA",
  "Sodium Dichloroisocyanurate (SIDC)",
  "Calcium Hypochlorite",
  "PAC (Polyaluminum Chloride)",
  "LAB",
  "LABSA",
  "Sodium Lauryl Ether Sulfate (SLES)",
  "Soda Ash",
  "Sodium Sulphate",
  "STPP (Tech Grade)",
  "Zeolite",
  "Urea 46%",
  "Diammonium phosphate (DAP)",
  "Monoammonium phosphate (MAP)",
  "Muriate of Potash (MOP)",
  "Sulphate of Potash (SOP)",
  "NPKs",
  "Organic & Microbiological Fertilizers",
  "Biostimulants / Growth Stimulators",
];

const defaultRecommendations = [
  "Titanium Dioxide",
  "Isopropyl Alcohol (IPA)",
  "Carbon Black",
];

const searchInput = document.querySelector(".search-overlay input");
const recommendedDiv = document.getElementById("recommended");
const submitBtn = document.querySelector(".btn-submit");

function buildRecommendedList(items) {
  const existingItems = recommendedDiv.querySelectorAll(".rec-item");
  existingItems.forEach((el) => el.remove());

  items.forEach((name) => {
    const item = document.createElement("div");
    item.className = "rec-item";
    item.textContent = name;
    item.style.cssText = `
      padding: 10px 0;
      cursor: pointer;
      font-size: 15px;
      color: var(--color-text-primary);
      border-bottom: 0.5px solid var(--color-border-tertiary);
      transition: color 0.15s;
    `;
    item.addEventListener("mouseenter", () => {
      item.style.color = "var(--color-text-info)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.color = "var(--color-text-primary)";
    });
    item.addEventListener("click", () => {
      closeSearch();
      closeSidebar();
      navigateToProduct(name);
    });
    recommendedDiv.appendChild(item);
  });
}

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

function navigateToProduct(productName) {
  const allTextDivs = document.querySelectorAll(".product-text");
  const targetName = normalizeText(productName);
  for (const div of allTextDivs) {
    const itemName = normalizeText(div.textContent);
    if (
      itemName === targetName ||
      itemName.includes(targetName) ||
      targetName.includes(itemName)
    ) {
      const container = div.closest(".product-container");
      if (container) {
        container.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          container.style.outline = "none";
        }, 1800);
        return true;
      }
    }
  }
  return false;
}

function handleSearchInput() {
  const query = searchInput.value.trim();
  if (!query) {
    buildRecommendedList(defaultRecommendations);
    return;
  }
  const filtered = allProducts
    .filter((p) => p.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6);
  buildRecommendedList(filtered.length ? filtered : []);

  if (!filtered.length) {
    const noResult = document.createElement("div");
    noResult.className = "rec-item";
    noResult.textContent = "No products found";
    noResult.style.cssText = `
      padding: 10px 0;
      font-size: 15px;
      color: var(--color-text-secondary);
    `;
    recommendedDiv.appendChild(noResult);
  }
}

function handleSearchSubmit() {
  const query = searchInput.value.trim();
  if (!query) return;
  const match = allProducts.find((p) =>
    p.toLowerCase().includes(query.toLowerCase()),
  );
  if (match) {
    closeSearch();
    navigateToProduct(match);
  }
}

searchInput.addEventListener("input", handleSearchInput);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearchSubmit();
});
submitBtn.addEventListener("click", handleSearchSubmit);

const origOpenSearch = openSearch;
window.openSearch = function () {
  origOpenSearch();
  buildRecommendedList(defaultRecommendations);
  searchInput.value = "";
};
