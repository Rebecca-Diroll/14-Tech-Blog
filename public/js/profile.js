const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#book-title").value.trim();
    const author = document.querySelector("#book-title").value.trim();
    const description = document.querySelector("#book-title").value.trim();
    const user_email = document.querySelector("#book-title").value.trim();

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
            alert("Failed to create blog.")
        }
    }
};

