import React, { useEffect, useState } from "react";
import { PiSortAscendingBold, PiSortDescendingBold } from "react-icons/pi";
import blogpic1 from "../assets/profile.jpeg";
import blogpic2 from "../assets/Elite Knight Igris.jpeg";
import blogpic3 from "../assets/PP.jpeg";
import blogpic4 from "../assets/couple.jpeg";
import default_img from "../assets/no_pp.png";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags:string[];
}

const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "My First Blog Post",
    date: "2025-08-18",
    description: "This is me as a young gun, absolutely fed up with whatever bullshit was being shown to me",
    image: blogpic1,
    tags: ["#DoneWithThisMense", "#ImHim"]
  },
  {
    id: 2,
    title: "Igris is HIM",
    date: "2025-08-19",
    description: "Bro this guy absolutely fucked Sung Jinwoo like he was nothing, the aura on this guy is crazy!!",
    image: blogpic2,
    tags: ["WarraGuy"],
  },
  {
    id: 3,
    title: "The Greatest of All Time",
    date: "2025-08-20",
    description: "Madeira, Manchester, Madrid, Turin, and Manchester again. Wreathed in red. Restored to this great gallery of the game. A walking work of art. Vintage. Beyond valuation, beyond forgery or imitation. 18 years since that trembling teenager of touch and tease first tiptoed onto this storied stage. Now in his immaculate maturity. CR7 reunited.",
    image: blogpic3,
    tags: ["GOAT", "CR7"],
  },
  {
    id: 4,
    title: "Ramadan",
    date: "2025-08-20",
    description: "A personal story about my experience with Ramadan 2025.",
    image: blogpic4,
    tags: ["Ramadan", "Fasting"],
  },
];

/**
 * A component that displays a blog section with posts.
 * 
 * It allows you to add new posts, search through existing posts, 
 * and sort the posts by date.
 * 
 * The component stores the posts in local storage so that they exists 
 * even after the page is reloaded.
 * 
 * The component also allows you to upload an image for the post.
 * 
 * @returns A React component that displays a blog section with posts.
 */
function BlogSection() {
  const [searchBlog, setSearchBlog] = useState("");
  const [posts, setPosts] = useState(initialPosts);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  // custom posts
  const [newTitle, setTitle] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newImage, setImage] = useState("");
  const [newTags, setTags] = useState("");

  /**
   * Adds a new post to the blog section and saves it in local storage.
   * It creates a new post with the given title, description, image, and tags,
   * adds it to the list of posts, and saves the list of posts in local storage.
   */
  const handleAddPost = () => {
    const newPost: BlogPost = {
      id: posts.length + 1,
      title: newTitle,
      date: new Date().toISOString(),
      description: newDescription,
      image: newImage || default_img,
      tags: newTags.split(",").map((tag) => tag.trim()),
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    setTitle("");
    setDescription("");
    setImage("");
    setTags("");
    setIsAddingPost(false);
  };

  /**
   * Handles changes to the image field in the add post form.
   * When a new image is selected, it creates an object URL from the selected
   * file and updates the image URL state.
   * @param e The change event.
   */
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  /**
   * Allows the user to filter through the blog posts.
   */
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchBlog.toLowerCase()) ||
    post.description.toLowerCase().includes(searchBlog.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchBlog.toLowerCase()))
  );

  /**
   * Sorts the posts by date in either ascending or descending order.
   */
  const sortPosts = () => {
    const sortedPosts = [...posts];
    if (isSorted) {
      sortedPosts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      sortedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    setPosts(sortedPosts);
  };

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);
  

  return (
    <div className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Posts</h1>
          <div className = "blog-buttons">
            <button className="add-post-button" onClick={() => setIsAddingPost(!isAddingPost)}>
            {isAddingPost ? "Cancel" : "Add Post"}
            </button>
            <button 
              onClick = {() => {
                setIsSorted(!isSorted)
                sortPosts();
              }}
              className="sort-button">
              {isSorted ? (
                <div>
                  Sort <PiSortAscendingBold />
                </div>
              ) : (
                <div>
                  Sort <PiSortDescendingBold />
                </div>
              )}
            </button>
          </div>
          
          <input 
            placeholder="Search posts, tags..."
            type = "text"
            value = {searchBlog}
            onChange = {(e) => setSearchBlog(e.target.value)}
          />
        </div>

        <div className="blog-grid">
          {isAddingPost && (
            <div className="blog-card new-post-card">
              <input 
                type="file"
                accept="image/*"
                onChange={handleImgChange}
                className="new-post-image"
              />
              <input 
                type="text" 
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setTitle(e.target.value)}
                className="new-post-title"
              />
              <textarea 
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setDescription(e.target.value)}
                className="new-post-description"
              />
              <input 
                type="text"
                placeholder="Tags (comma separated)"
                value={newTags}
                onChange={(e) => setTags(e.target.value)}
                className="new-post-tags"
              />
              <div className="new-post-actions">
                <button onClick={handleAddPost}>Submit</button>
              </div>
            </div>
          )}
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <img className="blog-image" src={post.image} alt={post.title} />
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-description">{post.description}</p>
                <p className="blog-tags">
                  {post.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </p>
                <p className="blog-date">{post.date}</p>
              </div>
            ))
          ) : (
            <p className="no-posts">No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
