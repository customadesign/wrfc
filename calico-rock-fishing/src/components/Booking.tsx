import React, { useState } from 'react'
import { Calendar, CalendarDays, Users, DollarSign, Clock, CheckCircle } from 'lucide-react'

interface BookingData {
  checkIn: Date | null
  checkOut: Date | null
  guests: number
  name: string
  email: string
  phone: string
}

const Booking: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState<{
    checkIn: Date | null
    checkOut: Date | null
  }>({
    checkIn: null,
    checkOut: null
  })
  
  const [guests, setGuests] = useState(2)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [bookingData, setBookingData] = useState<BookingData>({
    checkIn: null,
    checkOut: null,
    guests: 2,
    name: '',
    email: '',
    phone: ''
  })
  const [showBookingForm, setShowBookingForm] = useState(false)

  const pricePerNight = 225

  // Generate calendar days for current month
  const generateCalendarDays = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())
    
    const days = []
    const currentDate = new Date(startDate)
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    return days
  }

  // Check if date is available (mock availability - in real app this would come from backend)
  const isDateAvailable = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    // Make dates in the past unavailable
    if (date < today) return false
    
    // Mock some unavailable dates (e.g., already booked)
    const unavailableDates = [
      new Date(2025, 0, 15), // Jan 15
      new Date(2025, 0, 16), // Jan 16
      new Date(2025, 0, 25), // Jan 25
      new Date(2025, 1, 5),  // Feb 5
      new Date(2025, 1, 14), // Feb 14
    ]
    
    return !unavailableDates.some(unavailable => 
      date.getTime() === unavailable.getTime()
    )
  }

  const isDateSelected = (date: Date) => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) {
      return selectedDates.checkIn?.getTime() === date.getTime()
    }
    
    return date >= selectedDates.checkIn && date <= selectedDates.checkOut
  }

  const isDateInRange = (date: Date) => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) return false
    return date > selectedDates.checkIn && date < selectedDates.checkOut
  }

  const handleDateClick = (date: Date) => {
    if (!isDateAvailable(date)) return

    if (!selectedDates.checkIn || (selectedDates.checkIn && selectedDates.checkOut)) {
      // Start new selection
      setSelectedDates({ checkIn: date, checkOut: null })
    } else if (selectedDates.checkIn && !selectedDates.checkOut) {
      // Complete selection
      if (date > selectedDates.checkIn) {
        setSelectedDates({ ...selectedDates, checkOut: date })
      } else {
        setSelectedDates({ checkIn: date, checkOut: null })
      }
    }
  }

  const calculateNights = () => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) return 0
    const timeDiff = selectedDates.checkOut.getTime() - selectedDates.checkIn.getTime()
    return Math.ceil(timeDiff / (1000 * 3600 * 24))
  }

  const calculateTotal = () => {
    return calculateNights() * pricePerNight
  }

  const handleBooking = () => {
    if (selectedDates.checkIn && selectedDates.checkOut) {
      setBookingData({
        ...bookingData,
        checkIn: selectedDates.checkIn,
        checkOut: selectedDates.checkOut,
        guests
      })
      setShowBookingForm(true)
    }
  }

  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to a backend
    alert(`Booking submitted for ${bookingData.name}!\nCheck-in: ${selectedDates.checkIn?.toLocaleDateString()}\nCheck-out: ${selectedDates.checkOut?.toLocaleDateString()}\nTotal: $${calculateTotal()}`)
    
    // Reset form
    setSelectedDates({ checkIn: null, checkOut: null })
    setShowBookingForm(false)
    setBookingData({
      checkIn: null,
      checkOut: null,
      guests: 2,
      name: '',
      email: '',
      phone: ''
    })
  }

  const calendarDays = generateCalendarDays(currentMonth)
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  if (showBookingForm) {
    return (
      <section id="booking" className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Complete Your Booking</h2>
            <p>Unit 750 - Calico Rock Fishing Resort</p>
          </div>

          <div className="booking-form-container">
            <div className="booking-summary">
              <h3>Booking Summary</h3>
              <div className="summary-item">
                <Calendar className="summary-icon" />
                <div>
                  <strong>Check-in:</strong> {selectedDates.checkIn?.toLocaleDateString()}
                </div>
              </div>
              <div className="summary-item">
                <Calendar className="summary-icon" />
                <div>
                  <strong>Check-out:</strong> {selectedDates.checkOut?.toLocaleDateString()}
                </div>
              </div>
              <div className="summary-item">
                <Users className="summary-icon" />
                <div>
                  <strong>Guests:</strong> {guests}
                </div>
              </div>
              <div className="summary-item">
                <Clock className="summary-icon" />
                <div>
                  <strong>Nights:</strong> {calculateNights()}
                </div>
              </div>
              <div className="summary-total">
                <DollarSign className="summary-icon" />
                <div>
                  <strong>Total: ${calculateTotal()}</strong>
                  <small>${pricePerNight} × {calculateNights()} nights</small>
                </div>
              </div>
            </div>

            <form onSubmit={submitBooking} className="booking-form">
              <h3>Guest Information</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={bookingData.email}
                  onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  onClick={() => setShowBookingForm(false)}
                  className="btn btn-ghost"
                >
                  Back to Calendar
                </button>
                <button type="submit" className="btn btn-primary">
                  <CheckCircle size={20} />
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2>Book Your Stay</h2>
          <p>Select your dates to check availability and pricing</p>
        </div>

        <div className="booking-container">
          <div className="calendar-section">
            <div className="calendar-header">
              <button onClick={prevMonth} className="calendar-nav">‹</button>
              <h3>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
              <button onClick={nextMonth} className="calendar-nav">›</button>
            </div>

            <div className="calendar-grid">
              <div className="calendar-weekdays">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="weekday">{day}</div>
                ))}
              </div>
              
              <div className="calendar-days">
                {calendarDays.map((date, index) => {
                  const isCurrentMonth = date.getMonth() === currentMonth.getMonth()
                  const isAvailable = isDateAvailable(date)
                  const isSelected = isDateSelected(date)
                  const isInRange = isDateInRange(date)
                  const isToday = date.toDateString() === new Date().toDateString()

                  return (
                    <button
                      key={index}
                      onClick={() => handleDateClick(date)}
                      disabled={!isAvailable}
                      className={`calendar-day ${
                        !isCurrentMonth ? 'other-month' : ''
                      } ${
                        !isAvailable ? 'unavailable' : ''
                      } ${
                        isSelected ? 'selected' : ''
                      } ${
                        isInRange ? 'in-range' : ''
                      } ${
                        isToday ? 'today' : ''
                      }`}
                    >
                      {date.getDate()}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="calendar-legend">
              <div className="legend-item">
                <div className="legend-color available"></div>
                <span>Available</span>
              </div>
              <div className="legend-item">
                <div className="legend-color unavailable"></div>
                <span>Unavailable</span>
              </div>
              <div className="legend-item">
                <div className="legend-color selected"></div>
                <span>Selected</span>
              </div>
            </div>
          </div>

          <div className="booking-details">
            <div className="pricing-card">
              <div className="price-header">
                <h3>${pricePerNight}</h3>
                <span>per night</span>
              </div>

              <div className="date-inputs">
                <div className="date-input">
                  <label>Check-in</label>
                  <div className="date-display">
                    {selectedDates.checkIn ? 
                      selectedDates.checkIn.toLocaleDateString() : 
                      'Select date'
                    }
                  </div>
                </div>
                <div className="date-input">
                  <label>Check-out</label>
                  <div className="date-display">
                    {selectedDates.checkOut ? 
                      selectedDates.checkOut.toLocaleDateString() : 
                      'Select date'
                    }
                  </div>
                </div>
              </div>

              <div className="guests-input">
                <label>Guests</label>
                <select 
                  value={guests} 
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="guests-select"
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              {selectedDates.checkIn && selectedDates.checkOut && (
                <div className="price-breakdown">
                  <div className="price-row">
                    <span>${pricePerNight} × {calculateNights()} nights</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="price-total">
                    <strong>Total: ${calculateTotal()}</strong>
                  </div>
                </div>
              )}

              <button 
                onClick={handleBooking}
                disabled={!selectedDates.checkIn || !selectedDates.checkOut}
                className="btn btn-primary booking-btn"
              >
                {selectedDates.checkIn && selectedDates.checkOut ? 
                  'Continue to Booking' : 
                  'Select Dates'
                }
              </button>
            </div>

            <div className="booking-features">
              <h4>What's Included</h4>
              <ul>
                <li>🏞️ Riverfront Access</li>
                <li>🪵 Rustic Wood Details</li>
                <li>🎣 Fishing Paradise</li>
                <li>🏠 Full Kitchen & Amenities</li>
                <li>🚗 Free Parking</li>
                <li>📶 WiFi Included</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking