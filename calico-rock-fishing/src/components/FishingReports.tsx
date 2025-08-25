import React, { useState, useEffect } from 'react'
import { Calendar, Fish, TrendingUp, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface FishingReport {
  id: string
  title: string
  description: string
  content: string
  pubDate: string
  link: string
  author?: string
  category?: string
}

const FishingReports: React.FC = () => {
  const { t } = useLanguage()
  const [reports, setReports] = useState<FishingReport[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchFishingReports()
  }, [])

  const fetchFishingReports = async () => {
    try {
      setLoading(true)
      
      // Since we can't directly fetch RSS due to CORS, we'll create mock data
      // In a real implementation, you'd use a backend proxy or RSS-to-JSON service
      const mockReports: FishingReport[] = [
        {
          id: '1',
          title: 'White River Fishing Report - Excellent Trout Conditions',
          description: 'Water levels are perfect and trout are actively feeding. Brown trout up to 18 inches reported near Calico Rock.',
          content: 'The White River is fishing exceptionally well this week with water temperatures holding steady at 52°F. Anglers are reporting excellent success with small nymphs and streamers. The recent generation schedule has created ideal conditions for both wade fishing and drift boat trips. Brown trout in the 14-18 inch range are being caught regularly, with several trophy fish over 20 inches reported. Best fishing has been early morning and late evening. Recommended flies include size 18-20 midges, small pheasant tails, and olive woolly buggers.',
          pubDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'White River Guide Service',
          category: 'Fishing Conditions'
        },
        {
          id: '2',
          title: 'Weekly Water Release Schedule Update',
          description: 'Corps of Engineers announces generation schedule for optimal fishing conditions this week.',
          content: 'The U.S. Army Corps of Engineers has released the generation schedule for Bull Shoals Dam. Minimal generation is planned for Tuesday through Thursday, creating excellent wade fishing opportunities. Water flows will be approximately 350 CFS during non-generation periods. Weekend generation is scheduled for Saturday afternoon and Sunday morning. Anglers should plan accordingly and always check current conditions before entering the water. The consistent flows have allowed aquatic insects to establish good populations, resulting in excellent dry fly fishing opportunities.',
          pubDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Arkansas Game & Fish',
          category: 'Water Conditions'
        },
        {
          id: '3',
          title: 'Fall Fishing Patterns on the White River',
          description: 'As temperatures drop, trout behavior changes. Learn the best techniques for autumn fishing success.',
          content: 'Fall brings some of the best fishing of the year to the White River. As water temperatures cool, trout become more active and aggressive. The recent cooler nights have triggered increased feeding activity, particularly in the early morning hours. Streamers are producing excellent results, with olive and brown patterns being most effective. The annual midge hatch is beginning to intensify, providing opportunities for technical dry fly fishing. Anglers should focus on deeper pools during midday and transition to shallower runs during low-light periods. October and November consistently produce some of the largest trout of the year.',
          pubDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Professional Guide Staff',
          category: 'Fishing Techniques'
        },
        {
          id: '4',
          title: 'Calico Rock Area Fishing Hotspots',
          description: 'Local guide shares insider knowledge about the most productive fishing areas near Calico Rock.',
          content: 'The Calico Rock area offers some of the most diverse and productive trout fishing on the White River. The deep pools below the Calico Rock bluffs hold large brown trout year-round. The shoals above and below town provide excellent rainbow trout fishing, particularly during low water periods. Local guides recommend focusing on the limestone bluffs where springs enter the river, as these areas maintain consistent temperatures and attract feeding trout. The boat ramp area offers easy access for both wade fishing and launching drift boats. Night fishing can be particularly productive during summer months, with large browns moving into shallow water to feed.',
          pubDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Calico Rock Guide Service',
          category: 'Local Knowledge'
        },
        {
          id: '5',
          title: 'Equipment Recommendations for White River Success',
          description: 'Essential gear and tackle recommendations from experienced White River guides.',
          content: 'Success on the White River requires the right equipment and techniques. A 9-foot, 5-weight rod is ideal for most conditions, providing the versatility needed for both nymphing and dry fly fishing. Leaders should be 9-12 feet long with 5X or 6X tippet for most situations. Essential flies include size 18-22 midges, pheasant tail nymphs, copper johns, and woolly buggers in olive and brown. Waders with felt soles provide the best traction on the river\'s limestone bottom. A quality net with rubber mesh protects the fish and improves landing success. Polarized sunglasses are essential for spotting fish and reading water conditions.',
          pubDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'White River Outfitters',
          category: 'Equipment'
        }
      ]

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setReports(mockReports)
      setError(null)
    } catch (err) {
      setError('Failed to load fishing reports')
      console.error('Error fetching fishing reports:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substr(0, maxLength) + '...'
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fishing Conditions':
        return <Fish className="w-5 h-5" />
      case 'Water Conditions':
        return <TrendingUp className="w-5 h-5" />
      case 'Local Knowledge':
        return <MapPin className="w-5 h-5" />
      default:
        return <Calendar className="w-5 h-5" />
    }
  }

  return (
    <section id="fishing-reports" className="section">
      <div className="cliff-background">
        <div className="cliff-layer"></div>
        <div className="cliff-layer"></div>
        <div className="cliff-layer"></div>
      </div>
      
      <div className="section-inner">
        <div className="text-center mb-5">
          <h2 className="section-title limestone-title">
            {t.dailyFishingReports}
          </h2>
          <p className="body-large" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {t.fishingReportsDescription}
          </p>
        </div>

        {loading && (
          <div className="text-center py-5">
            <div className="loading-spinner">
              <Fish className="w-8 h-8 animate-spin" style={{ color: 'var(--river-blue)' }} />
            </div>
            <p className="mt-3" style={{ color: 'var(--charcoal)' }}>
              {t.loadingReports}
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-5">
            <p style={{ color: 'var(--charcoal)' }}>
              {t.noReportsAvailable}
            </p>
          </div>
        )}

        {!loading && !error && reports.length > 0 && (
          <>
            {/* Featured Report */}
            <div className="featured-report mb-5">
              <div className="featured-report-card">
                <div className="featured-report-content">
                  <div className="report-meta">
                    <div className="category-badge">
                      {getCategoryIcon(reports[0].category || '')}
                      <span>{reports[0].category}</span>
                    </div>
                    <div className="report-date">
                      <Clock className="w-4 h-4" />
                      <span>{formatDate(reports[0].pubDate)}</span>
                    </div>
                  </div>
                  
                  <h3 className="featured-report-title">
                    {reports[0].title}
                  </h3>
                  
                  <p className="featured-report-description">
                    {reports[0].description}
                  </p>
                  
                  <div className="featured-report-content-preview">
                    {truncateText(reports[0].content, 300)}
                  </div>
                  
                  <div className="report-footer">
                    <span className="report-author">
                      By {reports[0].author}
                    </span>
                    <a 
                      href={reports[0].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      {t.readMore}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Reports Grid */}
            <div className="reports-grid">
              {reports.slice(1).map((report) => (
                <article key={report.id} className="report-card">
                  <div className="report-card-header">
                    <div className="category-badge">
                      {getCategoryIcon(report.category || '')}
                      <span>{report.category}</span>
                    </div>
                    <div className="report-date">
                      <Clock className="w-4 h-4" />
                      <span>{formatDate(report.pubDate)}</span>
                    </div>
                  </div>
                  
                  <h4 className="report-card-title">
                    {report.title}
                  </h4>
                  
                  <p className="report-card-description">
                    {report.description}
                  </p>
                  
                  <div className="report-card-footer">
                    <span className="report-author">
                      By {report.author}
                    </span>
                    <a 
                      href={report.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="read-more-link"
                    >
                      {t.readMore} →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Reports Button */}
            <div className="text-center mt-5">
              <a 
                href="https://whiteriver.net/fishing/reports-and-information/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-limestone"
              >
                {t.viewAllReports}
              </a>
            </div>
          </>
        )}
      </div>
      
      <div className="river-flow"></div>
    </section>
  )
}

export default FishingReports