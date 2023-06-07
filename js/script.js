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


