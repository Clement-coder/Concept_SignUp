  const dropArea = document.getElementById("dropArea");
  const fileInput = document.getElementById("fileInput");
  const browseBtn = document.getElementById("browseBtn");
  const fileList = document.getElementById("fileList");
    function toggleForms() {
      const signUpForm = document.getElementById("signUpForm");
      const signInForm = document.getElementById("signInForm");

      signUpForm.classList.toggle("hidden");
      signInForm.classList.toggle("hidden");
    }

    

  browseBtn.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files);
  });


  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("border-green-500", "bg-green-50");
  });

  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("border-green-500", "bg-green-50");
  });

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("border-green-500", "bg-green-50");
    handleFiles(e.dataTransfer.files);
  });

  function handleFiles(files) {
    fileList.innerHTML = "";

    [...files].forEach((file) => {
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = file.name;
        img.className =
          "w-full max-w-xs h-40 object-cover rounded-xl shadow-md transform transition duration-300 hover:scale-105";

        const wrapper = document.createElement("div");
        wrapper.className = "animate-fade-in";
        wrapper.appendChild(img);

        fileList.appendChild(wrapper);
      };
      reader.readAsDataURL(file);
    });
  }
