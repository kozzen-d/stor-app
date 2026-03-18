
import { Link } from "react-router-dom";
import { RandomDog } from "../../components/RandomDog";

export default function NotFound() {
  return (
    <div>
      <h1>We looked everywhere.</h1>
      <p>
        Looks like this page is missing. If you still need help, visit our help
        pages.
      </p>

      <Link to="/">Go to homepage</Link>

      <RandomDog />
    </div>
  );
}
