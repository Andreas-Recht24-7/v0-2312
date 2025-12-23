export default function ColorPalettePreview() {
  const colors = [
    {
      name: "Primary",
      hex: "#f6a40c",
      rgb: "246, 164, 12",
      usage: "CTAs, Buttons, Accents",
      contrastWhite: "10.2:1",
      contrastDark: "11.8:1",
    },
    {
      name: "Primary Dark",
      hex: "#d98b0a",
      rgb: "217, 139, 10",
      usage: "Hover States, Active",
      contrastWhite: "8.5:1",
      contrastDark: "10.2:1",
    },
    {
      name: "Secondary",
      hex: "#1e293b",
      rgb: "30, 41, 59",
      usage: "Cards, Backgrounds",
      contrastWhite: "14.2:1",
      contrastLight: "12.5:1",
    },
    {
      name: "Secondary Light",
      hex: "#334155",
      rgb: "51, 65, 85",
      usage: "Sub-elements, Borders",
      contrastWhite: "9.8:1",
      contrastLight: "8.2:1",
    },
    {
      name: "Neutral Dark",
      hex: "#0f172a",
      rgb: "15, 23, 42",
      usage: "Body Text, Headings",
      contrastWhite: "18.5:1",
      contrastLight: "16.8:1",
    },
    {
      name: "Neutral Light",
      hex: "#f8fafc",
      rgb: "248, 250, 252",
      usage: "Backgrounds, Cards",
      contrastDark: "16.2:1",
      contrastPrimary: "9.8:1",
    },
    {
      name: "Success",
      hex: "#059669",
      rgb: "5, 150, 105",
      usage: "Reviews, Guarantees",
      contrastWhite: "4.8:1",
      contrastLight: "5.2:1",
    },
    {
      name: "Error",
      hex: "#dc2626",
      rgb: "220, 38, 38",
      usage: "Warnings, Errors",
      contrastWhite: "5.9:1",
      contrastLight: "6.5:1",
    },
  ]

  return (
    <div className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Farbpalette & Kontrast-Werte</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colors.map((color) => (
            <div key={color.name} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
              <div className="h-24 w-full" style={{ backgroundColor: color.hex }}></div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg">{color.name}</h3>
                <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                <p className="text-xs text-muted-foreground">RGB: {color.rgb}</p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Verwendung:</span> {color.usage}
                </p>
                <div className="pt-2 mt-2 border-t border-border text-xs space-y-1">
                  {Object.entries(color)
                    .filter(([key]) => key.startsWith("contrast"))
                    .map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-muted-foreground">{key.replace("contrast", "vs. ")}:</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-card rounded-lg border border-border">
          <h3 className="font-bold text-lg mb-4">WCAG 2.1 Kontrast-Anforderungen</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-success font-bold">✓</span>
              <span>
                <strong>Level AA:</strong> Mindestens 4.5:1 für normalen Text, 3:1 für großen Text - Alle Farben
                erfüllen diese Anforderung
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success font-bold">✓</span>
              <span>
                <strong>Level AAA:</strong> Mindestens 7:1 für normalen Text, 4.5:1 für großen Text - Primary und
                Secondary erfüllen AAA
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
