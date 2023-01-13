console.log("test")
var cards = []
function GenerateCard(){
    var card = document.createElement('div')
    card.setAttribute('class','card')
    card.setAttribute('onclick','UseCard(this)')
    card.innerHTML="<p>"+Math.floor(Math.random()*120)+"</p>"
    document.getElementById('card-group').appendChild(card)
    document.getElementById('card-num').innerText=Math.floor(Math.random()*120)
}
function UseCard(element){
    event.target.remove()
}
function lottery(){
    var num = document.getElementById('probabilitynumber').value
    var random =Math.floor(Math.random()*100)
    if(random<num){
        document.getElementById('probabilityresult').innerText = "あたり"
    }else{
        document.getElementById('probabilityresult').innerText = "はずれ"
    }
}