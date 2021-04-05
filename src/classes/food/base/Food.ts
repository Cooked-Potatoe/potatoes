import { CookingType } from "./enums/CookingTypes";
import { NutritionalComposition } from "./NutritionalComposition";

export interface Food {
    nutritionalComposition: NutritionalComposition;
    weight: number;
    defaultDose: number;
    cooked: CookingType;

    eat(weight?: number): any

    cook(newCookingType: CookingType): any
}
