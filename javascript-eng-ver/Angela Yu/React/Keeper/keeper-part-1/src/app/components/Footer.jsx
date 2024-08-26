export default function Footer() {
  const current_year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {current_year}</p>
    </footer>
  );
}
