import React from 'react'
import { jewelcabinet } from '../../../../Data/data'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export const Jewels = () => {
    const { t } = useTranslation()
    return (
        <div className='jewel-cabinet ptb'>
            <Container>
                <div className='title-wraper'>
                    <h2>{`${t('homepage.thejewelcabinet.title')}`}</h2>
                    <div className='custom-link view-link'>{`${t('button.viewbtn')}`}</div>
                </div>
                <Row className='custom-row-space'>
                    {
                        jewelcabinet.map((jc, i) => {
                            return (
                                <Col lg="6" key={i}>
                                    <div className='image-box'>
                                        <div className='image-hover'><img src={jc?.addVariant?.[0]?.image} alt='image' /></div>
                                        <div className='black-shadow image-content'>
                                            <h5>{jc.title}</h5>
                                            <button type="submit" className='custom-link'>{jc.link}</button>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}
