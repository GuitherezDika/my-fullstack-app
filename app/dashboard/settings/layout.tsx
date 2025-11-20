export default function SettingsLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <h2>* Settings Menu</h2>
      <div style={{borderTop: "1px solid gray", marginTop: 10}}></div>
      <div style={{paddingTop: 20}}>
        {children}
      </div>
    </div>
  )
}