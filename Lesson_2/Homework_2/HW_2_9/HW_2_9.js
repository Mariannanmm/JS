
let day = prompt("enter the sequential number of the day of the week (from 1 to 7):");

switch (Number(day)) {
    case 1:
        console.log("Monday – Робота над проєктом");
        break;
    case 2:
        console.log("Tuesday – Зустріч з командою");
        break;
    case 3:
        console.log("Wednesday – Вивчення JavaScript");
        break;
    case 4:
        console.log("Thursday – Практика CSS");
        break;
    case 5:
        console.log("Friday – Перевірка макетів");
        break;
    case 6:
        console.log("Saturday – Відпочинок і натхнення");
        break;
    case 7:
        console.log("Sunday – Планування наступного тижня");
        break;
    default:
        console.log("wrong number. enter the number from 1 to 7.");
}