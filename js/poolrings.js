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
    $.getJSON(`https://js.adapools.org/pools/${pool_id}/summary.json`, function(data) {
    $.each( data.data, function( i, val ) {
    if(i=='saturated') {sat = parseFloat(val)};
    if(i=='total_stake') {sta = parseFloat(val / 1e12).toFixed(2)};
    
    });
    bar.setValue(sat);
    bar.setText(parseInt(sat * 100) + "%<BR>" + sta + "M");
    });
    }
    pool_ring("94864d27407c1dd0569e4acb9c7fa6ec2cc19a6193d9171f2d811232", "ring1");
    pool_ring("7b0d46f6bf28634ab4d273b76e9768793b465ea8398563659ab8d2df", "ring2");
  }