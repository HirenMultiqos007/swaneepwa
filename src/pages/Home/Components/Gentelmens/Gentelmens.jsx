import React from 'react'
import {gentlemen} from '../../../../Data/data'
import {Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import SlickSliderComp from '../../../../components/SlickSliderComp/SlickSliderComp'


export const Gentelmens = () => {
    const { t } = useTranslation()
    return (
        <div className='gentlemen ptb'>
            <Container>
                <div className='title-wraper'>
                <h2>{`${t('homepage.gentlemensjournal.title')}`}</h2>
                <div className='custom-link view-link'>{`${t('button.viewbtn')}`}</div>
                </div>
                <div>
                    <div className='custom-slider'>
                        <SlickSliderComp content={gentlemen} num ={4} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
