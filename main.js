const bodyElement = document.querySelector('body')
let mainElement = document.createElement('main')
bodyElement.append(mainElement)

let buttonElement = document.createElement('button')
bodyElement.append(buttonElement)
buttonElement.append('Manchester United')

let imageElement = document.createElement('img')
imageElement.className = 'image'
imageElement.src = 'http://pngimg.com/uploads/manchester_united/manchester_united_PNG27.png'
mainElement.append(imageElement)

let aElement = document.createElement('a')
aElement.href = 'https://www.manutd.com/'
mainElement.append(aElement)
aElement.append('MANCHESTER')

buttonElement.addEventListener('click', function(){
    mainElement.remove()
})