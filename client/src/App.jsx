import { Navigate, Outlet, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import { apiRequest } from "./api/http";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./components/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import Conditions from "./pages/Conditions";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Appointment from "./pages/Appointment";
import AdminLayout from "./admin/components/Layout";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import BlogsAdmin from "./admin/pages/Blogs";
import Testimonials from "./admin/pages/Testimonials";
import GalleryAdmin from "./admin/pages/Gallery";
import Contacts from "./admin/pages/Contacts";
import Appointments from "./admin/pages/Appointments";
import SeoSettings from "./admin/pages/SeoSettings";
import ServicesAdmin from "./admin/pages/Services";
import Settings from "./admin/pages/Settings";
import { useEffect, useMemo, useState } from "react";

const titles = {
  dashboard: "Dashboard Overview",
  blogs: "Blog Management",
  testimonials: "Testimonials Management",
  gallery: "Gallery Management",
  contacts: "Contact Submissions",
  appointments: "Appointment Requests",
  seo: "SEO Management",
  services: "Services Management",
  settings: "Settings",
};

const emptyAdminData = {
  blogs: [],
  testimonials: [],
  gallery: [],
  contacts: [],
  appointments: [],
  services: [],
};

const titleCase = (value = "") => String(value).charAt(0).toUpperCase() + String(value).slice(1).toLowerCase();
const formatDate = (value) => value ? new Date(value).toISOString().slice(0, 10) : "";
const slugify = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || `item-${Date.now()}`;

const mappers = {
  blogs: (item) => ({
    ...item,
    id: item._id,
    status: titleCase(item.status),
    date: formatDate(item.createdAt),
    author: item.createdBy?.name || "Admin",
  }),
  testimonials: (item) => ({
    ...item,
    id: item._id,
    name: item.clientName,
    review: item.reviewText,
    visible: item.isVisible,
  }),
  gallery: (item) => ({
    ...item,
    id: item._id,
    image: item.image?.url,
  }),
  contacts: (item) => ({
    ...item,
    id: item._id,
    read: item.isRead,
    date: formatDate(item.createdAt),
  }),
  appointments: (item) => ({
    ...item,
    id: item._id,
    parent: item.parentName,
    child: item.childName,
    therapy: item.therapyType,
    date: formatDate(item.appointmentDate),
    status: titleCase(item.status),
  }),
  services: (item) => ({
    ...item,
    id: item._id,
    active: item.isActive,
  }),
};

function PublicLayout() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <Outlet />
      </main>
    </>
  );
}

function AdminRoute() {
  const { checkingAuth, isAdmin } = useAuth();
  const location = useLocation();

  if (checkingAuth) {
    return <main className="login-screen"><div className="login-card">Checking admin session...</div></main>;
  }

  if (!isAdmin) return <Navigate to="/admin/login" replace state={{ from: location }} />;
  return <Outlet />;
}

