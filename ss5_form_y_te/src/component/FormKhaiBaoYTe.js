import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import * as Yup from 'yup';
import {FidgetSpinner} from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';

export function FormKhaiBaoYTe() {
    return (
        <>
            <Formik
                initialValues={{
                    hoTen: '',
                    cmnd: '',
                    ngaySinh: '',
                    gioiTinh: '',
                    quocTich: '',
                    congTyLamViec: '',
                    boPhanLamViec: '',
                    theBaoHiemYTe: '',
                    tinhThanh: '',
                    quanHuyen: '',
                    phuongXa: '',
                    soNha: '',
                    dienThoai: '',
                    email: '',
                    noiDiDenTrong14Ngay: '',
                    dauHieu: [],
                    tiepXuc: ''
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false)
                        toast(`${values.hoTen} create OK`)

                    }, 2000)
                }}
                validationSchema={Yup.object({
                    hoTen: Yup.string().required('Không được để trống'),
                    cmnd: Yup.string().required('Không được để trống'),
                    ngaySinh: Yup.number().required('Không được để trống và lớn hơn 1900 ').min(1900),
                    quocTich: Yup.string().required('Không được để trống'),
                    tinhThanh: Yup.string().required('Không được để trống'),
                    quanHuyen: Yup.string().required('Không được để trống'),
                    phuongXa: Yup.string().required('Không được để trống'),
                    soNha: Yup.string().required('Không được để trống'),
                    dienThoai: Yup.string().required('Không được để trống'),
                    email: Yup.string().required('Không được để trống').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
                })}
            >
                {
                    ({isSubmitting}) => (
                        <div className="container">
                            <h1>Tờ khai Y tế</h1>
                            <Form>
                                <div className='mb-3'>
                                    <div><label htmlFor='hoTen'>Họ và tên : </label></div>
                                    <div><Field type='text' name="hoTen" id='hoTen'/></div>
                                </div>
                                <ErrorMessage name='hoTen' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <div> <label htmlFor='cmnd'>số CMND : </label></div>
                                   <div> <Field type='text' name="cmnd" id='cmnd'/></div>
                                </div>
                                <ErrorMessage name='cmnd' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <div><label htmlFor='ngaySinh'>Năm sinh : </label></div>
                                    <div><Field type='number' name="ngaySinh" id='ngaySinh'/></div>
                                </div>
                                <ErrorMessage name='ngaySinh' component='span' className='err-message'/>

                                <div className='mb-3'  >
                                    <p>Giới tính :</p>
                                    <div>
                                        <label htmlFor='gioiTinh1'>Nam </label>
                                        <Field type='radio' name="gioiTinh" id='gioiTinh1' value='1'/>
                                    </div>
                                    <div>
                                        <label htmlFor='gioiTinh2'>Nữ </label>
                                        <Field type='radio' name="gioiTinh" id='gioiTinh2' value='0'/>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <div> <label htmlFor='quocTich'>Quốc tịch : </label></div>
                                   <div><Field type='text' name="quocTich" id='quocTich'/></div>
                                </div>
                                <ErrorMessage name='quocTich' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <div> <label htmlFor='congTyLamViec'>Công ty làm việc : </label></div>
                                   <div><Field type='text' name="congTyLamViec" id='congTyLamViec'/></div>
                                </div>
                                <div className='mb-3'>
                                    <div><label htmlFor='boPhanLamViec'>Bộ phận làm việc : </label></div>
                                    <div>  <Field type='text' name="boPhanLamViec" id='boPhanLamViec'/></div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='theBaoHiemYTe'>Có thẻ bào hiểm hay không : </label>
                                    <Field type='checkbox' name="theBaoHiemYTe" id='theBaoHiemYTe' value='có'/>
                                </div>
                                <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                                <div className='mb-3'>
                                    <div><label htmlFor='tinhThanh'>Tỉnh thành : </label></div>
                                    <div>  <Field type='text' name="tinhThanh" id='tinhThanh'/></div>
                                </div>
                                <ErrorMessage name='tinhThanh' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <div> <label htmlFor='quanHuyen'>Quận/Huyện : </label></div>
                                   <div>  <Field type='text' name="quanHuyen" id='quanHuyen'/></div>
                                </div>
                                <ErrorMessage name='quanHuyen' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <div><label htmlFor='phuongXa'>Phường/Xã : </label></div>
                                   <div><Field type='text' name="phuongXa" id='phuongXa'/></div>
                                </div>
                                <ErrorMessage name='phuongXa' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <div><label htmlFor='soNha'>Số nhà : </label></div>
                                    <div><Field type='text' name="soNha" id='soNha'/></div>
                                </div>
                                <ErrorMessage name='soNha' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <div> <label htmlFor='dienThoai'>Số ĐT : </label></div>
                                   <div><Field type='text' name="dienThoai" id='dienThoai'/></div>
                                </div>
                                <ErrorMessage name='dienThoai' component='span' className='err-message'/>
                                <div className='mb-3'>
                                    <div><label htmlFor='email'>Email : </label></div>
                                    <div><Field type='text' name="email" id='email'/></div>
                                </div>
                                <ErrorMessage name='email' component='span' className='err-message'/>
                                <h2>Trong vòng 14 ngày qua anh/chị có đi đến đâu không ?</h2>
                                <div className='mb-3'>
                                    <label htmlFor='noiDiDenTrong14Ngay'> </label>
                                    <Field as='textarea' name="noiDiDenTrong14Ngay" id='noiDiDenTrong14Ngay'/>
                                </div>
                                <h2>Trong vòng 14 ngày qua anh/chị có dấu hiệu gì hay không ?</h2>
                                <div className='mb-3'>
                                    <Field type='checkbox' name="dauHieu" id='dauHieu1' value='Sốt'/>
                                    <label htmlFor='dauHieu1'> Sốt </label>
                                </div>
                                <div className='mb-3'>
                                    <Field type='checkbox' name="dauHieu" id='dauHieu2' value='Ho'/>
                                    <label htmlFor='dauHieu2'> Ho </label>
                                </div>
                                <div className='mb-3 form-checkbox' >
                                    <Field type='checkbox' name="dauHieu" id='dauHieu2' value='Khó thở'/>
                                    <label  htmlFor='dauHieu3'> Khó thở </label>
                                </div>
                                <div className='mb-3'>
                                    <Field type='checkbox' name="dauHieu" id='dauHieu4' value='Viêm phổi'/>
                                    <label htmlFor='dauHieu4'> Viêm phổi </label>
                                </div>
                                <div className='mb-3'>
                                    <Field type='checkbox' name="dauHieu" id='dauHieu5' value='Đau họng'/>
                                    <label htmlFor='dauHieu5'> Đau họng </label>
                                </div>
                                <div className='mb-3'>
                                    <Field type='checkbox' name="dauHieu" id='dauHieu6' value='Mệt mỏi'/>
                                    <label htmlFor='dauHieu6'> Mệt mỏi </label>
                                </div>
                                <h2>Trong vòng 14 ngày qua anh/chị có tiếp xúc với ai không ?</h2>
                                <div className='mb-3'>
                                    <Field type='checkbox' name="tiepXuc" id='tiepXuc1' value='mắc COVID'/>
                                    <label htmlFor='tiepXuc1'> Người bệnh hoặc nghi ngờ mắc COVID-19 </label>
                                </div>
                                <div className='mb-3'>
                                    <Field type='checkbox' name="tiepXuc" id='tiepXuc2' value='tiếp xúc'/>
                                    <label htmlFor='tiepXuc2'>Người từ nước có dịch COVID-19 </label>
                                </div>
                                {isSubmitting ?
                                    <FidgetSpinner
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="dna-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="dna-wrapper"
                                        ballColors={['#ff0000', '#00ff00', '#0000ff']}
                                        backgroundColor="#F4442E"
                                    /> : <button type='submit' className='btn btn-primary'>Khai báo</button>
                                }
                            </Form>
                        </div>
                    )

                }

            </Formik>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>

    )
}