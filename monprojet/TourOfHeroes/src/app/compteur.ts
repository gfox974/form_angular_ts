export class Compteur {
    private valeur: number = 0;

    private inc() : any {
        let curVal = this.valeur;
        //console.log("[debug] :", curVal + 1);
        return this.valeur = (curVal + 1);    
    }

    private dec() : any {
        let curVal = this.valeur;
        //console.log("[debug] :", curVal - 1);
        return this.valeur = (curVal - 1);    
    }
}