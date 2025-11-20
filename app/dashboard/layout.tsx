export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div style={{display: 'flex'}}>
      <aside style={{width: 200, background: "#eee"}}>
        Dashboard Sidebar
      </aside>
      <section style={{padding: 20}}>
        {children}
      </section>
    </div>
  )
}