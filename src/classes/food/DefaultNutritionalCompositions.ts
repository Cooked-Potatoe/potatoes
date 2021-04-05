import { FoodTypes } from "./base/enums/FoodTypes";
import { NutritionalComposition } from "./base/NutritionalComposition";

const defaultNutritionalCompositions = new Map<FoodTypes, NutritionalComposition>();

defaultNutritionalCompositions
    .set(FoodTypes.POTATOS, new NutritionalComposition(73.59, 2.34, 0.11, 14.8, 2.07));

export { defaultNutritionalCompositions as DefaultNutritionalCompositions }
