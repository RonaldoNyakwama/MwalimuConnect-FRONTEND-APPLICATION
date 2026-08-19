import { useState } from 'react';
import { mockReviews } from '../data/mockReviews';
import { Button } from '../components/Button';
import { Star, DollarSign, Clock, Video, ArrowLeft, MessageCircle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export function TutorProfile({ tutor, onBack }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const tutorReviews = mockReviews.filter((r) => r.tutorId === tutor.id);

  const handleBooking = () => {
    alert('Booking confirmed! Payment has been held in escrow.');
    setBookingOpen(false);
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to tutors
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex gap-6 mb-6">
              <img
                src={tutor.profileImage}
                alt={tutor.name}
                className="w-32 h-32 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h1 className="text-2xl mb-2">{tutor.name}</h1>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  <span className="text-lg">{tutor.rating}</span>
                  <span className="text-muted-foreground">
                    ({tutor.totalReviews} reviews)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tutor.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 bg-primary text-white rounded-full text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2">About</h3>
                <p className="text-muted-foreground">{tutor.bio}</p>
              </div>

              <div>
                <h3 className="text-lg mb-2">Qualifications</h3>
                <p className="text-muted-foreground">{tutor.qualifications}</p>
              </div>

              <div>
                <h3 className="text-lg mb-2">Experience</h3>
                <p className="text-muted-foreground">{tutor.experience} of teaching</p>
              </div>

              <div>
                <h3 className="text-lg mb-2">Availability</h3>
                <ul className="space-y-1">
                  {tutor.availability.map((slot, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{slot}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2">Class Types</h3>
                <div className="flex gap-2">
                  {tutor.classTypes.map((type) => (
                    <span
                      key={type}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-lg text-sm"
                    >
                      {type === 'face-to-face' ? 'Face-to-Face' : type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl mb-4">Reviews</h2>
            <div className="space-y-4">
              {tutorReviews.map((review) => (
                <div key={review.id} className="border-b border-border pb-4 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span>{review.parentName}</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-yellow-500 text-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                  <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6 text-primary" />
              <span className="text-2xl">${tutor.hourlyRate}</span>
              <span className="text-muted-foreground">/hour</span>
            </div>

            <Dialog.Root open={bookingOpen} onOpenChange={setBookingOpen}>
              <Dialog.Trigger asChild>
                <Button variant="primary" className="w-full mb-3">
                  Book a Session
                </Button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-lg p-6 w-full max-w-md">
                  <Dialog.Title className="text-xl mb-4">Book a Session</Dialog.Title>

                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm">Student Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-input-background border border-border rounded-lg"
                        placeholder="Enter student name"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm">Subject</label>
                      <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg">
                        {tutor.subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm">Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 bg-input-background border border-border rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm">Duration (minutes)</label>
                      <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg">
                        <option value="60">60 minutes - ${tutor.hourlyRate}</option>
                        <option value="90">90 minutes - ${tutor.hourlyRate * 1.5}</option>
                        <option value="120">120 minutes - ${tutor.hourlyRate * 2}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm">Class Type</label>
                      <select className="w-full px-4 py-2 bg-input-background border border-border rounded-lg">
                        {tutor.classTypes.map((type) => (
                          <option key={type} value={type}>
                            {type === 'face-to-face' ? 'Face-to-Face' : type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex gap-2">
                      <Dialog.Close asChild>
                        <Button variant="outline" className="flex-1">
                          Cancel
                        </Button>
                      </Dialog.Close>
                      <Button variant="primary" className="flex-1" onClick={handleBooking}>
                        Confirm Booking
                      </Button>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <div className="space-y-2">
              <a
                href={tutor.videoCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <Video className="w-4 h-4" />
                <span>Video Interview</span>
              </a>

              <a
                href={`https://wa.me/${tutor.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
