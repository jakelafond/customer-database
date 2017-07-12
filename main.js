console.log(customers);
var see = 'hello';
var ul = document.querySelector('.person-list');

customers.results.forEach(function(data,index){
  var li = document.createElement('li');
  ul.appendChild(li);

  var image = document.createElement('img');
  image.src = customers['results'][index].picture['large'];
  li.appendChild(image);

  var pName = document.createElement('p');
  pName.textContent = customers['results'][index].name['first'] + ' ' + customers['results'][index].name['last'];
  pName.className = 'name';
  li.appendChild(pName);

  var pEmail = document.createElement('p');
  pEmail.textContent = customers['results'][index]['email'];
  pEmail.className = 'email';
  li.appendChild(pEmail);

  var newAddress = document.createElement('address');
  newAddress.className = 'address';
  li.appendChild(newAddress);

  var pStreet = document.createElement('p');
  pStreet.textContent = customers['results'][index].location['street'];
  newAddress.appendChild(pStreet);

  var pCityStateZip = document.createElement('p');
  pCityStateZip.textContent = `${customers['results'][index].location['city']}, ${customers['results'][index].location['state']} ${customers['results'][index].location['postcode']}`;
  newAddress.appendChild(pCityStateZip);

  var pTel = document.createElement('p');
  pTel.textContent = customers['results'][index]['phone'];
  pTel.className = 'tel';
  li.appendChild(pTel);

  var pSSN = document.createElement('p');
  pSSN.textContent = customers['results'][index].id['value'];
  pSSN.className = 'ssn';
  li.appendChild(pSSN);

  console.log(customers['results'][index].name);
});
