var Progress = {
    bar : null,
    index : 0,
    imgList : [],
    init: function(){
        var box = document.getElementById("progressBox");
        var prog = document.createElement("progress");
        box.appendChild(prog);
        console.log(prog)
        this.bar = prog;
    },

    loadImages: function(paths) {
        var self = this,
            i, length = paths.length;
        this.bar.max = length;
        for (i=0;i<length;i++){
            var img = new Image();
            img.onload = function() {
                self.increase();
                if (self.index >= length){
                    self.done();
                }
            };
            img.src = paths[i];
            this.imgList.push(img);

        }
    },

    increase: function(){
        this.index++;
        this.bar.value = this.index;

    },

    done : function() {
        console.log("I am done loading");
        this.bar.style.display = "none";
        var showBox = document.getElementById("show");
        for (var i =0, l = this.index;i<l;i++) {
            showBox.appendChild(this.imgList[i]);
        }
    }

};