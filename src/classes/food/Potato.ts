import { Food } from "./base/Food";
import { CookingType } from "./base/enums/CookingTypes";
import { NutritionalComposition } from "./base/NutritionalComposition";
import { DefaultNutritionalCompositions } from "./DefaultNutritionalCompositions";
import { FoodTypes } from "./base/enums/FoodTypes";

export class Potato implements Food {
    nutritionalComposition: NutritionalComposition;
    weight: number;
    defaultDose: number;
    cooked: CookingType;

    constructor(weight: number, cooked: CookingType = CookingType.RAW) {
        const multiplier = (1 / 100) * weight;
        const defaultComposition: NutritionalComposition = DefaultNutritionalCompositions.get(FoodTypes.POTATOS);

        this.nutritionalComposition = new NutritionalComposition(
            defaultComposition.calories * multiplier,
            defaultComposition.proteins * multiplier,
            defaultComposition.fat * multiplier,
            defaultComposition.carbohydrates * multiplier,
            defaultComposition.fiber * multiplier
            );

        this.weight = weight;
        this.cooked = cooked;
        this.defaultDose = 20;
    }

    cook(newCookingType: CookingType): any {
        this.cooked = newCookingType;
    }

    eat(eaten: number = this.defaultDose): any {
        this.weight -= eaten;
        this.weight = (this.weight < 0) ? 0 : this.weight;
    }
}
