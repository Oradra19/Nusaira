import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import BenderaIndonesia from "../assets/img/Indonesia.png";

const Header = () => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLanguageBannerVisible, setIsLanguageBannerVisible] = useState(false);
  const [name, setName] = useState('');  
  const [foto_profile, setFotoProfile] = useState(''); 
  const menuRef = useRef(null);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    navigate('/login');
  };

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      const profile = JSON.parse(storedProfile);
      setName(profile.name); 
    }
  }, []);
  
  useEffect(() => {
    const storedProfileImg = localStorage.getItem('profile');
    if (storedProfileImg) {
      const profileimg = JSON.parse(storedProfileImg);
      setFotoProfile(profileimg.foto_profile); 
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const titleMap = {
    '/': 'Landing Page',
    '/Home': 'Home',
    '/InputTambak': 'Input Tambak Baru',
    '/DaftarKolam': 'Daftar Kolam',
    '/ManajemenTambak': 'Manajemen Tambak',
    '/Simulasi': 'Simulasi Tambak',
    '/UserProfile': 'Profil Pengguna',
    '/HargaLele': 'Harga Lele',
    '/PenyakitLele': 'Penyakit Lele',
    '/Notifikasi': 'Notifikasi',
    '/Blog': 'Blog',
    '/FinalStep': 'Final Step',
    '/Pengeluaran': 'Pengeluaran',
    '/Pemasukan': 'Pemasukan',
    '/LaporanBudidaya': 'Laporan Budidaya',
    '/LaporanKeuangan': 'Laporan Keuangan',
    '/KabarLele': 'Kabar Lele',
    '/AksesPremium': 'Akses Premium',
    '/Ringkasan': 'Ringkasan',
    '/ChatAi': 'NusAI',
    '/PriceHistory': 'Harga Lele / 10 Oktober 2024',
    '/PriceTrend': 'Harga Lele / Trend',
    '/Perpustakaan': 'Perpustakaan',
    '/Invoice': 'Tagihan',
    '/RingkasanLearning': 'Ringkasan / Perpustakaan',
    '/Pembayaran': 'Pembayaran',
    '/PengaturanTambak': 'Pengaturan Tambak',
    '/BukuFavorit': 'Favorit / Perpustakaan',
    '/ELearning': 'Perpustakaan',
    '/HomeLearning': 'Beranda / Perpustakaan',
    '/Home2Learning': 'Beranda / Perpustakaan'
  };

  const artikelTitle = ""; 
  const title = location.pathname.startsWith('/kabar-lele')
    ? 'Artikel & Blog'
    : location.pathname.startsWith('/artikel/')
      ? `Penyakit Lele  ${artikelTitle}`
      : location.pathname.includes('/supplier/')
        ? 'Detail Harga' : titleMap[location.pathname] || 'Unknown Page';

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-blue-600 font-medium">Informasi Terbaru NusAIra</span>
            <div
              className="relative w-8 h-8 rounded-full border-2 border-gray-300"
              onMouseEnter={() => setIsLanguageBannerVisible(true)}
              onMouseLeave={() => setIsLanguageBannerVisible(false)}
            >
              <div className="bg-gray-300 w-full h-full rounded-full">
                <img
                  src={BenderaIndonesia}
                  alt="Placeholder Image"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {isLanguageBannerVisible && (
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded whitespace-nowrap">
                  Bahasa yang digunakan
                </div>              
              )}
            </div>

            <div className="relative" ref={menuRef}>
              <button
                onClick={handleProfileClick}
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden focus:outline-none"
              >
                <img
                  src={foto_profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 border border-blue-600 rounded-lg shadow-xl py-2 z-50 bg-white">
                  <div className="px-4 py-2 text-center bg-white">
                    <h5 className="text-blue-500 font-medium">{name}</h5> 
                  </div>
                  <div
                    onClick={() => navigate('/UserProfile')}
                    className="px-4 py-2 bg-white hover:bg-blue-200 text-white flex items-center space-x-2 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faUser} className="text-blue-500" />
                    <span className="text-blue-500 font-medium">Profile</span>
                  </div>
                  <div
                    onClick={() => navigate('/PengaturanTambak')}
                    className="px-4 py-2 bg-white hover:bg-blue-200 text-white flex items-center space-x-2 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faCog} className="text-blue-500" />
                    <span className="text-blue-500 font-medium">Pengaturan Tambak</span>
                  </div>
                  <div
                    onClick={handleLogout} 
                    className="px-4 py-2 bg-white hover:bg-blue-200 text-white flex items-center space-x-2 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-blue-500" />
                    <span className="text-blue-500 font-medium">Keluar</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 w-full" />
    </header>
  );
};

export default Header;
