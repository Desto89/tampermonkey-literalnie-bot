// ==UserScript==
// @name         Literalnie Bot
// @author       Desto
// @include      https://literalnie.fun/
// ==/UserScript==

const buttons = document.getElementsByClassName('key')


const words = ['akcja', 'babka', 'całka', 'ćmisz', 'dawca', 'ekipa', 'fajka', 'gniew', 'horda', 'ikona', 'język', 'kotek', 'lwica', 'łapka', 'macka', 'nitka', 'obawa', 'plecy', 'rolnik', 'skała', 'śruba', 'tęcza', 'ugoda', 'wdowa', 'zebra', 'ździr', 'żmija']

window.onload = function go () {
   setTimeout(()=>{
       const word = words[Math.floor(Math.random()*words.length)];
       word.split('').map((letter)=>{
       for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML === letter) {
           buttons[i].click()
        }
       }
    })
    document.querySelector("#__next > div > div.inputcontainer > div.klawiatura > div:nth-child(4) > button:nth-child(1)").click()
    setTimeout(()=>{
        for (let i = 1; i <= 5; i ++) {
          let input = document.querySelector(`#__next > div > div.inputcontainer > div.planszawrap > div > div:nth-child(1) > div:nth-child(${i})`)
          if (input.className === 'letter dobrze') {
             sessionStorage.setItem(`letter${i}`, input.innerHTML)
          }
        }
        if (sessionStorage.getItem('letter1') && sessionStorage.getItem('letter2') && sessionStorage.getItem('letter3') && sessionStorage.getItem('letter4') && sessionStorage.getItem('letter5')) {
           alert(
              `${sessionStorage.getItem('letter1')}${sessionStorage.getItem('letter2')}${sessionStorage.getItem('letter3')}${sessionStorage.getItem('letter4')}${sessionStorage.getItem('letter5')}`
           )
        }
        window.location.reload(false) },600)
   }, 500)
}
