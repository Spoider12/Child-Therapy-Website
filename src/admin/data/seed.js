export const seed = {
  stats: [
    { label: 'Blogs', value: 18, trend: '+4 this month' },
    { label: 'Testimonials', value: 42, trend: '8 hidden' },
    { label: 'Gallery Images', value: 96, trend: '12 categories' },
    { label: 'Contacts', value: 134, trend: '9 unread' },
    { label: 'Appointments', value: 27, trend: '6 pending' },
  ],
  activities: [
    'New appointment request from Priya Sharma',
    'Sensory therapy blog was published',
    'Gallery images added to Play Therapy',
    'Contact message marked as read',
    'SEO meta description updated',
  ],
  blogs: [
    { id: 1, title: 'Helping Children Build Emotional Language', category: 'Parenting', status: 'Published', author: 'Admin', date: '2026-06-12' },
    { id: 2, title: 'When to Consider Occupational Therapy', category: 'Therapy', status: 'Draft', author: 'Admin', date: '2026-06-09' },
    { id: 3, title: 'Simple Routines for Anxious Children', category: 'Wellness', status: 'Published', author: 'Admin', date: '2026-05-30' },
  ],
  testimonials: [
    { id: 1, name: 'Anita Rao', rating: 5, visible: true, review: 'The sessions helped our child communicate with confidence.' },
    { id: 2, name: 'Rahul Mehta', rating: 4, visible: true, review: 'Warm, structured and very parent-friendly guidance.' },
    { id: 3, name: 'Nisha Kapoor', rating: 5, visible: false, review: 'A thoughtful therapy plan with measurable progress.' },
  ],
  gallery: [
    { id: 1, title: 'Play therapy room', category: 'Clinic', image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Creative activity', category: 'Activities', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Counselling corner', category: 'Therapy', image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=600&q=80' },
  ],
  contacts: [
    { id: 1, name: 'Meera Iyer', email: 'meera@example.com', phone: '+91 98765 43210', service: 'Speech Therapy', message: 'Need details for weekly sessions.', date: '2026-06-18', read: false },
    { id: 2, name: 'Arjun Nair', email: 'arjun@example.com', phone: '+91 91234 56789', service: 'Assessment', message: 'Looking for a first consultation.', date: '2026-06-16', read: true },
  ],
  appointments: [
    { id: 1, parent: 'Kavya Menon', child: 'Aarav', phone: '+91 99887 77665', email: 'kavya@example.com', therapy: 'Occupational Therapy', date: '2026-06-24', status: 'Pending' },
    { id: 2, parent: 'Dev Singh', child: 'Mira', phone: '+91 88990 11223', email: 'dev@example.com', therapy: 'Child Counselling', date: '2026-06-25', status: 'Approved' },
    { id: 3, parent: 'Sneha Roy', child: 'Ishan', phone: '+91 77889 00112', email: 'sneha@example.com', therapy: 'Speech Therapy', date: '2026-06-20', status: 'Completed' },
  ],
  services: [
    { id: 1, title: 'Speech Therapy', description: 'Language, fluency and communication support.', active: true },
    { id: 2, title: 'Occupational Therapy', description: 'Motor, sensory and daily life skill development.', active: true },
    { id: 3, title: 'Parent Counselling', description: 'Guidance for routines, behavior and home support.', active: true },
  ],
};
