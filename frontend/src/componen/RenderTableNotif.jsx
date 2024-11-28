import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import TambahNotifikasiModal from './TambahNotifikasiModal';

const RendaTableNotif = () => {
  const [notifikasiData, setNotifikasiData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchNotifikasi();
  }, []);

  const fetchNotifikasi = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://nusaira-be.vercel.app/api/notifikasi');
      if (!response.ok) throw new Error('Failed to fetch notifications');
      const data = await response.json();
      setNotifikasiData(data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false); 
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Notifikasi ini akan dihapus secara permanen!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    });

    if (result.isConfirmed) {
      try {
        Swal.fire({
          title: 'Menghapus...',
          text: 'Sedang memproses penghapusan notifikasi.',
          icon: 'info',
          allowOutsideClick: false,
          showConfirmButton: false,
        });

        const response = await fetch(
          `https://nusaira-be.vercel.app/api/notifikasi/${id}`,
          { method: 'DELETE' }
        );

        if (!response.ok) {
          throw new Error('Gagal menghapus notifikasi.');
        }

        Swal.close();
        setLoading(true);
        fetchNotifikasi();

        Swal.fire('Terhapus!', 'Notifikasi berhasil dihapus.', 'success');
      } catch (error) {
        console.error('Error deleting notification:', error);
        Swal.fire('Error!', 'Terjadi kesalahan saat menghapus notifikasi.', 'error');
      } finally {
        setLoading(false); 
      }
    }
  };

  const handleNotifikasiAdded = () => {
    fetchNotifikasi();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Notifikasi</h2>
        <TambahNotifikasiModal onNotifikasiAdded={handleNotifikasiAdded} />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {notifikasiData.length === 0 ? (
            <p className="text-center text-gray-500">Tidak ada notifikasi</p>
          ) : (
            <table className="w-full bg-white rounded shadow-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-2 px-4 text-left">No</th>
                  <th className="py-2 px-4 text-left">Judul</th>
                  <th className="py-2 px-4 text-left">Deskripsi</th>
                  <th className="py-2 px-4 text-left">Jenis</th>
                  <th className="py-2 px-4 text-left">Tanggal</th>
                  <th className="py-2 px-4 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {notifikasiData.map((item, index) => (
                  <tr key={item.id} className="border-b hover:bg-gray-100">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{item.title}</td>
                    <td className="py-2 px-4">{item.description}</td>
                    <td className="py-2 px-4">{item.type}</td>
                    <td className="py-2 px-4">
                      {new Date(item.date).toLocaleDateString('id-ID')}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                        onClick={() => handleDelete(item.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default RendaTableNotif;
