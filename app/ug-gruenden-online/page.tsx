"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Scale,
  Clock,
  Euro,
  Shield,
  CheckCircle2,
  FileCheck,
  Award,
  Star,
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
  Users,
  TrendingUp,
} from "lucide-react"

export default function UGGruenden() {
  const [isDark, setIsDark] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              <a href="/">
                <Image
                  src="/images/logo-20recht-2024-7-20neu-20530x300.jpg"
                  alt="Recht 24/7 Logo"
                  width={160}
                  height={91}
                  className="h-10 w-auto"
                  priority
                />
              </a>
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
                onClick={() => scrollToSection("ablauf")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Ablauf
              </button>
              <button
                onClick={() => scrollToSection("vorteile")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <Button onClick={() => scrollToSection("kontakt")} size="sm">
                Jetzt gründen
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
                onClick={() => scrollToSection("ablauf")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                Ablauf
              </button>
              <button
                onClick={() => scrollToSection("vorteile")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                Vorteile
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                FAQ
              </button>
              <div className="px-4">
                <Button onClick={() => scrollToSection("kontakt")} className="w-full" size="sm">
                  Jetzt gründen
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Badge variant="secondary" className="text-sm">
                <Award className="h-4 w-4 mr-1" />
                Höchste Kundenzufriedenheit
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Shield className="h-4 w-4 mr-1" />
                Sehr hohes Kundenvertrauen
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              UG online gründen – <span className="text-primary">sofort, einfach und schnell</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Rechtssicher vom Marktführer – Qualität und Erfahrung seit 2003
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium">In 24 Stunden</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium">Direkt vom Anwalt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium">All inclusive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium">Festpreis 219€</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button onClick={() => scrollToSection("kontakt")} size="lg" className="text-lg">
                Jetzt UG gründen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={() => scrollToSection("leistungen")} size="lg" variant="outline" className="text-lg">
                Mehr erfahren
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Festpreis 219,00 EUR – umfasst alle Leistungen, keine versteckten Kosten
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 border-b border-border bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">UG zum Festpreis gründen lassen</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Mit Recht 24/7 kannst Du Deine UG schnell, einfach und online gründen lassen. Direkt vom Anwalt: Als
              deutsche Rechtsanwaltsgesellschaft bieten wir Dir höchste Qualität und rechtliche Sicherheit. Mit völlig
              transparenten Preisen und allen Leistungen inklusive – ohne „Pakete", „Vermittlungen" und versteckte
              Kosten.
            </p>
          </div>
          <div className="text-center">
            <Badge variant="outline" className="text-lg px-6 py-3">
              <Award className="h-5 w-5 mr-2" />
              Ausgezeichnet 2023 und 2024 mit „FOCUS höchster Kundenzufriedenheit"
            </Badge>
          </div>
        </div>
      </section>

      {/* Alle Leistungen Section */}
      <section id="leistungen" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Alle Leistungen für eine <span className="text-primary">vollständige und sichere UG Gründung</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vollständige Rechtsberatung */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Vollständige Rechtsberatung direkt vom Anwalt</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Prüfung Firmennamen durch einen Rechtsanwalt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Prüfung Firmennamen bei der IHK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Individuelle Erstellung aller Gründungsunterlagen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Erstellung Gesellschaftsvertrag</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Erstellung Gesellschafterliste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Erstellung Handelsregisteranmeldung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Erstellung Geschäftsführervertrag</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Anwalts- und Gründungsberatung */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Anwalts- und Gründungsberatung vor und nach der Gründung</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Wöchentliche Expertenbetreuung: Unternehmer-Academy by Recht 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Beratung bei der Gewerbeanmeldung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Beratung beim Steuerfragebogen und der Beantragung der Ust-ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Beratung bei der Eröffnungsbilanz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Persönliche Gründungsberatung durch einen Rechtsanwalt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Zwei Monate Follow-up Beratung nach Gründung inklusive</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Vollständige Abwicklung */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Vollständige Abwicklung und Abstimmung Notar</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Vereinbarung Notartermin bei Dir vor Ort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Notarkostengarantie: Wir erstellen die Unterlagen so, dass die geringsten gesetzlichen
                      Notargebühren anfallen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Abstimmung aller Unterlagen mit dem Notariat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Vertretungs-Vollmacht bei Nicht-Teilnahme eines Gesellschafters beim Notartermin
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Expressgründung & Verträge */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Expressgründung & Verträge</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Expressgründung inklusive: Alle Unterlagen in 24 h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Recht 24/7 Vertragsbox mit allen wichtigen Verträgen für Dein Unternehmen
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      Günstiges Geschäftskonto bei der Commerzbank oder Qonto (bei Wunsch – Du kannst Deine Bank
                      natürlich frei wählen)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      5% Rabatt auf alle Recht 24/7 Anwalts- und Beratungsprodukte (lebenslang)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ablauf Section */}
      <section id="ablauf" className="py-20 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              So <span className="text-primary">einfach</span> geht es
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <div className="text-3xl font-bold text-primary">1</div>
                </div>
                <CardTitle>Online bestellen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Du bestellst online – einfach und bequem – Deine Gesellschaftsgründung. Recht 24/7 übernimmt alle
                  Aufgaben und die Vereinbarung des Notartermins für Dich.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <div className="text-3xl font-bold text-primary">2</div>
                </div>
                <CardTitle>Angaben übermitteln</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nach der Bestellung erhältst Du Zugriff auf unser Online-Formular, mit dem Du alle Angaben zur
                  Gesellschaft übermitteln kannst. Die Übertragung erfolgt verschlüsselt und vertraulich.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <div className="text-3xl font-bold text-primary">3</div>
                </div>
                <CardTitle>Gründen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Innerhalb von 24h erhältst Du die Dokumente zur Gründung. Wir vereinbaren einen Notartermin an Deinem
                  Wunschort und erledigen die restlichen Schritte zur erfolgreichen Gründung.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-lg w-fit">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Unternehmer-Academy by Recht 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground leading-relaxed">
                  Unser Webinar-Programm, um dich rechtlich abzusichern und dein Unternehmen erfolgreich zu führen: Mit
                  21 Jahren Erfahrung als deutsche Rechtsanwaltsgesellschaft bieten wir dir höchste Qualität und
                  Zuverlässigkeit. Jede Woche präsentieren wir spannende und praxisnahe Themen, die speziell auf
                  Unternehmer, Gründer und Geschäftsführer zugeschnitten sind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              User Stories unserer <span className="text-primary">Gründer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <CardTitle>Christian Singer</CardTitle>
                <CardDescription>Diadem Europe Services GmbH</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Recht 24/7 war bei der GmbH Gründung sehr hilfreich bzgl. der Erstellung und Absprache aller
                  notwendigen Dokumente. Recht 24/7 hat uns top begleitet und beraten."
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
                </div>
                <CardTitle>Ahmed Sassi</CardTitle>
                <CardDescription>Signum Label Marketing UG</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Die Zusammenarbeit war hervorragend. Nicht nur, weil sie ihrem Namen gerecht werden, sondern auch,
                  weil Sie Schritt für Schritt alles mit einem durcharbeiten."
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
                </div>
                <CardTitle>Dr. Jörg Hänsel</CardTitle>
                <CardDescription>Flugsimulator Dresden</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Das Recht 24/7 Team hat für uns alle notwendigen Dokumente zur UG Gründung erstellt. Vielen Dank für
                  die sehr netten Kontakte während unserer UG Gründungsphase."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-primary/5 rounded-lg p-8 text-center max-w-3xl mx-auto">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Trusted Shops: 4.9 von 5 Sternen</h3>
            <p className="text-muted-foreground">Basierend auf über 8.500 verifizierten Bewertungen</p>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section id="vorteile" className="py-20 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Deine Vorteile, mit <span className="text-primary">Recht 24/7</span> eine UG online zu gründen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Direkt zum Anwalt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir sind eine Rechtsanwaltskanzlei – und das seit 2003. Du erhältst direkt und ohne Mittelsmann
                  rechtliche Beratung aus einer Hand. Deutschlandweit – auch vor jedem Gericht.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-3">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Qualität und Schnelligkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Recht „24/7" steht für eine zuverlässige Bearbeitung aller Rechtsangelegenheiten in 24 Stunden.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-3">
                  <Euro className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Wir bieten faire Preise!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Guter und schneller rechtlicher Service muss kein Vermögen kosten. Bei unseren Festpreisen erlebst Du
                  keine bösen Überraschungen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-3">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Zufriedenheits-Garantie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seit mehr als zwei Jahrzehnten steht das Vertrauen und die Zufriedenheit unserer Mandanten für uns an
                  erster Stelle. Dies wird durch unsere Bewertungen und Auszeichnungen deutlich.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-3">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Verantwortlichkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir haften für unsere Beratung. Bei der HDI Versicherung sind wir für Schäden von bis zu 2.500.000,00
                  EURO versichert.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="p-4 bg-primary/10 rounded-lg w-fit mb-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Wir liefern klare Ergebnisse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Du erhältst eindeutigen Rat. „Anwalt geht auch einfach" – das gilt auch für unsere Sprache und unsere
                  Empfehlungen an Mandanten.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Fragen und Antworten zur <span className="text-primary">UG Gründung</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Was ist eine UG (haftungsbeschränkt)?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Eine UG (haftungsbeschränkt) ist eine Rechtsform für eine Gesellschaft. Im Gegensatz zu einer
                  Personengesellschaft handelt es sich bei der UG um eine Kapitalgesellschaft. Das bedeutet: Es haftet
                  immer die Gesellschaft mit ihrem „Kapital" und nicht der dahinter stehende Gesellschafter persönlich.
                  Wie bei einer GmbH ist die Haftung auf das eingezahlte Stammkapital beschränkt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Welches Stammkapital ist erforderlich?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Beim erforderlichen Stammkapital bestehen gesetzlich keine Vorgaben. Man kann theoretisch mit einem
                  Euro gründen. In der Praxis beurkunden die meisten Notare aber erst ab einem Stammkapital von 500,00
                  Euro, weshalb wir zu mindestens diesem Betrag raten.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wie schnell geht die Gründung?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sie erhalten Ihre Gründungsunterlagen von einem Anwalt individuell erstellt in 24 h. Wenn es Ihnen
                  eilig ist, können wir in diesem Zeitraum auch einen Notartermin vereinbaren. Die Gesellschaft ist nach
                  der Beurkundung handlungsfähig als UG in Gründung.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Was kostet bei der UG-Gründung der Notar und das Registergericht?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Die Notarkosten betragen bei Verwendung des Musterprotokolls und bei bis zu 7.000 Euro Stammkapital:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>bei einem Gesellschafter ca. 190,00 Euro</li>
                    <li>bei 2-3 Gesellschafter ca. 290,00 Euro</li>
                  </ul>
                  <p>Die Registergerichtskosten betragen 200,00 Euro.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wie viel kostet eine UG im Jahr?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Die Kosten für den Betrieb einer UG setzen sich aus Kosten für die Erfüllung von Buchführungs- und
                  Steuerpflichten sowie Kosten für die Pflichtmitgliedschaft in der IHK/HWK zusammen. Bei einer UG mit
                  einem Umsatz von 50.000,00 Euro liegen diese Kosten bei ca. 600,00 Euro pro Jahr.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-20 border-b border-border bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="mb-4 mx-auto">
                  Festpreis 219,00 EUR
                </Badge>
                <CardTitle className="text-3xl md:text-4xl mb-2">Bereit für Deine UG-Gründung?</CardTitle>
                <CardDescription className="text-lg">
                  Du erhältst alle Leistungen zum Festpreis, keine versteckten Kosten, keine Pakete mit Zusatzkosten
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1 text-lg">
                    Jetzt UG gründen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 text-lg bg-transparent">
                    Kostenlose Beratung
                  </Button>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">24h Bearbeitung</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">100% sicher</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">All inclusive</div>
                  </div>
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
                  <a href="/" className="hover:text-primary transition-colors">
                    Gründungen
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Vertragscheck
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Beratung
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Marken
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Bewertungen
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Kontakt
                  </a>
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
          Jetzt gründen
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
