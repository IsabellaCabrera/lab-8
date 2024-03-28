function createPost(name, message, imageURL)
 {
    const PostDiv = document.createElement("div");
    PostDiv.classList.add("post");

    const image = document.createElement("img");
    image.src =  imageURL;
    image.alt = "Rick and Morty";

    const title = document.createElement("h2");
    title.textContent = name;

    const msg = document.createElement("p")
    msg.textContent = message;

    PostDiv.appendChild(image);
    PostDiv.appendChild(title);
    PostDiv.appendChild(msg);
    
    const postsContainer = document.getElementById("posts-container");
    postsContainer.appendChild(PostDiv);
    
}
const baseURL  = "https://rickandmortyapi.com/api/character/avatar/"
const totalPosts = 826;

for ( let i = 1; i <= totalPosts; i++) {
    const imageURL = `${baseURL}${i}.jpeg`;

   createPost( `Personaje #${i}`, `Mensaje de ejemplo para la publicación #${i}`, imageURL) 
}
