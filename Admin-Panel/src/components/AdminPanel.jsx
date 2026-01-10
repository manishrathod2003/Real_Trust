import React, { useState, useEffect } from 'react';
import { Home, Users, FileText, Mail, Plus, Edit, Trash2, X, Menu, LogOut } from 'lucide-react';

const API_URL = 'https://real-trust-backend-6k06.onrender.com/api';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Data states
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  
  // Form states
  const [projectForm, setProjectForm] = useState({ name: '', description: '', image: null });
  const [clientForm, setClientForm] = useState({ name: '', designation: '', description: '', image: null });
  
  useEffect(() => {
    fetchData();
  }, [activeTab]);
  
  const fetchData = async () => {
    try {
      if (activeTab === 'projects') {
        const res = await fetch(`${API_URL}/projects`);
        const data = await res.json();
        setProjects(data);
      } else if (activeTab === 'clients') {
        const res = await fetch(`${API_URL}/clients`);
        const data = await res.json();
        setClients(data);
      } else if (activeTab === 'contacts') {
        const res = await fetch(`${API_URL}/contact`);
        const data = await res.json();
        setContacts(data);
      } else if (activeTab === 'newsletter') {
        const res = await fetch(`${API_URL}/newsletter`);
        const data = await res.json();
        setSubscribers(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', projectForm.name);
    formData.append('description', projectForm.description);
    if (projectForm.image) {
      formData.append('image', projectForm.image);
    }
    
    try {
      const url = editingItem 
        ? `${API_URL}/projects/${editingItem._id}` 
        : `${API_URL}/projects`;
      const method = editingItem ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        body: formData
      });
      
      if (res.ok) {
        alert('Project saved successfully!');
        setShowModal(false);
        setProjectForm({ name: '', description: '', image: null });
        setEditingItem(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Error saving project');
    }
  };
  
  const handleClientSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', clientForm.name);
    formData.append('designation', clientForm.designation);
    formData.append('description', clientForm.description);
    if (clientForm.image) {
      formData.append('image', clientForm.image);
    }
    
    try {
      const url = editingItem 
        ? `${API_URL}/clients/${editingItem._id}` 
        : `${API_URL}/clients`;
      const method = editingItem ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        body: formData
      });
      
      if (res.ok) {
        alert('Client saved successfully!');
        setShowModal(false);
        setClientForm({ name: '', designation: '', description: '', image: null });
        setEditingItem(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error saving client:', error);
      alert('Error saving client');
    }
  };
  
  const handleDelete = async (id, type) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const endpoint = type === 'project' ? 'projects' : type === 'client' ? 'clients' : type === 'contact' ? 'contact' : 'newsletter';
      const res = await fetch(`${API_URL}/${endpoint}/${id}`, {
        method: 'DELETE'
      });
      
      if (res.ok) {
        alert('Deleted successfully!');
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Error deleting item');
    }
  };
  
  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    
    if (type === 'project' && item) {
      setProjectForm({ name: item.name, description: item.description, image: null });
    } else if (type === 'client' && item) {
      setClientForm({ name: item.name, designation: item.designation, description: item.description, image: null });
    }
    
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setProjectForm({ name: '', description: '', image: null });
    setClientForm({ name: '', designation: '', description: '', image: null });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-indigo-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 flex items-center justify-between border-b border-indigo-800">
          {sidebarOpen && <h1 className="text-2xl font-bold">Admin Panel</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-indigo-800 rounded">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition ${
              activeTab === 'projects' ? 'bg-indigo-700' : 'hover:bg-indigo-800'
            }`}
          >
            <Home className="w-5 h-5" />
            {sidebarOpen && <span>Projects</span>}
          </button>
          
          <button
            onClick={() => setActiveTab('clients')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition ${
              activeTab === 'clients' ? 'bg-indigo-700' : 'hover:bg-indigo-800'
            }`}
          >
            <Users className="w-5 h-5" />
            {sidebarOpen && <span>Clients</span>}
          </button>
          
          <button
            onClick={() => setActiveTab('contacts')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition ${
              activeTab === 'contacts' ? 'bg-indigo-700' : 'hover:bg-indigo-800'
            }`}
          >
            <FileText className="w-5 h-5" />
            {sidebarOpen && <span>Contacts</span>}
          </button>
          
          <button
            onClick={() => setActiveTab('newsletter')}
            className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition ${
              activeTab === 'newsletter' ? 'bg-indigo-700' : 'hover:bg-indigo-800'
            }`}
          >
            <Mail className="w-5 h-5" />
            {sidebarOpen && <span>Newsletter</span>}
          </button>
        </nav>
        
        <div className="p-4 border-t border-indigo-800">
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-800 transition">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 capitalize">{activeTab}</h2>
            {(activeTab === 'projects' || activeTab === 'clients') && (
              <button
                onClick={() => openModal(activeTab === 'projects' ? 'project' : 'client')}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                <Plus className="w-5 h-5" />
                Add {activeTab === 'projects' ? 'Project' : 'Client'}
              </button>
            )}
          </div>
          
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <div key={project._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  <img 
                    src={`https://real-trust-backend-6k06.onrender.com/${project.image}`} 
                    alt={project.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      console.log('Image failed to load:', project.image);
                      e.target.src = 'https://via.placeholder.com/450x350?text=No+Image';
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal('project', project)}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project._id, 'project')}
                        className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Clients Tab */}
          {activeTab === 'clients' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map(client => (
                <div key={client._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={`https://real-trust-backend-6k06.onrender.com/${client.image}`}
                      alt={client.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
                      onError={(e) => {
                        console.log('Image failed to load:', client.image);
                        e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{client.name}</h3>
                      <p className="text-sm text-gray-500">{client.designation}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{client.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal('client', client)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(client._id, 'client')}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Full Name</th>
                    <th className="p-4 text-left">Email</th>
                    <th className="p-4 text-left">Mobile</th>
                    <th className="p-4 text-left">City</th>
                    <th className="p-4 text-left">Date</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map(contact => (
                    <tr key={contact._id} className="border-b hover:bg-gray-50">
                      <td className="p-4">{contact.fullName}</td>
                      <td className="p-4">{contact.email}</td>
                      <td className="p-4">{contact.mobile}</td>
                      <td className="p-4">{contact.city}</td>
                      <td className="p-4">{new Date(contact.createdAt).toLocaleDateString()}</td>
                      <td className="p-4">
                        <button
                          onClick={() => handleDelete(contact._id, 'contact')}
                          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Newsletter Tab */}
          {activeTab === 'newsletter' && (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Email Address</th>
                    <th className="p-4 text-left">Subscribed Date</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map(subscriber => (
                    <tr key={subscriber._id} className="border-b hover:bg-gray-50">
                      <td className="p-4">{subscriber.email}</td>
                      <td className="p-4">{new Date(subscriber.subscribedAt).toLocaleDateString()}</td>
                      <td className="p-4">
                        <button
                          onClick={() => handleDelete(subscriber._id, 'newsletter')}
                          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold">
                {editingItem ? 'Edit' : 'Add'} {modalType === 'project' ? 'Project' : 'Client'}
              </h3>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              {modalType === 'project' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
                    <input
                      type="text"
                      value={projectForm.name}
                      onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter project name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      rows="4"
                      placeholder="Enter project description"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setProjectForm({...projectForm, image: e.target.files[0]})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">Image will be automatically cropped to 450x350</p>
                  </div>
                  
                  <button
                    onClick={handleProjectSubmit}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
                  >
                    {editingItem ? 'Update Project' : 'Add Project'}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                    <input
                      type="text"
                      value={clientForm.name}
                      onChange={(e) => setClientForm({...clientForm, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter client name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                    <input
                      type="text"
                      value={clientForm.designation}
                      onChange={(e) => setClientForm({...clientForm, designation: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="e.g. CEO, Designer, Manager"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={clientForm.description}
                      onChange={(e) => setClientForm({...clientForm, description: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      rows="4"
                      placeholder="Enter client testimonial"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Client Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setClientForm({...clientForm, image: e.target.files[0]})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">Image will be automatically cropped to 450x350</p>
                  </div>
                  
                  <button
                    onClick={handleClientSubmit}
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
                  >
                    {editingItem ? 'Update Client' : 'Add Client'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;