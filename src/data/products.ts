export interface Product {
  id: string;
  model: string;
  subcategory: string;
  image?: string; // path under /photo/
  name: { "zh-TW": string; en: string };
  description: { "zh-TW": string; en: string };
  specs?: { "zh-TW": string; en: string };
  applications?: { "zh-TW": string; en: string };
  features?: { "zh-TW": string; en: string };
}

export interface SubCategory {
  id: string;
  parentId: string;
  name: { "zh-TW": string; en: string };
  description: { "zh-TW": string; en: string };
  icon: string;
}

export interface TopCategory {
  id: string;
  name: { "zh-TW": string; en: string };
  description: { "zh-TW": string; en: string };
  icon: string;
}

// ── 兩大類 ──
export const topCategories: TopCategory[] = [
  {
    id: "chemical",
    name: { "zh-TW": "化學材料", en: "Chemical Materials" },
    description: {
      "zh-TW": "專業化工原料、高溫離型劑、戊烷系列及保溫材料等完整產品線",
      en: "Full product line of professional chemical materials, high-temperature release agents, pentane series, and insulation materials",
    },
    icon: "⚗️",
  },
  {
    id: "equipment",
    name: { "zh-TW": "設備", en: "Equipment" },
    description: {
      "zh-TW": "霜淇淋機、萬能蒸烤箱、自動烤腸機、自動飲料機、製冰機等專業商用設備",
      en: "Professional commercial equipment including soft serve machines, combi ovens, sausage grills, beverage dispensers, and ice makers",
    },
    icon: "⚙️",
  },
];

// ── 子分類 ──
export const subCategories: SubCategory[] = [
  // 化學材料底下
  {
    id: "adm",
    parentId: "chemical",
    name: { "zh-TW": "ADM 系列", en: "ADM Series" },
    description: {
      "zh-TW": "高溫離型劑及氮化硼專業用劑，適用於各類高溫加工製程",
      en: "High-temperature release agents and boron nitride products for high-temperature processes",
    },
    icon: "🔬",
  },
  {
    id: "raw-chemical",
    parentId: "chemical",
    name: { "zh-TW": "化工原料", en: "Chemical Raw Materials" },
    description: {
      "zh-TW": "MDI、PUF系統料、PU清洗劑等聚氨酯相關原料",
      en: "MDI, PUF system materials, PU cleaners and other polyurethane-related materials",
    },
    icon: "🧪",
  },
  {
    id: "pentane",
    parentId: "chemical",
    name: { "zh-TW": "戊烷系列", en: "Pentane Series" },
    description: {
      "zh-TW": "正戊烷、異戊烷、環戊烷等各類戊烷產品",
      en: "N-pentane, isopentane, cyclopentane and other pentane products",
    },
    icon: "🧬",
  },
  {
    id: "insulation",
    parentId: "chemical",
    name: { "zh-TW": "保溫材料", en: "Insulation Materials" },
    description: {
      "zh-TW": "真空絕熱板、組合式冷藏冷凍庫板等保溫保冷解決方案",
      en: "Vacuum insulation panels, modular cold storage panels and thermal solutions",
    },
    icon: "❄️",
  },
  // 設備底下
  {
    id: "ice-cream",
    parentId: "equipment",
    name: { "zh-TW": "霜淇淋機", en: "Soft Serve Machines" },
    description: {
      "zh-TW": "商用霜淇淋機，適用於便利商店、餐飲業、連鎖門市",
      en: "Commercial soft serve machines for convenience stores, restaurants, and chain stores",
    },
    icon: "🍦",
  },
  {
    id: "combi-oven",
    parentId: "equipment",
    name: { "zh-TW": "萬能蒸烤箱", en: "Combi Ovens" },
    description: {
      "zh-TW": "結合蒸氣與熱風烘烤的專業萬能蒸烤箱",
      en: "Professional combi ovens combining steam and convection cooking",
    },
    icon: "🔥",
  },
  {
    id: "sausage-grill",
    parentId: "equipment",
    name: { "zh-TW": "自動烤腸機", en: "Automatic Sausage Grills" },
    description: {
      "zh-TW": "全自動烤腸機，適用於便利商店、小吃攤、夜市",
      en: "Fully automatic sausage grills for convenience stores and food stalls",
    },
    icon: "🌭",
  },
  {
    id: "beverage",
    parentId: "equipment",
    name: { "zh-TW": "自動飲料機", en: "Beverage Dispensers" },
    description: {
      "zh-TW": "自動飲料機，可調配多種冷熱飲品",
      en: "Automatic beverage dispensers for multiple hot and cold drinks",
    },
    icon: "🥤",
  },
  {
    id: "ice-maker",
    parentId: "equipment",
    name: { "zh-TW": "製冰機", en: "Ice Makers" },
    description: {
      "zh-TW": "商用製冰機，高產量、低能耗",
      en: "Commercial ice makers with high output and low energy consumption",
    },
    icon: "🧊",
  },
];

