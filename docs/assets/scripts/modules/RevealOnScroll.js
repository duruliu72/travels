import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
    constructor(els,offset){
        this.itemsToRevel=els;
        this.offsetPercentage=offset;
        this.hideInitially();
        this.createWaypoints(); 
    }
    hideInitially(){
        this.itemsToRevel.addClass("revel-item");
    }
    createWaypoints(){
        var that=this;
        this.itemsToRevel.each(function(){
            var currentItem=this;
            new Waypoint({
                element: currentItem,
                handler: function(direction) {
                    $(currentItem).addClass("revel-item--is-visible");
                },
                offset:that.offsetPercentage, 
            });
        });
    }
}
export default RevealOnScroll;