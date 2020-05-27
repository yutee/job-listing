const tags = document.querySelectorAll(".job__tag"),
  filterTags = document.querySelector(".filter__tags"),
  filter = document.querySelector(".filter"),
  clear = document.querySelector(".filter__clear"),
  jobs = document.querySelectorAll(".job");

tags.forEach(tag => {
  tag.addEventListener("click", addTags);
});

clear.addEventListener("click", removeFilter);


// Adding Tags to Filter
function addTags({ target: { innerHTML: tag } }) {
  let div = document.createElement("div");
  div.className = "filter__tag";
  div.innerHTML = `
                    <div class="filter__name">
                        ${tag}
                     </div>
                    <div class="filter__icon" onclick="removeFilterTag(this)">
                        <img src="./images/icon-remove.svg" alt="close icon">
                     </div>
          `;
  filterTags.appendChild(div);

  //   Making sure that the filter element is visible
  filter.style.display = "flex";
  filterJobs();
}

// Removing tags from filter
function removeFilter() {

}

// Removing Filter Tags
function removeFilterTag({ parentNode: parent }) {
  filterTags.removeChild(parent);
  filterJobs();
  if (filterTags.childNodes.length === 0) {
    removeFilter();
  }
}

// Removing Filter Element
function removeFilter() {
  filterTags.innerHTML = "";
  filter.style.display = "none";
  filterJobs();
}