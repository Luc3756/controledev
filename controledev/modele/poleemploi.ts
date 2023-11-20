export class PoleEmploi{
    private _poleemploi: boolean;
    private _nomconseiller: string;
    private _prenomconseiller: string;

    constructor(poleemploi: boolean,nomconseiller: string,prenomconseiller: string){
        this._poleemploi = poleemploi;
        this._nomconseiller= nomconseiller;
        this._prenomconseiller= prenomconseiller;
    }

     get poleemploi() {
      return this._poleemploi
    }
    
    set poleemploi(val: boolean) {
      this._poleemploi = val
    }
    
    get nomconseiller() {
      return this._nomconseiller
    }
    
    set nomconseiller(val: string) {
      this._nomconseiller = val
    }
    
    get prenomconseiller() {
      return this._prenomconseiller
    }
    
    set prenomconseiller(val: string) {
      this._prenomconseiller = val
    }

    public toString(): string {
        return this._poleemploi + ", " + this._nomconseiller +", "+this._prenomconseiller
        }
}