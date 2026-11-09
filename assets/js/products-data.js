/**
 * KAVIRA - Indian Khadi & Handloom Lifestyle Store
 * Comprehensive Product Catalogue Data
 * 8 Categories + 3 Featured Collections
 * All products have unique imagery, regional origin, craft details, and accurate specs.
 */

const KAVIRA_PRODUCTS = [
  // ==========================================
  // CATEGORY 1: SAREES
  // ==========================================
  {
    id: "sar-01",
    name: "Crimson & Muted Gold Kanchipuram Pure Silk Saree",
    category: "sarees",
    categoryName: "Sarees",
    subcategory: "Kanchipuram Sarees",
    price: 18450,
    originalPrice: 22000,
    rating: 4.9,
    reviewsCount: 38,
    isNew: true,
    isBestSeller: true,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeOLiYyDa4nd0FQVK_sJ1dkte7T3nHTGtKleOzANn3Q&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeOLiYyDa4nd0FQVK_sJ1dkte7T3nHTGtKleOzANn3Q&s=10",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "100% Pure Mulberry Silk & Zari",
    origin: "Kanchipuram, Tamil Nadu",
    weave: "Korvai Handloom Technique",
    sareeLength: "6.3 Metres (includes 0.8m unstitched contrast blouse)",
    colors: ["Crimson Red", "Temple Gold", "Deep Maroon"],
    description: "Handcrafted over 28 days by master weaver families in Kanchipuram. Features intricate peacock and temple gopuram zari motifs across a rich crimson pure silk body with an ornate pallu."
  },
  {
    id: "sar-02",
    name: "Earthy Jamdani Handspun Khadi Saree",
    category: "sarees",
    categoryName: "Sarees",
    subcategory: "Jamdani Sarees",
    price: 8900,
    originalPrice: 10500,
    rating: 4.8,
    reviewsCount: 29,
    isNew: true,
    isBestSeller: false,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlj2dfCL4Ym2fYxE9fsBSqwZNshU70ijrCqGJUVqMBWhdSbv8xEcmfawsGqeZjmdLqhvzXNN8AM-6rqykcxmrtp4qCPeYWlm8BfkyNoRCHsiNlNpeIIUkb0w&usqp=CAc",
    gallery: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlj2dfCL4Ym2fYxE9fsBSqwZNshU70ijrCqGJUVqMBWhdSbv8xEcmfawsGqeZjmdLqhvzXNN8AM-6rqykcxmrtp4qCPeYWlm8BfkyNoRCHsiNlNpeIIUkb0w&usqp=CAc",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "100-count Handspun Organic Khadi Cotton",
    origin: "Fulia & Nadia, West Bengal",
    weave: "Discontinuous Weft Handloom Jamdani",
    sareeLength: "5.5 Metres (No Blouse Piece, pure featherweight drape)",
    colors: ["Natural Ivory", "Charcoal Indigo", "Terracotta"],
    description: "Featherlight handspun khadi saree woven on traditional pit looms. Motifs of geometric florals are placed individually by hand with bamboo shuttles."
  },
  {
    id: "sar-03",
    name: "Royal Banarasi Katan Silk Floral Jaal Saree",
    category: "sarees",
    categoryName: "Sarees",
    subcategory: "Banarasi Sarees",
    price: 24500,
    originalPrice: 28000,
    rating: 5.0,
    reviewsCount: 52,
    isNew: false,
    isBestSeller: true,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGLsC6FVe8Tm4DfqjP4CWla_L7d6D-3PRZ5DrRCEr8NMsDVq2_YRH-KC9qUizQcpZYPN9zN9VzwcUAWs6QSoDW-kOwqYX3IYXP2LBGF63O-qYBOR18FB96Hg&usqp=CAc",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGLsC6FVe8Tm4DfqjP4CWla_L7d6D-3PRZ5DrRCEr8NMsDVq2_YRH-KC9qUizQcpZYPN9zN9VzwcUAWs6QSoDW-kOwqYX3IYXP2LBGF63O-qYBOR18FB96Hg&usqp=CAc",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "Pure Katan Silk with Fine Gold Zari",
    origin: "Varanasi, Uttar Pradesh",
    weave: "Kadwa Brocade Handloom",
    sareeLength: "6.4 Metres (includes 0.8m brocade blouse piece)",
    colors: ["Rani Pink", "Emerald Green", "Royal Navy"],
    description: "An heirloom Banarasi masterpiece. Woven with the meticulous Kadwa technique where each leaf motif is individually woven with metallic gold zari without loose floating threads at back."
  },
  {
    id: "sar-04",
    name: "Natural Indigo Sambalpuri Ikat Cotton Saree",
    category: "sarees",
    categoryName: "Sarees",
    subcategory: "Sambalpuri Sarees",
    price: 6400,
    originalPrice: 7500,
    rating: 4.7,
    reviewsCount: 19,
    isNew: false,
    isBestSeller: false,
    isFestive: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "Double Ikat Pure Handloom Cotton",
    origin: "Bargarh & Sambalpur, Odisha",
    weave: "Bandhakala Tie-Dye Handloom",
    sareeLength: "6.2 Metres (includes matching running blouse)",
    colors: ["Indigo Blue", "Madder Red", "Ochre Yellow"],
    description: "Woven using Odisha's renowned double ikat Bandha technique where warp and weft are tied and dyed before weaving to create soft curvilinear temple and conch motifs."
  },

  // ==========================================
  // CATEGORY 2: WOMEN'S CLOTHING
  // ==========================================
  {
    id: "wom-01",
    name: "Kalamkari Handblock Print Khadi Cotton Kurti",
    category: "womens-clothing",
    categoryName: "Women's Clothing",
    subcategory: "Handloom Kurtis",
    price: 3450,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 44,
    isNew: true,
    isBestSeller: true,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRSLZIAUbn1l6CVWwTc-YfzGK83Z7m1TqsnZ6u-wcDQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRSLZIAUbn1l6CVWwTc-YfzGK83Z7m1TqsnZ6u-wcDQ&s=10",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "Pure Organic Handspun Khadi Cotton",
    origin: "Machilipatnam, Andhra Pradesh",
    weave: "Handspun Yarn & Natural Dye Handblock Print",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Terracotta Rust", "Forest Green", "Indigo"],
    description: "Breathable A-line kurta silhouette crafted from breezy handspun khadi cloth. Printed with centuries-old tree-of-life motifs using natural iron and alum mordant dyes."
  },
  {
    id: "wom-02",
    name: "Chanderi Silk Flared Anarkali Tunic with Zari Border",
    category: "womens-clothing",
    categoryName: "Women's Clothing",
    subcategory: "Tunics",
    price: 5800,
    originalPrice: 6900,
    rating: 4.8,
    reviewsCount: 31,
    isNew: false,
    isBestSeller: true,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjeUQlnkwAJ5BJJwlSv0rO81H0wzmd81zQxmF67L3zzAhSQGh_pe_ABw08zzbXvPozeLGR9OtHEFa_z530_U_lmEFrr2R5qY0jPTy0xE1qaeaGpbJFpPJQuGhP&usqp=CAc",
    gallery: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjeUQlnkwAJ5BJJwlSv0rO81H0wzmd81zQxmF67L3zzAhSQGh_pe_ABw08zzbXvPozeLGR9OtHEFa_z530_U_lmEFrr2R5qY0jPTy0xE1qaeaGpbJFpPJQuGhP&usqp=CAc",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "Chanderi Silk-Cotton Blend with Fine Zari Edge",
    origin: "Chanderi, Madhya Pradesh",
    weave: "Traditional Chanderi Jacquard Weft",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Muted Gold Ivory", "Sage Green", "Petal Peach"],
    description: "Translucent sheen with featherweight comfort. Detailed with hand-embroidered neckline and subtle golden zari selvage along the flared hemline."
  },
  {
    id: "wom-03",
    name: "Handwoven Linen Wrap Dress with Hand-Embroidered Pockets",
    category: "womens-clothing",
    categoryName: "Women's Clothing",
    subcategory: "Handwoven Dresses",
    price: 4950,
    originalPrice: 5800,
    rating: 4.7,
    reviewsCount: 22,
    isNew: true,
    isBestSeller: false,
    isFestive: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "60-Lea European Flax Handwoven in Bengal",
    origin: "Phulia, West Bengal",
    weave: "Plain Handloom Open Weave Linen",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Earthy Oatmeal", "Terracotta Ochre", "Olive Khaki"],
    description: "Contemporary tailored wrap dress celebrating handloom linen's natural drape and texture. Features side pockets with delicate Kantha thread work."
  },
  {
    id: "wom-04",
    name: "Pochampally Ikat Handspun Silk Dupatta & Stole",
    category: "womens-clothing",
    categoryName: "Women's Clothing",
    subcategory: "Dupattas",
    price: 3800,
    originalPrice: 4500,
    rating: 4.9,
    reviewsCount: 17,
    isNew: false,
    isBestSeller: false,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTG-tYDK8ih8yuslkde85P44CDRno_3rXu6YjZ1sy9VJa4nboWuekNfey93zABuKwtUD9OARxU5JR9MN-2Mi7G5RzRSvDbVZtv75F2qsKbPAqMsjFmdB6n52Q&usqp=CAc",
    gallery: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTG-tYDK8ih8yuslkde85P44CDRno_3rXu6YjZ1sy9VJa4nboWuekNfey93zABuKwtUD9OARxU5JR9MN-2Mi7G5RzRSvDbVZtv75F2qsKbPAqMsjFmdB6n52Q&usqp=CAc",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "100% Pure Mulberry Handloom Silk",
    origin: "Pochampally, Telangana",
    weave: "Geometric Double Ikat",
    sizes: ["2.5m x 0.9m"],
    colors: ["Ruby & Mustard", "Teal & Gold", "Charcoal & Ecru"],
    description: "Dynamic geometric ikat patterns designed on Pochampally frame looms. Features tasseled hand-knotted borders that lift any ethnic ensemble."
  },

  // ==========================================
  // CATEGORY 3: MEN'S CLOTHING
  // ==========================================
  {
    id: "men-01",
    name: "Classic Khadi Cotton Nehru Jacket with Coconut Shell Buttons",
    category: "mens-clothing",
    categoryName: "Men's Clothing",
    subcategory: "Nehru Jackets",
    price: 4200,
    originalPrice: 4999,
    rating: 4.9,
    reviewsCount: 65,
    isNew: false,
    isBestSeller: true,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuBdeD6X0RDG4lO_YDppdDeLmZLbOaL8DeYxXoVj-kyCDZXZCgsKrLPrvmCFBeNWOVccJklcg-l_9AFgKdAeGY-h8T0bHxXqCpCNavj5RmNuAIf8GbXW0ddA&usqp=CAc",
    gallery: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuBdeD6X0RDG4lO_YDppdDeLmZLbOaL8DeYxXoVj-kyCDZXZCgsKrLPrvmCFBeNWOVccJklcg-l_9AFgKdAeGY-h8T0bHxXqCpCNavj5RmNuAIf8GbXW0ddA&usqp=CAc",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "High-density Handspun Khadi Cotton Canvas",
    origin: "Murshidabad, West Bengal",
    weave: "Structured Handloom Twill Weave",
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Earth Charcoal", "Raw Beige", "Forest Moss", "Midnight Indigo"],
    description: "Sleek mandarin collar waistcoat tailored with organic cotton lining and polished coconut shell buttons. Perfect for layered wedding or heritage festive styling."
  },
  {
    id: "men-02",
    name: "Handspun Khadi Short Kurta with Wooden Buttons",
    category: "mens-clothing",
    categoryName: "Men's Clothing",
    subcategory: "Traditional Kurtas",
    price: 2850,
    originalPrice: 3400,
    rating: 4.8,
    reviewsCount: 47,
    isNew: true,
    isBestSeller: true,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2m_P9AkzqMHhkkdjyyO1i4dNU44TB1AdAF5okCG1Ug&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2m_P9AkzqMHhkkdjyyO1i4dNU44TB1AdAF5okCG1Ug&s=10",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "Charkha-Spun 60s Count Desi Cotton",
    origin: "Wardha, Maharashtra",
    weave: "Open Textured Khadi Weave",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Warm Ivory", "Sunbaked Sand", "Muted Terracotta"],
    description: "An everyday luxury piece honoring Gandhian spinning craft. Breathable, sweat-wicking, with roll-up sleeve tabs and relaxed comfort-fit silhouette."
  },
  {
    id: "men-03",
    name: "Pure Handloom Linen Mandarin Collar Shirt",
    category: "mens-clothing",
    categoryName: "Men's Clothing",
    subcategory: "Linen Shirts",
    price: 3600,
    originalPrice: 4200,
    rating: 4.7,
    reviewsCount: 33,
    isNew: true,
    isBestSeller: false,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbiE7Tx4rYvKrI6_VIuxJ0UVIRskXiV9S4evb0wtisfw&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbiE7Tx4rYvKrI6_VIuxJ0UVIRskXiV9S4evb0wtisfw&s=10",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "Pure 100% Handloom Linen",
    origin: "Bhagalpur, Bihar",
    weave: "Yarn-dyed Slub Weave",
    sizes: ["38", "40", "42", "44"],
    colors: ["Natural Slate", "Sage Green", "Crisp Linen White"],
    description: "Woven on pedal looms in Bhagalpur. Naturally thermoregulating linen fabric with a subtle handloom slub texture, chest welt pocket, and curved hem."
  },
  {
    id: "men-04",
    name: "Traditional Kerala Kasavu Handloom Dhoti & Angavastram Set",
    category: "mens-clothing",
    categoryName: "Men's Clothing",
    subcategory: "Dhoti & Veshti",
    price: 2450,
    originalPrice: 2900,
    rating: 4.9,
    reviewsCount: 28,
    isNew: false,
    isBestSeller: false,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5zudKLmqYlO7YxH92LLN9iyw5eKQOoocX4ZUaNoedA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5zudKLmqYlO7YxH92LLN9iyw5eKQOoocX4ZUaNoedA&s=10",
      "https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "100% Unbleached Kerala Handloom Cotton with Gold Border",
    origin: "Balaramapuram, Kerala",
    weave: "Kasavu Traditional Gold Border Handloom",
    sizes: ["Standard Dhoti (4.0m) + Angavastram (2.0m)"],
    colors: ["Off-White with Gold Zari"],
    description: "Authentic ceremonial attire from the historic weaving town of Balaramapuram. Soft unbleached pure cotton bordered with delicate 1-inch golden kasavu thread."
  },

  // ==========================================
  // CATEGORY 4: FABRICS & MATERIALS
  // ==========================================
  {
    id: "fab-01",
    name: "Pure Handspun Organic Khadi Cotton Fabric (Per Metre)",
    category: "fabrics-materials",
    categoryName: "Fabrics & Materials",
    subcategory: "Khadi Cotton Fabrics",
    price: 680,
    originalPrice: 850,
    rating: 4.9,
    reviewsCount: 89,
    isNew: false,
    isBestSeller: true,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAcRG2lB7uILsEknaET1aw_iq-p6pxUueuw2SosoOwg&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAcRG2lB7uILsEknaET1aw_iq-p6pxUueuw2SosoOwg&s=10",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "100% Hand-Spun Charkha Cotton",
    origin: "Ahmedabad, Gujarat",
    weave: "Dense Plain Handloom Weave",
    dimensions: "Width: 44 inches (112 cm) | Sold by the Metre",
    colors: ["Natural Raw Cotton", "Kora Cream", "Natural Khadi White"],
    description: "Chemical-free unbleached handspun khadi cloth. Highly durable, softens with every wash, and breathes effortlessly. Ideal for shirts, kurtas, jackets, and home craft."
  },
  {
    id: "fab-02",
    name: "Natural Indigo Ajrakh Handblock Modal Silk Fabric",
    category: "fabrics-materials",
    categoryName: "Fabrics & Materials",
    subcategory: "Natural-Dyed Fabrics",
    price: 1250,
    originalPrice: 1500,
    rating: 4.9,
    reviewsCount: 42,
    isNew: true,
    isBestSeller: true,
    isFestive: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1778084356053-40103587d24f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1778084356053-40103587d24f?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "Eco-dyed Semi-Silk with Natural Indigo & Madder",
    origin: "Dhamadka & Ajrakhpur, Kutch, Gujarat",
    weave: "16-Stage Resist Block Print on Fine Weave",
    dimensions: "Width: 44 inches (112 cm) | Sold by the Metre",
    colors: ["Indigo & Madder Red", "Kutch Moss", "Earthy Black & Cream"],
    description: "Sixteen-stage ancient Ajrakh printing process requiring river washings, gum resists, and natural vegetable dyes. Lustrous silky touch and hypnotic geometric symmetry."
  },
  {
    id: "fab-03",
    name: "Wild Tussar Silk Raw Handloom Yardage",
    category: "fabrics-materials",
    categoryName: "Fabrics & Materials",
    subcategory: "Tussar Silk",
    price: 1850,
    originalPrice: 2200,
    rating: 4.8,
    reviewsCount: 30,
    isNew: false,
    isBestSeller: false,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJbWxkX6MV9Lh8RSRS-QDDAtkwOg0zgZQPcv4Aj2HeQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJbWxkX6MV9Lh8RSRS-QDDAtkwOg0zgZQPcv4Aj2HeQ&s=10",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "Pure Forest Tussar (Kosa) Silk",
    origin: "Champa, Chhattisgarh",
    weave: "Textured Ghicha Handloom Weft",
    dimensions: "Width: 46 inches (117 cm) | Sold by the Metre",
    colors: ["Raw Golden Honey", "Copper Tan", "Unglazed Bronze"],
    description: "Reeled from wild forest cocoons by tribal weavers. Known for its distinct textured handfeel, rich natural gold sheen, and thermal adaptability in both heat and cold."
  },
  {
    id: "fab-04",
    name: "Chanderi Cotton-Silk Sheer Jacquard Fabric",
    category: "fabrics-materials",
    categoryName: "Fabrics & Materials",
    subcategory: "Chanderi Fabrics",
    price: 950,
    originalPrice: 1150,
    rating: 4.7,
    reviewsCount: 25,
    isNew: true,
    isBestSeller: false,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsNqdwePb82K1Aa8BI1rYbCP_b0ZF7skgchf1Xo-SHQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsNqdwePb82K1Aa8BI1rYbCP_b0ZF7skgchf1Xo-SHQ&s=10",
      "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "30% Degummed Silk, 70% Combed Cotton",
    origin: "Chanderi, Ashoknagar, MP",
    weave: "Gossamer Sheer Plain Weave with Zari Buti",
    dimensions: "Width: 44 inches (112 cm) | Sold by the Metre",
    colors: ["Ivory Gold Buti", "Blush Pink", "Seafoam Green"],
    description: "Ethereal gossamer fabric celebrated since Mughal times for its transparent lightness. Woven with tiny metallic gold motifs for statement blouses, dupattas, or curtains."
  },

  // ==========================================
  // CATEGORY 5: HOME & LIVING
  // ==========================================
  {
    id: "hom-01",
    name: "Handwoven Heavy Cotton King Bedsheet with Pillow Shams",
    category: "home-living",
    categoryName: "Home & Living",
    subcategory: "Handloom Bedsheets",
    price: 3850,
    originalPrice: 4600,
    rating: 4.9,
    reviewsCount: 71,
    isNew: false,
    isBestSeller: true,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVfCByU7CoDZPB6IKfweYqacoJ_dkRvXcixVlBsULuw&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVfCByU7CoDZPB6IKfweYqacoJ_dkRvXcixVlBsULuw&s=10"
    ],
    fabric: "100% Heavy Count Handwoven Organic Cotton",
    origin: "Panipat & Solapur, India",
    weave: "Thick Handloom Basket Weave",
    dimensions: "Bedsheet: 108 x 108 inches | 2 Pillow Shams: 18 x 28 inches",
    colors: ["Warm Oatmeal & Rust", "Sage & Sand", "Indigo & Cream"],
    description: "Substantial, weighty handloom cotton bedding that stays wrinkle-resistant and crisp on the bed. Hand-knotted tassels along the edge and matching flanged pillow covers."
  },
  {
    id: "hom-02",
    name: "Set of 3 Handspun Khadi Textured Cushion Covers",
    category: "home-living",
    categoryName: "Home & Living",
    subcategory: "Cushion Covers",
    price: 1650,
    originalPrice: 2100,
    rating: 4.8,
    reviewsCount: 54,
    isNew: true,
    isBestSeller: true,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Y1ZZXfJMid7CSUik55EQGbEm6ir6vJTps3-RFO-kJA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Y1ZZXfJMid7CSUik55EQGbEm6ir6vJTps3-RFO-kJA&s=10"
    ],
    fabric: "Slub Khadi Cotton with Jute Thread Detailing",
    origin: "Kutch, Gujarat",
    weave: "Extra Weft Geometric Handloom",
    dimensions: "16 x 16 inches (40 x 40 cm) each",
    colors: ["Terracotta & Beige", "Earthy Charcoal", "Mustard Ochre"],
    description: "Tactile tribal textures woven by master craftswomen. Hidden zipper closure, premium inner lining, and natural stone-washed feel."
  },
  {
    id: "hom-03",
    name: "Dhurrie Handwoven Wool & Cotton Living Room Rug",
    category: "home-living",
    categoryName: "Home & Living",
    subcategory: "Handwoven Rugs",
    price: 6500,
    originalPrice: 7800,
    rating: 4.9,
    reviewsCount: 39,
    isNew: false,
    isBestSeller: false,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSb9PVMLFRrF7MBViMfs-caphih7euop87cdyUnN6EtUBdWiv2otOfFJtuGJ4yaoEKAP3Wik1AnbNWU8kCw8F_jly7rjvultGwfM-0jzYYu&usqp=CAc",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSb9PVMLFRrF7MBViMfs-caphih7euop87cdyUnN6EtUBdWiv2otOfFJtuGJ4yaoEKAP3Wik1AnbNWU8kCw8F_jly7rjvultGwfM-0jzYYu&usqp=CAc"
    ],
    fabric: "70% Bikaner Wool, 30% Pure Cotton Warp",
    origin: "Salawas, Jodhpur, Rajasthan",
    weave: "Panja Flatweave Handloom",
    dimensions: "4 x 6 Feet (120 x 180 cm)",
    colors: ["Desert Terracotta & Slate", "Indigo Geometric", "Olive Neutral"],
    description: "Reversible flatweave panja dhurrie made on horizontal ground looms. Thick, hard-wearing, dyed with plant pigments, and bordered with braided fringe."
  },
  {
    id: "hom-04",
    name: "Waffle Weave Handloom Bath Towel & Hand Towel Set",
    category: "home-living",
    categoryName: "Home & Living",
    subcategory: "Handloom Towels",
    price: 1450,
    originalPrice: 1800,
    rating: 4.8,
    reviewsCount: 60,
    isNew: true,
    isBestSeller: false,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS203-nf1fRxanXNBoiBImVoMvwxwZHi5M13yRZYGW6SQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS203-nf1fRxanXNBoiBImVoMvwxwZHi5M13yRZYGW6SQ&s=10"
    ],
    fabric: "100% Unbleached Indian Organic Cotton",
    origin: "Kannur, Kerala",
    weave: "Honeycomb Waffle Handloom Weave",
    dimensions: "Bath Towel: 30 x 60 inches | Hand Towel: 16 x 26 inches",
    colors: ["Natural Ecru", "Clay Earth", "Sage Pine"],
    description: "Ultra-absorbent, lightweight, and quick drying. Handloom waffle honeycomb texture gently exfoliates skin and takes up half the space of conventional terry towels."
  },

  // ==========================================
  // CATEGORY 6: BAGS & ACCESSORIES
  // ==========================================
  {
    id: "bag-01",
    name: "Heritage Ikat & Canvas Everyday Handwoven Tote Bag",
    category: "bags-accessories",
    categoryName: "Bags & Accessories",
    subcategory: "Handwoven Tote Bags",
    price: 1850,
    originalPrice: 2300,
    rating: 4.9,
    reviewsCount: 56,
    isNew: true,
    isBestSeller: true,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQa5KAgHp7oOOwMH_yaGjucD7fly0k0WUl74EwP7PYjBf05vTXUC0ldr8DSF6MEcbDo2x9xwiSU1zQlNeXqEriW1I2ndT47tUpKo9Q8N8o&usqp=CAc",
    gallery: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQa5KAgHp7oOOwMH_yaGjucD7fly0k0WUl74EwP7PYjBf05vTXUC0ldr8DSF6MEcbDo2x9xwiSU1zQlNeXqEriW1I2ndT47tUpKo9Q8N8o&usqp=CAc"
    ],
    fabric: "Double Ikat Handloom Cotton with Heavy Canvas Base",
    origin: "Pochampally & Hyderabad",
    weave: "Structured Handloom Double Weave",
    dimensions: "15 x 14 x 5 inches | 10-inch Handle Drop",
    colors: ["Indigo Chevron", "Rust Terracotta", "Charcoal Monochrome"],
    description: "Spacious everyday companion with reinforced vegetable-tanned vegan leather handles, antique brass YKK zip closure, padded laptop compartment, and inner slip pockets."
  },
  {
    id: "bag-02",
    name: "Handwoven Raw Silk Envelope Clutch with Zari Detailing",
    category: "bags-accessories",
    categoryName: "Bags & Accessories",
    subcategory: "Clutches",
    price: 1650,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 34,
    isNew: false,
    isBestSeller: false,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0dP1tS6QZ7Q_GgJPLytuMn_tJJoFrtUt4z9bjNgM-A&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0dP1tS6QZ7Q_GgJPLytuMn_tJJoFrtUt4z9bjNgM-A&s=10"
    ],
    fabric: "Handwoven Tussar Silk with Fine Golden Zari Flap",
    origin: "Bhagalpur, Bihar",
    weave: "Raw Silk Plain Weave with Metallic Zari Piping",
    dimensions: "10 x 6 x 1.5 inches",
    colors: ["Antique Gold", "Ruby Red", "Forest Green"],
    description: "An elegant festive accessory designed with magnetic snap closure, detachable gold-tone metal shoulder chain, and satin interior lining with card slots."
  },
  {
    id: "bag-03",
    name: "Kashmiri Hand-Embroidered Pashmina Silk Scarf",
    category: "bags-accessories",
    categoryName: "Bags & Accessories",
    subcategory: "Scarves",
    price: 4500,
    originalPrice: 5200,
    rating: 5.0,
    reviewsCount: 41,
    isNew: false,
    isBestSeller: true,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQU3KhPs2IjQT5sA9LZqCOmCY3mW82-AXUwfGHS9gfItPdue-fe0E_IbBkUlJp33QcEPB6iK2gpRj8Ft8YI3Bkzo7tYRKHkr7SHL16TGn0FlRFRU9r6hvGl4A&usqp=CAc",
    gallery: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQU3KhPs2IjQT5sA9LZqCOmCY3mW82-AXUwfGHS9gfItPdue-fe0E_IbBkUlJp33QcEPB6iK2gpRj8Ft8YI3Bkzo7tYRKHkr7SHL16TGn0FlRFRU9r6hvGl4A&usqp=CAc"
    ],
    fabric: "70% Fine Merino Cashmere Wool, 30% Handloom Silk",
    origin: "Srinagar, Kashmir",
    weave: "Sozni Needle Embroidery on Handloom Stole",
    dimensions: "78 x 28 inches (200 x 70 cm)",
    colors: ["Champagne Gold", "Crimson Maroon", "Midnight Black"],
    description: "Finely spun gossamer warm shawl detailed with painstaking Sozni needlework by master Kashmiri craftsmen along the scalloped borders."
  },
  {
    id: "bag-04",
    name: "Ajrakh Natural Dye Fabric Sling Bag with Brass Accents",
    category: "bags-accessories",
    categoryName: "Bags & Accessories",
    subcategory: "Sling Bags",
    price: 1350,
    originalPrice: 1700,
    rating: 4.7,
    reviewsCount: 26,
    isNew: true,
    isBestSeller: false,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfrb3X8u3M9av4lPQwVM7UCf4cDJSLmfilqEFhebYTg&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfrb3X8u3M9av4lPQwVM7UCf4cDJSLmfilqEFhebYTg&s=10"
    ],
    fabric: "Kutch Handblock Printed Cotton Canvas",
    origin: "Bhuj, Kutch, Gujarat",
    weave: "Heavy Handloom Canvas with Cotton Lining",
    dimensions: "8 x 9.5 x 2.5 inches | Adjustable 50-inch Strap",
    colors: ["Madder Red & Indigo", "Mustard & Iron Black"],
    description: "Compact crossbody messenger pouch with flap over magnetic button, brass buckle adjusters, and dedicated inner compartments for smartphone and sunglasses."
  },

  // ==========================================
  // CATEGORY 7: KIDS & BABY COLLECTION
  // ==========================================
  {
    id: "kid-01",
    name: "Organic Khadi Cotton Baby Blanket & Swaddle Wrap",
    category: "kids-baby",
    categoryName: "Kids & Baby Collection",
    subcategory: "Baby Blankets",
    price: 1290,
    originalPrice: 1600,
    rating: 5.0,
    reviewsCount: 48,
    isNew: true,
    isBestSeller: true,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQcAkS2wfH5gsSlK2iAx9SBOFzgP_N1sexHt5jc9f2Q&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQcAkS2wfH5gsSlK2iAx9SBOFzgP_N1sexHt5jc9f2Q&s=10"
    ],
    fabric: "100% GOTS Certified Organic Handspun Desi Cotton",
    origin: "Coimbatore, Tamil Nadu",
    weave: "Gentle 4-Layer Handloom Muslin Gauze",
    dimensions: "40 x 40 inches (100 x 100 cm)",
    colors: ["Cloud Milk Ivory", "Soft Terracotta Bloom", "Sage Mint"],
    description: "Unbleached and chemical-free 4-layer cloud muslin blanket. Naturally hypoallergenic, ultra-breathable, and gentle on sensitive newborn skin."
  },
  {
    id: "kid-02",
    name: "Girls Handloom Cotton Gathered Frock with Wooden Buttons",
    category: "kids-baby",
    categoryName: "Kids & Baby Collection",
    subcategory: "Kids Cotton Dresses",
    price: 1750,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 35,
    isNew: true,
    isBestSeller: false,
    isFestive: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80"
    ],
    fabric: "Handwoven Yarn-dyed Pure Cotton",
    origin: "Mangalagiri, Andhra Pradesh",
    weave: "Handloom Fine Checked Texture",
    sizes: ["1-2 Y", "2-3 Y", "3-4 Y", "4-5 Y", "5-6 Y"],
    colors: ["Sunshine Yellow", "Coral Peach", "Soft Teal"],
    description: "Breezy tiered silhouette with delicate flutter sleeves, coconut shell button placket, and cotton voile lining so children stay comfy through play all day."
  },
  {
    id: "kid-03",
    name: "Boys Handloom Cotton Kurta with Dhoti Pant Set",
    category: "kids-baby",
    categoryName: "Kids & Baby Collection",
    subcategory: "Kids Kurtas",
    price: 2150,
    originalPrice: 2600,
    rating: 4.8,
    reviewsCount: 39,
    isNew: false,
    isBestSeller: true,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRc7j-dXVpvJylzFeY1U9jZTLrJ7ZNGFgbkHnGrEOK9E4wTVLoCz5_danlh06e6An-WNIW8XbKlBxmz4b4KUdi17rlFe3xL57Ywdywu3EJOS6G2chVtbWq_&usqp=CAc",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRc7j-dXVpvJylzFeY1U9jZTLrJ7ZNGFgbkHnGrEOK9E4wTVLoCz5_danlh06e6An-WNIW8XbKlBxmz4b4KUdi17rlFe3xL57Ywdywu3EJOS6G2chVtbWq_&usqp=CAc"
    ],
    fabric: "100% Breathable Handloom Cotton with Gold Thread Trim",
    origin: "Chettinad, Tamil Nadu",
    weave: "Traditional Weft Border Handloom",
    sizes: ["2-3 Y", "3-4 Y", "4-5 Y", "6-7 Y", "8-9 Y"],
    colors: ["Deep Maroon & Gold", "Royal Ivory & Gold", "Mustard & Navy"],
    description: "Pre-stitched ready-to-wear dhoti pants with elasticated waistband paired with a Mandarin collar short kurta. Hassle-free festival dress up for young boys."
  },
  {
    id: "kid-04",
    name: "Handwoven Cotton Baby Quilts (Dohar) - Set of 2",
    category: "kids-baby",
    categoryName: "Kids & Baby Collection",
    subcategory: "Baby Bedding",
    price: 2450,
    originalPrice: 2900,
    rating: 4.9,
    reviewsCount: 23,
    isNew: false,
    isBestSeller: false,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeTZPdaqd1I_H3dshygaVN9ExKyuDLu-ipiZf3rykuA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeTZPdaqd1I_H3dshygaVN9ExKyuDLu-ipiZf3rykuA&s=10"
    ],
    fabric: "Triple-Layer Cotton Mulmul with Flannel Infill",
    origin: "Jaipur, Rajasthan",
    weave: "Handblock Print on Handwoven Voile",
    dimensions: "36 x 48 inches (90 x 120 cm) each",
    colors: ["Animal Safari Sand", "Botanical Bloom Sage"],
    description: "Traditional Jaipuri baby dohar composed of two outer layers of soft mulmul encasing a breathable cotton flannel sheet. Lightweight comfort for air-conditioned nurseries."
  },

  // ==========================================
  // CATEGORY 8: KITCHEN & DINING
  // ==========================================
  {
    id: "kit-01",
    name: "Handwoven Khadi Table Runner with Hand-Tied Tassels",
    category: "kitchen-dining",
    categoryName: "Kitchen & Dining",
    subcategory: "Table Runners",
    price: 1350,
    originalPrice: 1750,
    rating: 4.9,
    reviewsCount: 52,
    isNew: false,
    isBestSeller: true,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTS9OgVSg17OU_QmJQ9slr5wHqT7a3iMaerKYubZkdWVe1dEGdr1dhB3AKZsIRWEcKoHT_2Hp_8c28X_lc51Fj0FAu1rSyvnkOb0icpr8&usqp=CAc",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTS9OgVSg17OU_QmJQ9slr5wHqT7a3iMaerKYubZkdWVe1dEGdr1dhB3AKZsIRWEcKoHT_2Hp_8c28X_lc51Fj0FAu1rSyvnkOb0icpr8&usqp=CAc"
    ],
    fabric: "High-twist Handspun Khadi Cotton & Jute",
    origin: "Panipat, Haryana",
    weave: "Textured Rib Handloom Weave",
    dimensions: "14 x 72 inches (35 x 182 cm) - Fits 6 to 8 seater tables",
    colors: ["Natural Jute Beige", "Terracotta Clay", "Charcoal Slate"],
    description: "Adds instant rustic elegance to dining tables. Woven with thick handspun slub yarn with decorative hand-knotted braided fringe on either end."
  },
  {
    id: "kit-02",
    name: "Set of 6 Handblock Printed Pure Cotton Dinner Napkins",
    category: "kitchen-dining",
    categoryName: "Kitchen & Dining",
    subcategory: "Table Napkins",
    price: 990,
    originalPrice: 1250,
    rating: 4.8,
    reviewsCount: 67,
    isNew: true,
    isBestSeller: true,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQb_3FMqHSy-WyQ12ivNivBLhLyjLLVowG5nbikx05Wwtvc6JuOzxtRr6iuz-OKm9lB9P8hFHX-xP71rCQVF6JBy8Wl-3uXdbjCV7qyUHF6nO4OgprJAGVU0g&usqp=CAc",
    gallery: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQb_3FMqHSy-WyQ12ivNivBLhLyjLLVowG5nbikx05Wwtvc6JuOzxtRr6iuz-OKm9lB9P8hFHX-xP71rCQVF6JBy8Wl-3uXdbjCV7qyUHF6nO4OgprJAGVU0g&usqp=CAc"
    ],
    fabric: "100% Pre-washed Handloom Cotton",
    origin: "Bagru, Rajasthan",
    weave: "Dabu Mud-Resist Handblock Weave",
    dimensions: "18 x 18 inches (45 x 45 cm) - Set of 6",
    colors: ["Indigo Buti", "Madder Rust Floral", "Olive Fern"],
    description: "Artisan printed with natural mud-resist Dabu blocks. Highly absorbent, eco-friendly alternative to disposable paper napkins, washed soft for immediate use."
  },
  {
    id: "kit-03",
    name: "Heavy Handloom Chef Apron with Utility Pockets & Brass Ring",
    category: "kitchen-dining",
    categoryName: "Kitchen & Dining",
    subcategory: "Handloom Aprons",
    price: 1450,
    originalPrice: 1800,
    rating: 4.9,
    reviewsCount: 38,
    isNew: true,
    isBestSeller: false,
    isFestive: false,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLI4bELQb_55e_HBb6VOhNuI5OKTzjERDw2KCvnjiKA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLI4bELQb_55e_HBb6VOhNuI5OKTzjERDw2KCvnjiKA&s=10"
    ],
    fabric: "14oz Heavyweight Handloom Cotton Duck Canvas",
    origin: "Kannur, Kerala",
    weave: "Dense Twill Handloom",
    dimensions: "34 inches length x 28 inches width | Adjustable Neck Strap",
    colors: ["Earth Charcoal", "Olive Moss", "Deep Rust Khaki"],
    description: "Built for serious cooks and artisans. Reinforced bar-tack stitching, large split front pockets for tongs and thermometers, and antique brass neck slider."
  },
  {
    id: "kit-04",
    name: "Handwoven Cotton Dining Placemats - Set of 4",
    category: "kitchen-dining",
    categoryName: "Kitchen & Dining",
    subcategory: "Placemats",
    price: 1150,
    originalPrice: 1450,
    rating: 4.7,
    reviewsCount: 31,
    isNew: false,
    isBestSeller: false,
    isFestive: true,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFbJlO5uHYTvqgqiYHbjuyaJ0qrdu3NMd4sSi7vCrCw&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFbJlO5uHYTvqgqiYHbjuyaJ0qrdu3NMd4sSi7vCrCw&s=10"
    ],
    fabric: "Dual-tone Cotton & Jute Blend",
    origin: "Karur, Tamil Nadu",
    weave: "Ribbed Double Weft Handloom",
    dimensions: "13 x 19 inches (33 x 48 cm) - Set of 4",
    colors: ["Natural Straw & White", "Terracotta & Slate", "Forest & Tan"],
    description: "Heat resistant table protectors with clean woven selvedge. Easily machine-washable and designed to withstand hot pots and daily family gatherings."
  }
];

