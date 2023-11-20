export class Candidat{
    private _id: number;
    private _nom: string;
    private _prenom: string;
    private _dernierposte: string;
    private _datedeb: string;
    private _datefin: string;

    constructor(id: number,nom: string,prenom: string,dernierposte: string,datedeb: string,datefin: string){
        this._id= id;
        this._nom= nom;
        this._prenom= prenom;
        this._dernierposte= dernierposte;
        this._datedeb= datedeb;
        this._datefin= datefin;
    }
    get id() {
      return this._id
    }
    
    set id(val: number) {
      this._id = val
    }
    
    get nom() {
      return this._nom
    }
    
    set nom(val: string) {
      this._nom = val
    }
    
    get prenom() {
      return this._prenom
    }
    
    set prenom(val: string) {
      this._prenom = val
    }
    
    get dernierposte() {
      return this._dernierposte
    }
    
    set dernierposte(val: string) {
      this._dernierposte = val
    }
    
    get datedeb() {
      return this._datedeb
    }
    
    set datedeb(val: string) {
      this._datedeb = val
    }
    
    get datefin() {
      return this._datefin
    }
    
    set datefin(val: string) {
      this._datefin = val
    }

   
    public toString(): string {
        return this._nom + ", " + this._prenom +", "+ ", "+ this._id +", "+ this._dernierposte +", "+ this._datedeb +", "+ this._datefin
        }

}