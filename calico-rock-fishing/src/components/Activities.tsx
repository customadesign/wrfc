import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Activities: React.FC = () => {
  const { t } = useLanguage()
  
  const activities = [
    {
      id: 1,
      title: t.troutFishing,
      description: t.troutFishingDesc,
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027ed023bc0cff8f339e.webp",
      category: t.fishing
    },
    {
      id: 2,
      title: t.riverViewsActivity,
      description: t.riverViewsActivityDesc,
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027fe91d9666f245a79f.jpeg",
      category: t.nature
    },
    {
      id: 3,
      title: t.waterActivitiesTitle,
      description: t.waterActivitiesDescription,
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68acb3bae7e3ef055008e0cb.jpeg",
      category: t.waterSports
    },
    {
      id: 4,
      title: t.wildlifeWatchingTitle,
      description: t.wildlifeWatchingDescription,
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027f6979a0f2b1cfa0ed.jpeg",
      category: t.wildlife
    },
    {
      id: 5,
      title: t.sunsetRelaxation,
      description: t.sunsetRelaxationDesc,
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027ea7e5984ad43b87f1.jpeg",
      category: t.relaxation
    },
    {
      id: 6,
      title: t.photography,
      description: t.photographyDesc,
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027fe91d960cef45a79e.jpeg",
      category: t.photographyCategory
    }
  ]

  return (
    <section id="activities" className="section">
      <div className="section-inner">
        <div className="container">
          <h2 className="section-title text-center">{t.activitiesTitle}</h2>
          <h3 className="limestone-title text-center mb-4">{t.yourPrivateWaterfrontEscape}</h3>
          <div className="body-large text-center mb-5">
            {t.activitiesIntro}
          </div>
          
          <div className="activities-grid">
            {activities.map((activity) => (
              <div key={activity.id} className="activity-card">
                <div className="activity-image">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    loading="lazy"
                  />
                  <div className="activity-overlay">
                    <span className="activity-category">{activity.category}</span>
                  </div>
                </div>
                <div className="activity-content">
                  <h4 className="activity-title">{activity.title}</h4>
                  <p className="activity-description">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default Activities