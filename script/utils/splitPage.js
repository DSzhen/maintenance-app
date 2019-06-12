(function(window) {
	"use strict";
	splitPage.prototype.options = {
		pageSize: 20,
		addUp: 5,
		currentPageCount: 20
	}
	splitPage.prototype._init = function(options) {
		extend(this.options, options);
		if(!this.options.pageSize || !this.options.addUp) {
			return "请传入正确的参数！"
		}
	}
	/**
	 * 获取累加之后的数据
	 * @param num {Number} 要累加的值，不传则累加初始化时的值
	 * */
	splitPage.prototype.getAddUpSize = function(num) {
		var pageSize = 0;
		if(num) {
			if(this.options.currentPageCount === 0) {
				pageSize = this.options.pageSize + num;
			} else {
				pageSize = this.options.currentPageCount + num;
			}
		} else {
			if(this.options.currentPageCount === 0) {
				pageSize = this.options.pageSize;
			} else {
				pageSize = this.options.currentPageCount + this.options.addUp;
			}
		}
		this.options.currentPageCount = pageSize
		return pageSize;
	}
	/**
	 * 获取当前页码数
	 * */
	splitPage.prototype.getcurrentPageCount = function() {
		return this.options.currentPageCount;
	}
	/**
	 * 设置当前页码数
	 * @param num {Number} 数字
	 * */
	splitPage.prototype.setcurrentPageCount = function(num) {
		this.options.currentPageCount = num;
	}
	/**
	 * 重置当前页码数
	 * */
	splitPage.prototype.resetcurrentPageCount = function() {
		this.options.currentPageCount = this.options.pageSize;
		return this.options.currentPageCount;
	}

	function extend(a, b) {
		for(var key in b) {
			if(b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function splitPage(options) {
		this._init(options);
	}
	window.splitPage = splitPage
})(window);