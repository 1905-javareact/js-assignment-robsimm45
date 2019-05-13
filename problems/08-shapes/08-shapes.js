/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  
  let charHold = ''
  switch (shape){
    case "Square":
      for(let sh = 0; sh < height; sh++){
        for(let sw = 0; sw < height; sw++){
          charHold += character
        }
        console.log(charHold)
        charHold = ''
      }
      break;
    case "Triangle":
      for(let th = 0; th < height; th++){
        for(let tw = 0; tw <= th; tw++){
          charHold += character
        }
        console.log(charHold)
        charHold = ''
      }
      break;

    case "Diamond":
      for(let dh = 0; dh < height; dh++){
        if(dh%2 === 0){
          for(let begin = 0; begin < (height-dh)/2; begin++){
            charHold += ' '
          }

          
          for(let dw = 0; dw <= dh; dw++){
            charHold += character
          }
          
          charHold += ' '
          console.log(charHold)
          charHold = ''
        }
        
      }

      for(let dh = height; dh >= 0; dh--){
        if(dh%2 === 0 && dh !== height-1){
          for(let begin = 0; begin < (height-dh)/2; begin++){
            charHold += ' '
          }

          
          for(let dw = 0; dw <= dh; dw++){
            charHold += character
          }
          
          charHold += ' '
          console.log(charHold)
          charHold = ''
        }
        
      }


      break;

    default:
  }
}

printShape("Square", 5, '*')
printShape("Triangle", 3, '-')
printShape("Diamond", 7, '$')