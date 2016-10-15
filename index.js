var getFirstSelector=(selector)=>document.querySelector(selector)
var nestedTarget=()=>(document.querySelector('#nested')).querySelector('.target')
var increaseRankBy=(n)=>{
  var list=document.querySelectorAll('.ranked-list')
  console.log('here!!!')
  for(var i in list){
    var el=list[i].children
    for(var j in el){
      el[j].innerHTML=''+(parseInt(el[j].innerHTML)+n)
    }
  }
}
function deepestChild(){
  var best=undefined
  var depth=0
  var list=document.querySelectorAll('div#grand-node')
  for(var i in list){
    var start=list[i]
    var dc=(node,level)=>{
      var cl=node.children
      if(cl.length==0) return [node,level]
      var opt=[cl[0],0]
      for(i in cl){
        var rec=dc(cl[i],level+1)
        if(rec[1]>opt[1])
            {opt[0]=rec[0];opt[1]=rec[1]}
      }
      return opt
    }
    var r=dc(start,0)
    if(r[1]>depth){depth=r[1],best=r[0]}
  }
  return best
}
