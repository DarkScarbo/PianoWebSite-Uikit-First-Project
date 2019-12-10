import data from "./data.js";

const reviewsUl = document.querySelector("#reviews-ul");

const card = review => {
    const li = document.createElement("li");
    li.innerHTML = `
                      <div class="uk-card uk-card-default uk-card-body uk-card-small uk-flex uk-flex-middle uk-card-default uk-border-rounded">
                          <div class="uk-grid uk-grid-medium uk-flex uk-flex-middle" data-uk-grid>
                              <div class="uk-width-1-3@s uk-width-2-5@m uk-height-1-1">
                                  <img src="./img/${review.name}.png" alt="${review.name}">
                              </div>
                              <div class="uk-width-2-3@s uk-width-3-5@m">
                                  <h3 class="uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                                      ${review.name}
                                  </h3>
                                  <span class="uk-article-meta">${review.date}</span>
                                  <p class="uk-margin-small">
                                      ${review.comment}
                                  </p>
                              </div>
                              <div>
                                  <ul class="uk-list uk-list-bullet">
                                      <li><p>Age: ${review.age}</p></li>
                                      <li><p>Profession: ${review.profession}</p></li>
                                      <li><p>Location: ${review.location}</p></li>
                                      <li><p>Origin: ${review.origin}</p></li>
                                      <li><p>Languages: ${review.languages[0]} and ${review.languages[1]}</p></li>
                                      <li><p>Duration of time: ${review.studentPeriod}</p></li>
                                      <li><p>Style: ${review.style}</p></li>

                                  </ul>
                              </div>
                          </div>
                      </div>`
    reviewsUl.append(li)
};

const init = () => {
    data.map(review => card(review))
};

init();