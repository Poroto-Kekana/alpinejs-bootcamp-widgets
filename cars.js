var carsObject = [{
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CL 61045"
}, {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 16875"
}, {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CK 32655"
}, {
  "color": "orange",
  "make": "Ford",
  "model": "EcoSport",
  "reg_number": "CL 11318"
}, {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CJ 16103"
}, {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CL 42789"
}, {
  "color": "blue",
  "make": "Volkswagen",
  "model": "Jetta",
  "reg_number": "CA 46977"
}, {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CY 25661"
}, {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CY 35475"
}, {
  "color": "white",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CY 54886"
}, {
  "color": "white",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CJ 16455"
}, {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 57166"
}, {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
}, {
  "color": "blue",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CY 98904"
}, {
  "color": "white",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CF 75599"
}, {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CA 5510"
}, {
  "color": "blue",
  "make": "Ford",
  "model": "Focus",
  "reg_number": "CF 75586"
}, {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CA 46137"
}, {
  "color": "orange",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CK 22692"
}, {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CF 33543"
}, {
  "color": "red",
  "make": "Volkswagen",
  "model": "Touran",
  "reg_number": "CA 94890"
}, {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 82252"
}, {
  "color": "blue",
  "make": "Toyota",
  "model": "Yaris",
  "reg_number": "CL 9538"
}, {
  "color": "white",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CF 62002"
}, {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CJ 67577"
}, {
  "color": "blue",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CA 77852"
}, {
  "color": "orange",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CY 52435"
}, {
  "color": "blue",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CL 76173"
}, {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CL 38315"
}, {
  "color": "blue",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CA 34015"
}, {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 41166"
}]



// function mostPopularCar() {
//   alert("")

// }

document.addEventListener("alpine:init", () => {
  Alpine.data("carList", () => ({
    cars: carsObject,
    color: '',
    townName: '',
    mostPopularCar() {
      let makeCount = {};
      for (let i = 0; i < carsObject.length; i++) {
        let carMake = carsObject[i].make;
        if (makeCount[carMake] == undefined) {
          makeCount[carMake] = 1;
        }
        else {
          makeCount[carMake]++;
        }
      }
      //console.log(makeCount)

      let maxValue = 0;
      let maxMake = 0;
      for (let key in makeCount) {
        if (makeCount[key] > maxValue) {
          maxValue = makeCount[key];
          maxMake = key;
        }
      }
      this.cars = [{ make: maxMake }];
    },

    allCars() {
      this.cars = carsObject
    },

    nissansFromCK() {
      let makeCount = 0;
      for (let i = 0; i < carsObject.length; i++) {
        let carMake = carsObject[i].make;
        let regNumber = carsObject[i].reg_number;
        if (regNumber.startsWith("CK") && carMake == "Nissan") {
          makeCount++;
        }
      }

      this.cars = [{ make: makeCount }];
    },


    mostBlueCars() {
      let makeCount = {};
      for (let i = 0; i < carsObject.length; i++) {
        let color = carsObject[i].color;
        if (color === "blue") {
          let place = carsObject[i].reg_number.substring(0, 2);
          if (makeCount[place] == undefined) {
            makeCount[place] = 1;
          }
          else {
            makeCount[place]++;
          }
        }
      }
      let maxValue = 0;
      let maxMake = 0;
      for (let key in makeCount) {
        if (makeCount[key] > maxValue) {
          maxValue = makeCount[key];
          maxMake = key;
        }
      }
      this.cars = [{ make: maxMake }];
    },

    fewestOrangeCars() {
      let placeCount = {};
      for (let i = 0; i < carsObject.length; i++) {
        let color = carsObject[i].color;
        //let place = cars[i].reg_number.substring(0, 2);
        if (color === "orange") {
          let place = carsObject[i].reg_number.substring(0, 2);
          if (placeCount[place] == undefined) {
            placeCount[place] = 1;
          }
          else {
            placeCount[place]++;
          }
          //console.log(placeCount[place])
        }
        //console.log(makeCount[place])
      }
      //console.log(placeCount)
      let maxValue = carsObject.length;
      let minimumMake = 0;
      for (let key in placeCount) {
        if (placeCount[key] < maxValue) {
          maxValue = placeCount[key];
          minimumMake = key;
        }
      }
      //console.log(maxValue)
      //console.log(maxMake)
      this.cars = [{ make: minimumMake }];

    },

    mostPopularModel() {
      let carModels = {};
      for (let i = 0; i < carsObject.length; i++) {
        let carModel = carsObject[i].model;
        if (carModels[carModel] === undefined) {
          carModels[carModel] = 1;
        }
        else
          carModels[carModel]++
      }
      //console.log(carModels)

      let maxValue = 0;
      let maxModel = 0;
      for (let value in carModels) {
        if (carModels[value] > maxValue) {
          maxValue = carModels[value];
          maxModel = value
        }
      }
      //console.log(maxModel)
      this.cars = [{ make: maxModel }];
    },

    mostPopularCL() {
      let modelCounter = {};
      for (let i = 0; i < carsObject.length; i++) {
        let carReg = carsObject[i].reg_number;
        let carModel = carsObject[i].model;
        if (carReg.startsWith('CL')) {
          if (modelCounter[carModel] === undefined) {
            modelCounter[carModel] = 1;
          }
          else
            modelCounter[carModel]++
        }
      }
      //console.log(modelCounter)
      let maxValue = 0;
      let maxModel = 0;
      for (let value in modelCounter) {
        if (modelCounter[value] > maxValue) {
          maxValue = modelCounter[value]
          maxModel = value
        }
      }
      //console.log(maxModel)
      this.cars = [{ make: maxModel }];
    },

    leastPopularCF() {
      let modelCounter = {};
      for (let i = 0; i < carsObject.length; i++) {
        let reg = carsObject[i].reg_number;
        let carModel = carsObject[i].model;
        if (reg.startsWith('CF')) {
          if (modelCounter[carModel] === undefined) {
            modelCounter[carModel] = 1
          }
          else {
            modelCounter[carModel]++
          }
        }
      }
      //console.log(modelCounter)
      let minValue = 1000;
      let minModel = 0;
      for (let value in modelCounter) {
        if (modelCounter[value] <= minValue) {
          minValue = modelCounter[value]
          minModel = value
        }
      }
      //console.log(minModel)
      this.cars = [{ make: minModel }];
    },

    colorCar() {
      this.cars = carsObject.filter(car => {
        return car.color.toLowerCase() === "".toLowerCase()
      })
    },

    search() {
      let searchString = '';
      this.cars = carsObject.filter(car => {
      
        if(this.townName) {
          searchString = car.reg_number.startsWith(this.townName)
        }

        if (this.color) {
          searchString = searchString && car.color.toLocaleLowerCase() === this.color.toLowerCase();        
        }
        return searchString;

        
      })

    }

  }))
})
