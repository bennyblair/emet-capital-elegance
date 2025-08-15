import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { ResourcesHub } from './pages/resources/ResourcesHub'
import { Guides } from './pages/resources/Guides'
import { GuideArticle } from './pages/resources/GuideArticle'
import { CaseStudies } from './pages/resources/CaseStudies'
import { CaseStudy } from './pages/resources/CaseStudy'
import { ToolsCalculators } from './pages/resources/ToolsCalculators'
import { Glossary } from './pages/resources/Glossary'
import { FAQs } from './pages/resources/FAQs'
import { Insights } from './pages/resources/Insights'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<ResourcesHub />} />
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/resources/guides/:slug" element={<GuideArticle />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/case-studies/:slug" element={<CaseStudy />} />
          <Route path="/resources/tools" element={<ToolsCalculators />} />
          <Route path="/resources/glossary" element={<Glossary />} />
          <Route path="/resources/faqs" element={<FAQs />} />
          <Route path="/resources/insights" element={<Insights />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App