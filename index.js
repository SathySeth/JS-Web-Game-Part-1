function newImage(url, left, bottom){
    let element = document.createElement('img')
    element.src = url
    element.style.position = 'fixed'
    element.style.left = `${left}px`
    element.style.bottom = `${bottom}px`
    document.body.append(element)
}

function newItem(url,left,bottom){
    let object = newImage(url,left,bottom)
    object.addEventListener('dblclick', function(){
    object.remove()
    })
}
newImage('assets/pine-tree.png',450,200)
newImage('assets/green-Character.gif',100,100)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',360,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,424)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

  
