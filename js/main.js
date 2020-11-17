const slider = new Vue({
  el:".big-container",
  data:{
    arr:["img/image1.jpg","img/image2.jpg","img/image3.jpg","img/image4.jpg"],
    index: 0,
  },

  methods:{
    prevSlider:function(){
      if(this.index === 0){
        this.index = this.arr.length-1
      }else{
        this.index--
      }
    
    },

    nextSlider: function(){
      if(this.index === this.arr.length-1){
        this.index = 0
      }else{
      this.index++}
    }
  }
})
