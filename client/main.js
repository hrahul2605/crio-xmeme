// Bootstrap CSS
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Root Element containing all memes
const root = document.getElementById("root");
// Success Alert
const successAlert = document.getElementById("success-alert");
// Error Alert
const errorAlert = document.getElementById("error-alert");
// Form Modal
const createMemeModal = new bootstrap.Modal(
  document.getElementById("createMemeModal")
);
// Form
const createForm = document.getElementById("form");

// Alert Function
function Alert(err, message) {
  if (!err) {
    successAlert.style.display = "block";
    if (message) successAlert.innerText = message;
    else successAlert.innerText = "Meme Created.";
    setTimeout(() => {
      successAlert.style.display = "none";
    }, 2000);
  } else {
    errorAlert.innerText = message;
    errorAlert.style.display = "block";
    setTimeout(() => {
      errorAlert.style.display = "none";
    }, 2000);
  }
}

function parseFormData(data) {
  const parsedData = {};
  for (const pairs of new FormData(data)) parsedData[pairs[0]] = pairs[1];

  return {
    url: parsedData.url,
    caption: parsedData.caption,
    name: parsedData.author,
  };
}

// Form Submission
async function handleSubmit(e, form) {
  e.preventDefault();

  const body = parseFormData(form);

  createMemeModal.hide();

  try {
    const res = await fetch("/memes", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (data.id) {
      Alert(false);
      getMemes();
    } else Alert(true, data.message);
  } catch (err) {
    console.log(err);
  }
  createForm.reset();
  createForm.classList.remove('was-validated');
  return false;
}

// Event Listener for form submission
document.getElementById("form").addEventListener("submit", function (e) {
  handleSubmit(e, this);
});

// Check if url is image
function checkURL(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

// Function to fetch latest 100 memes
async function getMemes() {
  try {
    const res = await fetch("/memes");
    const data = await res.json();

    root.innerHTML = null;

    if (data.message) throw new Error(data.message);
    if (data.length > 0) {
      data.forEach((item) => {
        const ele = document.createElement("div");
        const imgEle = document.createElement("img");
        const childEle = document.createElement("div");
        const caption = document.createElement("h5");
        const author = document.createElement("p");
        const btn = document.createElement("button");

        ele.className = "card p-3 m-3 col-xs-12 col-sm-6 col-lg-4 col-xxl-3";
        ele.style.width = "14rem";
        ele.style.maxWidth = "14rem";

        if (checkURL(item.url)) imgEle.src = item.url;
        else imgEle.src = "https://semantic-ui.com/images/wireframe/image.png";
        imgEle.className = "card-img-top";
        imgEle.alt = item.url;

        childEle.className = "card-body";

        caption.className = "card-title";
        caption.innerText = item.caption;

        author.className = "card-text text-end";
        author.innerText = `- ${item.name}`;

        childEle.appendChild(caption);
        childEle.appendChild(author);

        btn.className = "btn btn-primary";
        btn.innerText = "Edit";
        btn.type = "button";
        btn.style.maxWidth = "100px";
        btn.id = item.id;
        btn.addEventListener("click", function () {
          handleUpdateButton(item);
        });
        // btn.setAttribute("data-bs-toggle", "modal");
        // btn.setAttribute("data-bs-target", "#");

        ele.appendChild(imgEle);
        ele.appendChild(childEle);
        ele.appendChild(btn);
        root.appendChild(ele);
      });
    }
  } catch (err) {
    console.log(err);
  }
}

// Function on DOM Load
window.onload = getMemes();

const updateModal = new bootstrap.Modal(
  document.getElementById("updateMemeModal")
);
const updateForm = document.getElementById("update-form");
const updateModalButton = document.getElementById("updateModalButton");
const updateModalName = document.getElementById("update-modal-name");
const updateUrlInput = document.getElementById("update-url");
const updateCaptionInput = document.getElementById("update-caption");

// Update Meme form
async function handleUpdateSubmit(data) {
  try {
    const res = await fetch(`/memes/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ url: data.url, caption: data.caption }),
    });

    const result = await res.json();
    if (res.status !== 200) Alert(true, result.message);
    else {
      Alert(false, result.message);
      getMemes();
    }
    updateForm.reset();
    updateForm.classList.remove('was-validated');
  } catch (err) {
    console.log(err);
  }
}

updateModalButton.addEventListener("click", function (e) {
  const id = updateModalButton.getAttribute("id");

  const url = updateUrlInput.value;
  const caption = updateCaptionInput.value;

  updateModal.hide();
  handleUpdateSubmit({ id, url, caption });
});

// Handle Update function
function handleUpdateButton(data) {
  updateModalButton.setAttribute("id", data.id);

  updateModalName.innerText = data.name;
  updateUrlInput.defaultValue = data.url;
  updateCaptionInput.defaultValue = data.caption;

  updateModal.show();
}
