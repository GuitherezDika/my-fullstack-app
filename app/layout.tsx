export const metadata = {
  title: "My Next App",
  description: "Belajar Next.js",
}

export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{ padding: 20}}>
        <header>
          <h2>Header Global</h2>
          <hr />
          {children}
          <hr />
          <footer>Footer Global</footer>
        </header>
      </body>
    </html>
  )
}