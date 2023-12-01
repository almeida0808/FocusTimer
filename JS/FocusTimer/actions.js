import state from "./state.js";
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  if(state.minutes == 0){
    openError()
   return
  }
  elements.error.classList.remove('open')

  state.isRunning = document.documentElement.classList.toggle("running");

timer.countdown()

sounds.btnPressAudio.play()

}

export function set() {
  elements.minutes.setAttribute('contenteditable', true)
  elements.minutes.focus()


}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running");
  timer.updateDisplay()
  
}

export function toggleMusic() {
 state.isMute = document.documentElement.classList.toggle("music-on"); 


 if(state.isMute){
  sounds.bgAudio.play()
return}

sounds.bgAudio.pause()

}


export function removerMusic(){
  document.documentElement.classList.remove("music-on"); 
sounds.bgAudio.pause()
}

function openError() {
  elements.error.classList.add('open')
}