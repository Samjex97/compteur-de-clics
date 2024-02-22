let partenza = 0;
let bottone = document.getElementById('clickButton');
let contatore = document.getElementById('clickCount');
let reset = document.getElementById('ResetCounter');

bottone.addEventListener("click",function() {
partenza++;
contatore.textContent = 'Numero di Clic: ' + partenza;
if (partenza == 10) 
{
    alert('Bravo !!! Hai raggiunto ' + partenza + ' clic');
}
else if (partenza == 20) 
{
    alert('Bravo !!! Hai raggiunto ' + partenza + ' clic');
   
};
ScaryImage();


});

reset.addEventListener('click', function() {
partenza = 0;
contatore.textContent = 'Numero di Clic: ' +  partenza;
alert('Hai resettato');

console.log(partenza);
});


// AGGIUNTA IMMAGINE IN UNA FUNZIONE 

