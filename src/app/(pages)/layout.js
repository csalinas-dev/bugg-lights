import Navigation from "@/components/Navigation";

export default function PageLayout({ children }) {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
    </>
  )
}