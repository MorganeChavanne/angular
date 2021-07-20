import { Boisson } from "./boisson";
export class Bar{
    private boisson: Boisson[];
    private _name;

    get name(): string{
        return this._name
    }

    constructor(name: string){
        this._name = name;
        this.boisson = [
            {
                name: "vodka coca",
                alcohol: true,
                price: 9
            },
            {
                name: "coca",
                alcohol: false,
                price: 4
            },
            {
                name: "vodka",
                alcohol: true,
                price: 6
            },
            {
                name: "Jet Perrier",
                alcohol: true,
                price: 9
            },
            {
                name: "Jet",
                alcohol: true,
                price: 6
            },
            {
                name: "Perrier",
                alcohol: false,
                price: 4
            },
        ]

        this.affichageBoissons();
    }

    affichageBoissons(){
        for (const lesBoissons of this.boisson) {
            console.log(lesBoissons.name);
            console.log(lesBoissons.alcohol ? "Avec alcool" : "Sans alcool");
            console.log(lesBoissons.price + "€");
        }
    }
}