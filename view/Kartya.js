export default class Kartya {
    //adattagok
    #kepAdat = {}; // objektum
    #szuloELEM; // html dom elem
    //constructor
    constructor(adat, szuloElem) {
      this.#kepAdat = adat;
      this.#szuloELEM = szuloElem;
      this.kepMegjelenit();
  
      //létrehozzuk a gomb elemet
      this.gombElem=$(".card:last-child .card-body button");
      this.gombKattint();
    }
    //taggfügvény
    kepMegjelenit() {
      this.#szuloELEM.append(`
              <div class="card col-lg-4 col-md-6">
                  <div class="card-body">
                  <h5 class="card-title">${this.#kepAdat.nev}</h5>
                  <div class="card-body"><img src="${this.#kepAdat.kep}"class="kepek" ></div>
                  <p class="card-text">${this.#kepAdat.leiras}</p>
                  </div>
              </div>
          `);
    }
  
    gombKattint(){
      this.gombElem.on("click",function(){
        console.log(this)
        console.log(this.#kepAdat.nev)
        //saját esemény létrehozása, hogy az adott objektum át tudjon adni magáról információkat.
        const e = new CustomEvent("kiválaszt",{detail: this.#kepAdat});
        window.dispatchEvent(e);
      })
    }
  }