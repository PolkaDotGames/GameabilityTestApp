/*
name
カードの名前

status
カードのステータス　

status2
攻守両方で使える場合の守りのステータスを入れる

type
none 無属性
fire 火属性
water 水属性
grass　草属性
dark 闇属性
item アイテム

class 
attack 攻撃
defence 守備
both 攻守
HPheal HP回復
MPheal MP回復
unique 体力を1まで下げてその差分×2で攻撃するなどの特殊な動きをするカード

plusattack　追加で攻撃できる(+3 +1など)場合はtrue,追加で攻撃できない場合はfalse

sponerate 排出率

hitrate 命中率

cost 消費MP
　
 */
[
    {
        "name":"", //カード名
        "status":3,//カードステータス
        "type":"none",//カードの属性　無属性、火属性など
        "class":"attack",//カードのクラス 攻撃　守り
        "plusattack":true,//追加で攻撃できるか
        "sponerate":2,//排出率
        "hitrate":100,//命中率
        "cost":0//消費MP
    },
]