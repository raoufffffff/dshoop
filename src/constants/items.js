
const items = [
    {
        name: "Berbère Formage 32 Portions",
        img: "https://topribejaia.com/wp-content/uploads/2021/07/Berbere-Formages-32-Portion.jpg",
        price: 310,
        newprice: 280,
        offer: true,
        type: " Dairy & Eggs "
    },
    {
        name: "Bnina Soummam Double Saveur",
        img: "https://topribejaia.com/wp-content/uploads/2021/07/Bnina-Soummam-Double-Saveur-.jpg.webp",
        price: 25,
        newprice: 280,
        offer: false,
        type: " Dairy & Eggs "
    },
    {
        name: "Candia Lait 1L",
        img: "https://topribejaia.com/wp-content/uploads/2021/07/Candia-Lait-1l-1.jpg",
        price: 130,
        newprice: 280,
        offer: false,
        type: " Dairy & Eggs "
    },
    {
        name: "Cheezy 8 Portions",
        img: "https://topribejaia.com/wp-content/uploads/2021/07/Candia-Lait-1l-1.jpg",
        price: 80,
        newprice: 60,
        offer: true,
        type: " Dairy & Eggs "
    },
    {
        name: "Cheezy Edam Préparation Fromage en Tranches 10 Slices 170g",
        img: "https://topribejaia.com/wp-content/uploads/2021/07/Cheezy-Edam-Preparation-Fromage-en-Tranche-10-Slices-170g.jpg",
        price: 150,
        newprice: 60,
        offer: false,
        type: " Dairy & Eggs "
    },
    {
        name: "Danone Activia Yaourt (Bifidus Naturel)",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Danone-Activia-Yaourt-Bifidus-Naturel-.jpg.webp",
        price: 25,
        newprice: 60,
        offer: false,
        type: " Dairy & Eggs "
    },
    // 
    {
        name: "Cevital Léguste Haricots Blancs 1kg",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Cevital-Leguste-Haricots-Blanc-1kg.jpg.webp",
        price: 250,
        newprice: 60,
        offer: false,
        type: " Nuts & Seeds "
    },
    {
        name: "Garrido Haricot Œil Noir1kg",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Garrido-Haricot-OEil-Noir1kg.jpg.webp",
        price: 340,
        newprice: 300,
        offer: true,
        type: " Nuts & Seeds "
    },
    {
        name: "Garrido Lentilles Rouge 500g",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Garrido-Lentille-Rouge-500g.jpg.webp",
        price: 340,
        newprice: 300,
        offer: true,
        type: " Nuts & Seeds "
    },
    {
        name: "Garrido Lentille Vert 1kg",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Garrido-Lentilles-Vert-1kg.jpg.webp",
        price: 335,
        newprice: 300,
        offer: false,
        type: " Nuts & Seeds "
    },
    {
        name: "Riz Basmati El Wissam 500g",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Riz-Basmati-El-Wissam-500g.jpg.webp",
        price: 185,
        newprice: 300,
        offer: false,
        type: " Nuts & Seeds "
    },
    {
        name: "Riz Basmati Golden Land Sella Indien 500g",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Riz-Basmati-Golden-Land-Sella-Indien-500g.jpg.webp",
        price: 165,
        newprice: 300,
        offer: false,
        type: " Nuts & Seeds "
    },
    // 
    {
        name: "Best Of Bimo Gaufrettes Parfum Chocolat (36 Gaufrettes)",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Best-Of-Bimo-Gaufrettes-Parfum-Chocolat-36-Gaufrettes.jpg.webp",
        price: 85,
        newprice: 300,
        offer: false,
        type: " Chips & Snacks "
    },
    {
        name: "Bibila Donuts Cake Fourré et Enrobé à la Crème Cacao 6 Sachets Individuels 52g",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Bibila-Donuts-Cake-Fourre-et-Enrobe-a-la-Creme-Cacao-6-Sachets-Individuel-52g.jpg.webp",
        price: 170,
        newprice: 300,
        offer: false,
        type: " Chips & Snacks "
    },
    {
        name: "Bifa Jelly Soft Fruits Bonbons 1kg",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Bifa-Jelly-Soft-Fruits-Bonbon-1kg.jpg.webp",
        price: 340,
        newprice: 250,
        offer: true,
        type: " Chips & Snacks "
    },
    {
        name: "Bimo Cookies Aux Chocolat et Pépites au Chocolat 200g",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Bimo-Cookies-Aux-Chocolat-et-Pepite-au-Chocolat-200g.jpg.webp",
        price: 95,
        newprice: 250,
        offer: false,
        type: " Chips & Snacks "
    },
    // 
    {
        name: "Bimo Ambassadeur Chocolat Noir",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Bimo-Ambassadeur-Chocolats-Noir-Precieux-70-de-Cacao-100g.jpg.webp",
        price: 160,
        newprice: 250,
        offer: false,
        type: " Chocolates "
    },
    {
        name: "Cebon El Mordjene Pâte a Tartiner 700g",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Cebon-El-Mordjenee-Pate-a-Tartiner-700g.jpg.webp",
        price: 595,
        newprice: 250,
        offer: false,
        type: " Chocolates "
    },
    {
        name: "Chocolat Bimo Ambassadeur Chocolat Extra Fin au Lait 100g",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Chocolat-Bimo-Ambassadeur-Chocolat-Extra-Fin-au-Lait-100g-1.jpg.webp",
        price: 100,
        newprice: 70,
        offer: true,
        type: " Chocolates "
    },
    {
        name: "Chocolat Dada Desserts Vegacao Blanc 500g",
        img: "https://topribejaia.com/wp-content/uploads/2021/11/Chocolat-Dada-Desserts-Vegacao-Blanc-500g-.jpg",
        price: 240,
        newprice: 200,
        offer: true,
        type: " Chocolates "
    },
    // 
    {
        name: "Coca Cola sans sucre 1.5L",
        img: "https://topribejaia.com/wp-content/uploads/2022/12/Coca-Cola-Zero-Sugar-1.5L.jpg",
        price: 110,
        newprice: 200,
        offer: false,
        type: " Soft Drinks & Juices "
    },
    {
        name: "Ifri Azro Sport Drink 500ml",
        img: "https://topribejaia.com/wp-content/uploads/2022/12/16297.jpg",
        price: 75,
        newprice: 200,
        offer: false,
        type: " Soft Drinks & Juices "
    },
    {
        name: "Ifri Eau Gazeuse Vichéy 1L",
        img: "https://topribejaia.com/wp-content/uploads/2023/01/Sans-titre-6.jpg",
        price: 60,
        newprice: 200,
        offer: false,
        type: " Soft Drinks & Juices "
    },
    {
        name: "Ifrit Ifruit Jus 100% Naturel 750ml",
        img: "https://topribejaia.com/wp-content/uploads/2023/01/Sans-titre-1.jpg",
        price: 150,
        newprice: 200,
        offer: false,
        type: " Soft Drinks & Juices "
    },
    // 
    {
        name: "Aigle Adoucissant 1L",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/AIGLE-Adoucissant-1L.jpg.webp",
        price: 240,
        newprice: 200,
        offer: false,
        type: " Household Care "
    },
    {
        name: "Aigle Multi Action Spray Avec Javel 500 ml",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Aigle-Multi-Action-Spray-Avec-Javel-500-ml.jpg.webp",
        price: 140,
        newprice: 200,
        offer: false,
        type: " Household Care "
    },
    {
        name: "Aigle Lessive ( 30 Tablettes) 600G",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/AIGLE-Lessive-30-Tablettes-600G.jpg.webp",
        price: 700,
        newprice: 200,
        offer: false,
        type: " Household Care "
    },
    // 
    {
        name: "Ananas Golden 565g Sirop Léger",
        img: "https://topribejaia.com/wp-content/uploads/2021/07/Ananas-Golden-565g-Sirop-Leger.jpg.webp",
        price: 320,
        newprice: 200,
        offer: false,
        type: " Cans & Jars "
    },
    {
        name: "Bono Haricots Blancs 580g",
        img: "https://topribejaia.com/wp-content/uploads/2021/11/Bono-Haricot-Blancs-580g.jpg.webp",
        price: 125,
        newprice: 100,
        offer: true,
        type: " Cans & Jars "
    },
    {
        name: "Cab Concentré Tomate Paste 400g",
        img: "https://topribejaia.com/wp-content/uploads/2021/11/Tomate-Paste-400g-.jpg",
        price: 125,
        newprice: 100,
        offer: false,
        type: " Cans & Jars "
    },
    {
        name: "Câpres 2.5KG",
        img: "https://topribejaia.com/wp-content/uploads/2021/07/Capres-2.50-kg.jpg.webp",
        price: 1500,
        newprice: 100,
        offer: false,
        type: " Cans & Jars "
    },
    // 
    {
        name: "Aptamil Lait Premium 1er Age 400g",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/Aptamil-Lait-Premium-1-Age-400g.jpg.webp",
        price: 780,
        newprice: 740,
        offer: true,
        type: " Baby Care "
    },
    {
        name: "BB Cool 1 (2-5)kg 12Couches",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/BB-Cool-1-2-5-kg-12-Couches.jpg.webp",
        price: 180,
        newprice: 150,
        offer: true,
        type: " Baby Care "
    },
    {
        name: "BB Cool 5 Junior (11-25)kg 40Couches",
        img: "https://topribejaia.com/wp-content/uploads/2021/08/BB-Cool-5-Junior-11-25-kg-40Couches.jpg.webp",
        price: 1150,
        newprice: 1050,
        offer: true,
        type: " Baby Care "
    },
]

export default items