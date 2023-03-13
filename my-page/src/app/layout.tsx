import './globals.css'

export const metadata = {
  title: 'Hoang Mai',
  description: "Hoang Viet Mai's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
