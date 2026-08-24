export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} Elena Martínez. All rights reserved.
        </p>
      </div>
    </footer>
  )
}