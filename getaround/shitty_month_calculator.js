/// execute this on https://www.getaround.com/cars
/// in the console.
/// you will see a tally of how much you're earning per month.
/// wouldn't it be nice if getaround gave you this as a running total?

var fn = function() {

  $me = $(this);

  var isCompleted, monthBucket, earnings;

  isCompleted = $me.find(".card-text-title").text().trim().indexOf('Completed') >= 0;

  if( isCompleted ) {
    monthBucket = $me.find(".time").text().trim().split(" ")[1];
    monthBucket += "-HAX";
    earnings = parseFloat($me.find(".rental-price-info").text().trim().split(" ")[0].replace("$", ""));

    if( !window['bucketlist'] ) {
      window['bucketlist'] = {};
    } 
    window['bucketlist'][monthBucket] = monthBucket;

    if( window[monthBucket] ) {
      window[monthBucket] += earnings
    } else {
      window[monthBucket] = earnings
    }
  }
}

var cardList = $("div.reservation-card");
cardList.each(fn);

var ar = Object.keys(bucketlist);
for( var i=0; i<ar.length; i++ ) {
  console.log( ar[i] + ": " + window[ar[i]] );
}