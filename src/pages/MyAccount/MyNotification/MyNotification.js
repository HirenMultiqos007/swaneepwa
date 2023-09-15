import React from 'react'
import { useTranslation } from 'react-i18next'
import { notification } from '../../../Data/data'
import Loader from '../../../components/Loader'
import { useSelector } from 'react-redux'

const MyNotification = () => {
  const { loading } = useSelector((state) => state.ProductSlice);

  const { t } = useTranslation()
  return (

    <>
{loading?<Loader/>:
    <>    
         <div className='table-content'>
        <div className='title-wraper'>
          <div className='table-title'>{`${t('myaccount.notification')}`}</div>
        </div>
        <div className='content-wrapper'>
          <ul className='notification-wrapper'>
            {
              notification.map((nd, key) => {
                return (
                  <li key = {key}>
                    <div className='left-content'>
                      <div className='icon-wrapper'>
                        <img src={nd.image}  alt='notification-image'/>
                       {nd.status === "unread" && <div className='not-read'></div>} 
                      </div>
                      <div className='notification-detail'>
                        <div className='inner-title'>{nd.title}</div>
                        <p>{nd.detail}</p>
                      </div>
                    </div>

                    <div className='date-time'>
                      <span>{nd.datetime}</span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        </div>
    
    </>
}
    </>
  )
}

export default MyNotification
