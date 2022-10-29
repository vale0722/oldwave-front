import React from 'react';
import { Link } from 'react-router-dom';
import config from 'domain/config';
import { getUser } from 'domain/helpers/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import EmptyTransaction from 'presentation/components/atoms/EmptyTransaction';

const STATUSES = {
  completed: {
    title: 'Completado',
  },
  approved: {
    title: 'Aprobado',
  },
  pending: {
    title: 'Pendiente',
  },
  rejected: {
    title: 'Rechazado',
  },
  failed: {
    title: 'Fallido',
  },
};

export default function TransactionsPage() {
  const user = getUser();

  const getStatus = (status) => {
    const statusData = STATUSES[status];
    return (
      <span className={`${status} py-1 px-3 rounded-full text-xs`}>
        {statusData.title}
      </span>
    );
  };

  return (
    <div className=' w-full my-10 gap-10 flex flex-col justify-center md:px-16'>
      <div className='flex gap-3 text-sm px-4 xl:px-0'>
        <Link to={config.routes.auth.home.path}>Inicio</Link>
        <span>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <a className='font-semibold'>{user.user.name}</a>
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col p-12 gap-3 md:border md:border-gray-200 md:rounded-xl md:shadow bg-white w-full'>
          <div className='flex flex-col gap-1 pb-4 w-full'>
            <h2 className='font-bold text-gray-800 text-3xl'>Mis pedidos</h2>
            <div className='flex gap-4 justify-between items-center'>
              <h5 className='font-bold text-gray-400'>{user.user.name}</h5>
            </div>
            <EmptyTransaction />
            <div className='bg-white shadow-md rounded my-6'>
              <table className='table-auto w-full'>
                <thead>
                  <tr className='bg-gray-100 text-gray-600 uppercase text-sm leading-normal'>
                    <th className='py-3 px-6 text-left'>Referencia</th>
                    <th className='py-3 px-6 text-center'>
                      Cantidad de productos
                    </th>
                    <th className='py-3 px-6 text-center'>Fecha de creación</th>
                    <th className='py-3 px-6 text-center'>
                      Fecha de actualización
                    </th>
                    <th className='py-3 px-6 text-center'>Estado</th>
                  </tr>
                </thead>
                <tbody className='text-gray-600 text-sm font-light'>
                  <tr className='border-b border-gray-200 bg-white hover:bg-gray-100'>
                    <td className='py-3 px-6 text-left'>
                      <div className='flex items-center hover:text-primary-700'>
                        <div className='w-4 mr-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                            />
                          </svg>
                        </div>
                        <span className='font-bold cursor-pointer'>
                          REF12345
                        </span>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      <div className='flex items-center justify-center'>
                        <span>4</span>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      2022-01-01 12:00:00
                    </td>
                    <td className='py-3 px-6 text-center'>
                      2022-01-01 12:00:00
                    </td>
                    <td className='py-3 px-6 text-center'>
                      {getStatus('completed')}
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200 bg-white hover:bg-gray-100'>
                    <td className='py-3 px-6 text-left'>
                      <div className='flex items-center hover:text-primary-700'>
                        <div className='w-4 mr-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                            />
                          </svg>
                        </div>
                        <span className='font-bold cursor-pointer'>
                          REF12345
                        </span>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      <div className='flex items-center justify-center'>
                        <span>4</span>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      2022-01-01 12:00:00
                    </td>
                    <td className='py-3 px-6 text-center'>
                      2022-01-01 12:00:00
                    </td>
                    <td className='py-3 px-6 text-center'>
                      {getStatus('pending')}
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200 bg-white hover:bg-gray-100'>
                    <td className='py-3 px-6 text-left'>
                      <div className='flex items-center hover:text-primary-700'>
                        <div className='w-4 mr-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                            />
                          </svg>
                        </div>
                        <span className='font-bold cursor-pointer'>
                          REF12345
                        </span>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      <div className='flex items-center justify-center'>
                        <span>4</span>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      2022-01-01 12:00:00
                    </td>
                    <td className='py-3 px-6 text-center'>
                      2022-01-01 12:00:00
                    </td>
                    <td className='py-3 px-6 text-center'>
                      {getStatus('approved')}
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200 bg-white hover:bg-gray-100'>
                    <td className='py-3 px-6 text-left'>
                      <div className='flex items-center hover:text-primary-700'>
                        <div className='w-4 mr-2'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                            />
                          </svg>
                        </div>
                        <span className='font-bold cursor-pointer'>
                          REF12345
                        </span>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      <div className='flex items-center justify-center'>
                        <span>4</span>
                      </div>
                    </td>
                    <td className='py-3 px-6 text-center'>
                      2022-01-01 12:00:00
                    </td>
                    <td className='py-3 px-6 text-center'>
                      2022-01-01 12:00:00
                    </td>
                    <td className='py-3 px-6 text-center'>
                      {getStatus('rejected')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
