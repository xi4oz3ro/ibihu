var vcontext;
	var vpager;
	var _data;
	var page_data;

	function _initPage(){
		_data = ____data_.slice(0,10);
		page_data = {
			current: 1,
			hasPrev: false,
			hasNext: true,
			prev: 0,
			next: 2
		};
		vcontext = new Vue({
			el:'#main-context',
			data: {
				items: _data
			}
		});
		vpager = new Vue({
			el: '#main-pager',
			data: page_data
		});
	}

	function _changePage(index){
		if(index>26)
			index=1;
		offset = (index-1)*10;
		_data = offset+10>____data_.length ? ____data_.slice(offset,____data_.length) : ____data_.slice(offset,offset+10);
		vcontext.items= _data;
		vpager.current = index;
		vpager.hasPrev = index!=1;
		vpager.hasNext = index!=26;
		vpager.prev = index-1;
		vpager.next = index+1;
	}

	$(function(){
		_initPage();
	});