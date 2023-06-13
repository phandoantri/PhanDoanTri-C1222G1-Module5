// import React, {useEffect, useState} from 'react';
// import {Card, Button, Modal} from 'react-bootstrap';
// import * as service from '../service/Service'
//
// export function ServiceList() {
//     const [services, setServices] = useState([])
//     const [currentPage, setCurrentPage] = useState(1);
//     const servicesPerPage = 5;
//
//     const indexOfLastService = currentPage * servicesPerPage;
//     const indexOfFirstService = indexOfLastService - servicesPerPage;
//     const currentServices = services.slice(indexOfFirstService, indexOfLastService);
//
//     const totalPages = Math.ceil(services.length / servicesPerPage);
//
//     const handlePageClick = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };
//
//     const [showModal, setShowModal] = useState(false);
//     const [selectedService, setSelectedService] = useState(null);
//
//     useEffect(()=>{
//         const fetchApi=async ()=>{
//             const result=await service.findAll();
//             setServices(result);
//         }
//         fetchApi();
//     },[])
//
//     const handleDeleteClick = (service) => {
//         // Handle delete click logic
//         setSelectedService(service);
//         setShowModal(true);
//     };
//
//     const handleConfirmDelete = () => {
//         // Handle confirm delete logic
//         console.log('Delete services:', selectedService);
//         setShowModal(false);
//     };
//
//     const handleCancelDelete = () => {
//         setShowModal(false);
//     };
//
//     return (
//         <>
//             <div className="row mx-0" style={{marginTop: '96px'}}>
//                 <img className="img-fluid px-0" style={{position: 'relative', height: '400px'}}
//                      src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433" alt=""/>
//                 <h2 style={{
//                     position: 'absolute',
//                     margin: 'inherit',
//                     fontSize: '40px',
//                     color: '#ffffff',
//                     textAlign: 'center',
//                     fontWeight: '700',
//                     fontStyle: 'normal'
//                 }}
//                     className="vc_custom_heading">LOẠI PHÒNG</h2>
//             </div>
//
//             <h1 className="text-center mt-5">Furama Services</h1>
//             <div>
//                 <div className="container">
//
//                     <div className="row mt-5">
//                         <div className="col-md-4 mb-4">
//                             <div className="card">
//                                 <img
//                                     src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
//                                     className="card-img-top" alt="Service 1"/>
//                                 <div className="card-body">
//                                     <h5 className="card-title">PHÒNG HƯỚNG BIỂN</h5>
//                                     <p className="card-text" >Diện tích phòng:100m2</p>
//                                     <a href="edit-service.html" className="btn btn-primary">Sửa</a>
//                                     <button type="button" className="btn btn-danger" data-toggle="modal"
//                                             data-target="#deleteModal1">Xoá
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 mb-4">
//                             <div className="card">
//                                 <img
//                                     src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
//                                     className="card-img-top" alt="Service 2"/>
//                                 <div className="card-body">
//                                     <h5 className="card-title">PHÒNG HƯỚNG BIỂN</h5>
//                                     <p className="card-text">Diện tích phòng:100m2</p>
//                                     <a href="edit-service.html" className="btn btn-primary">Sửa</a>
//                                     <button type="button" className="btn btn-danger" data-toggle="modal"
//                                             data-target="#deleteModal2">Xoá
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 mb-4">
//                             <div className="card">
//                                 <img
//                                     src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-450x291.jpg"
//                                     className="card-img-top" alt="Service 3"/>
//                                 <div className="card-body">
//                                     <h5 className="card-title">PHÒNG HƯỚNG BIỂN</h5>
//                                     <p className="card-text">Diện tích phòng:100m2</p>
//                                     <a href="edit-service.html" className="btn btn-primary">Sửa</a>
//                                     <button type="button" className="btn btn-danger" data-toggle="modal"
//                                             data-target="#deleteModal3">Xoá
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 mb-4">
//                             <div className="card">
//                                 <img
//                                     src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-450x291.jpg"
//                                     className="card-img-top" alt="Service 3"/>
//                                 <div className="card-body">
//                                     <h5 className="card-title">PHÒNG HƯỚNG BIỂN</h5>
//                                     <p className="card-text">Diện tích phòng:100m2</p>
//                                     <a href="edit-service.html" className="btn btn-primary">Sửa</a>
//                                     <button type="button" className="btn btn-danger" data-toggle="modal"
//                                             data-target="#deleteModal3">Xoá
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 mb-4">
//                             <div className="card">
//                                 <img
//                                     src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-450x291.jpg"
//                                     className="card-img-top" alt="Service 3"/>
//                                 <div className="card-body">
//                                     <h5 className="card-title">PHÒNG HƯỚNG BIỂN</h5>
//                                     <p className="card-text">Diện tích phòng:100m2</p>
//                                     <a href="edit-service.html" className="btn btn-primary">Sửa</a>
//                                     <button type="button" className="btn btn-danger" data-toggle="modal"
//                                             data-target="#deleteModal3">Xoá
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 mb-4">
//                             <div className="card">
//                                 <img
//                                     src={name=""}
//                                     className="card-img-top" alt="Service 3"/>
//                                 <div className="card-body">
//                                     <h5 className="card-title">PHÒNG HƯỚNG BIỂN</h5>
//                                     <p className="card-text">Diện tích phòng:100m2</p>
//                                     <a href="edit-service.html" className="btn btn-primary">Sửa</a>
//                                     <button type="button" className="btn btn-danger" data-toggle="modal"
//                                             data-target="#deleteModal3">Xoá
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//
//                     </div>
//
//                 </div>
//
//                 <div className="modal fade" id="deleteModal1" tabIndex="-1" role="dialog"
//                      aria-labelledby="deleteModalLabel1"
//                      aria-hidden="true">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="deleteModalLabel1">Xác nhận Xoá dịch vụ</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">
//                                 <p>Bạn có chắc chắn muốn xoá dịch vụ này?</p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
//                                 <button type="button" className="btn btn-danger">Xoá</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="modal fade" id="deleteModal2" tabIndex="-1" role="dialog"
//                      aria-labelledby="deleteModalLabel2"
//                      aria-hidden="true">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="deleteModalLabel2">Xác nhận Xoá dịch vụ</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">
//                                 <p>Bạn có chắc chắn muốn xoá dịch vụ này?</p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
//                                 <button type="button" className="btn btn-danger">Xoá</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//
//                 <div className="modal fade" id="deleteModal3" tabIndex="-1" role="dialog"
//                      aria-labelledby="deleteModalLabel3"
//                      aria-hidden="true">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="deleteModalLabel3">Xác nhận Xoá dịch vụ</h5>
//                                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">
//                                 <p>Bạn có chắc chắn muốn xoá dịch vụ này?</p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
//                                 <button type="button" className="btn btn-danger">Xoá</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <nav aria-label="Page navigation">
//                 <ul className="pagination justify-content-center mt-4">
//                     <li className="page-item"><a className="page-link" href="#">Previous</a></li>
//                     <li className="page-item active"><a className="page-link" href="#">1</a></li>
//                     <li className="page-item"><a className="page-link" href="#">2</a></li>
//                     <li className="page-item"><a className="page-link" href="#">3</a></li>
//                     <li className="page-item"><a className="page-link" href="#">Next</a></li>
//                 </ul>
//             </nav>
//         </>
//     )
// }