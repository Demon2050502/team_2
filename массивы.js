var laptops = [
{ id: 1, name: "Ноутбук Acer Aspire 5", price: 52999, category: "Ноутбуки", image: "imgs/laptop1.jpg", description: "15.6\", Intel Core i5, 8GB RAM, 512GB SSD" },
{ id: 2, name: "Ноутбук HP Pavilion 15", price: 63999, category: "Ноутбуки", image: "imgs/laptop2.jpg", description: "15.6\", AMD Ryzen 5, 16GB RAM, 256GB SSD" },
{ id: 3, name: "Ноутбук Dell Inspiron 15", price: 69999, category: "Ноутбуки", image: "imgs/laptop3.jpg", description: "15.6\", Intel Core i7, 16GB RAM, 1TB HDD" },
{ id: 4, name: "Ноутбук Lenovo IdeaPad 3", price: 41999, category: "Ноутбуки", image: "imgs/laptop4.jpg", description: "14\", Intel Core i3, 4GB RAM, 128GB SSD" },
{ id: 5, name: "Ноутбук ASUS VivoBook 15", price: 74999, category: "Ноутбуки", image: "imgs/laptop5.jpg", description: "15.6\", AMD Ryzen 7, 16GB RAM, 512GB SSD" },
{ id: 6, name: "Ноутбук MSI Modern 14", price: 57999, category: "Ноутбуки", image: "imgs/laptop6.jpg", description: "14\", Intel Core i5, 8GB RAM, 512GB SSD" },
{ id: 7, name: "Ноутбук Samsung Galaxy Book", price: 59999, category: "Ноутбуки", image: "imgs/laptop7.jpg", description: "15.6\", Intel Core i5, 8GB RAM, 256GB SSD" },
{ id: 8, name: "Ноутбук Razer Blade Stealth", price: 129999, category: "Ноутбуки", image: "imgs/laptop8.jpg", description: "13.3\", Intel Core i7, 16GB RAM, 512GB SSD" },
{ id: 9, name: "Ноутбук Microsoft Surface Laptop 4", price: 109999, category: "Ноутбуки", image: "imgs/laptop9.jpg", description: "13.5\", Intel Core i5, 8GB RAM, 256GB SSD" },
{ id: 10, name: "Ноутбук Gigabyte Aero 15", price: 139999, category: "Ноутбуки", image: "imgs/laptop10.jpg", description: "15.6\", Intel Core i7, 32GB RAM, 1TB SSD" },
{ id: 11, name: "Ноутбук HP Omen 15", price: 124999, category: "Ноутбуки", image: "imgs/laptop11.jpg", description: "15.6\", Intel Core i7, 16GB RAM, 1TB SSD" },
{ id: 12, name: "Ноутбук Lenovo ThinkPad X1 Carbon", price: 114999, category: "Ноутбуки", image: "imgs/laptop12.jpg", description: "14\", Intel Core i5, 16GB RAM, 512GB SSD" }
];

var phones = [
{ id: 1, name: "Смартфон Apple iPhone 14", price: 84999, category: "Телефоны", image: "imgs/phone1.jpg", description: "6.1\", 128GB" },
{ id: 2, name: "Смартфон Samsung Galaxy S22", price: 79999, category: "Телефоны", image: "imgs/phone2.jpg", description: "6.1\", 256GB" },
{ id: 3, name: "Смартфон Google Pixel 6", price: 71999, category: "Телефоны", image: "imgs/phone3.jpg", description: "6.4\", 128GB" },
{ id: 4, name: "Смартфон Xiaomi Mi 11", price: 67999, category: "Телефоны", image: "imgs/phone4.jpg", description: "6.81\", 256GB" },
{ id: 5, name: "Смартфон OnePlus 9", price: 72999, category: "Телефоны", image: "imgs/phone5.jpg", description: "6.55\", 128GB" },
{ id: 6, name: "Смартфон Oppo Find X5", price: 75999, category: "Телефоны", image: "imgs/phone6.jpg", description: "6.55\", 256GB" },
{ id: 7, name: "Смартфон Sony Xperia 5 III", price: 81999, category: "Телефоны", image: "imgs/phone7.jpg", description: "6.1\", 128GB" },
{ id: 8, name: "Смартфон Vivo X70 Pro", price: 68999, category: "Телефоны", image: "imgs/phone8.jpg", description: "6.56\", 256GB" },
{ id: 9, name: "Смартфон Motorola Edge 20", price: 59999, category: "Телефоны", image: "imgs/phone9.jpg", description: "6.7\", 128GB" },
{ id: 10, name: "Смартфон Realme GT", price: 57999, category: "Телефоны", image: "imgs/phone10.jpg", description: "6.43\", 256GB" },
{ id: 11, name: "Смартфон Nokia X20", price: 48999, category: "Телефоны", image: "imgs/phone11.jpg", description: "6.67\", 128GB" },
{ id: 12, name: "Смартфон Honor 50", price: 51999, category: "Телефоны", image: "imgs/phone12.jpg", description: "6.57\", 256GB" }
];

var tablets = [
{ id: 1, name: "Планшет Apple iPad Pro 12.9\"", price: 119999, category: "Планшеты", image: "imgs/tablet1.jpg", description: "128GB" },
{ id: 2, name: "Планшет Samsung Galaxy Tab S8", price: 89999, category: "Планшеты", image: "imgs/tablet2.jpg", description: "128GB" },
{ id: 3, name: "Планшет Microsoft Surface Pro 8", price: 109999, category: "Планшеты", image: "imgs/tablet3.jpg", description: "256GB" },
{ id: 4, name: "Планшет Lenovo Tab P11 Pro", price: 67999, category: "Планшеты", image: "imgs/tablet4.jpg", description: "128GB" },
{ id: 5, name: "Планшет Huawei MatePad Pro", price: 78999, category: "Планшеты", image: "imgs/tablet5.jpg", description: "256GB" },
{ id: 6, name: "Планшет Amazon Fire HD 10", price: 34999, category: "Планшеты", image: "imgs/tablet6.jpg", description: "64GB" },
{ id: 7, name: "Планшет Microsoft Surface Go 3", price: 55999, category: "Планшеты", image: "imgs/tablet7.jpg", description: "128GB" },
{ id: 8, name: "Планшет Xiaomi Pad 5", price: 62999, category: "Планшеты", image: "imgs/tablet8.jpg", description: "256GB" },
{ id: 9, name: "Планшет Apple iPad Air 5", price: 74999, category: "Планшеты", image: "imgs/tablet9.jpg", description: "64GB" },
{ id: 10, name: "Планшет Samsung Galaxy Tab A7", price: 42999, category: "Планшеты", image: "imgs/tablet10.jpg", description: "64GB" },
{ id: 11, name: "Планшет Lenovo Yoga Tab 13", price: 58999, category: "Планшеты", image: "imgs/tablet11.jpg", description: "128GB" },
{ id: 12, name: "Планшет Asus ZenPad 3S 10", price: 37999, category: "Планшеты", image: "imgs/tablet12.jpg", description: "32GB" }
];