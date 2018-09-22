// Used to append child elements to a parent element in the DOM
function append(parent, child) {
  return parent.appendChild(child);
}

// Wait untill the page is loaded, then execute the script
document.addEventListener("DOMContentLoaded", event => {

  // Fetch the data from the back-end
  fetch('https://boringdashboard.com/api/links')
  .then(resp => resp.json())
  .then(data => {
    let links = data;

    // Target the container where the generated links will be placed in
    linksContainer = document.getElementById('linksContainer');

    // For each link, create a 'a' element in the DOM with the following properties
    links.map(link => {
      let a = document.createElement('a');
      a.target    = '_blank';
      a.href      = link.url;
      a.innerHTML = link.name;

      // Append the child element -> 'a' to the container
      append(linksContainer, a);
    })
  })
  // If any error occurs, log the error so you can see where the code went wrong
  .catch(err => {
    console.log(JSON.stringify(err));
  })
});
