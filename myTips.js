;(function($,window,document,undefined) {
    var MyTip = function(ele,opt){

        this.$ele = ele
        this.defaults = {
            x:30,
            y:30,
            content:"哈哈哈",
            style:{
                'position': 'fixed',
                'padding': '8px 12px',
                'color': '#fff',
                'border-radius': '5px',
                'font-family': "微软雅黑",
                'z-index': '999',
                'display': 'inline',
                'font-size': '14px',
                'background-color': 'rgba(0, 0, 0, 0.5)',
                'color': '#fff',
                'line-height': '1.42857143',
                'display':'none'
            }
        }
        this.options = $.extend(true, this.defaults, opt) ;

        this.show()
    }

    var mt = MyTip.prototype

    mt.show = function(){

        var $this = this.$ele
        var html  = $('<div></div>');
        var doc =  html.addClass('wrap-tip').html(this.options.content);
        doc.css(this.options.style);

        $("body").append(html)        
        

        this._mouse()
        this._mousemove()

    }
    mt._mouse = function(){
        var _this = this
        var $this = this.$ele
        $this.mouseover(function(e){
            $('.wrap-tip').show()
        }).mouseout(function(e){
            $('.wrap-tip').hide()
        })
    }

    mt._mousemove = function(){
        var _this = this
        var $this = this.$ele
        $this.mousemove(function(e){
            $('.wrap-tip').css({
                top:e.pageY + _this.options.y + "px",
                left:e.pageX + _this.options.x + "px"
            })
        })
    }

    $.fn.myTip = function(opt){
      new MyTip(this,opt);
    };

})(jQuery,window,document);

