function Car(company, model, color, price, miles) {
    this.company = company;
    this.model = model;
    this.color = color;
    this.price = price;
    this.miles = miles;
}
const myCar = new Car('Mustang', 'Yellow', 500, 20000, 'Ford');
console.table(myCar);
const myCar2 = new Car('Avantador', 'Lamborghini', 'Orange', 250000, 500);
document.write(myCar2)