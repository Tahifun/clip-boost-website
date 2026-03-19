import {
  APP_DOWNLOAD_PAGE_URL,
  APP_DOWNLOAD_URL,
  APP_URL,
} from "../config/siteLinks";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function Download() {
  return (
    <div className="min-h-screen bg-[#07070d] text-white">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-20 pt-12 md:px-10">
        <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(115deg,rgba(140,82,255,0.18),rgba(72,194,255,0.12))] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                Desktop-App Download
              </div>
              <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                CLiP BOOsT für Windows herunterladen
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                Lade den aktuellen Windows-Installer herunter und richte die
                Desktop-App bzw. den Helper für OBS-, Overlay- und Live-Studio-Workflows ein.
              </p>
            </div>

            <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold text-white/90">Schnellstart</div>
              <ol className="mt-3 space-y-2 text-sm text-white/70">
                <li>1. Installer herunterladen</li>
                <li>2. Setup-Datei starten</li>
                <li>3. Nach der Installation zurück zur App</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-bold">Download</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              Der Button unten startet direkt den Download der Setup-Datei.
              Falls dein Browser nachfragt, bestätige den Download und öffne
              anschließend die heruntergeladene Datei.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={APP_DOWNLOAD_URL}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:opacity-95"
              >
                Windows-Installer herunterladen
              </a>

              <a
                href={APP_URL}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-medium text-white/85 transition hover:bg-white/10"
              >
                Zur App
              </a>
            </div>

            <div className="mt-6 rounded-[20px] border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100">
              Hinweis: Wenn der Download nicht startet, prüfe bitte, ob die Datei
              unter <span className="font-semibold">{APP_DOWNLOAD_URL}</span> auf
              dem Hosting bereits vorhanden ist.
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-2xl font-bold">Wichtige Info</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Diese Seite ist die öffentliche Download-Seite der Website:
                <br />
                <span className="font-semibold text-white/90">{APP_DOWNLOAD_PAGE_URL}</span>
              </p>
              <p>
                Wenn du von der Produktseite oder direkt aus der App hierher kommst,
                kannst du den Installer jederzeit erneut laden.
              </p>
              <p>
                Für OBS- und Live-Studio-Funktionen muss die Desktop-App bzw. der
                Helper lokal installiert sein.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