// ── 產品清單 ──
export const products: Product[] = [
  // ADM 系列
  {
    id: "adm-aw",
    model: "AW",
    subcategory: "adm",
    image: "/photo/adm-aw-3.jpg",
    name: {
      "zh-TW": "ADM 高溫離型劑",
      en: "ADM High-Temperature Release Agent",
    },
    description: {
      "zh-TW":
        "適用於高溫加工製程，例如高溫玻璃製程、鋁擠型製程及金屬加工相關產業。BN（氮化硼）用於鋁擠壓，在壓桿和鋁錠之間起潤滑作用，可延長模具壽命、降低每噸擠出成本、消除黑色痕跡。",
      en: "Suitable for high-temperature processing, including glass manufacturing, aluminum extrusion, and metal processing industries. BN (Boron Nitride) provides lubrication between the press rod and aluminum billet, extending mold life and reducing extrusion costs.",
    },
    specs: {
      "zh-TW": "規格：1加侖/桶｜成分：水、無機黏結劑、有機黏土、氮化硼",
      en: "Specification: 1 gallon/barrel | Components: Water, inorganic binder, organic clay, boron nitride",
    },
    features: {
      "zh-TW": "採用特殊設計攪拌器噴塗設備、手持型噴槍，低氣味、無黑煙",
      en: "Uses specially designed agitator spray equipment and handheld spray guns, low odor, no black smoke",
    },
  },
  {
    id: "adm-al",
    model: "AL",
    subcategory: "adm",
    image: "/photo/adm-al-3.jpg",
    name: {
      "zh-TW": "ADM 氮化硼專業用劑",
      en: "ADM Boron Nitride Professional Agent",
    },
    description: {
      "zh-TW":
        "常溫至高溫（900°C）潤滑、脫模及離型；保護基材防止氧化；增進物件導熱或散熱。適用於玻璃熱彎、鋁擠成型、鋁壓鑄成等相關行業。",
      en: "Lubrication, demolding and release from room temperature to high temperature (900°C); protects substrates from oxidation; enhances thermal conductivity.",
    },
    specs: {
      "zh-TW": "規格：550ml/罐，24罐/箱｜成分：氮化硼、黏土、丙酮、水及二甲基醚",
      en: "Specification: 550ml/can, 24 cans/box | Components: Boron nitride, clay, acetone, water, and dimethyl ether",
    },
    features: {
      "zh-TW": "高溫下潤滑不沾黏、噴塗層附著力佳、良好熱傳導係數、SGS認證、低氣味性",
      en: "Non-stick lubrication at high temperatures, excellent spray adhesion, good thermal conductivity, SGS certified, low odor",
    },
  },
  // 化工原料
  {
    id: "mdi-01",
    model: "MDI01",
    subcategory: "raw-chemical",
    name: { "zh-TW": "MDI（甲基二苯基二異氰酸酯）", en: "MDI (Methylene Diphenyl Diisocyanate)" },
    description: {
      "zh-TW": "聚氨酯（PU）原料，廣泛應用於保溫、隔熱、建材等產業。",
      en: "Polyurethane (PU) raw material, widely used in insulation and construction industries.",
    },
    specs: { "zh-TW": "規格：50加侖", en: "Specification: 50 gallons" },
  },
  {
    id: "puf-a001",
    model: "A001",
    subcategory: "raw-chemical",
    image: "/photo/puf-a001-3.jpg",
    name: { "zh-TW": "PUF 系統料 — 黑藥", en: "PUF System Material — Polyol (Black)" },
    description: {
      "zh-TW": "PU 發泡兩液系統之黑料組分。",
      en: "Black component of the PU foam two-component system.",
    },
  },
  {
    id: "puf-a002",
    model: "A002",
    subcategory: "raw-chemical",
    image: "/photo/puf-a002-3.jpg",
    name: { "zh-TW": "PUF 系統料 — 白藥", en: "PUF System Material — Isocyanate (White)" },
    description: {
      "zh-TW": "PU 發泡兩液系統之白料組分。",
      en: "White component of the PU foam two-component system.",
    },
  },
  {
    id: "pu-cleaner",
    model: "F103",
    subcategory: "raw-chemical",
    name: { "zh-TW": "PU 清洗劑", en: "PU Cleaner" },
    description: {
      "zh-TW": "聚氨酯、彈性體軟化溶解洗淨用清潔劑。",
      en: "Cleaner for softening, dissolving, and cleaning polyurethane and elastomers.",
    },
  },
  // 戊烷系列
  {
    id: "n-pentane",
    model: "001",
    subcategory: "pentane",
    name: { "zh-TW": "正戊烷", en: "N-Pentane" },
    description: {
      "zh-TW": "高純度正戊烷，廣泛應用於發泡劑及溶劑等用途。",
      en: "High-purity n-pentane, widely used as a blowing agent and solvent.",
    },
  },
  {
    id: "isopentane",
    model: "002",
    subcategory: "pentane",
    name: { "zh-TW": "異戊烷", en: "Isopentane" },
    description: {
      "zh-TW": "高純度異戊烷，適用於發泡及製冷等應用。",
      en: "High-purity isopentane, suitable for foaming and refrigeration applications.",
    },
  },
  {
    id: "cyclopentane",
    model: "003",
    subcategory: "pentane",
    name: { "zh-TW": "環戊烷", en: "Cyclopentane" },
    description: {
      "zh-TW": "環保型發泡劑，替代傳統氟利昂，廣泛用於冰箱保溫層發泡。",
      en: "Eco-friendly blowing agent replacing traditional Freon, widely used in refrigerator insulation foaming.",
    },
  },
  {
    id: "cyclo-isopentane",
    model: "004",
    subcategory: "pentane",
    name: { "zh-TW": "環異戊烷", en: "Cyclo-Isopentane" },
    description: {
      "zh-TW": "特殊配方環異戊烷產品。",
      en: "Special formulation cyclo-isopentane product.",
    },
  },
  // 保溫材料
  {
    id: "vip",
    model: "VIP001",
    subcategory: "insulation",
    image: "/photo/vip-3.jpg",
    name: { "zh-TW": "真空絕熱板（VIP）", en: "Vacuum Insulation Panel (VIP)" },
    description: {
      "zh-TW":
        "適合冷藏冷凍（冰箱、冰櫃、冷藏車、冷庫、儲冰槽）及建築防火建材等產業。內部真空、保溫性佳；玻璃纖維耐熱抗腐蝕；厚度僅普通材料七分之一，保溫效果為普通保溫材料7~10倍。",
      en: "Suitable for cold storage and fire-resistant building materials. Internal vacuum with excellent insulation; thickness is only 1/7 of conventional materials with 7-10x insulation performance.",
    },
    specs: {
      "zh-TW": "長方形/正圓形，可客製化｜尺寸：長80~8000mm、寬50~1000mm、高6~35mm",
      en: "Rectangular/circular, customizable | Dimensions: L 80-8000mm, W 50-1000mm, H 6-35mm",
    },
    features: {
      "zh-TW": "芯部隔熱材料（玻璃纖維）、氣體吸附材料、高阻隔性複合薄膜結構",
      en: "Core insulation (fiberglass), gas adsorption material, high-barrier composite film structure",
    },
  },
  {
    id: "cold-storage",
    model: "C0000",
    subcategory: "insulation",
    image: "/photo/cold-storage-2.jpg",
    name: { "zh-TW": "組合式冷藏冷凍庫板", en: "Modular Cold Storage Panels" },
    description: {
      "zh-TW":
        "內政部營建署認可新技術新工法。適用於食品處理、農藥、醫學、製藥等各行業。可擴大縮小、方便遷移重組、增強冷空氣對流循環。",
      en: "Approved as new technology. Suitable for food processing, agriculture, medical, and pharmaceutical industries. Expandable, easily relocated and reconfigured.",
    },
    specs: {
      "zh-TW":
        "面板材質：鍍鋅烤漆鋼板/鹽化鋼板/304不繡鋼板/彩紋鋼板｜厚度：60mm(0~20°C)、100mm(0~-25°C)、150mm(-25~-45°C)",
      en: "Panel: Galvanized/Salt-resistant/304 Stainless/Pattern steel | Thickness: 60mm(0-20°C), 100mm(0 to -25°C), 150mm(-25 to -45°C)",
    },
    features: {
      "zh-TW": "密度>42 kg/m²、導熱係數0.018~0.020 K/Cal、抗拉/抗剪強度>90 KPa、適用溫度+60~-120°C",
      en: "Density >42 kg/m², thermal conductivity 0.018-0.020 K/Cal, tensile/shear strength >90 KPa, operating temp +60 to -120°C",
    },
  },
  // 設備
  {
    id: "soft-serve",
    model: "EQ-SS01",
    subcategory: "ice-cream",
    name: { "zh-TW": "霜淇淋機", en: "Soft Serve Ice Cream Machine" },
    description: {
      "zh-TW": "商用霜淇淋機，適用於便利商店、餐飲業、連鎖門市等場所。高效製冷系統，操作簡便，清潔維護方便。",
      en: "Commercial soft serve machine for convenience stores, restaurants, and chain stores. High-efficiency cooling system, easy operation.",
    },
  },
  {
    id: "combi-oven-01",
    model: "EQ-CO01",
    subcategory: "combi-oven",
    name: { "zh-TW": "萬能蒸烤箱", en: "Combi Oven" },
    description: {
      "zh-TW": "結合蒸氣與熱風烘烤功能的專業萬能蒸烤箱，一機多用，適用於飯店、中央廚房、烘焙業等。精準溫控，節能高效。",
      en: "Professional combi oven combining steam and convection cooking. Multi-functional, suitable for hotels, central kitchens, and bakeries.",
    },
  },
  {
    id: "sausage-grill-01",
    model: "EQ-SG01",
    subcategory: "sausage-grill",
    name: { "zh-TW": "自動烤腸機", en: "Automatic Sausage Grill" },
    description: {
      "zh-TW": "全自動烤腸機，適用於便利商店、小吃攤、夜市等。均勻加熱，自動翻轉，操作簡便。",
      en: "Fully automatic sausage grill for convenience stores, food stalls, and night markets. Even heating, automatic rotation.",
    },
  },
  {
    id: "beverage-dispenser",
    model: "EQ-BD01",
    subcategory: "beverage",
    name: { "zh-TW": "自動飲料機", en: "Automatic Beverage Dispenser" },
    description: {
      "zh-TW": "自動飲料機，可調配多種冷熱飲品，適用於餐飲業、辦公室、商業空間等。快速出杯，維護簡便。",
      en: "Automatic beverage dispenser for multiple hot and cold drinks. Suitable for restaurants, offices, and commercial spaces.",
    },
  },
  {
    id: "ice-maker-01",
    model: "EQ-IM01",
    subcategory: "ice-maker",
    name: { "zh-TW": "製冰機", en: "Ice Maker" },
    description: {
      "zh-TW": "商用製冰機，高產量、低能耗，適用於餐飲業、飲料店、超市等場所。多種冰型可選，衛生可靠。",
      en: "Commercial ice maker with high output and low energy consumption. Multiple ice types available, hygienic and reliable.",
    },
  },
];

export function getSubCategoriesByParent(parentId: string): SubCategory[] {
  return subCategories.filter((s) => s.parentId === parentId);
}

export function getSubCategoryById(id: string): SubCategory | undefined {
  return subCategories.find((s) => s.id === id);
}

export function getTopCategoryById(id: string): TopCategory | undefined {
  return topCategories.find((c) => c.id === id);
}

export function getProductsBySubCategory(subCategoryId: string): Product[] {
  return products.filter((p) => p.subcategory === subCategoryId);
}

export function getParentOfSubCategory(subId: string): TopCategory | undefined {
  const sub = getSubCategoryById(subId);
  if (!sub) return undefined;
  return getTopCategoryById(sub.parentId);
}
