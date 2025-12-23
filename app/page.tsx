"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import ColorPalettePreview from "@/components/color-palette-preview"
import Image from "next/image"
import {
  Scale,
  Users,
  Clock,
  Euro,
  Shield,
  CheckCircle2,
  Building2,
  FileCheck,
  MessageSquare,
  Award,
  Star,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react"

export default function Recht247() {
  const [isDark, setIsDark] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo-20recht-2024-7-20neu-20530x300.jpg"
                alt="Recht 24/7 Logo"
                width={160}
                height={91}
                className="h-10 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("leistungen")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection("vorteile")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection("bewertungen")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Bewertungen
              </button>
              <button
                onClick={() => scrollToSection("uber-uns")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Über uns
              </button>
              <Button onClick={() => scrollToSection("kontakt")} size="sm">
                Beratung starten
              </Button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-md hover:bg-secondary transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-md hover:bg-secondary transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4 space-y-3">
              <button
                onClick={() => scrollToSection("leistungen")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection("vorteile")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection("bewertungen")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                Bewertungen
              </button>
              <button
                onClick={() => scrollToSection("uber-uns")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                Über uns
              </button>
              <div className="px-4">
                <Button onClick={() => scrollToSection("kontakt")} className="w-full" size="sm">
                  Beratung starten
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6a40c]/10 via-transparent to-[#f6a40c]/5"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              <Award className="h-3 w-3 mr-1" />
              Focus Money "Höchste Kundenzufriedenheit" 2023-2025
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Anwalt – sicher und <span className="text-primary">kompetent</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Mit Recht 24/7 – Deutschlands großer Online-Kanzlei
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium">21+ Jahre Erfahrung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium">{"> 100.000"} Mandanten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium">Faire Festpreise</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button onClick={() => scrollToSection("leistungen")} size="lg" className="text-lg">
                Erste Beratung buchen (169€)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={() => scrollToSection("leistungen")} size="lg" variant="outline" className="text-lg">
                Leistungen ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="leistungen" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Unsere Leistungen mit <span className="text-primary">transparenten Festpreisen</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Keine versteckten Kosten – Sie wissen genau, was Sie bekommen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Erstberatung */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">169€</Badge>
                </div>
                <CardTitle className="text-2xl">Erstberatung</CardTitle>
                <CardDescription>Direkt zum Anwalt</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">Allgemeine Beratung</span>
                  <span className="font-semibold">169€ brutto</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">Mietrecht</span>
                  <span className="font-semibold">169€ brutto</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">Arbeitsrecht</span>
                  <span className="font-semibold">169€ brutto</span>
                </div>
                <Button className="w-full mt-4" variant="default">
                  Beratung starten
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* UG-Gründung */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">219€</Badge>
                </div>
                <CardTitle className="text-2xl">UG-Gründung</CardTitle>
                <CardDescription>Ihr Weg zur eigenen Firma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">UG-Gründung</span>
                  <span className="font-semibold">219€ netto</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">Gesellschaftsvertrag</span>
                  <span className="font-semibold">Inklusive</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">Notartermin</span>
                  <span className="font-semibold">Vorbereitung</span>
                </div>
                <Button className="w-full mt-4" variant="default" asChild>
                  <a href="/ug-gruenden-online">
                    Jetzt gründen
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Vertragscheck */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">219€</Badge>
                </div>
                <CardTitle className="text-2xl">Vertragscheck</CardTitle>
                <CardDescription>Sicherheit bei Vertragsabschluss</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">Allgemeiner Vertrag</span>
                  <span className="font-semibold">219€ brutto</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">Arbeitsvertrag</span>
                  <span className="font-semibold">219€ brutto</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">Immobilienvertrag</span>
                  <span className="font-semibold">219€ brutto</span>
                </div>
                <Button className="w-full mt-4" variant="default">
                  Vertrag prüfen lassen
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="link" className="text-primary" asChild>
              <a href="#weitere-services">
                weitere Services von Recht 24/7
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section id="vorteile" className="py-20 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Warum <span className="text-primary">Recht 24/7</span>?
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Ihre Vorteile mit Deutschlands großer Online-Kanzlei
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg w-fit">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Direkt zum Anwalt</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kein Mittelsmann, keine Wartezeiten. Sie arbeiten direkt mit erfahrenen Anwälten deutschlandweit
                zusammen.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg w-fit">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Qualität & Schnelligkeit</h3>
              <p className="text-muted-foreground leading-relaxed">
                24-Stunden-Bearbeitung für die meisten Services. Höchste Qualitätsstandards durch erfahrene Fachanwälte.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg w-fit">
                <Euro className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Faire Festpreise</h3>
              <p className="text-muted-foreground leading-relaxed">
                100% Transparenz bei den Kosten. Sie wissen vorher genau, was Sie bezahlen – keine versteckten Gebühren.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg w-fit">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Zufriedenheits-Garantie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ausgezeichnet mit "Höchste Kundenzufriedenheit" von Focus Money (2023-2025). Über 100.000 zufriedene
                Mandanten.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Haftung bis 2,5 Mio. €</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vollumfängliche Berufshaftpflichtversicherung für maximale Sicherheit bei all unseren Leistungen.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg w-fit">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Klare Ergebnisse</h3>
              <p className="text-muted-foreground leading-relaxed">
                Digital, innovativ und papierfrei. Alle Dokumente und Ergebnisse übersichtlich und jederzeit abrufbar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section id="bewertungen" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Was unsere <span className="text-primary">Mandanten</span> sagen
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Über 100.000 zufriedene Mandanten vertrauen auf Recht 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Badge variant="secondary">Verifiziert</Badge>
                </div>
                <CardTitle>Stefanie Schmiedeberger</CardTitle>
                <CardDescription>UG-Gründung</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Schnell, unkompliziert und zu einem fairen Preis. Die Gründung meiner UG war innerhalb von 48 Stunden
                  abgeschlossen. Absolut empfehlenswert!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Badge variant="secondary">Verifiziert</Badge>
                </div>
                <CardTitle>Ahmed Sassi</CardTitle>
                <CardDescription>Markenanmeldung</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Die Markenanmeldung lief problemlos. Kompetente Beratung und transparente Preise. Genau das, was ich
                  gesucht habe."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Badge variant="secondary">Verifiziert</Badge>
                </div>
                <CardTitle>Johannes Adler</CardTitle>
                <CardDescription>Vertragscheck</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Der Vertragscheck hat mir die Sicherheit gegeben, die ich brauchte. Professionell, schnell und zum
                  Festpreis – einfach perfekt."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 text-center">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Trusted Shops: 4.9 von 5 Sternen</h3>
            <p className="text-muted-foreground mb-6">Basierend auf über 8.500 Bewertungen</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                <span>Schnelle Bearbeitung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Hohe Qualität</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-accent" />
                <span>Fair & Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Über uns Section */}
      <section id="uber-uns" className="py-20 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                  Über <span className="text-primary">Recht 24/7</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Seit 2003 sind wir Deutschlands führende Online-Kanzlei mit über 100.000 zufriedenen Mandanten.
                    Unser Ziel: Einfacher, unkomplizierter und fairer Zugang zu Recht.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-6 italic text-lg">
                    "Einfach, unkompliziert, fairer Preis – so sollte der Zugang zu Recht sein."
                    <footer className="text-sm text-muted-foreground mt-2 not-italic">
                      – Christina Schröder, Gründerin & Geschäftsführerin
                    </footer>
                  </blockquote>
                  <div className="grid grid-cols-3 gap-6 pt-4">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">21+</div>
                      <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">100K+</div>
                      <div className="text-sm text-muted-foreground">Mandanten</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">12</div>
                      <div className="text-sm text-muted-foreground">Anwälte im Team</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Unser Standort
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Hauptsitz in München, deutschlandweit tätig</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Unsere Philosophie</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">Digital und innovativ</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">100% papierfrei</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">Transparente Festpreise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">Höchste Qualitätsstandards</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Auszeichnungen & Qualität</h3>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="text-center">
                  <Award className="h-12 w-12 text-accent mx-auto mb-2" />
                  <div className="font-semibold">Focus Money</div>
                  <div className="text-sm text-muted-foreground">Kundenzufriedenheit</div>
                  <div className="text-xs text-muted-foreground">2023-2025</div>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-2" />
                  <div className="font-semibold">Haftpflicht</div>
                  <div className="text-sm text-muted-foreground">Bis 2,5 Mio. €</div>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 text-accent mx-auto mb-2" />
                  <div className="font-semibold">Trusted Shops</div>
                  <div className="text-sm text-muted-foreground">4.9 von 5 Sternen</div>
                  <div className="text-xs text-muted-foreground">8.500+ Bewertungen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & CTA */}
      <section id="kontakt" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl mb-2">Bereit für Ihre rechtssichere Zukunft?</CardTitle>
                <CardDescription className="text-lg">
                  Starten Sie jetzt oder abonnieren Sie unseren Newsletter für 5% Gutschein
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                  />
                  <Button size="lg" className="whitespace-nowrap">
                    5% Gutschein sichern
                  </Button>
                </div>
                <div className="text-center text-xs text-muted-foreground">
                  Mit der Anmeldung akzeptieren Sie unsere Datenschutzerklärung
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button onClick={() => scrollToSection("leistungen")} size="lg" className="flex-1">
                    Leistung auswählen
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                    Kostenlose Erstberatung
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Telefon</h4>
                  <p className="text-sm text-muted-foreground">Mo-Fr: 9:00-18:00 Uhr</p>
                  <p className="text-sm font-medium mt-1">+49 89 1234567</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">E-Mail</h4>
                  <p className="text-sm text-muted-foreground">Antwort innerhalb 24h</p>
                  <p className="text-sm font-medium mt-1">info@recht24-7.de</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Standort</h4>
                  <p className="text-sm text-muted-foreground">München</p>
                  <p className="text-sm font-medium mt-1">Deutschlandweit tätig</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Preview */}
      <ColorPalettePreview />

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-6 w-6 text-primary" />
                <div className="font-bold">Recht 24/7</div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deutschlands große Online-Kanzlei. Seit 2003 für über 100.000 Mandanten im Einsatz.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => scrollToSection("leistungen")}
                    className="hover:text-primary transition-colors"
                  >
                    Gründungen
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("leistungen")}
                    className="hover:text-primary transition-colors"
                  >
                    Vertragscheck
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("leistungen")}
                    className="hover:text-primary transition-colors"
                  >
                    Beratung
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("leistungen")}
                    className="hover:text-primary transition-colors"
                  >
                    Marken
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection("uber-uns")} className="hover:text-primary transition-colors">
                    Über uns
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("bewertungen")}
                    className="hover:text-primary transition-colors"
                  >
                    Bewertungen
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("kontakt")} className="hover:text-primary transition-colors">
                    Kontakt
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    AGB
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Widerrufsbelehrung
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Recht 24/7. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button onClick={() => scrollToSection("kontakt")} size="lg" className="shadow-lg">
          Jetzt starten
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
