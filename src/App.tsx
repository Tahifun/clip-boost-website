// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import RequireAuth from "@/routes/RequireAuth";
import { ExperimentDebugPanel } from "@/components/ExperimentDebugPanel";
import { OfflineIndicator } from "@/components/OfflineIndicator";
import FooterLegal from "@/components/FooterLegal";
import { legalRouteElements } from "@/routes/legalRoutes";
import { publicRouteElements } from "@/routes/publicRoutes";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import Help from "./pages/Help";

import Dashboard from "./pages/Dashboard";
import Overlays from "./pages/Overlays";
import OverlaysCommunity from "./pages/OverlaysCommunity";
import OverlayUpload from "./pages/OverlayUpload";
import Media from "./pages/Media";
import Minigames from "./pages/Minigames";
import Spotify from "./pages/Spotify";
import Integrations from "./pages/Integrations";
import Subscribe from "./pages/Subscribe";

import LiveLayout from "./pages/live/LiveLayout";
import LiveSetup from "./pages/live/LiveSetup";
import LiveDashboard from "./pages/live/LiveDashboard";
import LiveScenes from "./pages/live/LiveScenes";

import Bot from "./pages/Bot";
import BotIndex from "@/pages/bot/Index";
import CommandsPage from "@/pages/bot/CommandsPage";
import ModerationPage from "@/pages/bot/ModerationPage";
import AiSupportPage from "@/pages/bot/AiSupportPage";
import StatusPage from "@/pages/bot/StatusPage";

import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import CheckoutCancel from "./pages/CheckoutCancel";
import NotFound from "./pages/NotFound";
import RouteDebug from "./debug/RouteDebug";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, refetchOnWindowFocus: false },
  },
});

/**
 * Ziel:
 * - Deine App bleibt wie gehabt "App-first".
 * - ABER: Wenn du diese App-Deployments zusätzlich unter
 *   clip-boost-website.online laufen lässt, darf "/" NICHT auf /auth zeigen.
 *
 * Lösung:
 * - Domain-abhängiges Root-Routing:
 *   Website-Domain -> /features (öffentlich)
 *   App-Domain/Local -> /auth
 */
function App() {
  const host =
    typeof window !== "undefined" ? window.location.hostname : "";

  const isWebsiteDomain =
    host === "clip-boost-website.online" ||
    host === "www.clip-boost-website.online";

  // Optional: erleichtert Tests auf Vercel Preview-URLs der Website
  const isWebsitePreview =
    host.endsWith(".vercel.app") && host.includes("clip-boost-website");

  const usePublicRoot = isWebsiteDomain || isWebsitePreview;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <OfflineIndicator />
        <AuthProvider>
          <BrowserRouter>
            <RouteDebug />
            <main className="min-h-screen bg-background text-foreground">
              <Routes>
                {/* Root-Strategie: Website-Domain öffentlich, sonst Login */}
                <Route
                  path="/"
                  element={
                    <Navigate to={usePublicRoot ? "/features" : "/auth"} replace />
                  }
                />

                {/* Alias */}
                <Route
                  path="/login"
                  element={
                    <Navigate to={usePublicRoot ? "/features" : "/auth"} replace />
                  }
                />

                {/* Public */}
                <Route path="/auth" element={<Auth />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/help" element={<Help />} />
                {publicRouteElements}
                {legalRouteElements}
                <Route path="/checkout/success" element={<CheckoutSuccess />} />
                <Route path="/checkout/cancel" element={<CheckoutCancel />} />

                {/* Optional erreichbar, aber nicht Root */}
                <Route path="/index" element={<Index />} />

                {/* Protected */}
                <Route element={<RequireAuth />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/overlays" element={<Overlays />} />
                  <Route path="/overlays/community" element={<OverlaysCommunity />} />
                  <Route path="/overlays/upload" element={<OverlayUpload />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/minigames" element={<Minigames />} />
                  <Route path="/spotify" element={<Spotify />} />
                  <Route path="/integrations" element={<Integrations />} />
                  <Route path="/subscribe" element={<Subscribe />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/settings" element={<Settings />} />

                  {/* Live */}
                  <Route path="/live" element={<LiveLayout />}>
                    <Route index element={<LiveSetup />} />
                    <Route path="setup" element={<LiveSetup />} />
                    <Route path="dashboard" element={<LiveDashboard />} />
                    <Route path="scenes" element={<LiveScenes />} />
                  </Route>

                  {/* Bot */}
                  <Route path="/bot" element={<Bot />}>
                    <Route index element={<BotIndex />} />
                    <Route path="commands" element={<CommandsPage />} />
                    <Route path="moderation" element={<ModerationPage />} />
                    <Route path="ai" element={<AiSupportPage />} />
                    <Route path="status" element={<StatusPage />} />
                  </Route>
                </Route>

                {/* Redirects */}
                <Route path="/livestream/*" element={<Navigate to="/live" replace />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>

              <FooterLegal />
            </main>

            <ExperimentDebugPanel />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
