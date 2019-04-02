var base={
	else:[],
	getId:function(id){
      var o=document.querySelector(id);
      this.else.push(o);
      return this;
	},
	getTag:function(tagName){
       var ao=document.querySelectorAll(tagName);
       for(var i=0;i<ao.length;i++){
       	    this.else.push(ao[i]);
       }
          return this;
	},
    getClas:function(Clas){
      var aoo=document.querySelectorAll(Clas);
      for(var i=0;i<aoo.length;i++){
            this.else.push(aoo[i]);
      }
       return this;
      }

    },
    css:function(prtotype,value){
       for(var i=0;i<this.else.length;i++){
             this.else[i].style[prtotype]=value;
       }
       return this;
    } 
};