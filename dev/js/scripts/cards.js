function addCard(id,status,statusLower,delivery,name,street,city,zip){
  cards += "<div id='" + id + "' class='card " + statusLower + "'>";
    if (delivery == 'TRUE') {
        cards += "<h3 class='label'>" + status + " (Delivery)</h3>";
    } else {
        cards += "<h3 class='label'>" + status + "</h3>";
    }
    cards += "<h1 class='h5'>" + name + "</h1>";
    cards += "<p>" + street + "<br>" + city +", OR " + zip + "</p>";
  cards += "</div>";
  //console.log(cards);
}
