import { Link } from 'preact-router/match';

export default function User({ name }) {
  return (
    <div>
      <span>User page: {name}</span>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </div>
  );
}
