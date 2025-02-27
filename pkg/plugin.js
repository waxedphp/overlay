
;(function ( $, window, document, undefined ) {

    var pluginName = 'overlay',
        _search = '.waxed-overlay',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = 'overlay';
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        this.options = this._config(rec, this.options);
        //console.log(rec);
        if (typeof rec.waxedOverlayShow == 'boolean') {
          //console.log('trigger', this.options);
          $(document.body).trigger('waxed-waiting-show');
        }
        if (typeof rec.waxedOverlayHide == 'boolean') {
          $(document.body).trigger('waxed-waiting-hide');
        }
      },

      this.free = function() {

      },

      this._config=function(dd, opt){
        var options = {};
        if (typeof opt == 'object') options = opt;
        if (['string','number'].includes(typeof dd.waxedOverlayFade)) {
            options.fade = parseInt(dd.waxedOverlayFade);
        }
        if (typeof dd.waxedOverlayBackground == 'string') {
            options.background = dd.waxedOverlayBackground;
        }
        if (typeof dd.waxedOverlayImage == 'string') {
            options.image = dd.waxedOverlayImage;
            if (typeof dd.waxedOverlayImageColor == 'string') {
                options.imageColor = dd.waxedOverlayImageColor;
            }
        } else if (typeof dd.waxedOverlayFontawesome == 'string') {
            options.image = '';
            options.fontawesome = dd.waxedOverlayFontawesome;
            if (typeof dd.waxedOverlayFontawesomeColor == 'string') {
                options.fontawesomeColor = dd.waxedOverlayFontawesomeColor;
            }
        }
        
        return options;
      },

      this.init=function() {
        that.options = that._config(that.dd);
        //console.log('OVERLAY', that.dd);

        //$(that.element).LoadingOverlay("show", options);
        $(that.element).on('waxed-waiting-show',function(ev){
            ev.stopPropagation();
            //console.log('ELEMENT waxed-waiting-show');
            //$(that.element).LoadingOverlay('show' , that.options);
            $.LoadingOverlay('show' , that.options);
            return false;
        });
        $(that.element).on('waxed-waiting-hide',function(ev){
            ev.stopPropagation();
            //console.log('ELEMENT waxed-waiting-hide');
            //$(that.element).LoadingOverlay('hide');
            $.LoadingOverlay('hide');
            return false;
        });

        if (!inited) {
            //var options = that._config($(document.body).data(), that.options);
            var options = that.options;
            $(document.body).on('waxed-waiting-show',function(ev){
                //console.log('BODY waxed-waiting-show');
                ev.stopPropagation();
                $.LoadingOverlay('show' , options);
                return false;
            });
            $(document.body).on('waxed-waiting-hide',function(ev){
                //console.log('BODY waxed-waiting-hide');
                ev.stopPropagation();
                $.LoadingOverlay('hide');
                return false;
            });
        }

        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
