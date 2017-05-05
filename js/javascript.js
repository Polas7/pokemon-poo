function Pokemon(nombre, color, poderAtaque){
		this.nombre = nombre
		this.color = color
		
		this.nivelDeAmistad = 0
		this.vida = 100
		this.poderAtaque = poderAtaque

		this.mostrarPokemon = function(){
			return ("hola, soy: " + this.nombre + "y soy de color: " + this.color)
		};
		this.aumentarAmistad = function(valor){
			this.nivelDeAmistad = this.nivelDeAmistad + valor
		};
		this.atacar = function(pokemon){
			pokemon.vida = pokemon.vida - this.poderAtaque
		}
	}
//agrege mas ´pokemon! mismo molde
var Pikachu = new Pokemon ("Pikachu", "Amarillo", 70)
var Charmander = new Pokemon ("Charmander","Rojo", 20)
var Vulpix = new Pokemon ("Vulpix", "Rojo", 50)
var Squirtle = new Pokemon ("Squirtle", "azul", 30)
var Dragonite = new Pokemon ("Dragonite", "mostaza", 100)



 function yoTeElijo(){
//llamamos a la funcion select donde esta las lista de pokemon
   var  luchador1= document.getElementById("pokemon1").value;
   var  luchador2 = document.getElementById("pokemon2").value;
   //lo separams en dos variables porq son dos select
   var pokenew = new Pokemon (luchador1,"Rojo", 80);
   var pokenew2= new Pokemon (luchador2,"Amarillo", 70);
   //nuestro cont, en caso de ser igual 1 a 2 no se podra usar
   var contenedor = document.getElementById("cont");
     if(luchador1 == luchador2){
      alert("Ese pokemon ya esta en batalla!! Elige otro");
      //si se puede usar, entonces llegamos a la var resultado
   }else{
      pokenew.atacar(pokenew2);
      var resultado = (luchador1+ " uso ataque rapido en " + luchador2 + " y es muy eficaz! " + luchador2 + " tiene una vida de: "+ pokenew2.vida);
      contenedor.innerHTML = resultado
   }


 }

