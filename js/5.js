function $(obj){
	return new base(obj);
}
function base(obj){
	this.else=[];
  if (obj!=undefined) {
    this.else.push(obj)
  }
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
       return document.querySelectorAll(Clas);
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