// Featured collections helper getters
const getNewArrivals = () => KAVIRA_PRODUCTS.filter(p => p.isNew);
const getBestSellers = () => KAVIRA_PRODUCTS.filter(p => p.isBestSeller);
const getFestiveGifting = () => KAVIRA_PRODUCTS.filter(p => p.isFestive);

// Category metadata
const KAVIRA_CATEGORIES = [
  {
    id: "sarees",
    name: "Sarees",
    count: "16+ Varieties",
    tagline: "Timeless Drape of Royal Traditions",
    description: "From Kanchipuram mulberry silks to airy Bengal Jamdani and Sambalpuri Ikats, discover authentic handloom drapes woven over weeks of devotion.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
    subcategories: ["Cotton Handloom Sarees", "Silk Sarees", "Linen Sarees", "Khadi Sarees", "Ikat Sarees", "Banarasi Sarees", "Kanchipuram Sarees", "Chanderi Sarees", "Jamdani Sarees", "Tussar Silk Sarees", "Maheshwari Sarees", "Sambalpuri Sarees", "Kerala Kasavu Sarees"]
  },
  {
    id: "womens-clothing",
    name: "Women's Clothing",
    count: "12+ Styles",
    tagline: "Contemporary Silhouettes, Ancient Weaves",
    description: "Breezy khadi kurtas, handloom linen wrap dresses, festive Chanderi tunics, and hand-embroidered dupattas tailored for effortless grace.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    subcategories: ["Handloom Kurtis", "Cotton Kurtas", "Handwoven Dresses", "Ethnic Tops", "Salwar Suit Materials", "Blouse Materials", "Dupattas", "Stoles", "Shawls", "Tunics"]
  },
  {
    id: "mens-clothing",
    name: "Men's Clothing",
    count: "12+ Styles",
    tagline: "Sartorial Heritage & Khadi Tailoring",
    description: "Handspun khadi short kurtas, tailored Nehru waistcoats, breathable linen mandarin shirts, and ceremonial Kasavu dhoti sets.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    subcategories: ["Handloom Cotton Shirts", "Khadi Shirts", "Linen Shirts", "Traditional Kurtas", "Nehru Jackets", "Dhoti & Veshti", "Angavastram", "Handwoven Waistcoats"]
  },
  {
    id: "fabrics-materials",
    name: "Fabrics & Materials",
    count: "12+ Weaves",
    tagline: "Unstitched Purity by the Metre",
    description: "Pure charkha-spun organic khadi, handblock printed Ajrakh modal silk, wild forest Tussar, and gossamer Chanderi yardage.",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=900&q=80",
    subcategories: ["Khadi Cotton Fabrics", "Handwoven Cotton", "Pure Cotton Fabrics", "Handloom Silk", "Tussar Silk", "Linen Fabrics", "Ikat Fabrics", "Natural-Dyed Fabrics"]
  },
  {
    id: "home-living",
    name: "Home & Living",
    count: "14+ Essentials",
    tagline: "Earthy Warmth for Conscious Homes",
    description: "Heavyweight handloom cotton bedsheets, textured slub cushion covers, hand-knotted panja rugs, and honeycomb bath linens.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=80",
    subcategories: ["Handloom Bedsheets", "Pillow Covers", "Cushion Covers", "Handwoven Curtains", "Handwoven Rugs", "Handloom Towels", "Bed Covers", "Quilts"]
  },
  {
    id: "bags-accessories",
    name: "Bags & Accessories",
    count: "12+ Accents",
    tagline: "Handcrafted Textile Statements",
    description: "Double Ikat tote bags with vegan trims, Tussar silk evening clutches with zari flaps, and fine needlework Kashmiri pashmina scarves.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
    subcategories: ["Handwoven Tote Bags", "Fabric Handbags", "Sling Bags", "Pouches", "Clutches", "Scarves & Stoles", "Textile Gift Accessories"]
  },
  {
    id: "kids-baby",
    name: "Kids & Baby Collection",
    count: "8+ Collections",
    tagline: "Gentle Cotton Comfort for Little Ones",
    description: "Chemical-free 4-layer organic khadi baby swaddles, breathable everyday cotton frocks, and soft pre-stitched ethnic dhoti kurta sets.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
    subcategories: ["Kids Cotton Dresses", "Kids Kurtas", "Traditional Kidswear", "Baby Blankets", "Baby Wraps", "Handwoven Baby Bedding"]
  },
  {
    id: "kitchen-dining",
    name: "Kitchen & Dining",
    count: "8+ Dining Items",
    tagline: "Feast with Handcrafted Elegance",
    description: "Thick khadi table runners with braided tassels, Dabu mud-resist dinner napkins, heavy canvas chef aprons, and ribbed dining placemats.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
    subcategories: ["Kitchen Towels", "Table Napkins", "Tablecloths", "Placemats", "Handloom Aprons", "Table Runners", "Dining Textile Sets"]
  }
];

