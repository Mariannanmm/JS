const calculateCylinderArea = (r, h) => 2 * Math.PI * r * (h + r);

// Приклад:
let radius = 5;
let height = 10;
let area = calculateCylinderArea(radius, height);

console.log(`Площа циліндра з радіусом ${radius} та висотою ${height} дорівнює: ${area}`);