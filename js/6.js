function $(obj){
	return new base(obj);
}
function base(obj){
	this.else=[];
  if (typeof obj=='object') {
    this.else.push(obj)
  }else if (typeof obj=='string') {
     this.selector(obj)
  }
}

base.prototype.selector=function(id){
  var ox=document.querySelectorAll(id);
  for(var i=0;i<ox.length;i++){
    this.else.push(ox[i]);
  }
  return this;
}

base.prototype.getId=function(id){
      var o=document.querySelector(id);
      this.else.push(o);
      return this;
	};
	base.prototype.getTag=function(tagName){
       var ao=document.querySelectorAll(tagName);
       for(var i=0;i<ao.length;i++){
       	    this.else.push(ao[i]);
       }
          return this;
	};
	base.prototype.getClas=function(Clas){
         var o=document.querySelectorAll(Clas);
         for(var i=0;i<o.length;i++){
           thsi.else.push(o[i]);
         }
       return this;
    };


    base.prototype.addClass=function(cls){
          //遍历
          for(var i=0;i<this.else.length;i++){
            //class='';   class='one';
            //class='on'  class='one on'
            //获取节点对象修改之前的class值
            var preClass=this.else[i].className;
            if(preClass==''){
              //原先没有class值
              this.else[i].className=cls;
            }else{
              //节点改变前，有class值，----->追加
              this.else[i].className=preClass+' '+cls;
            }
          }
          return this;
        };

    base.prototype.removeClass=function(cls){
  //class='on';   ---->    class='';   
  //class='one on' ---->    class='one'  
  //class='one on two'
  //class='on one two'
  for(var i=0;i<this.else.length;i++){
    var preClass=this.else[i].className;//获取改变前的class值
    var arr=preClass.split(' ');//利用空格将class拆分为数组
    //多个class
    if(arr.length!=1){
      arr.splice(arr.indexOf(cls),1);//删除数组中需要祛除的class值
      var newClass=arr.join(' ');//转为字符串class
      this.eles[i].className=newClass;  
    }else{  
      //单个class
      this.else[i].className='';
    }
  }
  return this;
};



    base.prototype.css=function(per,value){
      if (value!=undefined) {
        for(var i=0;i<this.else.length;i++){
             this.else[i].style[per]=value;
       }
      }else if(typeof per=='object'){
           for(var j=0;j<this.else.length;j++){
                for(var m in per){
                  this.else[j].style[m]=per[m];
                }
           }
      }else{
        var o=this.else[0];
        var s=o.style[per]?o.style[per]:window.getComputedStyle(o,null)[per];
        return s;
      }
         return this;

    }


    base.prototype.val=function(value){
            if (value!=undefined) {
              for(var i=0;i<this.else.length;i++){
             this.else[i].innerHTML=value;
               }
            }else{
              return this.else[0].innerHTML;
            }
            return this;
    }

    base.prototype.attr=function(per,value){
          if (value!=undefined) {
            for(var i=0;i<this.else.length;i++){
                 this.else[i][per]=value;
            }
          }else if (typeof per=='object') {
            for(var m=0;m<this.else.length;m++){
               for(var n in per){
                       this.else[m][n]=per[n];
               }
            }
          }else{
                 return this.else[0].getAttribute(per);
          }
          return this;
    }

                base.prototype.click=function(fn){
              //遍历节点对象
              
                for(var i=0;i<this.else.length;i++){
                 
                  this.else[i].onclick=fn;
                }
                return this;
              };

              base.prototype.mouseenter=function(mouse_enter){
                   for(var i=0;i<this.else.length;i++){
                         this.else[i].onmouseenter=mouse_enter;
                   }
                   return this;
              }
              base.prototype.mouseleave=function(mouse_leave){
                    for(var i=0;i<this.else.length;i++){
                          this.else[i].onmouseleave=mouse_leave;
                    }
                    return this;
              }
              base.prototype.hover=function(enter,leave){
                  for(var i=0;i<this.else.length;i++){
                        
                        this.else[i].onmouseenter=enter
                        this.else[i].onmouseleave=leave;
                  }
                  return this;
              }
        base.prototype.first=function(){
          var o=this.else[0];
          this.else=[];
          this.else.push(o);
          return this;
        }
        base.prototype.last=function(){
          var n=this.else[this.else.length-1];
          this.else=[];
          this.else.push(n);
          return this;
        }
        base.prototype.size=function(){
          return this.else.length;
        }
        base.prototype.eq=function(index){
            var m=this.else[index];
            this.else=[];
            this.else.push(m);
            return this;
        }



              //查找指定节点的位置
              base.prototype.index=function(){
                     
              };

              //查找兄弟节点
              base.prototype.siblings=function(){
                var e=this.else[0];
                var allNode=e.parentNode.children;
                this.else=[];
                for(var i=0;i<allNode.length;i++){
                      if (allNode[i]=!e) {
                      this.else.push(allNode[i]);
                  }
                  return this;
                }
                
                
                  
              };
