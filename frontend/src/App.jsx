import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AquacultureDashboard from './componen/AquacultureDashboard';
import AdminDashboard from './page/Admin';
import ArticlePage from './page/ArtikelPenyakit';
import BukuFavorit from './page/BukuFavorit';
import ContactPage from './page/ContactUs';
import PondManagement from './page/DaftarKolam';
import FinalStepUI from './page/FInalStep';
import HargaLele from './page/HargaLele';
import Homeuser from './page/Home';
import InputTambak from './page/InputTambakBaru';
import Invoice from './page/Invoice';
import KabarLeleArticle from './page/IsiKabarLele';
import KabarLele from './page/KabarLele';
import LandingPage from './page/landingPage';
import LaporanBudidaya from './page/LaporanBudidaya';
import LaporanKeuangan from './page/LaporanKeuangan';
import Login from './page/login';
import LupaPass1 from './page/LupaPass1';
import LupaPass2 from './page/LupaPass2';
import LupaPass3 from './page/LupaPass3';
import Management from './page/ManajemenTambak';
import Notifikasi from './page/Notifikasi';
import Pemasukan from './page/Pemasukan';
import Pembayaran from './page/Pembayaran';
import PengatutanTambak from './page/PengaturanTambak';
import Pengeluaran from './page/Pengeluaran';
import PenyakitLele from './page/PenyakitLele';
import Perpustakaan from './page/Perpustakaan';
import Premium from './page/Premium';
import PriceHistory from './page/PriceHistory';
import TambakSimulation from './page/Simulasi';
import SignUp from './page/singup';
import SignUp2 from './page/singup2';
import SignUp3 from './page/singup3';
import SupplierDetail from './page/SupplierDetail';
import UserProfile from './page/UserProfile';
import PageNotFound from './PageNotFound';



function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/signup3" element={<SignUp3 />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Homeuser />} />
          <Route path="/InputTambak" element={<InputTambak />} />
          <Route path="/DaftarKolam" element={<PondManagement />} />
          <Route path="/ManajemenTambak" element={<Management />} />
          <Route path="/Simulasi" element={<TambakSimulation />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/AksesPremium" element={<Premium />} />
          <Route path="/HargaLele" element={<HargaLele />} />
          <Route path="/PenyakitLele" element={<PenyakitLele />} />
          <Route path="/Notifikasi" element={<Notifikasi />} />
          <Route path="/Blog" element={<KabarLele />} />
          <Route path="/FinalStep" element={<FinalStepUI />} />
          <Route path="/Pengeluaran" element={<Pengeluaran />} />
          <Route path="/Pemasukan" element={<Pemasukan />} />  
          <Route path="/LaporanBudidaya" element={<LaporanBudidaya />} />  
          <Route path="/KabarLele" element={<KabarLele />} /> 
          <Route path="/AquacultureDashboard" element={<AquacultureDashboard />} /> 
          <Route path="/PriceHistory" element={<PriceHistory />} />
          <Route path="/supplier/:supplier" element={<SupplierDetail />} />
          <Route path="/Perpustakaan" element={<Perpustakaan />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/artikel/:id" element={<ArticlePage />} />
          <Route path="/PengaturanTambak" element={<PengatutanTambak />} />
          <Route path="/LupaPass1" element={<LupaPass1 />} />
          <Route path="/LupaPass2" element={<LupaPass2 />} />
          <Route path="/LupaPass3" element={<LupaPass3 />} />
          <Route path="/Pembayaran" element={<Pembayaran />} />
          <Route path="/BukuFavorit" element={<BukuFavorit />} />
          <Route path="/kabar-lele/:id" element={<KabarLeleArticle />} />
          <Route path="/LaporanKeuangan" element={<LaporanKeuangan />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Admin" element={<AdminDashboard />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
