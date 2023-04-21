function pool_rings() {
    function pool_ring(pool_id, bar_id) {
    let bar = new RadialProgress(document.getElementById(bar_id),{
    noPercentage:true,
    fixedTextSize:0.15,
    thick:10,colorBg:"#222222",
    colorFg:"#ffdb4d",
    round:false,
    noAnimations:true,
    noInitAnimation:true
    });
    
    let sat;
    let sta;
    $.getJSON(`https://js.cexplorer.io/api-static/pool/${pool_id}.json`, function(data) {
    $.each( data.data, function( i, val ) {
    if(i=='saturation') {sat = parseFloat(val)};
    if(i=='stake') {sta = parseFloat(val / 1e12).toFixed(2)};
    
    });
    bar.setValue(sat);
    bar.setText(parseInt(sat * 100) + "%<BR>" + sta + "M");
    });
    }
    pool_ring("pool1jjry6f6q0swaq457ft9eclaxaskvrxnpj0v3w8edsyfryml3vj6", "ring1");
  }