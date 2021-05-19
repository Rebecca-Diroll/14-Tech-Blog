const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#blog-title").value.trim();
    const author = document.querySelector("#blog-title").value.trim();
    const description = document.querySelector("#blog-title").value.trim();
    const user_email = document.querySelector("#blog-title").value.trim();

    if (title && author && description && user_email) {
        const response = await fetch(`/api/blogs`, {
            method: "POST",
            body: JSON.stringify({ title, author, description, user_email }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            response.json(err);
            alert("Failed to create blog post.")
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
        const id = event.target.getAttribute("data-id");

        const response = await fetch(`/api/books/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert("Failed to delete blog post");
        }
    }
};

document
    .querySelector(".new-book-form")
    .addEventListener("submit", newFormHandler);

document
    .querySelector(".book-list")
    .addEventListener("click", delButtonHandler);