<script>
  var pontok=0;
  var ido=30
  setInterval(() => {
    if (ido>0) {
      ido--
    }
  },1000);

  // div golyóm
  // var gonoszRad =100

  
  // var x=0 
  // var y=0
  // var xi=2
  // var yi=2
  // setInterval(() => {
  //   x += xi
  //   y += yi
  //   yi+=0.01
  //   // xi*=0.999
  //   // yi*=0.999
  //   if (x >= window.innerWidth-gonoszRad || x<=0) {
  //     xi *= -1
  //   }
  //   if (y >= window.innerHeight-gonoszRad || y<=0) {
  //     yi *= -1
  //   }
  // })

  


  let golyo1Background = "green";
    // div golyóm
  var staticRad1 =100

  var alive =true
  var x1=500  //window.innerWidth-staticRad1-5
  var y1=500//window.innerHeight-staticRad1-5
  var xi1=-2
  var yi1=-2
  setInterval(() => {
  if (ido > 0) {
    x1 += xi1;
    y1 += yi1;

    // Keep the ball within bounds
    if (x1 >= window.innerWidth - staticRad1) {
      x1 = window.innerWidth - staticRad1;
      xi1 *= -1;
    } else if (x1 <= 0) {
      x1 = 0;
      xi1 *= -1;
    }

    if (y1 >= window.innerHeight - staticRad1) {
      y1 = window.innerHeight - staticRad1;
      yi1 *= -1;
    } else if (y1 <= 0) {
      y1 = 0;
      yi1 *= -1;
    }
  }

    if (ido<=0) {
      golyo1Background = "transparent";
    }  


  }
  )


  function clicked() {
    if (ido>0) {
      pontok++
      x1=Math.floor(Math.random() * window.innerWidth-200) + staticRad1+200;
      y1=Math.floor(Math.random() * window.innerHeight-200) + staticRad1+200;      
    }

    // golyo1Background = "transparent";
  }
</script>

<main>
  {#if ido>0}
  <p style="user-select: none;">Idő: {ido}mp </p>
  <p style="user-select: none;">pontok {pontok}</p>
    
  {/if}
  {#if ido<=0}
  <!-- <p style="user-select: none;">Lejárt az idő </p> -->
    
  {/if}




  {#if ido<=0}
    
  <h1 style="text-align: center;">Lejárt az idő, {pontok} pontot ért el</h1>
  {/if}
  <!-- <p style="user-select: none;">x {x1} y {y1}</p> -->
  <!-- <input type="text" name="" id="" bind:value={x}>
  <input type="text" name="" id="" bind:value={y}> -->
  <!-- <div class="golyorosz golyo" style="left: {x}px; top: {y}px; width: {gonoszRad}px; height: {gonoszRad}px;" >
    <p style="font-size: 20px;">>:(</p>
  </div> -->
  <div
    class="golyo1 golyo" style="left: {x1}px; top: {y1}px; width: {staticRad1}px; height: {staticRad1}px; background-color: {golyo1Background}"on:click={clicked}  >
  
  </div>
  <div class="text">
    <!-- <p>y: {y}</p>
    <p>x: {x}</p> -->
  </div>
</main>

<style>

  .text{
    left:0px;
    top:0px;
  }
  .golyo{
    position: fixed;
  }

  .golyorosz{
    background-color: red;
    border-radius: 100%;
  }
  .golyo1{
    /* background-color: green; */
    border-radius: 100%;
  }
</style>
