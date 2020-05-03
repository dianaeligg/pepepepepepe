var Progress = {
    bar : null,
    index : 0,
    imgList : [],
    assetsLength: 0,
    song : "",
    init: function(){
        // var box = document.getElementById("progressBox");
        // var prog = document.createElement("progress");
        // box.appendChild(prog);
        // console.log(prog)
        // this.bar = prog;
    },

    loadImages: function(paths) {
        var self = this,
            i, length = paths.length;
        // this.bar.max = length;
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
        console.log(source, this.index)
        if (this.index >= this.assetsLength){
            this.done();
        }
        // this.bar.value = this.index;
    },
    
    done : function() {
        console.log("I am done loading");
        // this.song.play();
        // this.bar.style.display = "none";
        // var showBox = document.getElementById("show");
        // for (var i =0, l = this.index-1;i<l;i++) {
        //     showBox.appendChild(this.imgList[i]);
        // }
        // var btn = document.getElementById("bigButton");
        // btn.style.display = "flex";
    }

};