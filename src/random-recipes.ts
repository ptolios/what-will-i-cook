const recipes = [
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 0,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": true,
    "preparationMinutes": 45,
    "cookingMinutes": 15,
    "sourceUrl": "http://www.tasteofhome.com/recipes/steamed-salmon-kabobs",
    "spoonacularSourceUrl": "https://spoonacular.com/steamed-salmon-kabobs-390081",
    "aggregateLikes": 42,
    "spoonacularScore": 93.0,
    "healthScore": 35.0,
    "creditsText": "Taste of Home",
    "sourceName": "Taste of Home",
    "pricePerServing": 58.87,
    "extendedIngredients": [
      {
        "id": 11090,
        "aisle": "Produce",
        "image": "broccoli.jpg",
        "consitency": "solid",
        "name": "broccoli",
        "original": "1 bunch broccoli, cut into 1-inch pieces",
        "originalString": "1 bunch broccoli, cut into 1-inch pieces",
        "originalName": "broccoli, cut into 1-inch pieces",
        "amount": 1.0,
        "unit": "bunch",
        "meta": [
          "cut into 1-inch pieces"
        ],
        "metaInformation": [
          "cut into 1-inch pieces"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "bunch",
            "unitLong": "bunch"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "bunch",
            "unitLong": "bunch"
          }
        }
      },
      {
        "id": 11297,
        "aisle": "Produce",
        "image": "parsley.jpg",
        "consitency": "solid",
        "name": "fresh parsley",
        "original": "1 tablespoon minced fresh parsley",
        "originalString": "1 tablespoon minced fresh parsley",
        "originalName": "minced fresh parsley",
        "amount": 1.0,
        "unit": "tablespoon",
        "meta": [
          "fresh",
          "minced"
        ],
        "metaInformation": [
          "fresh",
          "minced"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.jpg",
        "consitency": "solid",
        "name": "garlic",
        "original": "1 whole garlic bulb, separated and peeled",
        "originalString": "1 whole garlic bulb, separated and peeled",
        "originalName": "whole garlic bulb, separated and peeled",
        "amount": 1.0,
        "unit": "",
        "meta": [
          "whole",
          "separated",
          "peeled"
        ],
        "metaInformation": [
          "whole",
          "separated",
          "peeled"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 9152,
        "aisle": "Produce",
        "image": "lemon-juice.jpg",
        "consitency": "liquid",
        "name": "lemon juice",
        "original": "3 tablespoons lemon juice",
        "originalString": "3 tablespoons lemon juice",
        "originalName": "lemon juice",
        "amount": 3.0,
        "unit": "tablespoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 4053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consitency": "liquid",
        "name": "olive oil",
        "original": "2 tablespoons olive oil",
        "originalString": "2 tablespoons olive oil",
        "originalName": "olive oil",
        "amount": 2.0,
        "unit": "tablespoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 1002030,
        "aisle": "Spices and Seasonings",
        "image": "pepper.jpg",
        "consitency": "solid",
        "name": "pepper",
        "original": "1 teaspoon pepper",
        "originalString": "1 teaspoon pepper",
        "originalName": "pepper",
        "amount": 1.0,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 10011282,
        "aisle": "Produce",
        "image": "red-onion.png",
        "consitency": "solid",
        "name": "red onion",
        "original": "1 large red onion, halved and cut into wedges",
        "originalString": "1 large red onion, halved and cut into wedges",
        "originalName": "red onion, halved and cut into wedges",
        "amount": 1.0,
        "unit": "large",
        "meta": [
          "red",
          "halved",
          "cut into wedges"
        ],
        "metaInformation": [
          "red",
          "halved",
          "cut into wedges"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "large",
            "unitLong": "large"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "large",
            "unitLong": "large"
          }
        }
      },
      {
        "id": 15076,
        "aisle": "Seafood",
        "image": "salmon.png",
        "consitency": "solid",
        "name": "salmon fillets",
        "original": "1 pound salmon fillets, skinless and cut into 1-inch cubes",
        "originalString": "1 pound salmon fillets, skinless and cut into 1-inch cubes",
        "originalName": "salmon fillets, skinless and cut into 1-inch cubes",
        "amount": 1.0,
        "unit": "pound",
        "meta": [
          "skinless",
          "cut into 1-inch cubes"
        ],
        "metaInformation": [
          "skinless",
          "cut into 1-inch cubes"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "lb",
            "unitLong": "pound"
          },
          "metric": {
            "amount": 453.592,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consitency": "solid",
        "name": "salt",
        "original": "1/4 teaspoon salt",
        "originalString": "1/4 teaspoon salt",
        "originalName": "salt",
        "amount": 0.25,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 11641,
        "aisle": "Produce",
        "image": "yellow-squash.jpg",
        "consitency": "solid",
        "name": "yellow summer squash",
        "original": "1 large yellow summer squash, cut into 1-inch pieces",
        "originalString": "1 large yellow summer squash, cut into 1-inch pieces",
        "originalName": "yellow summer squash, cut into 1-inch pieces",
        "amount": 1.0,
        "unit": "large",
        "meta": [
          "yellow",
          "cut into 1-inch pieces"
        ],
        "metaInformation": [
          "yellow",
          "cut into 1-inch pieces"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "large",
            "unitLong": "large"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "large",
            "unitLong": "large"
          }
        }
      }
    ],
    "id": 390081,
    "title": "Steamed Salmon Kabobs",
    "readyInMinutes": 60,
    "servings": 24,
    "image": "https://spoonacular.com/recipeImages/390081-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [],
    "dishTypes": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ],
    "diets": [
      "gluten free",
      "dairy free",
      "whole 30",
      "pescatarian"
    ],
    "occasions": [],
    "winePairing": {
      "pairedWines": [
        "chardonnay",
        "pinot noir",
        "sauvignon blanc"
      ],
      "pairingText": "Chardonnay, Pinot Noir, and Sauvignon Blanc are great choices for Salmon. To decide on white or red, you should consider your seasoning and sauces. Chardonnay is a great friend to buttery, creamy dishes, while sauvignon blanc can complement herb or citrus-centric dishes. A light-bodied, low-tannin red such as the pinot noir goes great with broiled or grilled salmon. You could try NV Mindbender Chardonnay. Reviewers quite like it with a 4.4 out of 5 star rating and a price of about 12 dollars per bottle.",
      "productMatches": [
        {
          "id": 428583,
          "title": "NV Mindbender Chardonnay",
          "description": "Lightly Oaked, the Mindbender Chardonnay is a sophisticated style of Chardonnay, that is full of the best elements of this classic grape varietal. The aromatics are complex and welcoming with floral and citrus tones mixed with hints of honeysuckle and butterscotch. The good percentage of oak aging brings a lovely vanilla note. The Mindbender Chardonnay is here to make you see Chardonnay in a new and innovative way. The Mindbender Chardonnay is a sophisticated style of Chardonnay, that is full of the best elements of this classic grape varietal. Visually it is golden straw in color. The aromatics are complex and welcoming with floral and citrus tones mixed with hints of honeysuckle and butterscotch. The well-rounded flavors carry the butterscotch throughout lending a smooth, creamy aspect while the citrus flavors bring freshness and brightness to the body. The good percentage of oak aging brings a lovely vanilla note. The finish is rounded out with a depth of ripe fruit flavors such as apricots, melons and peaches with a spritz of lime.",
          "price": "$12.0",
          "imageUrl": "https://spoonacular.com/productImages/428583-312x231.jpg",
          "averageRating": 0.8800000000000001,
          "ratingCount": 4.0,
          "score": 0.8030769230769232,
          "link": "https://www.amazon.com/Mindbender-California-Chardonnay-White-Wine/dp/B00GB87SJQ?tag=spoonacular-20"
        }
      ]
    },
    "instructions": "Directions                                                                                In a small bowl, combine the lemon juice, oil, parsley, pepper and salt. Thread the broccoli, onion, salmon, garlic cloves and squash onto 24 small wooden skewers; spoon lemon juice mixture over kabobs.                                                                                            Place skewers in a steamer basket; place in a large saucepan over 1 in. of water. Bring to a boil; cover and steam for 12-15 minutes or until salmon flakes easily with a fork and vegetables are crisp-tender.                                        Yield: 2 dozen.                                                                                                                         Originally published as Steamed Salmon Kabobs in  Taste of HomeApril/May 2007, p16                                                                                                                                                                                                        Nutritional Facts                                                                             1 kabob equals 58 calories, 3 g fat (1 g saturated fat), 11 mg cholesterol, 43 mg sodium, 3 g carbohydrate, 1 g fiber, 5 g protein. Diabetic Exchanges: 1/2 lean meat, 1/2 vegetable, 1/2 fat.                                                                                                                                                                    Print                                                                                    Add to Recipe Box                            Email a Friend",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "In a small bowl, combine the lemon juice, oil, parsley, pepper and salt. Thread the broccoli, onion, salmon, garlic cloves and squash onto 24 small wooden skewers; spoon lemon juice mixture over kabobs.",
            "ingredients": [
              {
                "id": 11215,
                "name": "whole garlic cloves",
                "image": "garlic.jpg"
              },
              {
                "id": 9152,
                "name": "lemon juice",
                "image": "lemon-juice.jpg"
              },
              {
                "id": 11090,
                "name": "broccoli",
                "image": "broccoli.jpg"
              },
              {
                "id": 11297,
                "name": "parsley",
                "image": "parsley.jpg"
              },
              {
                "id": 1002030,
                "name": "pepper",
                "image": "pepper.jpg"
              },
              {
                "id": 15076,
                "name": "salmon",
                "image": "salmon.png"
              },
              {
                "id": 11282,
                "name": "onion",
                "image": "brown-onion.png"
              },
              {
                "id": 2047,
                "name": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": [
              {
                "id": 405601,
                "name": "wooden skewers",
                "image": "wooden-skewers.jpg"
              },
              {
                "id": 404783,
                "name": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Place skewers in a steamer basket; place in a large saucepan over 1 in. of water. Bring to a boil; cover and steam for 12-15 minutes or until salmon flakes easily with a fork and vegetables are crisp-tender.",
            "ingredients": [
              {
                "id": 15076,
                "name": "salmon",
                "image": "salmon.png"
              }
            ],
            "equipment": [
              {
                "id": 404767,
                "name": "steamer basket",
                "image": "steamer.jpg"
              },
              {
                "id": 404669,
                "name": "sauce pan",
                "image": "sauce-pan.jpg"
              },
              {
                "id": 3065,
                "name": "skewers",
                "image": "wooden-skewers.jpg"
              }
            ],
            "length": {
              "number": 15,
              "unit": "minutes"
            }
          }
        ]
      }
    ]
  },
  {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 17,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "preparationMinutes": 15,
    "cookingMinutes": 20,
    "sourceUrl": "http://allrecipes.com/Recipe/Little-French-Fudge-Cakes/",
    "spoonacularSourceUrl": "https://spoonacular.com/little-french-fudge-cakes-461109",
    "aggregateLikes": 89,
    "spoonacularScore": 30.0,
    "healthScore": 2.0,
    "creditsText": "Allrecipes",
    "sourceName": "Allrecipes",
    "pricePerServing": 97.04,
    "extendedIngredients": [
      {
        "id": 10019904,
        "aisle": "Sweet Snacks",
        "image": "dark-chocolate-pieces.jpg",
        "consitency": "solid",
        "name": "dark chocolate bar",
        "original": "1 (4 ounce) bittersweet chocolate bar, chopped",
        "originalString": "1 (4 ounce) bittersweet chocolate bar, chopped",
        "originalName": "bittersweet chocolate bar, chopped",
        "amount": 4.0,
        "unit": "ounce",
        "meta": [
          "chopped"
        ],
        "metaInformation": [
          "chopped"
        ],
        "measures": {
          "us": {
            "amount": 4.0,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 113.398,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 1125,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg-yolk.jpg",
        "consitency": "solid",
        "name": "egg yolk",
        "original": "1 egg yolk",
        "originalString": "1 egg yolk",
        "originalName": "egg yolk",
        "amount": 1.0,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 1123,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg.png",
        "consitency": "solid",
        "name": "eggs",
        "original": "2 eggs",
        "originalString": "2 eggs",
        "originalName": "eggs",
        "amount": 2.0,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 20081,
        "aisle": "Baking",
        "image": "flour.png",
        "consitency": "solid",
        "name": "flour",
        "original": "3 tablespoons organic all-purpose flour",
        "originalString": "3 tablespoons organic all-purpose flour",
        "originalName": "organic all-purpose flour",
        "amount": 3.0,
        "unit": "tablespoons",
        "meta": [
          "organic",
          "all-purpose"
        ],
        "metaInformation": [
          "organic",
          "all-purpose"
        ],
        "measures": {
          "us": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 1012010,
        "aisle": "Spices and Seasonings",
        "image": "cinnamon.jpg",
        "consitency": "solid",
        "name": "ground cinnamon",
        "original": "1 teaspoon ground cinnamon",
        "originalString": "1 teaspoon ground cinnamon",
        "originalName": "ground cinnamon",
        "amount": 1.0,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consitency": "solid",
        "name": "salt",
        "original": "1/8 teaspoon salt",
        "originalString": "1/8 teaspoon salt",
        "originalName": "salt",
        "amount": 0.125,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.125,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.125,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 1145,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consitency": "solid",
        "name": "unsalted butter",
        "original": "5 tablespoons unsalted butter",
        "originalString": "5 tablespoons unsalted butter",
        "originalName": "unsalted butter",
        "amount": 5.0,
        "unit": "tablespoons",
        "meta": [
          "unsalted"
        ],
        "metaInformation": [
          "unsalted"
        ],
        "measures": {
          "us": {
            "amount": 5.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 5.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      },
      {
        "id": 19078,
        "aisle": "Baking",
        "image": "baking-chocolate.jpg",
        "consitency": "solid",
        "name": "unsweetened chocolate",
        "original": "1 1/2 (1 ounce) squares unsweetened chocolate, chopped",
        "originalString": "1 1/2 (1 ounce) squares unsweetened chocolate, chopped",
        "originalName": "1/2 unsweetened chocolate, chopped",
        "amount": 1.0,
        "unit": "ounce",
        "meta": [
          "unsweetened",
          "chopped"
        ],
        "metaInformation": [
          "unsweetened",
          "chopped"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "oz",
            "unitLong": "ounce"
          },
          "metric": {
            "amount": 28.35,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 2050,
        "aisle": "Baking",
        "image": "vanilla.jpg",
        "consitency": "solid",
        "name": "vanilla extract",
        "original": "1 1/2 teaspoons vanilla extract",
        "originalString": "1 1/2 teaspoons vanilla extract",
        "originalName": "vanilla extract",
        "amount": 1.5,
        "unit": "teaspoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 1.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 19335,
        "aisle": "Baking",
        "image": "sugar-in-bowl.png",
        "consitency": "solid",
        "name": "white sugar",
        "original": "3/4 cup white sugar",
        "originalString": "3/4 cup white sugar",
        "originalName": "white sugar",
        "amount": 0.75,
        "unit": "cup",
        "meta": [
          "white"
        ],
        "metaInformation": [
          "white"
        ],
        "measures": {
          "us": {
            "amount": 0.75,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 177.441,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      }
    ],
    "id": 461109,
    "title": "Little French Fudge Cakes",
    "readyInMinutes": 40,
    "servings": 6,
    "image": "https://spoonacular.com/recipeImages/461109-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [
      "Mediterranean",
      "French",
      "Eastern European",
      "European",
      "Greek"
    ],
    "dishTypes": [
      "side dish"
    ],
    "diets": [
      "lacto ovo vegetarian"
    ],
    "occasions": [],
    "winePairing": {
      "pairedWines": [
        "bordeaux",
        "champagne",
        "white burgundy"
      ],
      "pairingText": "French works really well with Bordeaux, Champagne, and White Burgundy. French wine is just as diverse as French food, but you rarely go wrong with champagne. If your meal calls for a white wine, you might also try a white burgundy. For a red, try a red bordeaux blend. The Mouton Cadet Bordeaux Rouge with a 4 out of 5 star rating seems like a good match. It costs about 12 dollars per bottle.",
      "productMatches": [
        {
          "id": 436703,
          "title": "Mouton Cadet Bordeaux Rouge",
          "description": "Through its balance, roundness and aging capacity, the fruits of generous nature and the work of human hands, Mouton Cadet Rouge express all the richness and diversity of one of the world's foremost winegrowing regions.",
          "price": "$11.99",
          "imageUrl": "https://spoonacular.com/productImages/436703-312x231.jpg",
          "averageRating": 0.8,
          "ratingCount": 12.0,
          "score": 0.7729729729729731,
          "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fmouton-cadet-bordeaux-rouge-2011%2F122961"
        }
      ]
    },
    "instructions": "Preheat oven to 375 degrees F (190 degrees C). Grease 6 cupcake cups, preferably in a dark-colored metal pan.                            Place 1 chopped bar of bittersweet chocolate, unsweetened chocolate, and butter in a microwave-safe bowl; place bowl in microwave, and cook on low power until the butter has melted and the chocolate is soft, 2 to 3 minutes. Check and stir often to avoid burning the chocolate. Stir until smooth.                            In a mixing bowl, whisk cinnamon, vanilla extract, eggs, egg yolk, sugar, and salt until thoroughly combined, and stir in the flour just until blended. Mix in the chocolate mixture, stir the batter a few times until smooth, and lightly mix in the 1/2 bar of bittersweet chocolate broken into 1/2-inch pieces. Spoon batter into the prepared cupcake cups, filling them about 3/4 full.                            Bake in the preheated oven until a knife inserted into the center of a cake comes out with streaks of thick batter, about 18 minutes. The tops of the cakes should be almost firm. Allow to cool in the pan on a rack for 5 to 10 minutes to serve warm, or 20 minutes to serve at room temperature.                                                Kitchen-Friendly View",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Preheat oven to 375 degrees F (190 degrees C). Grease 6 cupcake cups, preferably in a dark-colored metal pan.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404676,
                "name": "muffin liners",
                "image": "muffin-or-cupcake-forms.png"
              },
              {
                "id": 404784,
                "name": "oven",
                "image": "oven.jpg",
                "temperature": {
                  "number": 375.0,
                  "unit": "Fahrenheit"
                }
              },
              {
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
              }
            ]
          },
          {
            "number": 2,
            "step": "Place 1 chopped bar of bittersweet chocolate, unsweetened chocolate, and butter in a microwave-safe bowl; place bowl in microwave, and cook on low power until the butter has melted and the chocolate is soft, 2 to 3 minutes. Check and stir often to avoid burning the chocolate. Stir until smooth.",
            "ingredients": [
              {
                "id": 19078,
                "name": "unsweetened baking chocolate",
                "image": "baking-chocolate.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404762,
                "name": "microwave",
                "image": "microwave.jpg"
              },
              {
                "id": 404783,
                "name": "bowl",
                "image": "bowl.jpg"
              }
            ],
            "length": {
              "number": 2,
              "unit": "minutes"
            }
          },
          {
            "number": 3,
            "step": "In a mixing bowl, whisk cinnamon, vanilla extract, eggs, egg yolk, sugar, and salt until thoroughly combined, and stir in the flour just until blended.",
            "ingredients": [
              {
                "id": 2050,
                "name": "vanilla extract",
                "image": "vanilla-extract.jpg"
              },
              {
                "id": 2010,
                "name": "cinnamon",
                "image": "cinnamon.jpg"
              },
              {
                "id": 1125,
                "name": "egg yolk",
                "image": "egg-yolk.jpg"
              },
              {
                "id": 20081,
                "name": "all purpose flour",
                "image": "flour.png"
              },
              {
                "id": 19335,
                "name": "sugar",
                "image": "sugar-in-bowl.png"
              },
              {
                "id": 1123,
                "name": "egg",
                "image": "egg.png"
              },
              {
                "id": 2047,
                "name": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": [
              {
                "id": 405907,
                "name": "mixing bowl",
                "image": "mixing-bowl.jpg"
              },
              {
                "id": 404661,
                "name": "whisk",
                "image": "whisk.png"
              }
            ]
          },
          {
            "number": 4,
            "step": "Mix in the chocolate mixture, stir the batter a few times until smooth, and lightly mix in the 1/2 bar of bittersweet chocolate broken into 1/2-inch pieces. Spoon batter into the prepared cupcake cups, filling them about 3/4 full.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404676,
                "name": "muffin liners",
                "image": "muffin-or-cupcake-forms.png"
              }
            ]
          },
          {
            "number": 5,
            "step": "Bake in the preheated oven until a knife inserted into the center of a cake comes out with streaks of thick batter, about 18 minutes. The tops of the cakes should be almost firm. Allow to cool in the pan on a rack for 5 to 10 minutes to serve warm, or 20 minutes to serve at room temperature.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404745,
                "name": "knife",
                "image": "chefs-knife.jpg"
              },
              {
                "id": 404784,
                "name": "oven",
                "image": "oven.jpg"
              },
              {
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
              }
            ],
            "length": {
              "number": 43,
              "unit": "minutes"
            }
          }
        ]
      }
    ]
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "weightWatcherSmartPoints": 24,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "sourceUrl": "http://fakeginger.com/2013/01/28/buffalo-wing-burgers-with-blue-cheese-slaw-giveaway/",
    "spoonacularSourceUrl": "https://spoonacular.com/buffalo-wing-burgers-with-blue-cheese-slaw-+-giveaway-507523",
    "aggregateLikes": 11,
    "spoonacularScore": 64.0,
    "healthScore": 15.0,
    "creditsText": "Fake Ginger",
    "sourceName": "Fake Ginger",
    "pricePerServing": 268.72,
    "extendedIngredients": [
      {
        "id": 1002030,
        "aisle": "Spices and Seasonings",
        "image": "pepper.jpg",
        "consitency": "solid",
        "name": "black pepper",
        "original": "1/2 teaspoon black pepper",
        "originalString": "1/2 teaspoon black pepper",
        "originalName": "black pepper",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [
          "black"
        ],
        "metaInformation": [
          "black"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 1004,
        "aisle": "Cheese",
        "image": "blue-cheese.png",
        "consitency": "solid",
        "name": "blue cheese",
        "original": "1/4 cup crumbled blue cheese",
        "originalString": "1/4 cup crumbled blue cheese",
        "originalName": "crumbled blue cheese",
        "amount": 0.25,
        "unit": "cup",
        "meta": [
          "blue",
          "crumbled"
        ],
        "metaInformation": [
          "blue",
          "crumbled"
        ],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 59.147,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 2031,
        "aisle": "Spices and Seasonings",
        "image": "chili-powder.jpg",
        "consitency": "solid",
        "name": "cayenne pepper",
        "original": "1/2 teaspoon cayenne pepper",
        "originalString": "1/2 teaspoon cayenne pepper",
        "originalName": "cayenne pepper",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 10111143,
        "aisle": "Produce",
        "image": "celery.jpg",
        "consitency": "solid",
        "name": "celery ribs",
        "original": "4 celery ribs, thinly sliced at an angle (or 3 cups cole slaw mix)",
        "originalString": "4 celery ribs, thinly sliced at an angle (or 3 cups cole slaw mix)",
        "originalName": "celery ribs, thinly sliced at an angle (or 3 cups cole slaw mix)",
        "amount": 4.0,
        "unit": "",
        "meta": [
          "thinly sliced",
          "(or 3 cups cole slaw mix)"
        ],
        "metaInformation": [
          "thinly sliced",
          "(or 3 cups cole slaw mix)"
        ],
        "measures": {
          "us": {
            "amount": 4.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 4.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 1034053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consitency": "liquid",
        "name": "extra virgin olive oil",
        "original": "1 tablespoon plus 1 teaspoon extra virgin olive oil",
        "originalString": "1 tablespoon plus 1 teaspoon extra virgin olive oil",
        "originalName": "extra virgin olive oil",
        "amount": 1.0,
        "unit": "tablespoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 11297,
        "aisle": "Produce",
        "image": "parsley.jpg",
        "consitency": "solid",
        "name": "fresh parsley",
        "original": "1/2 cup fresh parsley (or cilantro)",
        "originalString": "1/2 cup fresh parsley (or cilantro)",
        "originalName": "fresh parsley (or cilantro)",
        "amount": 0.5,
        "unit": "cup",
        "meta": [
          "fresh",
          "(or cilantro)"
        ],
        "metaInformation": [
          "fresh",
          "(or cilantro)"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 118.294,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.jpg",
        "consitency": "solid",
        "name": "garlic cloves",
        "original": "2 garlic cloves, minced",
        "originalString": "2 garlic cloves, minced",
        "originalName": "garlic cloves, minced",
        "amount": 2.0,
        "unit": "",
        "meta": [
          "minced"
        ],
        "metaInformation": [
          "minced"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 5332,
        "aisle": "Meat",
        "image": "meat-ground.jpg",
        "consitency": "solid",
        "name": "ground chicken",
        "original": "1 1/4 pounds ground chicken or turkey",
        "originalString": "1 1/4 pounds ground chicken or turkey",
        "originalName": "ground chicken or turkey",
        "amount": 1.25,
        "unit": "pounds",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 1.25,
            "unitShort": "lb",
            "unitLong": "pounds"
          },
          "metric": {
            "amount": 566.99,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 1002030,
        "aisle": "Spices and Seasonings",
        "image": "pepper.jpg",
        "consitency": "solid",
        "name": "ground pepper",
        "original": "1/8 teaspoon ground black pepper",
        "originalString": "1/8 teaspoon ground black pepper",
        "originalName": "ground black pepper",
        "amount": 0.125,
        "unit": "teaspoon",
        "meta": [
          "black"
        ],
        "metaInformation": [
          "black"
        ],
        "measures": {
          "us": {
            "amount": 0.125,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.125,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 19296,
        "aisle": "Nut butters, Jams, and Honey;Health Foods",
        "image": "honey.png",
        "consitency": "liquid",
        "name": "honey",
        "original": "2 teaspoons honey",
        "originalString": "2 teaspoons honey",
        "originalName": "honey",
        "amount": 2.0,
        "unit": "teaspoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 6168,
        "aisle": "Condiments",
        "image": "hot-sauce-or-tabasco.png",
        "consitency": "liquid",
        "name": "hot sauce",
        "original": "1 tablespoon hot sauce (preferably Frank's)",
        "originalString": "1 tablespoon hot sauce (preferably Frank's)",
        "originalName": "hot sauce (preferably Frank's)",
        "amount": 1.0,
        "unit": "tablespoon",
        "meta": [
          "(preferably Frank's)"
        ],
        "metaInformation": [
          "(preferably Frank's)"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 6168,
        "aisle": "Condiments",
        "image": "hot-sauce-or-tabasco.png",
        "consitency": "liquid",
        "name": "hot sauce",
        "original": "2 teaspoons hot sauce (preferably Frank's)",
        "originalString": "2 teaspoons hot sauce (preferably Frank's)",
        "originalName": "hot sauce (preferably Frank's)",
        "amount": 2.0,
        "unit": "teaspoons",
        "meta": [
          "(preferably Frank's)"
        ],
        "metaInformation": [
          "(preferably Frank's)"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 9152,
        "aisle": "Produce",
        "image": "lemon-juice.jpg",
        "consitency": "liquid",
        "name": "lemon juice",
        "original": "1 tablespoon fresh lemon juice",
        "originalString": "1 tablespoon fresh lemon juice",
        "originalName": "fresh lemon juice",
        "amount": 1.0,
        "unit": "tablespoon",
        "meta": [
          "fresh"
        ],
        "metaInformation": [
          "fresh"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 9156,
        "aisle": "Produce",
        "image": "zest-lemon.jpg",
        "consitency": "solid",
        "name": "lemon zest",
        "original": "1/2 teaspoon lemon zest",
        "originalString": "1/2 teaspoon lemon zest",
        "originalName": "lemon zest",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 4025,
        "aisle": "Condiments",
        "image": "mayonnaise.png",
        "consitency": "liquid",
        "name": "mayonnaise",
        "original": "3/4 cup mayonnaise",
        "originalString": "3/4 cup mayonnaise",
        "originalName": "mayonnaise",
        "amount": 0.75,
        "unit": "cup",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.75,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 177.441,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 4053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consitency": "liquid",
        "name": "olive oil",
        "original": "1 teaspoon olive oil, plus more for frying",
        "originalString": "1 teaspoon olive oil, plus more for frying",
        "originalName": "olive oil, plus more for frying",
        "amount": 1.0,
        "unit": "teaspoon",
        "meta": [
          "for frying",
          "plus more "
        ],
        "metaInformation": [
          "for frying",
          "plus more "
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "tsp",
            "unitLong": "teaspoon"
          }
        }
      },
      {
        "id": 10011282,
        "aisle": "Produce",
        "image": "red-onion.png",
        "consitency": "solid",
        "name": "red onion",
        "original": "1/2 small red onion, very thinly sliced",
        "originalString": "1/2 small red onion, very thinly sliced",
        "originalName": "red onion, very thinly sliced",
        "amount": 0.5,
        "unit": "small",
        "meta": [
          "red",
          "very thinly sliced"
        ],
        "metaInformation": [
          "red",
          "very thinly sliced"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "small",
            "unitLong": "smalls"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "small",
            "unitLong": "smalls"
          }
        }
      },
      {
        "id": 1032009,
        "aisle": "Spices and Seasonings",
        "image": "red-pepper-flakes.jpg",
        "consitency": "solid",
        "name": "red pepper flakes",
        "original": "1/2 teaspoon crushed red pepper flakes",
        "originalString": "1/2 teaspoon crushed red pepper flakes",
        "originalName": "crushed red pepper flakes",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [
          "red",
          "crushed"
        ],
        "metaInformation": [
          "red",
          "crushed"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 1022068,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "red-wine-vinegar.jpg",
        "consitency": "liquid",
        "name": "red wine vinegar",
        "original": "1 tablespoon red wine vinegar",
        "originalString": "1 tablespoon red wine vinegar",
        "originalName": "red wine vinegar",
        "amount": 1.0,
        "unit": "tablespoon",
        "meta": [
          "red"
        ],
        "metaInformation": [
          "red"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consitency": "solid",
        "name": "salt",
        "original": "1/4 teaspoon salt",
        "originalString": "1/4 teaspoon salt",
        "originalName": "salt",
        "amount": 0.25,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consitency": "solid",
        "name": "salt",
        "original": "1/2 teaspoon salt",
        "originalString": "1/2 teaspoon salt",
        "originalName": "salt",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 98940,
        "aisle": "Bakery/Bread",
        "image": "french-rolls.jpg",
        "consitency": "solid",
        "name": "sub rolls",
        "original": "4 rolls, toasted if desired",
        "originalString": "4 rolls, toasted if desired",
        "originalName": "rolls, toasted if desired",
        "amount": 4.0,
        "unit": "",
        "meta": [
          "toasted"
        ],
        "metaInformation": [
          "toasted"
        ],
        "measures": {
          "us": {
            "amount": 4.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 4.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 2049,
        "aisle": "Produce",
        "image": "thyme.jpg",
        "consitency": "solid",
        "name": "thyme leaves",
        "original": "1/2 teaspoon dried thyme leaves",
        "originalString": "1/2 teaspoon dried thyme leaves",
        "originalName": "dried thyme leaves",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [
          "dried"
        ],
        "metaInformation": [
          "dried"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 1145,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consitency": "solid",
        "name": "unsalted butter",
        "original": "1 tablespoon unsalted butter",
        "originalString": "1 tablespoon unsalted butter",
        "originalName": "unsalted butter",
        "amount": 1.0,
        "unit": "tablespoon",
        "meta": [
          "unsalted"
        ],
        "metaInformation": [
          "unsalted"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          },
          "metric": {
            "amount": 1.0,
            "unitShort": "Tbsp",
            "unitLong": "Tbsp"
          }
        }
      },
      {
        "id": 10511282,
        "aisle": "Produce",
        "image": "brown-onion.png",
        "consitency": "solid",
        "name": "yellow onion",
        "original": "1/3 cup yellow onion, minced",
        "originalString": "1/3 cup yellow onion, minced",
        "originalName": "yellow onion, minced",
        "amount": 0.3333333333333333,
        "unit": "cup",
        "meta": [
          "yellow",
          "minced"
        ],
        "metaInformation": [
          "yellow",
          "minced"
        ],
        "measures": {
          "us": {
            "amount": 0.333,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 78.863,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      }
    ],
    "id": 507523,
    "title": "Buffalo Wing Burgers with Blue Cheese Slaw + GIVEAWAY",
    "readyInMinutes": 45,
    "servings": 4,
    "image": "https://spoonacular.com/recipeImages/507523-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [
      "American"
    ],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "diets": [],
    "occasions": [
      "super bowl",
      "father's day",
      "4th of july",
      "summer"
    ],
    "winePairing": {
      "pairedWines": [],
      "pairingText": "",
      "productMatches": []
    },
    "instructions": "Combine the celery, onion, and parsley in a large mixing bowl. Add the vinegar, oil, lemon zest, salt, and pepper and toss well. Gentle toss in blue cheese. Refrigerate until ready to serve.In a small bowl, stir together the mayonnaise, lemon juice, hot sauce, honey, and cayenne until smooth. Refrigerate until ready to serve.In a small skillet, heat the butter and oil over medium-high heat. When the butter is almost melted, add the onion and salt. Cook, stirring occasionally, for 2 minutes, then stir in the garlic. When the onion is golden and soft, stir in the hot sauce, thyme, red pepper flakes, and pepper. Transfer to a large bowl and cool to room temperature.Combine the chicken with the cooled onions using slightly damp hands. You want it well mixed, but you don't want to squeeze it and make it tough. Form the mixture into 4 burgers. Use your thumb to dimple the center of each patty.Coat a large nonstick skillet with oil and heat over medium-high heat. Add the burgers and cook until browned, about 3 minutes, then carefully flip them. Cook until the other side is browned and the meat is cooked through, about 3 minutes longer. The burger will feel firm and the juices will run clear.Slather the spicy mayo on the buns. Divide the burgers among the bun bottoms and top with the slaw. Sandwich with the bun tops and serve immediately.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Combine the celery, onion, and parsley in a large mixing bowl.",
            "ingredients": [
              {
                "id": 11297,
                "name": "parsley",
                "image": "parsley.jpg"
              },
              {
                "id": 11143,
                "name": "celery",
                "image": "celery.jpg"
              },
              {
                "id": 11282,
                "name": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": [
              {
                "id": 405907,
                "name": "mixing bowl",
                "image": "mixing-bowl.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Add the vinegar, oil, lemon zest, salt, and pepper and toss well. Gentle toss in blue cheese. Refrigerate until ready to serve.In a small bowl, stir together the mayonnaise, lemon juice, hot sauce, honey, and cayenne until smooth. Refrigerate until ready to serve.In a small skillet, heat the butter and oil over medium-high heat. When the butter is almost melted, add the onion and salt. Cook, stirring occasionally, for 2 minutes, then stir in the garlic. When the onion is golden and soft, stir in the hot sauce, thyme, red pepper flakes, and pepper.",
            "ingredients": [
              {
                "id": 1032009,
                "name": "red pepper flakes",
                "image": "red-pepper-flakes.jpg"
              },
              {
                "id": 1004,
                "name": "blue cheese",
                "image": "blue-cheese.png"
              },
              {
                "id": 9152,
                "name": "lemon juice",
                "image": "lemon-juice.jpg"
              },
              {
                "id": 9156,
                "name": "lemon zest",
                "image": "zest-lemon.jpg"
              },
              {
                "id": 4025,
                "name": "mayonnaise",
                "image": "mayonnaise.png"
              },
              {
                "id": 6168,
                "name": "hot sauce",
                "image": "hot-sauce-or-tabasco.png"
              },
              {
                "id": 2031,
                "name": "ground cayenne pepper",
                "image": "chili-powder.jpg"
              },
              {
                "id": 11215,
                "name": "garlic",
                "image": "garlic.png"
              },
              {
                "id": 1002030,
                "name": "pepper",
                "image": "pepper.jpg"
              },
              {
                "id": 19296,
                "name": "honey",
                "image": "honey.png"
              },
              {
                "id": 11282,
                "name": "onion",
                "image": "brown-onion.png"
              },
              {
                "id": 2049,
                "name": "thyme",
                "image": "thyme.jpg"
              },
              {
                "id": 2047,
                "name": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
              },
              {
                "id": 404783,
                "name": "bowl",
                "image": "bowl.jpg"
              }
            ],
            "length": {
              "number": 2,
              "unit": "minutes"
            }
          },
          {
            "number": 3,
            "step": "Transfer to a large bowl and cool to room temperature.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 4,
            "step": "Combine the chicken with the cooled onions using slightly damp hands. You want it well mixed, but you don't want to squeeze it and make it tough. Form the mixture into 4 burgers. Use your thumb to dimple the center of each patty.Coat a large nonstick skillet with oil and heat over medium-high heat.",
            "ingredients": [
              {
                "id": 11282,
                "name": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
              }
            ]
          },
          {
            "number": 5,
            "step": "Add the burgers and cook until browned, about 3 minutes, then carefully flip them. Cook until the other side is browned and the meat is cooked through, about 3 minutes longer. The burger will feel firm and the juices will run clear.Slather the spicy mayo on the buns. Divide the burgers among the bun bottoms and top with the slaw. Sandwich with the bun tops and serve immediately.",
            "ingredients": [
              {
                "id": 4025,
                "name": "mayonnaise",
                "image": "mayonnaise.png"
              }
            ],
            "equipment": [],
            "length": {
              "number": 6,
              "unit": "minutes"
            }
          }
        ]
      }
    ]
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 15,
    "gaps": "no",
    "lowFodmap": false,
    "ketogenic": false,
    "whole30": false,
    "sourceUrl": "http://eatathomecooks.com/2012/01/italian-sausage-enchiladas-dont-be-afraid-to-substitute-ingredients-2.html",
    "spoonacularSourceUrl": "https://spoonacular.com/italian-sausage-enchiladas-dont-be-afraid-to-substitute-ingredients-504309",
    "aggregateLikes": 348,
    "spoonacularScore": 64.0,
    "healthScore": 9.0,
    "creditsText": "Eat at Home Cooks",
    "sourceName": "Eat at Home Cooks",
    "pricePerServing": 140.54,
    "extendedIngredients": [
      {
        "id": 6599,
        "aisle": "Pasta and Rice;Ethnic Foods",
        "image": "harissa.jpg",
        "consitency": "solid",
        "name": "enchilada sauce",
        "original": "10 oz enchilada sauce",
        "originalString": "10 oz enchilada sauce",
        "originalName": "enchilada sauce",
        "amount": 10.0,
        "unit": "oz",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 10.0,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 283.495,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 10218364,
        "aisle": "Bakery/Bread;Pasta and Rice;Ethnic Foods",
        "image": "flour-tortilla.jpg",
        "consitency": "solid",
        "name": "flour tortillas",
        "original": "9-10 flour tortillas",
        "originalString": "9-10 flour tortillas",
        "originalName": "flour tortillas",
        "amount": 9.0,
        "unit": "",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 9.0,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 9.0,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 1022020,
        "aisle": "Spices and Seasonings",
        "image": "garlic-powder.png",
        "consitency": "solid",
        "name": "garlic powder",
        "original": "1/2 tsp. garlic powder",
        "originalString": "1/2 tsp. garlic powder",
        "originalName": "garlic powder",
        "amount": 0.5,
        "unit": "tsp",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 7036,
        "aisle": "Meat",
        "image": "raw-pork-sausage.png",
        "consitency": "solid",
        "name": "italian sausage",
        "original": "1 lb. Italian sausage",
        "originalString": "1 lb. Italian sausage",
        "originalName": "Italian sausage",
        "amount": 1.0,
        "unit": "lb",
        "meta": [
          "italian"
        ],
        "metaInformation": [
          "italian"
        ],
        "measures": {
          "us": {
            "amount": 1.0,
            "unitShort": "lb",
            "unitLong": "pound"
          },
          "metric": {
            "amount": 453.592,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 1001025,
        "aisle": "Cheese",
        "image": "shredded-cheese-white.jpg",
        "consitency": "solid",
        "name": "monterey jack cheese",
        "original": "8 oz Monterey Jack Cheese, shredded",
        "originalString": "8 oz Monterey Jack Cheese, shredded",
        "originalName": "Monterey Jack Cheese, shredded",
        "amount": 8.0,
        "unit": "oz",
        "meta": [
          "shredded"
        ],
        "metaInformation": [
          "shredded"
        ],
        "measures": {
          "us": {
            "amount": 8.0,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 226.796,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 10011282,
        "aisle": "Produce",
        "image": "red-onion.png",
        "consitency": "solid",
        "name": "red onion",
        "original": "1/2 red onion, chopped",
        "originalString": "1/2 red onion, chopped",
        "originalName": "red onion, chopped",
        "amount": 0.5,
        "unit": "",
        "meta": [
          "red",
          "chopped"
        ],
        "metaInformation": [
          "red",
          "chopped"
        ],
        "measures": {
          "us": {
            "amount": 0.5,
            "unitShort": "",
            "unitLong": ""
          },
          "metric": {
            "amount": 0.5,
            "unitShort": "",
            "unitLong": ""
          }
        }
      },
      {
        "id": 1102047,
        "aisle": "Spices and Seasonings",
        "image": "salt-and-pepper.jpg",
        "consitency": "solid",
        "name": "salt and pepper",
        "original": "salt and pepper to taste",
        "originalString": "salt and pepper to taste",
        "originalName": "salt and pepper to taste",
        "amount": 8.0,
        "unit": "servings",
        "meta": [
          "to taste"
        ],
        "metaInformation": [
          "to taste"
        ],
        "measures": {
          "us": {
            "amount": 8.0,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 8.0,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 11549,
        "aisle": "Canned and Jarred",
        "image": "tomato-sauce-or-pasta-sauce.jpg",
        "consitency": "solid",
        "name": "tomato sauce",
        "original": "15 oz tomato sauce",
        "originalString": "15 oz tomato sauce",
        "originalName": "tomato sauce",
        "amount": 15.0,
        "unit": "oz",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 15.0,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 425.243,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      }
    ],
    "id": 504309,
    "title": "Italian Sausage Enchiladas – Don’t be afraid to substitute ingredients",
    "readyInMinutes": 45,
    "servings": 8,
    "image": "https://spoonacular.com/recipeImages/504309-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [
      "Mexican"
    ],
    "dishTypes": [
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ],
    "diets": [],
    "occasions": [],
    "winePairing": {
      "pairedWines": [
        "pinot noir",
        "riesling",
        "sparkling rose"
      ],
      "pairingText": "Mexican works really well with Pinot Noir, Riesling, and Sparkling rosé. Acidic white wines like riesling or low-tannin reds like pinot noir can work well with Mexican dishes. Sparkling rosé is a safe pairing too. You could try Garnet Monterey Pinot Noir. Reviewers quite like it with a 4.2 out of 5 star rating and a price of about 16 dollars per bottle.",
      "productMatches": [
        {
          "id": 444323,
          "title": "Garnet Monterey Pinot Noir",
          "description": "This is a Pinot with power, but also with finesse. Aromas include ripe blackberries, cherry preserves, vanilla toffee and toasted French oak. You'll love the velvety richness of the attack. The flavors of dark red fruits and exotic spices just make this a juicy, delicious mouthful of wine.",
          "price": "$15.99",
          "imageUrl": "https://spoonacular.com/productImages/444323-312x231.jpg",
          "averageRating": 0.8400000000000001,
          "ratingCount": 6.0,
          "score": 0.7873684210526317,
          "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fgarnet-monterey-pinot-noir-2011%2F123633"
        }
      ]
    },
    "instructions": "Brown sausage and onion in large skillet.  Drain and rinse under hot water to remove extra grease.Mix 2/3 of the cheese with the meat, reserving some cheese for the top.Stir together enchilada sauce, tomato sauce and garlic powder. Spread some sauce on bottom of 9x13 pan.Fill tortillas with meat and cheese.  Roll and place in pan.Cover with sauce. Top with cheese.Bake 30 minutes or till hot at 350 degrees.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Brown sausage and onion in large skillet.",
            "ingredients": [
              {
                "id": 11282,
                "name": "onion",
                "image": "brown-onion.png"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
              }
            ]
          },
          {
            "number": 2,
            "step": "Drain and rinse under hot water to remove extra grease.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 3,
            "step": "Mix 2/3 of the cheese with the meat, reserving some cheese for the top.Stir together enchilada sauce, tomato sauce and garlic powder.",
            "ingredients": [
              {
                "id": 6599,
                "name": "enchilada sauce",
                "image": "harissa.jpg"
              },
              {
                "id": 1022020,
                "name": "garlic powder",
                "image": "garlic-powder.png"
              },
              {
                "id": 11549,
                "name": "tomato sauce",
                "image": "tomato-sauce-or-pasta-sauce.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Spread some sauce on bottom of 9x13 pan.Fill tortillas with meat and cheese.",
            "ingredients": [
              {
                "id": 18364,
                "name": "tortilla",
                "image": "flour-tortilla.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
              }
            ]
          },
          {
            "number": 5,
            "step": "Roll and place in pan.Cover with sauce. Top with cheese.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "image": "pan.png"
              }
            ]
          },
          {
            "number": 6,
            "step": "Bake 30 minutes or till hot at 350 degrees.",
            "ingredients": [],
            "equipment": [],
            "length": {
              "number": 30,
              "unit": "minutes"
            }
          }
        ]
      }
    ]
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": true,
    "sustainable": false,
    "weightWatcherSmartPoints": 37,
    "gaps": "no",
    "lowFodmap": true,
    "ketogenic": false,
    "whole30": false,
    "sourceUrl": "http://premeditatedleftovers.com/recipes-cooking-tips/how-make-hollow-chocolate-easter-eggs/",
    "spoonacularSourceUrl": "https://spoonacular.com/how-to-make-hollow-chocolate-easter-eggs-718085",
    "aggregateLikes": 2631,
    "spoonacularScore": 3.0,
    "healthScore": 0.0,
    "creditsText": "Premeditated Left Over",
    "sourceName": "Premeditated Left Over",
    "pricePerServing": 211.52,
    "extendedIngredients": [
      {
        "id": 93775,
        "aisle": "Baking",
        "image": "chocolate-candy-melt.png",
        "consitency": "solid",
        "name": "candy melts",
        "original": "12 ounces chocolate candy melts",
        "originalString": "12 ounces chocolate candy melts",
        "originalName": "chocolate candy melts",
        "amount": 12.0,
        "unit": "ounces",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 12.0,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 340.194,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 93775,
        "aisle": "Baking",
        "image": "chocolate-candy-melt.png",
        "consitency": "solid",
        "name": "candy melts",
        "original": "12 ounces white candy melts",
        "originalString": "12 ounces white candy melts",
        "originalName": "white candy melts",
        "amount": 12.0,
        "unit": "ounces",
        "meta": [
          "white"
        ],
        "metaInformation": [
          "white"
        ],
        "measures": {
          "us": {
            "amount": 12.0,
            "unitShort": "oz",
            "unitLong": "ounces"
          },
          "metric": {
            "amount": 340.194,
            "unitShort": "g",
            "unitLong": "grams"
          }
        }
      },
      {
        "id": 19157,
        "aisle": "Sweet Snacks",
        "image": "candy-coated-chocolate-pieces-or-M&M's.jpg",
        "consitency": "solid",
        "name": "m&m candy",
        "original": "Sugar flowers or Easter candy for decorating",
        "originalString": "Sugar flowers or Easter candy for decorating",
        "originalName": "Sugar flowers or Easter candy for decorating",
        "amount": 5.0,
        "unit": "servings",
        "meta": [
          "for decorating"
        ],
        "metaInformation": [
          "for decorating"
        ],
        "measures": {
          "us": {
            "amount": 5.0,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 5.0,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 1090,
        "aisle": "Baking",
        "image": "milk-powdered.jpg",
        "consitency": "solid",
        "name": "milk powder",
        "original": "2 teaspoons meringue powder (or powdered egg whites)",
        "originalString": "2 teaspoons meringue powder (or powdered egg whites)",
        "originalName": "meringue powder (or powdered egg whites)",
        "amount": 2.0,
        "unit": "teaspoons",
        "meta": [
          "(or powdered egg whites)"
        ],
        "metaInformation": [
          "(or powdered egg whites)"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 19336,
        "aisle": "Baking",
        "image": "powdered-sugar.jpg",
        "consitency": "solid",
        "name": "powdered sugar",
        "original": "2 cups powdered sugar",
        "originalString": "2 cups powdered sugar",
        "originalName": "powdered sugar",
        "amount": 2.0,
        "unit": "cups",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 473.176,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 4615,
        "aisle": "Oil, Vinegar, Salad Dressing;Baking",
        "image": "shortening.jpg",
        "consitency": "solid",
        "name": "shortening",
        "original": "2 teaspoons shortening, divided (optional, to thin the melted candy)",
        "originalString": "2 teaspoons shortening, divided (optional, to thin the melted candy)",
        "originalName": "shortening, divided (optional, to thin the melted candy)",
        "amount": 2.0,
        "unit": "teaspoons",
        "meta": [
          "divided",
          "melted",
          "thin",
          "(optional, to the candy)"
        ],
        "metaInformation": [
          "divided",
          "melted",
          "thin",
          "(optional, to the candy)"
        ],
        "measures": {
          "us": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 2.0,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 14412,
        "aisle": "Beverages",
        "image": "water.png",
        "consitency": "liquid",
        "name": "water",
        "original": "3 tablespoons water",
        "originalString": "3 tablespoons water",
        "originalName": "water",
        "amount": 3.0,
        "unit": "tablespoons",
        "meta": [],
        "metaInformation": [],
        "measures": {
          "us": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          },
          "metric": {
            "amount": 3.0,
            "unitShort": "Tbsps",
            "unitLong": "Tbsps"
          }
        }
      }
    ],
    "id": 718085,
    "title": "How to Make Hollow Chocolate Easter Eggs",
    "readyInMinutes": 45,
    "servings": 5,
    "image": "https://spoonacular.com/recipeImages/718085-556x370.jpg",
    "imageType": "jpg",
    "cuisines": [],
    "dishTypes": [
      "side dish"
    ],
    "diets": [
      "gluten free",
      "fodmap friendly"
    ],
    "occasions": [
      "easter"
    ],
    "winePairing": {},
    "instructions": "1. In a small microwave-safe bowl, carefully melt the chocolate candy melts in the microwave for 30 seconds, and then in increments of 15 seconds, stirring between each cycle. Stop when most of the candy is melted and let the bowl sit for a couple of minutes; the heat of the bowl will continue to melt the candy. Add 1 teaspoon shortening and stir well. If the chocolate isnt completely melted, return to the microwave for an additional 15 seconds.2. Working with one mold at a time, put approximately 2 tablespoons of melted candy in the bottom of the mold and tilt the mold to roll the candy around the sides. Coax it along with the back of a spoon if necessary. Make sure the entire mold is covered with a thin layer, all the way up to the top of the mold, and try to keep it from pooling at the bottom. If it does, remove a little with the spoon.3. Repeat until youve coated 10 molds, and place the mold in the refrigerator for 10 minutes, or until the candy is firm.4. Using the instructions in #1, melt the white candy melts, adding 1 teaspoon of shortening. Let it cool until just barely warm but still fluid, and add a layer on top of the first layer. You may not need quite as much candy for this layer. Work quickly so the first layer doesnt have a chance to melt. Again, make sure you bring the white layer all the way to the top of the mold, using the back of a spoon if necessary.5.When all 10 eggs are coated, return the mold to the refrigerator until very firm  about 30 minutes.6. Turn the mold over on a baking sheet or towel and flex gently. If the eggs dont fall out easily, chill a little longer.7. After unmolding eggs, gently trim any extra candy from the top edge with a sharp knife or vegetable peeler, handling the eggs as little as possible. You may want to wear thin plastic gloves or use a paper towel to avoid leaving fingerprints.8. Fill 5 of the eggs with candy or treats.9. Make royal icing by combining the powdered sugar and meringue powder, and then adding the water a little at a time, beating continuously. Beat on medium high for 3 minutes, adding a little more water if necessary to get an icing with good piping consistency.10.Pipe a thin line of royal icing around the top edge of the filled eggs and carefully place the top egg shell over it, pressing gently. Remove any excess icing from the outside with a knife.11.Using a pastry bag fitted with a #21 open star tip(or other decorative tip) pipe around the egg, covering the line where the top and bottom meet. Allow the icing to dry thoroughly before moving or decorating the egg.12. Tint some of the icing green for leaves and pipe with a small leaf tip. Add decorations of your choice. You can find tips for making flowers with royal icing here.You can pipe names onto the hollow chocolate eggs and use them in place of name cards on your Easter dinner table. They will do triple duty as edible name cards, Easter table decor, and treat for your guests to take home with them.When your family and friends break open their chocolate eggs they will be surprised to discover the treats you have hidden inside!More DIY Easter IdeasDIY Yarn Easter EggsHow to Make Sugar Eggs with a Panoramic Scene15 DIY Easter Decorating Ideas15 Easter Crafts for KidsHow To Dye Eggs Naturally15 Ways to Decorate EggsEaster Games for KidsHot Cross Buns RecipeTucked away in the Huckleberry Mountains of Washington State, Lorinda spends her time baking for her blog, The Rowdy Baker, and writes a monthly food column Food for Thought for Yummy Northwest. She was a competitor in Blogger Idol 2013 (no small feat for a food blogger) but prefers to gather her fame in the form of blue ribbons at the county fair. She bakes with abandon and watches the flour fly! You can connect with her on Facebookor Pinterest.Yum",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "In a small microwave-safe bowl, carefully melt the chocolate candy melts in the microwave for 30 seconds, and then in increments of 15 seconds, stirring between each cycle. Stop when most of the candy is melted and let the bowl sit for a couple of minutes; the heat of the bowl will continue to melt the candy.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404762,
                "name": "microwave",
                "image": "microwave.jpg"
              },
              {
                "id": 404783,
                "name": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Add 1 teaspoon shortening and stir well. If the chocolate isnt completely melted, return to the microwave for an additional 15 seconds.",
            "ingredients": [
              {
                "id": 4615,
                "name": "shortening",
                "image": "shortening.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404762,
                "name": "microwave",
                "image": "microwave.jpg"
              }
            ]
          },
          {
            "number": 3,
            "step": "Working with one mold at a time, put approximately 2 tablespoons of melted candy in the bottom of the mold and tilt the mold to roll the candy around the sides. Coax it along with the back of a spoon if necessary. Make sure the entire mold is covered with a thin layer, all the way up to the top of the mold, and try to keep it from pooling at the bottom. If it does, remove a little with the spoon.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Repeat until youve coated 10 molds, and place the mold in the refrigerator for 10 minutes, or until the candy is firm.",
            "ingredients": [],
            "equipment": [],
            "length": {
              "number": 10,
              "unit": "minutes"
            }
          },
          {
            "number": 5,
            "step": "Using the instructions in #1, melt the white candy melts, adding 1 teaspoon of shortening.",
            "ingredients": [
              {
                "id": 93775,
                "name": "candy melts",
                "image": "chocolate-candy-melt.png"
              },
              {
                "id": 4615,
                "name": "shortening",
                "image": "shortening.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 6,
            "step": "Let it cool until just barely warm but still fluid, and add a layer on top of the first layer. You may not need quite as much candy for this layer. Work quickly so the first layer doesnt have a chance to melt. Again, make sure you bring the white layer all the way to the top of the mold, using the back of a spoon if necessary.5.When all 10 eggs are coated, return the mold to the refrigerator until very firm  about 30 minutes.",
            "ingredients": [],
            "equipment": [],
            "length": {
              "number": 30,
              "unit": "minutes"
            }
          },
          {
            "number": 7,
            "step": "Turn the mold over on a baking sheet or towel and flex gently. If the eggs dont fall out easily, chill a little longer.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404727,
                "name": "baking sheet",
                "image": "baking-sheet.jpg"
              }
            ]
          },
          {
            "number": 8,
            "step": "After unmolding eggs, gently trim any extra candy from the top edge with a sharp knife or vegetable peeler, handling the eggs as little as possible. You may want to wear thin plastic gloves or use a paper towel to avoid leaving fingerprints.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404693,
                "name": "peeler",
                "image": "peeler.png"
              },
              {
                "id": 405895,
                "name": "paper towels",
                "image": "paper-towels.jpg"
              },
              {
                "id": 404745,
                "name": "knife",
                "image": "chefs-knife.jpg"
              }
            ]
          },
          {
            "number": 9,
            "step": "Fill 5 of the eggs with candy or treats.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 10,
            "step": "Make royal icing by combining the powdered sugar and meringue powder, and then adding the water a little at a time, beating continuously. Beat on medium high for 3 minutes, adding a little more water if necessary to get an icing with good piping consistency.10.Pipe a thin line of royal icing around the top edge of the filled eggs and carefully place the top egg shell over it, pressing gently.",
            "ingredients": [
              {
                "id": 19336,
                "name": "powdered sugar",
                "image": "powdered-sugar.jpg"
              },
              {
                "id": 14412,
                "name": "water",
                "image": "water.png"
              }
            ],
            "equipment": [],
            "length": {
              "number": 3,
              "unit": "minutes"
            }
          },
          {
            "number": 11,
            "step": "Remove any excess icing from the outside with a knife.11.Using a pastry bag fitted with a #21 open star tip(or other decorative tip) pipe around the egg, covering the line where the top and bottom meet. Allow the icing to dry thoroughly before moving or decorating the egg.1",
            "ingredients": [],
            "equipment": [
              {
                "id": 404757,
                "name": "pastry bag",
                "image": "pastry-bag.jpg"
              },
              {
                "id": 404745,
                "name": "knife",
                "image": "chefs-knife.jpg"
              }
            ]
          },
          {
            "number": 12,
            "step": "Tint some of the icing green for leaves and pipe with a small leaf tip.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 13,
            "step": "Add decorations of your choice. You can find tips for making flowers with royal icing here.You can pipe names onto the hollow chocolate eggs and use them in place of name cards on your Easter dinner table. They will do triple duty as edible name cards, Easter table decor, and treat for your guests to take home with them.When your family and friends break open their chocolate eggs they will be surprised to discover the treats you have hidden inside!More DIY Easter IdeasDIY Yarn Easter Eggs",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 14,
            "step": "How to Make Sugar Eggs with a Panoramic Scene15 DIY Easter Decorating Ideas15 Easter Crafts for Kids",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 15,
            "step": "How To Dye Eggs Naturally15 Ways to Decorate Eggs",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 16,
            "step": "Easter Games for Kids",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 17,
            "step": "Hot Cross Buns Recipe",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 18,
            "step": "Tucked away in the Huckleberry Mountains of Washington State, Lorinda spends her time baking for her blog, The Rowdy",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 19,
            "step": "Baker, and writes a monthly food column Food for Thought for Yummy Northwest. She was a competitor in Blogger Idol 2013 (no small feat for a food blogger) but prefers to gather her fame in the form of blue ribbons at the county fair. She bakes with abandon and watches the flour fly! You can connect with her on Facebookor Pinterest.Yum",
            "ingredients": [],
            "equipment": []
          }
        ]
      }
    ]
  }
]
export default recipes;