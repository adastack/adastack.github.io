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
    $.getJSON(`https://api.koios.rest/api/v1/pool_info?_pool_bech32_ids=\{${pool_id}\}&select=live_saturation,live_stake`, function(data) {
    $.each( data.data, function( i, val ) {
    if(i=='live_saturation') {sat = parseFloat(val)};
    if(i=='live_stake') {sta = parseFloat(val / 1e12).toFixed(2)};
    
    });
    bar.setValue(sat);
    bar.setText(parseInt(sat * 100) + "%<BR>" + sta + "M");
    });
    }
    pool_ring("pool1jjry6f6q0swaq457ft9eclaxaskvrxnpj0v3w8edsyfryml3vj6", "ring1");
  }
