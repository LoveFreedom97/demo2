
//创建Base对象实例
function $(){
	return new Base();
}

// 构造函数
function Base() {
	this.eles=[];
}


//在原型上添加方法

Base.prototype.getID=function(id){
	var o=document.querySelector(id);
	this.eles.push(o);//将节点对象添加到数组中
	return this;
};


Base.prototype.getTag=function(tagName){
	var os=document.querySelectorAll(tagName);
	//遍历集合，将其中的节点对象保存早eles中
	for(var i=0;i<os.length;i++){
		this.eles.push(os[i]);
	}		
	return this;//返回this，目的是为了继续调用该对象的其它方法
};


//设置样式
/*
若有一个参数，功能为：批量设置样式或者获取指定样式值
若有两个参数，功能：设置单个样式
*/
Base.prototype.css=function(per,value){	
	//两个参数，设置单个样式
	if(value!=undefined){
		//遍历节点对象
		for(var i=0;i<this.eles.length;i++){
			this.eles[i].style[per]=value;
		}
	}else if(typeof per=='object'){
		//一个参数  {widht:100px,height:100px;}
		//遍历节点
		for(var j=0;j<this.eles.length;j++){
			//遍历对象
			for(var m in per){
				this.eles[j].style[m]=per[m];//完成样式设置
			}			
		}
	}else{	
		//一个参数，获取样式
		//获取第一个元素节点的值
		var o=this.eles[0];//
		// var s=o.style[per];//行内
		// if(s==''){
		// 	s=window.getComputedStyle(o,null)[per];
		// }

		var s=o.style[per]?o.style[per]:window.getComputedStyle(o,null)[per];
		
		return s;
	}
	// if(arguments.length==2){
	// 	//遍历节点对象
	// 	for(var i=0;i<this.eles.length;i++){
	// 		this.eles[i].style[per]=value;
	// 	}
	// }else{
	// 	//一个参数  {widht:100px,height:100px;}
	// 	//遍历节点
	// 	for(var j=0;j<this.eles.length;j++){
	// 		//遍历对象
	// 		for(var m in per){
	// 			this.eles[j].style[m]=per[m];//完成样式设置
	// 		}			
	// 	}
	// }
	
	return this;//为了连缀
};


//1.设置节点对象的内容
//2.获取对象的值
Base.prototype.val=function(value){
	//有参数，，设置
	if(value!=undefined){
		for(var i=0;i<this.eles.length;i++){
			this.eles[i].innerHTML=value;
		}
	}else{
		//无参数,  获取
		return this.eles[0].innerHTML;
	}	
	return this;
};