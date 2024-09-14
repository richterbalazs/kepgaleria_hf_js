import { kepLISTA } from "./model/adat.js";
import Kartyak from "./view/Kartyak.js";
import Kartya from "./view/Kartya.js";

const kivKepLista=[]

const taroloElem = $(".tartalom");
const kivElem = $(".kivalasztott");

new Kartyak(kepLISTA, taroloElem)

//rákattintunk a kiválaszt gombra, akkor a hozzá tartozó kutya adata kerüljön bele a kivKutyaListába.
//feliratkozunk a saját eseményünkre
$("window").on("kivalaszt",(event)=>{
    console.log(event.detail)
    kivKepLista.push(event.detail)
    console.log(kivKepLista)
    new Kartya(event.detail, kivElem)
})