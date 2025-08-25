import React from 'react'

const Activities: React.FC = () => {
  const activities = [
    {
      id: 1,
      title: "Trout Fishing",
      description: "World-class trout fishing on the legendary White River",
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027ed023bc0cff8f339e.webp",
      category: "Fishing"
    },
    {
      id: 2,
      title: "River Views",
      description: "Breathtaking views of the limestone cliffs and crystal waters",
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027fe91d9666f245a79f.jpeg",
      category: "Nature"
    },
    {
      id: 3,
      title: "Water Activities",
      description: "Kayaking, canoeing, and swimming in pristine waters",
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027ed023bc0cff8f339e.webp",
      category: "Water Sports"
    },
    {
      id: 4,
      title: "Wildlife Watching",
      description: "Observe native Arkansas wildlife in their natural habitat",
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027f6979a0f2b1cfa0ed.jpeg",
      category: "Wildlife"
    },
    {
      id: 5,
      title: "Sunset Relaxation",
      description: "Unwind with stunning sunset views over the White River",
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027ea7e5984ad43b87f1.jpeg",
      category: "Relaxation"
    },
    {
      id: 6,
      title: "Photography",
      description: "Capture the natural beauty of Calico Rock and the river",
      image: "https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac027fe91d960cef45a79e.jpeg",
      category: "Photography"
    }
  ]

  return (
    <section id="activities" className="section">
      <div className="section-inner">
        <div className="container">
          <h2 className="section-title text-center">🚣 Activities</h2>
          <h3 className="limestone-title text-center mb-4">Your Private Waterfront Escape</h3>
          <div className="body-large text-center mb-5">
            Step outside Unit 750 and you're just moments away from the crystal-clear waters of the White River, 
            offering endless opportunities for relaxation and adventure.
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
          
          {/* Record Brown Trout Section */}
          <div className="record-trout-section">
            <div className="record-trout-content">
              <div className="record-trout-text">
                <h3 className="record-trout-title">🏆 Record-Breaking Fishing Heritage</h3>
                <h4 className="record-trout-subtitle">Howard Collins' Legendary Catch</h4>
                <p className="record-trout-description">
                  The White River near Calico Rock holds a special place in fishing history. 
                  In 1983, Howard Collins caught the largest brown trout ever recorded in the 
                  United States, weighing an incredible 40 pounds, 4 ounces. This legendary 
                  catch from the very waters you'll be fishing at Unit 750 continues to 
                  inspire anglers from around the world.
                </p>
                <div className="record-trout-stats">
                  <div className="stat">
                    <span className="stat-number">40 lbs</span>
                    <span className="stat-label">Weight</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">1983</span>
                    <span className="stat-label">Year</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">#1</span>
                    <span className="stat-label">U.S. Record</span>
                  </div>
                </div>
              </div>
              <div className="record-trout-image">
                <img 
                  src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac03266979a07b85cfb63d.webp"
                  alt="Howard Collins with his record-breaking 40 pound, 4 ounce brown trout caught in the White River near Calico Rock"
                  loading="lazy"
                />
                <div className="image-caption">
                  Howard Collins with his record-breaking brown trout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities