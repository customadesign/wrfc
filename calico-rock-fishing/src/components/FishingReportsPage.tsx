import React, { useState, useEffect } from 'react'
import { Calendar, Fish, TrendingUp, MapPin, Clock, ArrowLeft, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
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

const FishingReportsPage: React.FC = () => {
  const { t } = useLanguage()
  const [reports, setReports] = useState<FishingReport[]>([])
  const [displayedReports, setDisplayedReports] = useState<FishingReport[]>([])
  const [filteredReports, setFilteredReports] = useState<FishingReport[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMoreReports, setHasMoreReports] = useState(true)
  const [selectedMonth, setSelectedMonth] = useState<string>('all')
  const reportsPerPage = 5

  // Get current month and generate month tabs (January through current month)
  const currentDate = new Date()
  const currentMonthIndex = currentDate.getMonth() // 0-based (0 = January, 7 = August)
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const availableMonths = monthNames.slice(0, currentMonthIndex + 1)

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
          content: 'The White River is fishing exceptionally well this week with water temperatures holding steady at 52°F. Anglers are reporting excellent success with small nymphs and streamers. The recent generation schedule has created ideal conditions for both wade fishing and drift boat trips. Brown trout in the 14-18 inch range are being caught regularly, with several trophy fish over 20 inches reported. Best fishing has been early morning and late evening. Recommended flies include size 18-20 midges, small pheasant tails, and olive woolly buggers. Water clarity is excellent, so use lighter tippets and approach fish carefully. The limestone bluffs near Calico Rock continue to produce consistent results, especially in the deeper pools where larger fish hold during the day.',
          pubDate: new Date(2025, 7, 20).toISOString(), // August
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'White River Guide Service',
          category: 'Fishing Conditions'
        },
        {
          id: '2',
          title: 'Weekly Water Release Schedule Update',
          description: 'Corps of Engineers announces generation schedule for optimal fishing conditions this week.',
          content: 'The U.S. Army Corps of Engineers has released the generation schedule for Bull Shoals Dam. Minimal generation is planned for Tuesday through Thursday, creating excellent wade fishing opportunities. Water flows will be approximately 350 CFS during non-generation periods. Weekend generation is scheduled for Saturday afternoon and Sunday morning. Anglers should plan accordingly and always check current conditions before entering the water. The consistent flows have allowed aquatic insects to establish good populations, resulting in excellent dry fly fishing opportunities. Pay special attention to the generation schedule as water levels can rise quickly and become dangerous. Always fish with a buddy and wear appropriate safety gear.',
          pubDate: new Date(2025, 7, 15).toISOString(), // August
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Arkansas Game & Fish',
          category: 'Water Conditions'
        },
        {
          id: '3',
          title: 'Summer Heat Fishing Strategies',
          description: 'Beat the summer heat with these proven techniques for consistent trout fishing.',
          content: 'Summer fishing on the White River requires adapting to warmer conditions and changing trout behavior. Early morning and late evening sessions are most productive when water temperatures are cooler. Focus on deeper pools and shaded areas during midday heat. The generation schedule becomes crucial - fish during and immediately after releases when water is coolest and most oxygenated. Smaller flies work best in clear, low water conditions. Size 20-24 midges and small nymphs are essential. Consider night fishing for trophy browns that become more active after dark. Stay hydrated and wear sun protection during long summer days on the water.',
          pubDate: new Date(2025, 6, 25).toISOString(), // July
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Summer Fishing Experts',
          category: 'Fishing Techniques'
        },
        {
          id: '4',
          title: 'Calico Rock Area Fishing Hotspots',
          description: 'Local guide shares insider knowledge about the most productive fishing areas near Calico Rock.',
          content: 'The Calico Rock area offers some of the most diverse and productive trout fishing on the White River. The deep pools below the Calico Rock bluffs hold large brown trout year-round. The shoals above and below town provide excellent rainbow trout fishing, particularly during low water periods. Local guides recommend focusing on the limestone bluffs where springs enter the river, as these areas maintain consistent temperatures and attract feeding trout. The boat ramp area offers easy access for both wade fishing and launching drift boats. Night fishing can be particularly productive during summer months, with large browns moving into shallow water to feed. Key areas include the Railroad Trestle Pool, Calico Rock Bluffs, Spring River Confluence, and the Gravel Bar below town. Each location requires different techniques and fly selections for optimal success.',
          pubDate: new Date(2025, 6, 10).toISOString(), // July
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Calico Rock Guide Service',
          category: 'Local Knowledge'
        },
        {
          id: '5',
          title: 'June Caddis Hatch Report',
          description: 'The annual caddis emergence provides excellent dry fly fishing opportunities.',
          content: 'June brings one of the most exciting hatches of the year to the White River - the caddis emergence. These insects provide excellent dry fly fishing opportunities, especially during evening hours. Look for rising trout in slower pools and eddies where caddis adults gather. Elk hair caddis in sizes 14-16 are most effective, with tan and olive being the preferred colors. The hatch typically begins around 6 PM and can last until dark. Fish are often selective during heavy emergences, so having multiple caddis patterns is essential. This is also an excellent time for beginners to try dry fly fishing, as the takes are often aggressive and visible.',
          pubDate: new Date(2025, 5, 20).toISOString(), // June
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Dry Fly Specialists',
          category: 'Fishing Conditions'
        },
        {
          id: '6',
          title: 'Spring Fishing Outlook - Prime Time Approaching',
          description: 'Early spring conditions are setting up for excellent fishing opportunities on the White River.',
          content: 'Spring is approaching and conditions are looking excellent for the upcoming fishing season. Water temperatures are beginning to stabilize, and insect activity is increasing. The spring midge hatches should begin in earnest within the next few weeks, providing excellent dry fly opportunities. Streamers continue to be effective as trout are actively feeding after the winter months. Focus on deeper pools during cold mornings and move to shallower water as temperatures warm throughout the day. The generation schedule has been favorable for wade fishing, with minimal releases planned for the coming weeks. This is an excellent time to plan your White River fishing trip, as crowds are lighter and fish are hungry. Book your guided trips early as spring is a popular time for visiting anglers.',
          pubDate: new Date(2025, 4, 15).toISOString(), // May
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'White River Guide Service',
          category: 'Seasonal Outlook'
        },
        {
          id: '7',
          title: 'April Sowbug Patterns Producing Results',
          description: 'Local sowbug populations are active, providing consistent nymph fishing opportunities.',
          content: 'April marks the peak of sowbug activity on the White River. These small crustaceans are a primary food source for trout and provide excellent nymph fishing opportunities. Pink and orange sowbug patterns in sizes 16-18 are most effective. Fish these patterns dead drift along limestone ledges and in slower pools where sowbugs naturally occur. The key is getting the fly to the bottom quickly - use enough weight to tick the rocks. Sowbug fishing requires patience and concentration, but the rewards are worth it. This technique is particularly effective during midday when other insects are less active.',
          pubDate: new Date(2025, 3, 25).toISOString(), // April
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Nymph Fishing Experts',
          category: 'Fishing Techniques'
        },
        {
          id: '8',
          title: 'March Midge Emergence Intensifies',
          description: 'Peak midge season provides technical dry fly fishing for selective trout.',
          content: 'March brings the peak of midge season to the White River. These tiny insects emerge in massive numbers, creating some of the most technical and rewarding dry fly fishing of the year. Size 20-26 midge patterns are essential, with black, gray, and olive being the most productive colors. Fish are extremely selective during heavy emergences, often refusing flies that are even slightly off in size or color. Long, fine leaders (6X-7X) are necessary for success. Focus on slow pools and eddies where midges concentrate. This is challenging fishing that tests an angler\'s skills, but the satisfaction of fooling selective trout on tiny flies is unmatched.',
          pubDate: new Date(2025, 2, 20).toISOString(), // March
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Technical Angling Experts',
          category: 'Fishing Techniques'
        },
        {
          id: '9',
          title: 'February Streamer Fishing Success',
          description: 'Cold water conditions make streamers the top choice for consistent action.',
          content: 'February\'s cold water temperatures make streamer fishing the most productive technique on the White River. Large brown trout are less active but will still chase a well-presented streamer. Woolly buggers, zonkers, and sculpin patterns in sizes 4-8 work best. Fish these patterns slowly along undercut banks, deep pools, and structure. The key is varying your retrieve - sometimes a dead drift works better than active stripping. Don\'t be afraid to use larger flies in darker colors. Black, brown, and olive patterns are most effective. This is an excellent time to target trophy fish, as the largest browns are often caught during winter months.',
          pubDate: new Date(2025, 1, 15).toISOString(), // February
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Streamer Specialists',
          category: 'Fishing Techniques'
        },
        {
          id: '10',
          title: 'January Winter Fishing Strategies',
          description: 'Cold weather tactics for successful winter trout fishing on the White River.',
          content: 'January fishing on the White River requires patience and the right techniques. Water temperatures are at their coldest, making trout lethargic and selective. Small nymphs and midges are most effective, with sizes 18-24 being optimal. Fish slowly and thoroughly - trout won\'t move far for a fly in cold water. Focus on deeper pools where fish hold during winter. The generation schedule is crucial - fish during releases when water is slightly warmer and more oxygenated. Dress warmly and be prepared for challenging conditions. While fishing is slower, the trout caught are often in excellent condition and fight hard in the cold water.',
          pubDate: new Date(2025, 0, 20).toISOString(), // January
          link: 'https://whiteriver.net/fishing/reports-and-information/',
          author: 'Winter Fishing Experts',
          category: 'Seasonal Outlook'
        }
      ]

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setReports(mockReports)
      setFilteredReports(mockReports)
      setDisplayedReports(mockReports.slice(0, reportsPerPage))
      setHasMoreReports(mockReports.length > reportsPerPage)
      setError(null)
    } catch (err) {
      setError('Failed to load fishing reports')
      console.error('Error fetching fishing reports:', err)
    } finally {
      setLoading(false)
    }
  }

  const filterReportsByMonth = (month: string) => {
    setSelectedMonth(month)
    setCurrentPage(1)
    
    let filtered: FishingReport[]
    if (month === 'all') {
      filtered = reports
    } else {
      const monthIndex = monthNames.indexOf(month)
      filtered = reports.filter(report => {
        const reportDate = new Date(report.pubDate)
        return reportDate.getMonth() === monthIndex
      })
    }
    
    setFilteredReports(filtered)
    setDisplayedReports(filtered.slice(0, reportsPerPage))
    setHasMoreReports(filtered.length > reportsPerPage)
  }

  const loadMoreReports = async () => {
    if (loadingMore || !hasMoreReports) return
    
    try {
      setLoadingMore(true)
      
      // Simulate API delay for loading more reports
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const nextPage = currentPage + 1
      const startIndex = (nextPage - 1) * reportsPerPage
      const endIndex = startIndex + reportsPerPage
      const newReports = filteredReports.slice(startIndex, endIndex)
      
      if (newReports.length > 0) {
        setDisplayedReports(prev => [...prev, ...newReports])
        setCurrentPage(nextPage)
        setHasMoreReports(endIndex < filteredReports.length)
      } else {
        setHasMoreReports(false)
      }
    } catch (err) {
      console.error('Error loading more reports:', err)
    } finally {
      setLoadingMore(false)
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
    <div className="fishing-reports-page">
      {/* Header Section */}
      <section className="reports-header">
        <div className="cliff-background">
          <div className="cliff-layer"></div>
          <div className="cliff-layer"></div>
          <div className="cliff-layer"></div>
        </div>
        
        <div className="section-inner">
          <div className="reports-header-content">
            <Link to="/" className="back-link">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="reports-page-title">
              {t.dailyFishingReports}
            </h1>
            
            <p className="reports-page-subtitle">
              {t.fishingReportsDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Reports Content */}
      <section className="reports-content">
        <div className="section-inner">
          {/* Month Filter Tabs */}
          {!loading && !error && (
            <div className="month-filter-tabs" style={{ marginBottom: '3rem' }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <button
                  onClick={() => filterReportsByMonth('all')}
                  className={`month-tab ${selectedMonth === 'all' ? 'active' : ''}`}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: selectedMonth === 'all' ? '2px solid var(--river-blue)' : '2px solid var(--limestone-gray)',
                    background: selectedMonth === 'all' ? 'var(--river-blue)' : 'white',
                    color: selectedMonth === 'all' ? 'white' : 'var(--charcoal)',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  All Reports
                </button>
                {availableMonths.map((month) => (
                  <button
                    key={month}
                    onClick={() => filterReportsByMonth(month)}
                    className={`month-tab ${selectedMonth === month ? 'active' : ''}`}
                    style={{
                      padding: '0.75rem 1.5rem',
                      border: selectedMonth === month ? '2px solid var(--river-blue)' : '2px solid var(--limestone-gray)',
                      background: selectedMonth === month ? 'var(--river-blue)' : 'white',
                      color: selectedMonth === month ? 'white' : 'var(--charcoal)',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {month}
                  </button>
                ))}
              </div>
              <div style={{
                textAlign: 'center',
                color: 'var(--charcoal)',
                fontSize: '0.9rem',
                opacity: 0.8
              }}>
                Showing {selectedMonth === 'all' ? 'all' : selectedMonth} reports
                ({filteredReports.length} total)
              </div>
            </div>
          )}

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

          {!loading && !error && displayedReports.length > 0 && (
            <div className="reports-blog-grid mb-16">
              {displayedReports.map((report) => (
                <article key={report.id} className="blog-post-card">
                  <div className="blog-post-header">
                    <div className="category-badge">
                      {getCategoryIcon(report.category || '')}
                      <span>{report.category}</span>
                    </div>
                    <div className="report-date">
                      <Clock className="w-4 h-4" />
                      <span>{formatDate(report.pubDate)}</span>
                    </div>
                  </div>
                  
                  <h2 className="blog-post-title">
                    {report.title}
                  </h2>
                  
                  <p className="blog-post-description">
                    {report.description}
                  </p>
                  
                  <div className="blog-post-content">
                    {report.content}
                  </div>
                  
                  <div className="blog-post-footer">
                    <span className="report-author">
                      By {report.author}
                    </span>
                    <Link
                      to={`/fishing-reports/${report.id}`}
                      className="btn btn-primary"
                    >
                      View Full Report
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {!loading && !error && hasMoreReports && (
            <div className="text-center" style={{ marginTop: '3rem', marginBottom: '5rem' }}>
              <button
                onClick={loadMoreReports}
                disabled={loadingMore}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  margin: '0 auto',
                  opacity: loadingMore ? 0.7 : 1,
                  cursor: loadingMore ? 'not-allowed' : 'pointer'
                }}
              >
                {loadingMore ? (
                  <>
                    <Fish className="w-5 h-5 animate-spin" />
                    <span>Loading More Reports...</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span>Load More Reports</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default FishingReportsPage