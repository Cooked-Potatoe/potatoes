export class NutritionalComposition {
    public calories: number;
    public proteins: number;
    public fat: number;
    public carbohydrates: number;
    public fiber: number;

    constructor(calories: number, proteins: number, fat: number, carbohydrates: number, fiber: number) {
        this.calories = calories;
        this.proteins = proteins;
        this.fat = fat;
        this.carbohydrates = carbohydrates;
        this.fiber = fiber;
    }

}
