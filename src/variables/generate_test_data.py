#!/usr/bin/env python

import datetime
import json
from random import randint

def daterange( start_date, end_date ):
    for n in range( ( end_date - start_date ).days + 1 ):
        yield start_date + datetime.timedelta( n )

today = datetime.date.today()
start_date = today.replace(month = today.month - 1)
end_date = today.replace(month = today.month + 1)
# start_date = today.replace(day = today.day - 1)
# end_date = today.replace(day = today.day + 1)

ingredientsNeededPred = {};
ingredientCategoriesNeededPred ={};
menuItemsSoldPast = {};

for date in daterange(start_date, end_date):
	date = date.isoformat()
	ingredientsNeededPred.update({
		date: {
			"Vegetables": {
				"Chickpea ": randint(0, 10),
				"Carrots": randint(0, 5),
				"Tomatoes": randint(0, 3),
				"Salad": randint(5, 10),
				"Cucumber": randint(5, 10),
				"Mushrooms": randint(5, 10),
				"Eggplant": randint(0, 10),
				"Parsnip": randint(0, 5),
				"Soy beans": randint(0, 5),
				"Cilantro": randint(0, 2)
			},
			"Fruits": {
				"Oranges": randint(3, 5),
				"Lemon": randint(0, 5)
			},
			"Dairies": {
				"Cheese": randint(5, 10),
				"Milk": randint(5, 10)
			},
			"Beverages": {
				"Coffee Beans": randint(5, 10),
				"Hibiscus Leaves": randint(0, 10)
			},
			"Other": {
				"Peanut Butter": randint(5, 10),
				"Flour": randint(15, 20)
			},
			"Proteins": {
				"Eggs": randint(5, 10),
				"Seitan": randint(5, 10),
				"Tempeh": randint(0, 10),
				"Tofu": randint(5, 10)
			}
		}
	})

	ingredientCategoriesNeededPred.update({
		date: {
			"Vegetables": sum(ingredientsNeededPred[date]["Vegetables"].values()),
			"Fruits": sum(ingredientsNeededPred[date]["Fruits"].values()),
			"Proteins": sum(ingredientsNeededPred[date]["Proteins"].values()),
			"Beverages": sum(ingredientsNeededPred[date]["Beverages"].values()),
			"Other": sum(ingredientsNeededPred[date]["Other"].values()),
		}
	})

	menuItemsSoldPast.update({
		date: {
			"Cold Drinks": randint(65,90),
			"Hot Drinks": randint(10,30),
			"Sandwiches": randint(60,70),
			"Platters": randint(30,40),
			"Sides": randint(0,20)
		}
	})

# json = json.dumps(ingredientCategoriesNeededPred)
# print json

with open('ingredientsNeededPred.json', 'w') as outfile:
    json.dump(ingredientsNeededPred, outfile)

with open('ingredientCategoriesNeededPred.json', 'w') as outfile:
    json.dump(ingredientCategoriesNeededPred, outfile)
    
with open('menuItemsSoldPast.json', 'w') as outfile:
    json.dump(menuItemsSoldPast, outfile)
