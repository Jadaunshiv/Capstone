import p1_img from "./product_1.jfif";
import p2_img from "./product_2.jfif";
import p3_img from "./product_3.jfif";
import p4_img from "./product_4.jfif";
import p5_img from "./product_5.jfif";
import p6_img from "./product_6.jfif";
import p7_img from "./product_7.jfif";
import p8_img from "./product_8.jfif";
import p9_img from "./product_9.jfif";
import p10_img from "./product_10.jfif";
import p11_img from "./product_11.jfif";
import p12_img from "./product_12.jfif";
import p13_img from "./product_13.jfif";
import p14_img from "./product_14.jfif";
import p15_img from "./product_15.jfif";
import p16_img from "./product_16.jfif";
import p17_img from "./product_17.jfif";
import p18_img from "./product_18.jfif";
import p19_img from "./product_19.jfif";
import p20_img from "./product_20.jfif";
import p21_img from "./product_21.jfif";
import p22_img from "./product_22.jfif";
import p23_img from "./product_23.jfif";
import p24_img from "./product_24.jfif";
import p25_img from "./product_25.jfif";
import p26_img from "./product_26.jfif";
import p27_img from "./product_27.jfif";
import p28_img from "./product_28.jfif";
import p29_img from "./product_29.jfif";
import p30_img from "./product_30.jfif";
import p31_img from "./product_31.jfif";
import p32_img from "./product_32.jfif";
import p33_img from "./product_33.jfif";
import p34_img from "./product_34.jfif";
import p35_img from "./product_35.jfif";
import p36_img from "./product_36.jfif";

