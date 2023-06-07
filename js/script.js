console.log('JS OK')


// Recupero gli elementi dal DOM
const difficultyInput = document.getElementById('difficulty');
const playButton = document.getElementById('btn-play');
const grid = document.getElementById('grid')


// CREO UNA FUNZIONE che genera una cella numerata

 function createCell (number) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.append(number)
      return cell;
    }



    playButton.addEventListener('click', function(){

      // Recupero il valore della scelta della difficoltà
      const difficulty = difficultyInput.value
      

      // Verifico la scelta dell'utente
      let cellTot = 100
      if (difficulty == 2){
        cellTot = 81
      } else if (difficulty == 3){
        cellTot = 49
      } 


      for (let i = 1; i <= cellTot; i++) {
         const cell = createCell (i)

         if (cellTot == 100){
            cell.classList.add('easy')
          } else if (cellTot == 81) {
            cell.classList.add('medium')
          } else if (cellTot == 49) {
            cell.classList.add('hard')
          }
          
          cell.addEventListener('click', function(){
            console.log(i)
            this.classList.add('clicked')
          })
          
          grid.appendChild(cell)
        }
      })
      
    
