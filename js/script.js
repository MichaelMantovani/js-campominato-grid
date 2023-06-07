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
      let mode = 'easy'
      if (difficulty == 2){
        cellTot = 81
        mode = 'medium'
      } else if (difficulty == 3){
        cellTot = 49
        mode = 'hard'
      } 

      // In base alla scelta della difficoltà genero il numero di celle e la loro struttura 
      for (let i = 1; i <= cellTot; i++) {
          const cell = createCell (i)

          cell.classList.add(mode)
              
            
          cell.addEventListener('click', function(){
            console.log(i)
            this.classList.add('clicked')
          })
            grid.appendChild(cell)
        }
      })
      
    
