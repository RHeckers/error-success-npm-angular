import { Injectable } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class ErrorSuccessNpmService {

  constructor() { }

  // Insert error message
  insertMsgAfter(msg, insertAfter, time, type?, styling?){
    const error = document.createElement('p');
    const duration = time;
    let color;
    
    switch (type) {
      case 'success':
        color = 'green';
        break;
    
      case 'error':
        color = 'red';
        break;
    
      default:
        color = 'red';
        break;
    }

    if(styling){
      error.className = styling;  
    }else{
      error.style.color = color;
      error.style.fontSize = '1rem';
      error.style.fontWeight = 'bold';
      error.style.textAlign = 'center';
      error.style.textTransform = 'uppercase';
      error.style.width = '50%';
      error.style.marginLeft = '25%';
      error.style.padding = '10px';
      error.style.border = '2px solid ' + color;
    }

    error.innerHTML = msg;
    insertAfter.parentNode.insertBefore(error, insertAfter.nextSibling);
    setTimeout(() => {
      error.remove();
    }, time);
  }

  insertMsgBefore(msg, insertBefore, time, type?, styling?){
    const error = document.createElement('p');
    const duration = time;
    const container = insertBefore.parentElement; 
    let color;
    
    switch (type) {
      case 'success':
        color = 'green';
        break;
    
      case 'error':
        color = 'red';
        break;
    
      default:
        color = 'red';
        break;
    }

    if(styling){
      error.className = styling;  
    }else{
      error.style.color = color;
      error.style.fontSize = '1rem';
      error.style.fontWeight = 'bold';
      error.style.textAlign = 'center';
      error.style.textTransform = 'uppercase';
      error.style.width = '50%';
      error.style.marginLeft = '25%';
      error.style.padding = '10px';
      error.style.border = '2px solid ' + color;
    }

    error.innerHTML = msg;
    container.insertBefore(error, insertBefore);
    setTimeout(() => {
      error.remove();
    }, time);

  }

  insertMsgTopOfPage(msg, time, type?, styling?){
    const error = document.createElement('p');
    const duration = time;
    let color;
    
    switch (type) {
      case 'success':
        color = 'green';
        break;
    
      case 'error':
        color = 'red';
        break;
    
      default:
        color = 'red';
        break;
    }

    if(styling){
      error.className = styling;  
    }else{
      error.style.color = color;
      error.style.fontSize = '1rem';
      error.style.fontWeight = 'bold';
      error.style.textAlign = 'center';
      error.style.textTransform = 'uppercase';
      error.style.width = '50%';
      error.style.marginLeft = '25%';
      error.style.padding = '10px';
      error.style.border = '2px solid ' + color;
    }

    error.innerHTML = msg;
    document.body.insertBefore(error, document.body.firstChild);
    setTimeout(() => {
      error.remove();
    }, time);


  }
}
