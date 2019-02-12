// Use the DOM to add a collection of facts to the page.
function addFactsToPage(facts) {
  const factsDiv = document.querySelector('.facts');

  for (const fact of facts) {
    const factP = document.createElement('p');
    factP.innerText = fact.content;
    factsDiv.appendChild(factP);
  }
}

// Makes it so that fetch requests that do not return 200 OK
// are dealt with as errors.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// Run the fetch request once the DOM has loaded.
document.addEventListener('DOMContentLoaded', () => {
  fetch('/facts.json')
    .then(handleErrors)
    .then(result => result.json()) // Deserialize the JSON string into a Javascript object.
    .then(addFactsToPage)
    .catch(error => alert(error)); // A better stragety for error mitigation is recommended. :)
});
