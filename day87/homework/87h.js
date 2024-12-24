const countries = new Map();
countries.set("საქართველო", "თბილისი");
countries.set("აშშ", "ვაშინგტონი");
countries.set("საფრანგეთი", "პარიზი");

// ყველა წყვილის დაბეჭდვა
for (const [country, capital] of countries.entries()) {
    console.log(`${country}: ${capital}`);
}



const cityMap = new Map();
cityMap.set("თბილისი", "Georgia");
cityMap.set("ნიუ-იორკი", "აშშ");
cityMap.set("პარიზი", "საფრანგეთი");

const keyToCheck = "თბილისი";
const exists = cityMap.has(keyToCheck);
console.log(`${keyToCheck} არსებობს Map-ში? ${exists}`);


const studentScores = new Map();
studentScores.set("ანასტასია", 95);
studentScores.set("დავითი", 88);
studentScores.set("მარიამი", 92);

const student = "დავითი";
const score = studentScores.get(student);
console.log(`${student}-ის ქულა: ${score}`);





const keys = studentScores.keys();
for (const key of keys) {
    console.log(key);
}





studentScores.delete("ანასტასია");
for (const [student, score] of studentScores.entries()) {
    console.log(`${student}: ${score}`);
}





const productPrices = new Map();
productPrices.set("ვაშლი", 1.2);
productPrices.set("ბანანი", 0.8);
productPrices.set("ყურძენი", 2.5);

console.log("Map ზომა:", productPrices.size);



productPrices.set("ვაშლი", 1.5);
for (const [product, price] of productPrices.entries()) {
    console.log(`${product}: ${price}`);
}




const emptyMap = new Map();
const isEmpty = emptyMap.size === 0;
console.log("Map ცარიელია:", isEmpty);


const productObj = {
    "ვაშლი": 1.2,
    "ბანანი": 0.8,
    "ყურძენი": 2.5
};

const productMap = new Map(Object.entries(productObj));
for (const [product, price] of productMap.entries()) {
    console.log(`${product}: ${price}`);
}


productMap.clear();
console.log("Map ცარიელია:", productMap.size === 0);
































