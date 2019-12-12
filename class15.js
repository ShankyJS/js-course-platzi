var contador = 0; 

const pusoHuevosLaTunca = () => Math.random() < 0.25;

do { 
    contador++
} while (!pusoHuevosLaTunca())

if (contador = 1) {
    console.log(`Fui a ver si puso huevos la tunca ${contador} vez`)
} else {
    console.log(`Fui a ver si puso huevos la tunca ${contador} veces`)
}  