// Weaver Artisans Spotlight Data
const KAVIRA_WEAVERS = [
  {
    id: "wvr-1",
    name: "Devaki & Ramaswamy",
    region: "Kanchipuram, Tamil Nadu",
    craft: "Korvai Pure Silk & Temple Zari",
    experience: "42 Years of Weaving Heritage",
    bio: "Carrying forward a 4-generation tradition, Devaki and Ramaswamy operate dual-shuttle pit looms to create interlocking Korvai silk borders that can never separate from the saree body.",
    image: "https://images.unsplash.com/photo-1774437790863-88a80bca5b29?auto=format&fit=crop&w=800&q=80",
    quote: "A handloom saree is not merely woven; our prayers, songs, and heartbeat are wound into every single warp thread."
  },
  {
    id: "wvr-2",
    name: "Santosh Chitrakar",
    region: "Fulia, West Bengal",
    craft: "Extra-Weft Muslin Jamdani",
    experience: "29 Years of Master Weaving",
    bio: "Santosh spins 100-count cotton by hand and weaves featherweight Jamdani tapestries without any printed guides, placing each individual floral motif purely by memory.",
    image: "https://images.unsplash.com/photo-1761409964038-230b9ac2a982?auto=format&fit=crop&w=800&q=80",
    quote: "When you touch true Bengal khadi, you are touching the whisper of wind across the river Ganges."
  },
  {
    id: "wvr-3",
    name: "Khatri Ismail Mohammed",
    region: "Ajrakhpur, Kutch, Gujarat",
    craft: "16-Stage Natural Dye Ajrakh",
    experience: "35 Years of Woodblock Mastery",
    bio: "Custodians of 10th-generation resist printing secrets, Ismail uses hand-carved teakwood blocks and natural river indigo, pomegranate rinds, and tamarind seed paste.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    quote: "The earth gives us our colors: madder gives red, indigo gives twilight sky, and rusted iron gives midnight black."
  },
  {
    id: "wvr-4",
    name: "Anasuya & Balaram Meher",
    region: "Bargarh, Odisha",
    craft: "Double Ikat Bandhakala Weaving",
    experience: "31 Years of Handloom Excellence",
    bio: "The Meher couple calculates intricate mathematical knots before tying warp and weft yarns with cotton cords, dyeing them repeatedly to produce sharp kaleidoscopic textiles.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    quote: "In Odisha, our looms are holy altars. When both warp and weft meet in harmony, beauty comes alive."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { KAVIRA_PRODUCTS, KAVIRA_CATEGORIES, KAVIRA_WEAVERS };
}