function AdminConsole() {
  const navigate = useNavigate();
  const { section = "dashboard" } = useParams();
  const active = titles[section] ? section : "dashboard";
  const [records, setRecords] = useState(emptyAdminData);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const setResource = (resource, updater) => {
    setRecords((current) => ({
      ...current,
      [resource]: typeof updater === "function" ? updater(current[resource]) : updater,
    }));
  };

  const loadAdminData = async () => {
    setLoading(true);
    setLoadError("");
    try {
      const entries = await Promise.all(
        Object.keys(emptyAdminData).map(async (resource) => {
          const response = await apiRequest(`/admin/${resource}?limit=100`);
          return [resource, (response.items || []).map(mappers[resource])];
        }),
      );
      setRecords(Object.fromEntries(entries));
    } catch (error) {
      setLoadError(error.message || "Could not load admin records.");
      setRecords(emptyAdminData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdminData();
  }, []);

  const createBlog = async (form) => {
    const blog = await apiRequest("/admin/blogs", {
      method: "POST",
      body: JSON.stringify({
        title: form.title,
        slug: slugify(form.title),
        category: form.category,
        status: form.status.toLowerCase(),
        excerpt: form.excerpt || form.title,
        content: form.content || form.title,
      }),
    });
    setResource("blogs", (items) => [mappers.blogs(blog), ...items]);
  };

  const createService = async (form) => {
    const service = await apiRequest("/admin/services", {
      method: "POST",
      body: JSON.stringify({ title: form.title, slug: slugify(form.title), description: form.description, isActive: form.active }),
    });
    setResource("services", (items) => [mappers.services(service), ...items]);
  };

  const createTestimonial = async (form) => {
    const testimonial = await apiRequest("/admin/testimonials", {
      method: "POST",
      body: JSON.stringify({ clientName: form.name, rating: Number(form.rating), reviewText: form.review, isVisible: form.visible }),
    });
    setResource("testimonials", (items) => [mappers.testimonials(testimonial), ...items]);
  };

  const deleteResource = async (resource, id) => {
    await apiRequest(`/admin/${resource}/${id}`, { method: "DELETE" });
    setResource(resource, (items) => items.filter((item) => item.id !== id));
  };

  const updateAppointmentStatus = async (row, status) => {
    const appointment = await apiRequest(`/admin/appointments/${row.id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status: status.toLowerCase() }),
    });
    setResource("appointments", (items) => items.map((item) => item.id === row.id ? mappers.appointments(appointment) : item));
  };

  const toggleContactRead = async (row) => {
    const contact = await apiRequest(`/admin/contacts/${row.id}`, {
      method: "PUT",
      body: JSON.stringify({ isRead: !row.read }),
    });
    setResource("contacts", (items) => items.map((item) => item.id === row.id ? mappers.contacts(contact) : item));
  };

  const toggleService = async (row) => {
    const service = await apiRequest(`/admin/services/${row.id}`, {
      method: "PUT",
      body: JSON.stringify({ isActive: !row.active }),
    });
    setResource("services", (items) => items.map((item) => item.id === row.id ? mappers.services(service) : item));
  };

  const toggleTestimonial = async (row) => {
    const testimonial = await apiRequest(`/admin/testimonials/${row.id}`, {
      method: "PUT",
      body: JSON.stringify({ isVisible: !row.visible }),
    });
    setResource("testimonials", (items) => items.map((item) => item.id === row.id ? mappers.testimonials(testimonial) : item));
  };

  const data = useMemo(() => ({
    ...records,
    stats: [
      { label: "Blogs", value: records.blogs.length, trend: `${records.blogs.filter((item) => item.status === "Published").length} published` },
      { label: "Testimonials", value: records.testimonials.length, trend: `${records.testimonials.filter((item) => !item.visible).length} hidden` },
      { label: "Gallery Images", value: records.gallery.length, trend: `${new Set(records.gallery.map((item) => item.category)).size} categories` },
      { label: "Contacts", value: records.contacts.length, trend: `${records.contacts.filter((item) => !item.read).length} unread` },
      { label: "Appointments", value: records.appointments.length, trend: `${records.appointments.filter((item) => item.status === "Pending").length} pending` },
    ],
    activities: [
      ...records.contacts.slice(0, 3).map((item) => `Contact message from ${item.name}`),
      ...records.appointments.slice(0, 3).map((item) => `Appointment request for ${item.child}`),
      ...records.blogs.slice(0, 2).map((item) => `Blog: ${item.title}`),
    ].slice(0, 8),
  }), [records]);

  const page = {
    dashboard: <Dashboard data={data} loading={loading} error={loadError} onRefresh={loadAdminData} />,
    blogs: <BlogsAdmin blogs={records.blogs} setBlogs={(updater) => setResource("blogs", updater)} onCreate={createBlog} onDelete={(row) => deleteResource("blogs", row.id)} loading={loading} />,
    testimonials: <Testimonials testimonials={records.testimonials} setTestimonials={(updater) => setResource("testimonials", updater)} onCreate={createTestimonial} onToggle={toggleTestimonial} onDelete={(row) => deleteResource("testimonials", row.id)} loading={loading} />,
    gallery: <GalleryAdmin gallery={records.gallery} setGallery={(updater) => setResource("gallery", updater)} onDelete={(row) => deleteResource("gallery", row.id)} loading={loading} />,
    contacts: <Contacts contacts={records.contacts} setContacts={(updater) => setResource("contacts", updater)} onToggleRead={toggleContactRead} onDelete={(row) => deleteResource("contacts", row.id)} loading={loading} />,
    appointments: <Appointments appointments={records.appointments} setAppointments={(updater) => setResource("appointments", updater)} onUpdateStatus={updateAppointmentStatus} onDelete={(row) => deleteResource("appointments", row.id)} loading={loading} />,
    seo: <SeoSettings />,
    services: <ServicesAdmin services={records.services} setServices={(updater) => setResource("services", updater)} onCreate={createService} onToggle={toggleService} onDelete={(row) => deleteResource("services", row.id)} loading={loading} />,
    settings: <Settings />,
  }[active];

  return (
    <AdminLayout active={active} onNavigate={(key) => navigate(`/admin/${key}`)} title={titles[active]}>
      {loadError && <div className="admin-alert">{loadError}</div>}
      {page}
    </AdminLayout>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog" element={<Navigate to="/blogs" replace />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/conditions" element={<Conditions />} />
      </Route>
      <Route path="/admin/login" element={<Login />} />
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/:section" element={<AdminConsole />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <ScrollToTop />
        <AppRoutes />
      </ToastProvider>
    </AuthProvider>
  );
}