var Progress = {
    bar : null,
    index : 0,
    imgList : [],
    assetsLength: 0,
    song : "",
    init: function(){

    },

    loadImages: function(paths) {
        var self = this,
            i, length = paths.length;
        this.assetsLength = paths.length+1;
        for (i=0;i<length;i++){
            var img = new Image();
            img.onload = function() {
                self.increase('gif');
                
            };
            img.src = paths[i];
            this.imgList.push(img);

        }
    },

    loadAudio: function(path) {
        this.song = new Audio(path);
        this.song.addEventListener('canplaythrough', () => this.increase('audio'));
    },
    
    increase: function(source){
        this.index++;
        if (this.index >= this.assetsLength){
            this.done();
        }
    },
    
    done : function() {
    }

};