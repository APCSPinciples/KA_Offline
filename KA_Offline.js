var sketchProc=function(processingInstance){ 
  with (processingInstance){
    size(400, 400); 
    frameRate(30);
    draw = function() {
      ellipse(150,50,50,50);
    }
  }
};
