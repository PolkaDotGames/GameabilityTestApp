console.log(carddata)
var cards = []
function GenerateCard(){
    var card = document.createElement('div')
    var cardnum = Math.floor(Math.random()*120)
    var newcard = carddata[cardnum]
    //カードの種類 攻撃、守り、魔法　
    var cardclass = document.createElement('p')
    //カードステータス
    var cardstatus = document.createElement('p')
    if(newcard.class=="attack"){
        cardclass.innerText = "攻撃"
        cardstatus.innerText = newcard.status
    }else if(newcard.class=="defense"){
        cardclass.innerText = "守り"
        cardstatus.innerText = newcard.status
    }
    else if(newcard.class=="both"){
        cardclass.innerText = "攻/守"
        cardstatus.innerText = newcard.status +"/"+newcard.status2
    }
    else if(newcard.class=="HPheal"){
        cardclass.innerText = "HP回復"
        cardstatus.innerText = newcard.status
    }
    else if(newcard.class=="MPheal"){
        cardclass.innerText = "MP回復"
        cardstatus.innerText = newcard.status
    }else if(newcard.class=="unique"){
        cardclass.innerText="特殊"
        cardstatus.innerText = newcard.explanation
    }
    //カードのタイプ　無属性、火、水、草
    var cardtype = document.createElement('p')
    if(newcard.type=="none"){
        cardtype.innerText = "無属性"
    }
    else if(newcard.type=="fire"){
        cardtype.innerText = "火"
    }
    else if(newcard.type=="water"){
        cardtype.innerText = "水"
    }
    else if(newcard.type=="grass"){
        cardtype.innerText = "草"
    }
    else if(newcard.type=="item"){
        cardtype.innerText = "アイテム"
    }
   
    //カードの命中率
    var cardhitrate = document.createElement('p')
    cardhitrate.innerText ="命中率"+ newcard.hitrate + "%"

    card.setAttribute('class','card')
    card.setAttribute('onclick','UseCard(this)')
    card.appendChild(cardclass)
    card.appendChild(cardtype)
    card.appendChild(cardstatus)
    card.appendChild(cardhitrate)
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