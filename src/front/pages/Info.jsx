// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Info = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="container mt-5 bg-dark text-light p-5 rounded">
      <h1>More about us</h1>
      <p>
        We are a secret organization dedicated to uncovering the mysteries of the universe. Our members are highly skilled and trained in various fields, including science, technology, and espionage. We operate in the shadows, working tirelessly to protect humanity from hidden threats and uncover the truth behind unexplained phenomena.
      </p>
      <p>
        Our organization is built on the principles of secrecy, loyalty, and dedication. We believe that knowledge is power, and we strive to gather as much information as possible to better understand the world around us. Our members are committed to our cause and work together to achieve our goals.
      </p>
      <p>
        If you are interested in joining our organization or learning more about what we do, please feel free to reach out to us. We are always looking for new members who share our passion for uncovering the truth and making a difference in the world.
      </p>  
      <Link to="/">
        <button className="btn btn-warning w-100">Back home</button>
      </Link>
    </div>
  );
};
