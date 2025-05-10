import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppFloatButton from "@/components/layout/WhatsAppFloatButton";
import { AnimatePresence } from "framer-motion";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const IntervisionPage = lazy(() => import("@/pages/IntervisionPage"));
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
// Placeholder pages - to be implemented later
const CoursesEventsPage = lazy(() => import("@/pages/PlaceholderPage"));
const BlogPage = lazy(() => import("@/pages/PlaceholderPage"));
const NewsletterPage = lazy(() => import("@/pages/PlaceholderPage"));
const ContactPage = lazy(() => import("@/pages/PlaceholderPage"));

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const PageLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingFallback />}>
          <main className="flex-grow" key={location.pathname}>
            {children}
          </main>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <Toaster />
      <WhatsAppFloatButton />
    </div>
  );
};

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/intervisao" element={<IntervisionPage />} />
          <Route
            path="/politica-de-privacidade"
            element={<PrivacyPolicyPage />}
          />
          <Route
            path="/cursos-eventos"
            element={
              <CoursesEventsPage
                pageName="Meus Cursos e Eventos Estão Chegando!"
                description="Eu já estou preparando com muito carinho os próximos cursos e eventos pra gente caminhar ainda mais juntas(os). Fica de olho aqui no site e nas minhas redes, que em breve você vai poder se inscrever!"
              />
            }
          />
          <Route path="/blog" element={<BlogPage pageName="Blog" />} />
          <Route
            path="/newsletter"
            element={<NewsletterPage pageName="Newsletter" />}
          />
          <Route path="/contato" element={<ContactPage pageName="Contato" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
