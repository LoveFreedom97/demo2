function $(){
	return new base();
}
function base(){
	this.else=[]
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
    base.prototype.css=function(prototype,value){
    	for(var  i=0; i<this.else.length; i++){
    		this.else[i].style[prototype]=value;
    	}
    	return this;
    };
    base.prototype.val=function(valu){
    	for(var i=0;i<this.else.length;i++){
             this.else[i].innerHTML=valu;
    	}
    	return this;
    }