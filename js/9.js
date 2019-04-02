
//创建Base对象实例
/*
	selector  选择器
		1.对象类型    this
		2.字符串类型  #box  .one  div  div.one
*/
function $(selector){
	return new Base(selector);
}

// 构造函数
function Base(selector) {
	this.eles=[];
	//有参数  节点对象
	if(typeof selector==='object'){
		this.eles.push(selector);//将节点对象保存起来
	}else if(typeof selector==='string'){
		//选择器
		this.getElementBySelector(selector);
	}
}


//在原型上添加方法


//根据选择器查找元素
Base.prototype.getElementBySelector=function(selector){
	var os=document.querySelectorAll(selector);
	//遍历  存入属性数组
	for(var i=0;i<os.length;i++){
		this.eles.push(os[i]);
	}
	return this;
};

Base.prototype.getID=function(id){
	var o=document.querySelector(id);
	this.eles.push(o);//将节点对象添加到数组中
	return this;
};

/*
	一个参数：在全文查找
	两个参数：在指定节点下查找
*/
Base.prototype.getTag=function(tagName,parentNode){
	var os;//保存节点
	if(parentNode!=undefined){
		//在指定节点下查找节点对象
		os=parentNode.querySelectorAll(tagName);
	}else{
		//在全局查找
		os=document.querySelectorAll(tagName);
	}
	
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


//追加class
Base.prototype.addClass=function(cls){
	//遍历
	for(var i=0;i<this.eles.length;i++){
		//class='';   class='one';
		//class='on'  class='one on'
		//获取节点对象修改之前的class值
		var preClass=this.eles[i].className;
		if(preClass==''){
			//原先没有class值
			this.eles[i].className=cls;
		}else{
			//节点改变前，有class值，----->追加
			this.eles[i].className=preClass+' '+cls;
		}
	}
	return this;
};

//移除class
Base.prototype.removeClass=function(cls){
	//class='on';   ---->    class='';   
	//class='one on' ---->    class='one'  
	//class='one on two'
	//class='on one two'
	for(var i=0;i<this.eles.length;i++){
		var preClass=this.eles[i].className;//获取改变前的class值
		var arr=preClass.split(' ');//利用空格将class拆分为数组
		//多个class
		if(arr.length!=1){
			arr.splice(arr.indexOf(cls),1);//删除数组中需要祛除的class值
			var newClass=arr.join(' ');//转为字符串class
			this.eles[i].className=newClass;	
		}else{	
			//单个class
			this.eles[i].className='';
		}
	}
	return this;
};




//设置属性
/*
	两个参数：设置属性
	一个参数：
		1.设置多个属性
		2.获取属性的值
*/
Base.prototype.attr=function(property,value){
	//两个参数
	if(value!=undefined){
		for(var i=0;i<this.eles.length;i++){
			//obj.属性名  obj[属性名]
			this.eles[i][property]=value;
		}
	}else if(typeof property=='object'){
		//设置多个参数  {widht:100px,src:'1.jpg'}
		for(var j=0;j<this.eles.length;j++){
			//遍历对象
			for(var key in property){
				this.eles[j][key]=property[key];
			}			
		}
	}else{
		//获取属性
		// return this.eles[0][property];//绝对路径
		return this.eles[0].getAttribute(property);//相对路径
	}
	return this;
};


//1.有参：设置节点对象的内容
//2.无参：获取对象的值
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





//事件

Base.prototype.click=function(fn){
	//遍历节点对象
	for(var i=0;i<this.eles.length;i++){
		this.eles[i].onclick=fn;
	}
	return this;
};
//鼠标事件

Base.prototype.mouseenter=function(fn_enter){
	for(var i=0;i<this.eles.length;i++){
		this.eles[i].onmouseenter=fn_enter;
	}
	return this;
};

Base.prototype.mouseleave=function(fn_leave){
	for(var i=0;i<this.eles.length;i++){
		this.eles[i].onmouseleave=fn_leave;
	}
	return this;
};

//
Base.prototype.hover=function(fn_enter,fn_leave){
	for(var i=0;i<this.eles.length;i++){
		this.eles[i].onmouseenter=fn_enter;
		this.eles[i].onmouseleave=fn_leave;
	}
	// this.mouseenter(fn_enter);
	// this.mouseleave(fn_leave);
	return this;
};




//获取第一个节点对象
Base.prototype.first=function(){
	var o=this.eles[0];
	this.eles=[];//清空数组
	this.eles.push(o);
	return this;
};

//获取最后一个节点
Base.prototype.last=function(){
	var lastNode=this.eles[this.eles.length-1];//最后一个
	this.eles=[];//清空
	this.eles.push(lastNode);
	return this;
};

/*
	查找指定索引节点对象
	@parms  index  索引  
*/
Base.prototype.eq=function(index){
	var o=this.eles[index];
	this.eles=[];
	this.eles.push(o);
	return this;
};


//获取节点对象个数
Base.prototype.size=function(){
	return this.eles.length;
};


//查找指定节点的位置
Base.prototype.index=function(){

};

//查找兄弟节点
Base.prototype.siblings=function(){
	var node=this.eles[0];//当前节点
	var allNode=node.parentNode.children;//父节点的所有孩子节点
	this.eles=[];//清空
	//遍历所有的节点
	for(var i=0;i<allNode.length;i++){
		if(allNode[i]!=node){
			this.eles.push(allNode[i]);//将兄弟节点存入属性数组中
		}
	}
	return this;
};


//效果
//显示
Base.prototype.show=function(){
	for(var i=0;i<this.eles.length;i++){
		this.eles[i].style.display='block';
	}
	return this;
};

Base.prototype.hide=function(){
	for(var i=0;i<this.eles.length;i++){
		this.eles[i].style.display='none';
	}
	return this;
};


//切换
Base.prototype.toggle=function(){
	for(var i=0;i<this.eles.length;i++){
		var s=this.eles[i].style.display;//行内
		s=s==''?window.getComputedStyle(this.eles[i],null).display:s;
		if(s=='block'){
			this.eles[i].style.display='none';
		}else{
			this.eles[i].style.display='block';
		}
	}
	return this;
};