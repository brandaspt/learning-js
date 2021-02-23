const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    // Getters. Simply return whats inside _courses."courseName"
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    //Setters. Push new elements into _courses."courseName" array
    set appetizers(appetizersIn) {
        this._courses.appetizers.push(appetizersIn);
    },
    set mains(mainsIn) {
        this._courses.mains.push(mainsIn);
    },
    set desserts(dessertsIn) {
        this._courses.desserts.push(dessertsIn);
    },
    // Getter for _courses
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    /*
    Method that creates the local object dish.
    Pushes dish into _courses[courseName] array populating it with the parameters dishName and dishPrice
    Ex.:
    menu.addDishToCourse('appetizers', 'pao', 1)
    pushes {name: 'pao', price: 1} into _courses.appetizers
    */
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        // Using setter to push element into array
        this[courseName] = dish;
    },
    // Generates a random index of the _courses[courseName] array and returns the value inside that index
    getRandomDishFromCourse(courseName) {
        const dishes = this[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)];
    },
    // Generates a random 3-course meal and prints it along with its total price
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `The meal today is:
        Appetizer: ${appetizer.name}
        Main: ${main.name}
        Dessert: ${dessert.name}
        Total price: ${totalPrice}\$`;
    },
};
// Creates appetizers
menu.addDishToCourse('appetizers', 'green salad', 7);
menu.addDishToCourse('appetizers', 'carpaccio', 8);
menu.addDishToCourse('appetizers', 'sea food soup', 10);

// Creates mains
menu.addDishToCourse('mains', 'fish and chips', 15);
menu.addDishToCourse('mains', 'wagyu burger', 18);
menu.addDishToCourse('mains', 'mushroom risotto', 14);

// Creates desserts
menu.addDishToCourse('desserts', 'craime brulee', 6);
menu.addDishToCourse('desserts', 'chocolat fondant', 7);
menu.addDishToCourse('desserts', 'tangerine sorbet', 4);

// Generates meal and assigns it to a variable
const meal = menu.generateRandomMeal();

// Prints menu and generated meal
console.log(menu.courses);
console.log(meal);
