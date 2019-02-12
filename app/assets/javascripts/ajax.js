function addFactsToPage(facts) {
  const factsDiv = document.querySelector('.facts');

  for (const fact of facts) {
    const factP = document.createElement('p');
    factP.innerText = fact.content;
    factsDiv.appendChild(factP);
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('/facts.json')
    .then(handleErrors)
    .then(result => result.json())
    .then(addFactsToPage)
    .catch(error => alert(error)); // A better stragety for error mitigation is recommended. :)
});