let all_product = [
  {
    id: 1,
    name: "Adidas Classic 3 Stripes T-Shirt",
    category: "fashion",
    image: p1_img,
    discounted_price: 30,
    original_price: 60,
  },
  {
    id: 2,
    name: "Adidas Originals Women's T-Shirt",
    category: "fashion",
    image: p2_img,
    discounted_price: 35,
    original_price: 55,
  },
  {
    id: 3,
    name: "Adidas Originals Men's Hoodie",
    category: "fashion",
    image: p3_img,
    discounted_price: 60,
    original_price: 70,
  },
  {
    id: 4,
    name: "Nike Men's T-Shirt",
    category: "fashion",
    image: p4_img,
    discounted_price: 40,
    original_price: 55,
  },
  {
    id: 5,
    name: "Nike Women's Black T-Shirt",
    category: "fashion",
    image: p5_img,
    discounted_price: 40,
    original_price: 60,
  },
  {
    id: 6,
    name: "Nike Men's Black T-Shirt",
    category: "fashion",
    image: p6_img,
    discounted_price: 45,
    original_price: 75,
  },
  {
    id: 7,
    name: "Puma Originals Women's Black T-Shirt",
    category: "fashion",
    image: p7_img,
    discounted_price: 30,
    original_price: 40,
  },
  {
    id: 8,
    name: "Puma Mercedes Men's T-Shirt",
    category: "fashion",
    image: p8_img,
    discounted_price: 55,
    original_price: 69,
  },
  {
    id: 9,
    name: "Asics Men's Black T-Shirt",
    category: "fashion",
    image: p9_img,
    discounted_price: 35,
    original_price: 40,
  },
  {
    id: 10,
    name: "Asics Women's Black T-Shirt",
    category: "fashion",
    image: p10_img,
    discounted_price: 35,
    original_price: 45,
  },
  {
    id: 11,
    name: "Samsung Galaxy S24 Ultra",
    category: "Electronics",
    image: p11_img,
    discounted_price: 1200,
    original_price: 1500,
  },
  {
    id: 12,
    name: "Samsung Watch 3",
    category: "electronics",
    image: p12_img,
    discounted_price: 600,
    original_price: 800,
  },
  {
    id: 13,
    name: "Samsung Book Pro",
    category: "electronics",
    image: p13_img,
    discounted_price: 1800,
    original_price: 2000,
  },
  {
    id: 14,
    name: "Apple iPhone 15 Pro Max",
    category: "electronics",
    image: p14_img,
    discounted_price: 1300,
    original_price: 1500,
  },
  {
    id: 15,
    name: "Apple iPhone 14 Pro Max",
    category: "electronics",
    image: p15_img,
    discounted_price: 1000,
    original_price: 1200,
  },
  {
    id: 16,
    name: "Apple MacBook Pro",
    category: "electronics",
    image: p16_img,
    discounted_price: 1800,
    original_price: 2000,
  },
  {
    id: 17,
    name: "Sony Bravia x85",
    category: "electronics",
    image: p17_img,
    discounted_price: 1250,
    original_price: 1500,
  },
  {
    id: 18,
    name: "IFB Full Automatic Front Load Washing Machine",
    category: "electronics",
    image: p18_img,
    discounted_price: 700,
    original_price: 900,
  },
  {
    id: 19,
    name: "Bosch Dishwasher",
    category: "electronics",
    image: p19_img,
    discounted_price: 600,
    original_price: 800,
  },
  {
    id: 20,
    name: "Dell Alienware a51",
    category: "electronics",
    image: p20_img,
    discounted_price: 899,
    original_price: 1000,
  },
  {
    id: 21,
    name: "DSC English Willow Cricket Bat",
    category: "sports",
    image: p21_img,
    discounted_price: 190,
    original_price: 300,
  },
  {
    id: 22,
    name: "Kookaburra Cricket Ball",
    category: "sports",
    image: p22_img,
    discounted_price: 30,
    original_price: 50,
  },
  {
    id: 23,
    name: "Adidas Tiro League Football",
    category: "sports",
    image: p23_img,
    discounted_price: 100,
    original_price: 120,
  },
  {
    id: 24,
    name: "Standard Hockey Stick",
    category: "sports",
    image: p24_img,
    discounted_price: 85,
    original_price: 100,
  },
  {
    id: 25,
    name: "Standard Chess Board",
    category: "sports",
    image: p25_img,
    discounted_price: 60,
    original_price: 75,
  },
  {
    id: 26,
    name: "Dual Suspension Disc Brakes Bicycle",
    category: "sports",
    image: p26_img,
    discounted_price: 699,
    original_price: 800,
  },
  {
    id: 27,
    name: "Wilson NBA Basketball",
    category: "sports",
    image: p27_img,
    discounted_price: 280,
    original_price: 350,
  },
  {
    id: 28,
    name: "Yonex Standard Badminton Racket",
    category: "sports",
    image: p28_img,
    discounted_price: 120,
    original_price: 180,
  },
  {
    id: 29,
    name: "Wilson Standard Tennis Racket",
    category: "sports",
    image: p29_img,
    discounted_price: 280,
    original_price: 350,
  },
  {
    id: 30,
    name: "Yonex Standard Volleyball",
    category: "sports",
    image: p30_img,
    discounted_price: 199,
    original_price: 250,
  },
  {
    id: 31,
    name: "Samsung S24 Ultra Clear Stand Back Cover",
    category: "accessories",
    image: p31_img,
    discounted_price: 60,
    original_price: 85,
  },
  {
    id: 32,
    name: "Apple iPhone 15 Pro Max Crystal Clear Back Cover",
    category: "accessories",
    image: p32_img,
    discounted_price: 60,
    original_price: 80,
  },
  {
    id: 33,
    name: "PlayStation Dualsense Edge Controller",
    category: "accessories",
    image: p33_img,
    discounted_price: 290,
    original_price: 450,
  },
  {
    id: 34,
    name: "Dell Wireless Mouse",
    category: "accessories",
    image: p34_img,
    discounted_price: 85,
    original_price: 100,
  },
  {
    id: 35,
    name: "Pebble Wireless Keyboard",
    category: "accessories",
    image: p35_img,
    discounted_price: 90,
    original_price: 120,
  },
  {
    id: 36,
    name: "Ray-Ban Standard Sunglasses",
    category: "accessories",
    image: p36_img,
    discounted_price: 85,
    original_price: 120,
  },
];

export default all_product;
